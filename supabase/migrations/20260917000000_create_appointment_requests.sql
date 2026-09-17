create table if not exists public.appointment_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  business text,
  project_type text not null,
  preferred_date date not null,
  preferred_time text not null,
  message text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'declined', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists appointment_requests_date_time_idx
  on public.appointment_requests (preferred_date, preferred_time);

alter table public.appointment_requests enable row level security;

create policy "Anyone can submit appointment requests"
  on public.appointment_requests
  for insert
  with check (true);

-- Public visitors can submit requests, but appointment records are not publicly readable.
-- Admin confirmation/management should be handled through the authenticated admin workflow.
