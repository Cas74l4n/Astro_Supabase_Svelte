<script>
  import Camera from "./icons/camera.svelte";

  // Función para prevenir cambiar el tipo de input
  let passwordInput;
  // Función para prevenir cambiar el tipo de input
  function restorePasswordType() {
    if (passwordInput.type !== "password") {
      passwordInput.type = "password"; // Forzamos que siempre sea 'password'
    }
  }

  // Bloquear la interacción (copiar, cortar, pegar)
  function preventAction(event) {
    event.preventDefault();
  }
</script>

<div class="w-[1200px] mx-auto bg-gray-800 border-gray-100 rounded-3xl">
  <div class="p-6">
    <h2 class="text-3xl">Profile Settings</h2>
    <p>Update your profile information here.</p>
  </div>
  <div class="p-6 space-y-6">
    <div class="flex space-x-8">
      <div class="w-1/3">
        <div class="flex flex-col items-center space-y-4">
          <div class="w-48 h-48 rounded-full bg-gray-200 text-gray-800">
            <img
              src="https://kakoqccxypiyimjgkmyp.supabase.co/storage/v1/object/sign/Avatar/2e4d3eac-7480-41b8-9f6f-56f19ff23223/Gabriel_2e4d.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdmF0YXIvMmU0ZDNlYWMtNzQ4MC00MWI4LTlmNmYtNTZmMTlmZjIzMjIzL0dhYnJpZWxfMmU0ZC5qcGciLCJpYXQiOjE3MjY2NDg2NDcsImV4cCI6MTcyNzI1MzQ0N30.55R-74E1eBnf7wNWd-BcFY7Hc712ER5PRSz1yPyFGnc&t=2024-09-18T08%3A37%3A26.642Z"
              alt="Profile_picture"
              class="rounded-full"
            />
          </div>

          <label for="avatar-upload" class="cursor-pointer">
            <div
              class="flex items-center space-x-2 text-primary-foreground px-4 py-2 rounded-md bg-gray-600"
            >
              <Camera />
              <span>Change Avatar</span>
            </div>
          </label>

          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>

      <div class="w-2/3 space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="name">Name</label>
            <input
              id="name"
              placeholder="John Doe"
              class="w-full border border-gray-300 rounded-md p-2 text-gray-800"
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
            placeholder="Tell us about yourself"
            class="w-full border border-gray-300 rounded-md p-2 text-black"
          />
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="current-password">Current Password</label>
            <input
              id="current-password"
              type="password"
              class="w-full border border-gray-300 rounded-md p-2 text-black password-masked"
              oncopy="return false"
              oncut="return false"
              onpaste="return false"
              onfocus="restorePasswordType()"
            />
          </div>

          <div class="space-y-2">
            <label for="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              class="w-full border border-gray-300 rounded-md p-2 text-black"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label for="confirm-password">Confirm New Password</label>
          <input
            id="confirm-password"
            type="password"
            class="w-full border border-gray-300 rounded-md p-2 text-black"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="p-6">
    <button class="w-full bg-primary text-white py-2 rounded-md bg-slate-600"
      >Save Changes</button
    >
  </div>
</div>

<style>
  .password-masked {
    -webkit-text-security: disc; /* Para ocultar el texto */
    user-select: none; /* Para evitar que el texto sea seleccionado */
  }
</style>
