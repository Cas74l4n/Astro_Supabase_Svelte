import { createClient } from "@supabase/supabase-js";

// Verificar que las variables de entorno están definidas
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Las variables de entorno SUPABASE_URL y SUPABASE_ANON_KEY deben estar definidas");
}

// Crear el cliente de Supabase 
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
    },
  },
);
