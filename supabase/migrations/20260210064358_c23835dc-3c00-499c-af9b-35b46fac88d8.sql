
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Authenticated users can read submissions"
  ON public.contact_submissions FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update submissions"
  ON public.contact_submissions FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Order/quote requests
CREATE TABLE public.order_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  country TEXT,
  website_type TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  requirements TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.order_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit order request"
  ON public.order_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read orders"
  ON public.order_requests FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update orders"
  ON public.order_requests FOR UPDATE
  USING (auth.role() = 'authenticated');
