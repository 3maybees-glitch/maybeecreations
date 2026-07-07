import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MapPinned, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { mapRequestRealms } from "@/data/mapRequestRealms";

const mapRequestSchema = z
  .object({
    realm: z.enum(["faith", "freedom", "fans", "future"], {
      required_error: "Choose which realm this map belongs in.",
    }),
    title: z
      .string()
      .trim()
      .min(3, "Tell us your map idea in at least a few words.")
      .max(120, "Keep the map idea under 120 characters."),
    description: z
      .string()
      .max(500, "Extra details can be up to 500 characters.")
      .optional(),
    email: z
      .string()
      .trim()
      .email("Enter a valid email address.")
      .optional()
      .or(z.literal("")),
    notify_when_made: z.boolean().default(false),
    website: z.string().max(0).optional(),
  })
  .superRefine((values, ctx) => {
    if (values.notify_when_made && !values.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Add your email if you want a note when this map is made.",
        path: ["email"],
      });
    }
  });

type MapRequestFormValues = z.infer<typeof mapRequestSchema>;

interface MapRequestFormProps {
  onSubmitted?: () => void;
}

export const MapRequestForm = ({ onSubmitted }: MapRequestFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MapRequestFormValues>({
    resolver: zodResolver(mapRequestSchema),
    defaultValues: {
      realm: undefined,
      title: "",
      description: "",
      email: "",
      notify_when_made: false,
      website: "",
    },
  });

  const notifyWhenMade = form.watch("notify_when_made");

  const onSubmit = async (values: MapRequestFormValues) => {
    if (values.website) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        realm: values.realm,
        title: values.title.trim(),
        description: values.description?.trim() ? values.description.trim() : null,
        email: values.email?.trim() ? values.email.trim() : null,
        notify_when_made: values.notify_when_made,
        status: "pending" as const,
      };

      const { data, error } = await supabase
        .from("map_requests")
        .insert(payload)
        .select("id, realm, title, description, email, notify_when_made")
        .single();

      if (error) {
        throw error;
      }

      void supabase.functions
        .invoke("notify-map-request", { body: data })
        .catch(() => undefined);

      form.reset({
        realm: undefined,
        title: "",
        description: "",
        email: "",
        notify_when_made: false,
        website: "",
      });

      toast.success("Your map idea is in the ledger queue.", {
        description:
          "We review every request. Approved ideas appear publicly on this page.",
      });

      onSubmitted?.();
    } catch {
      toast.error("We could not save your request.", {
        description: "Please try again in a moment, or email 3maybees@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="parchment rounded-sm border border-primary/15 p-6 md:p-8 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center">
          <MapPinned className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary">Chart Your Idea</h2>
          <p className="text-sm text-muted-foreground">
            Submit a map you would love to explore. We read every entry.
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <div className="hidden" aria-hidden>
                <Input tabIndex={-1} autoComplete="off" {...field} />
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="realm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Realm</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Faith, Freedom, Fans, or Future" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mapRequestRealms.map((realm) => (
                      <SelectItem key={realm.value} value={realm.value}>
                        {realm.label} — {realm.explorer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  {field.value
                    ? mapRequestRealms.find((realm) => realm.value === field.value)?.examples
                    : "Pick the world where your map idea belongs."}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Map idea</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Chicago Cubs Legend Land, Book of Ruth map, AI agents realm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Extra details <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Tell us why this map matters, who it is for, or what adventures it should include."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notify_when_made"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3 space-y-0 rounded-sm border border-border/80 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-medium">Notify me if this map gets made</FormLabel>
                  <FormDescription>
                    {notifyWhenMade
                      ? "We will only use your email for this map — never sold or spammed."
                      : "Optional. Leave unchecked to submit anonymously."}
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending to the mapmaker...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Map Request
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
