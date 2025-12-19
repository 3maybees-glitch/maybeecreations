-- Create access_codes table
CREATE TABLE public.access_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  product_name TEXT NOT NULL,
  redeemed_by UUID REFERENCES auth.users(id),
  redeemed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.access_codes ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can check if a code exists (needed for redemption flow)
CREATE POLICY "Anyone can view active unredeemed codes"
ON public.access_codes
FOR SELECT
USING (is_active = true AND redeemed_by IS NULL);

-- Policy: Authenticated users can see codes they've redeemed
CREATE POLICY "Users can view their redeemed codes"
ON public.access_codes
FOR SELECT
USING (auth.uid() = redeemed_by);

-- Policy: Authenticated users can redeem codes (update)
CREATE POLICY "Authenticated users can redeem codes"
ON public.access_codes
FOR UPDATE
USING (is_active = true AND redeemed_by IS NULL)
WITH CHECK (auth.uid() = redeemed_by);

-- Create index for faster code lookups
CREATE INDEX idx_access_codes_code ON public.access_codes(code);
CREATE INDEX idx_access_codes_product ON public.access_codes(product_name);