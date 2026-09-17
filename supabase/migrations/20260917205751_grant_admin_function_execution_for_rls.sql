-- The RLS policies call this private SECURITY DEFINER function.
-- Grant only function execution and schema usage; the function itself returns only a boolean.
grant usage on schema private to anon, authenticated;
grant execute on function private.is_admin() to anon, authenticated;
