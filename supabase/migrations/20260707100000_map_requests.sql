-- Customer map requests: moderated public ledger (V1 — submit only, no voting)

CREATE TYPE public.map_request_realm AS ENUM ('faith', 'freedom', 'fans', 'future');
CREATE TYPE public.map_request_status AS ENUM ('pending', 'approved', 'declined');

CREATE TABLE public.map_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  realm public.map_request_realm NOT NULL,
  title TEXT NOT NULL CHECK (char_length(trim(title)) BETWEEN 3 AND 120),
  description TEXT CHECK (description IS NULL OR char_length(description) <= 500),
  email TEXT CHECK (email IS NULL OR email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  notify_when_made BOOLEAN NOT NULL DEFAULT false,
  status public.map_request_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  CONSTRAINT notify_requires_email CHECK (NOT notify_when_made OR email IS NOT NULL)
);

ALTER TABLE public.map_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a new pending request
CREATE POLICY "Anyone can submit map requests"
ON public.map_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');

-- Public ledger: approved requests only
CREATE POLICY "Anyone can view approved map requests"
ON public.map_requests
FOR SELECT
TO anon, authenticated
USING (status = 'approved');

-- Admin can view and moderate all requests
CREATE POLICY "Admin can view all map requests"
ON public.map_requests
FOR SELECT
TO authenticated
USING (auth.jwt() ->> 'email' = '3maybees@gmail.com');

CREATE POLICY "Admin can moderate map requests"
ON public.map_requests
FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'email' = '3maybees@gmail.com')
WITH CHECK (auth.jwt() ->> 'email' = '3maybees@gmail.com');

CREATE INDEX idx_map_requests_status_created ON public.map_requests (status, created_at DESC);
CREATE INDEX idx_map_requests_realm ON public.map_requests (realm);
