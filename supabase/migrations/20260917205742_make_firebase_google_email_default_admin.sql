-- Make the Firebase Google account the single default KenyaAdverts administrator.
-- Authorization is based on the verified Firebase JWT email, not a Supabase Auth user/password.

alter table public.admin_users
  drop constraint if exists admin_users_user_id_fkey,
  drop constraint if exists admin_users_pkey;

alter table public.admin_users
  drop column if exists user_id;

alter table public.admin_users
  add primary key (email);

insert into public.admin_users (email, role)
values ('hydrocephcare@gmail.com', 'admin')
on conflict (email) do update set role = excluded.role;

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where lower(email) = lower((select auth.jwt() ->> 'email'))
      and coalesce((select auth.jwt() ->> 'email_verified'), 'false') = 'true'
      and (select auth.jwt() ->> 'iss') = 'https://securetoken.google.com/kenyaadverts-fca16'
      and (select auth.jwt() ->> 'aud') = 'kenyaadverts-fca16'
  );
$$;

drop policy if exists "admins can read admin users" on public.admin_users;
create policy "default admin can read admin users"
  on public.admin_users
  for select
  to anon, authenticated
  using ((select private.is_admin()));

drop policy if exists "admins can read appointments" on public.appointment_requests;
create policy "default admin can read appointments"
  on public.appointment_requests
  for select
  to anon, authenticated
  using ((select private.is_admin()));

drop policy if exists "admins can update appointments" on public.appointment_requests;
create policy "default admin can update appointments"
  on public.appointment_requests
  for update
  to anon, authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

drop policy if exists "admins can read orders" on public.order_requests;
create policy "default admin can read orders"
  on public.order_requests
  for select
  to anon, authenticated
  using ((select private.is_admin()));

drop policy if exists "admins can update orders" on public.order_requests;
create policy "default admin can update orders"
  on public.order_requests
  for update
  to anon, authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

drop policy if exists "admins can read contacts" on public.contact_submissions;
create policy "default admin can read contacts"
  on public.contact_submissions
  for select
  to anon, authenticated
  using ((select private.is_admin()));

drop policy if exists "admins can update contacts" on public.contact_submissions;
create policy "default admin can update contacts"
  on public.contact_submissions
  for update
  to anon, authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));
