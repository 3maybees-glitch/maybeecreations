DROP POLICY IF EXISTS "Admin can insert access codes" ON public.access_codes;
DROP POLICY IF EXISTS "Admin can view all access codes" ON public.access_codes;
DROP POLICY IF EXISTS "Anyone can view active unredeemed codes" ON public.access_codes;
DROP POLICY IF EXISTS "Authenticated users can redeem codes" ON public.access_codes;
DROP POLICY IF EXISTS "Users can view their redeemed codes" ON public.access_codes;
DROP TABLE IF EXISTS public.access_codes;