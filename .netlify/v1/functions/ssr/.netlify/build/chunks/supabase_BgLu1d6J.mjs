import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://kakoqccxypiyimjgkmyp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtha29xY2N4eXBpeWltamdrbXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDk3MTQsImV4cCI6MjAxMjQ4NTcxNH0.-aiEJ2eICk3e3Z4WAvF9epFmtObbUobfynzby0XHnDA";
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false
    }
  }
);

export { supabase as s };
