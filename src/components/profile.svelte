<script>
  import Camera from "./icons/camera.svelte";
  export let dataProfile = []; // Datos del perfil recibidos como prop

  // Inicializamos las variables con los valores del perfil si existen

  let display_name = dataProfile[0]?.display_name || "";
  let bio = dataProfile[0]?.bio || "";

  // Función para manejar el envío de datos del perfil
  const submitProfile = async () => {
    try {
      // Verifica los datos antes de enviarlos
      console.log({ display_name, bio }); // Aquí logueamos los valores actuales

      const res = await fetch("/api/infoprofile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ display_name, bio }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error al actualizar el perfil:", errorData);
        console.error(
          `Error al actualizar el perfil: ${res.status}`,
          await res.text(),
        );
      } else {
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData); // Revisa la respuesta del servidor
        console.log("Perfil actualizado exitosamente:", await res.json());

        // Obtener la nueva los datos en el input *automaticamente*
        const resres = await fetch("/api/Infoprofile"); // Asegúrate de que este endpoint esté configurado correctamente
        const data = await resres.json();

        if (resres.ok) {
          dataProfile = data; // Actualizar la lista de todo
        } else {
          console.error("Error al obtener las conversaciones:", data);
        }

        // Actualizar la lista de perfiles
        const newProfile = { display_name, bio };
        dataProfile = [newProfile, ...dataProfile];

        // Limpiar los campos si es necesario
        display_name = "";
        bio = "";
      }
    } catch (error) {
      console.error("Error al enviar la peticion:", error);
    }
  };

  let passwordType = "password";

  function restorePasswordType() {
    passwordType = "text"; // Mostrar la contraseña
  }

  function hidePasswordType() {
    passwordType = "password"; // Ocultar la contraseña
  }
</script>

<!--
Si falla alguno cambiar al otro, no se por que falla
on:submit|preventDefault={submitProfile} 
on:submit={submitProfile}
-->

<form
  on:submit|preventDefault={submitProfile}
  class="w-[1200px] mx-auto bg-gray-800 border-gray-100 rounded-3xl"
>
  <div class="p-6">
    <h2 class="text-3xl">Profile Settings</h2>
    <p>Update your profile information here.</p>
  </div>
  <div class="p-6 space-y-6">
    <div class="flex space-x-8">
      <div class="w-1/3">
        <div class="flex flex-col items-center space-y-4">
          <div class="w-48 h-48 rounded-full bg-gray-200 text-gray-800">
            <!-- Avatar -->
            <img
              src=""
              alt="Profile_picture"
              class="rounded-full"
            />
          </div>
          <!-- Boton para actualizar el Avatar -->
          <label for="avatar-upload" class="cursor-pointer">
            <div
              class="flex items-center space-x-2 text-primary-foreground px-4 py-2 rounded-md bg-gray-600"
            >
              <Camera />
              <span>Change Avatar</span>
            </div>
          </label>

          <!-- No tengo idea -->
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>

      <!-- Inicio de lo valores -->
      <div class="w-2/3 space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="display_name">Name</label>
            <input
              id="display_name"
              placeholder="John Doe"
              class="w-full border border-gray-300 rounded-md p-2 text-gray-800"
              bind:value={display_name}
            />
          </div>

          <div class="space-y-2">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              class="w-full border border-gray-300 rounded-md p-2 text-gray-800"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label for="bio">Bio</label>
          <input
            id="bio"
            type="text"
            placeholder="Tell us about yourself"
            class="w-full border border-gray-300 rounded-md p-2 text-black"
            bind:value={bio}
          />
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="current-password">Current Password</label>
            <input
              id="current-password"
              type={passwordType}
              class="w-full border border-gray-300 rounded-md p-2 text-black password-masked"
              onfocus={restorePasswordType}
              onblur={hidePasswordType}
            />
          </div>

          <div class="space-y-2">
            <label for="new_password">New Password</label>
            <input
              id="new_password"
              type="password"
              class="w-full border border-gray-300 rounded-md p-2 text-black"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label for="confirm_password">Confirm New Password</label>
          <input
            id="confirm_password"
            type="password"
            class="w-full border border-gray-300 rounded-md p-2 text-black"
          />
        </div>
      </div>
      <!-- End de los Valores -->
    </div>
  </div>

  <div class="p-6">
    <button
      type="submit"
      class="w-full bg-primary text-white py-2 rounded-md bg-slate-600"
      >Save Changes</button
    >
  </div>
</form>

<style>
  .password-masked {
    -webkit-text-security: disc; /* Para ocultar el texto */
    user-select: none; /* Para evitar que el texto sea seleccionado */
  }
</style>
