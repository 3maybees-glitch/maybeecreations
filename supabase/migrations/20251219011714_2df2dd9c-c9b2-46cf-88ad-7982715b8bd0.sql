-- Allow admin to insert access codes
CREATE POLICY "Admin can insert access codes"
ON public.access_codes
FOR INSERT
WITH CHECK (
  auth.jwt() ->> 'email' = '3maybees@gmail.com'
);

-- Allow admin to view all access codes
CREATE POLICY "Admin can view all access codes"
ON public.access_codes
FOR SELECT
USING (
  auth.jwt() ->> 'email' = '3maybees@gmail.com'
);