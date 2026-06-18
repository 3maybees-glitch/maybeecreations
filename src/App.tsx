import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SkipLink } from "@/components/SkipLink";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const SnackersProduct = lazy(() => import("./pages/SnackersProduct"));
const JesusWeptProduct = lazy(() => import("./pages/JesusWeptProduct"));
const JesusWeptSupport = lazy(() => import("./pages/JesusWeptSupport"));
const IntellicityProduct = lazy(() => import("./pages/IntellicityProduct"));
const Faith = lazy(() => import("./pages/Faith"));
const Freedom = lazy(() => import("./pages/Freedom"));
const Fans = lazy(() => import("./pages/Fans"));
const Future = lazy(() => import("./pages/Future"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipLink />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/snackers" element={<SnackersProduct />} />
            <Route path="/jesus-wept" element={<JesusWeptProduct />} />
            <Route path="/jesus-wept/support" element={<JesusWeptSupport />} />
            <Route path="/intellicity" element={<IntellicityProduct />} />
            <Route path="/faith" element={<Faith />} />
            <Route path="/freedom" element={<Freedom />} />
            <Route path="/fans" element={<Fans />} />
            <Route path="/future" element={<Future />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
