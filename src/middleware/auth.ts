// src/middleware/auth.ts
import { supabase } from '../lib/supabase'; // Asegúrate de tener configurado Supabase aquí.

export async function onRequest({ locals, request, cookies }) {
  // Obtener el token de acceso desde las cookies
  const access_token = cookies.get('sb-access-token')?.value;

  if (!access_token) {
    return new Response('No autenticado', { status: 401 });
  }

  // Obtener el usuario autenticado
  const { data: authData, error: authError } = await supabase.auth.getUser(access_token);

  if (authError || !authData?.user) {
    console.error(`Error de autenticación: ${authError?.message}`);
    return new Response('Error de autenticación', { status: 401 });
  }

  // Obtener los datos del perfil desde la tabla profiles
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('display_name')
    .eq('id', authData.user.id)
    .single();

  if (profileError) {
    console.error(`Error al obtener el perfil: ${profileError.message}`);
    return new Response('Error al obtener perfil', { status: 500 });
  }

  // Almacenar el display_name en locals
  locals.display_name = profileData.display_name;
}
