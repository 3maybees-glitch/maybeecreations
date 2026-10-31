-- Add Farlands to the Request-a-Map realm enum (alongside faith, freedom, future).
ALTER TYPE public.map_request_realm ADD VALUE IF NOT EXISTS 'farlands';
