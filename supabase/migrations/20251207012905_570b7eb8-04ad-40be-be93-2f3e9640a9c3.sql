-- Add restrictive RLS policies for purchases table
-- Only the backend service role should be able to insert purchases
-- No direct client inserts allowed

-- Policy to block all direct INSERT operations from clients
CREATE POLICY "No direct inserts allowed" 
ON public.purchases 
FOR INSERT 
TO authenticated
WITH CHECK (false);

-- Policy to block all UPDATE operations (purchases should be immutable)
CREATE POLICY "No updates allowed" 
ON public.purchases 
FOR UPDATE 
TO authenticated
USING (false);

-- Policy to block all DELETE operations (purchases should never be deleted)
CREATE POLICY "No deletes allowed" 
ON public.purchases 
FOR DELETE 
TO authenticated
USING (false);