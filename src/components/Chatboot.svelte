<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { fixMyEnglish } from "../service/AI";
  export let conversation = []; // Recibe la lista de conversaciones como una prop

  /* let text = "Hello! How can I help you, today?";
    let displayText = "";
    let index = 0;
    const typingSpeed = 50; */

  let inputText = ""; // Valor actual del input
  let submittedText = ""; // Texto que se ha enviado
  let correctText = ""; // Texto corregido devuelto por el servicio
  let messagesEnd: HTMLDivElement; // Elemento al final del contenedor de mensajes

  // Función para desplazar el scroll hacia el final
  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  // Desplazar el scroll al cargar la página
  onMount(() => {
    scrollToBottom();
  });

   // Desplazar el scroll cada vez que se actualicen las conversaciones
   afterUpdate(() => {
    scrollToBottom();
  });

  // Efecto de escritura

  /* onMount(() => {
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          displayText += text[index];
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    }); */

  // Manejar el envío de texto
  const handleClick = async () => {
    if (!inputText.trim()) return; // Verificar que el input no esté vacío

    submittedText = inputText;
    correctText = await fixMyEnglish(submittedText);

    // Enviar el texto y la respuesta a Supabase
    try {
      const res = await fetch("/api/StoreConversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: submittedText, // Almacenar el texto enviado como 'message'
          response: correctText, // Almacenar la respuesta de la IA como 'response'
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error al almacenar la conversación:", errorData);
      } else {
        console.log("Conversación almacenada exitosamente");
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData); // Revisa la respuesta del servidor
        console.log("Perfil actualizado exitosamente");

        /* Se Hace el GET a Supabase */
        // Obtener la nueva lista de conversaciones
        const resres = await fetch("/api/StoreConversation"); // Asegúrate de que este endpoint esté configurado correctamente
        const data = await resres.json();

        if (resres.ok) {
          conversation = data; // Actualizar la lista de conversaciones
        } else {
          console.error("Error al obtener las conversaciones:", data);
        }
      }
    } catch (error) {
      console.error("Error al enviar los datos a Supabase:", error);
    }

    // Limpiar el input
    inputText = "";
  };
</script>

<!-- Mensaje con el efecto de escritura -->
<!-- {#if displayText}
    <div class="flex items-start">
      <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
        <p>{displayText}</p>
      </div>
    </div>
  {/if} -->

<!-- Mostrar las conversaciones -->
<div class="relative">
  {#each conversation as entry}
    <!-- Mensaje enviado por el usuario -->
    {#if entry.userId !== ""}
      <!-- Cambia la lógica correcta -->
      <div class="flex items-end justify-end">
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-[35rem] my-2">
          <p>{entry.message}</p>
        </div>
      </div>
    {/if}

    <!-- Mensaje con el texto corregido -->
    {#if entry.userId !== ""}
      <!-- Cambia la lógica si es necesario -->
      <div class="flex items-start">
        <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-[35rem] my-2">
          <p>{entry.response}</p>
        </div>
      </div>
    {/if}
  {/each}

  <!-- Elemento invisible para el scroll al final -->
  <div bind:this={messagesEnd}></div>
</div>

<!-- Caja de entrada para el usuario -->
<div
  class="border-t p-3 bg-gray-800 fixed bottom-0 left-0 right-0 max-w-5xl mx-auto"
>
  <div class="flex space-x-2">
    <input
      id="result"
      type="text"
      bind:value={inputText}
      placeholder="Type a message..."
      class="flex-1 border rounded-lg p-2 mr-2 text-zinc-700"
    />
    <button
      on:click={handleClick}
      type="button"
      class="bg-blue-500 text-white px-4 py-2 rounded-lg"
      disabled={!inputText.trim()}
    >
      Send
    </button>
  </div>
</div>
