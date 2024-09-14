<script lang="ts">
    import { fixMyEnglish } from "../service/AI";
    import { onMount } from "svelte";
  
    export let conversation = []; // Recibe la lista de conversaciones como una prop
  
    let text = "Hello! How can I help you, today?";
    let displayText = "";
    let index = 0;
    const typingSpeed = 50;
  
    let inputText = ""; // Valor actual del input
    let submittedText = ""; // Texto que se ha enviado
    let correctText = ""; // Texto corregido devuelto por el servicio
  
    // Efecto de escritura
    onMount(() => {
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          displayText += text[index];
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    });
  
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
  
          // Obtener la nueva lista de conversaciones
          const res = await fetch("/api/StoreConversation"); // Asegúrate de que este endpoint esté configurado correctamente
          const data = await res.json();
          
          if (res.ok) {
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
  {#if displayText}
    <div class="flex items-start">
      <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
        <p>{displayText}</p>
      </div>
    </div>
  {/if}
  
  <!-- Mostrar las conversaciones -->
  {#each conversation as entry}
    <!-- Mensaje enviado por el usuario -->
    {#if entry.userId !== ''} <!-- Cambia 'currentUserId' por la lógica correcta -->
      <div class="flex items-end justify-end">
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
          <p>{entry.message}</p>
        </div>
      </div>
    {/if}
  
    <!-- Mensaje con el texto corregido -->
    {#if entry.userId !== ''} <!-- Cambia la lógica si es necesario -->
      <div class="flex items-start">
        <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
          <p>{entry.response}</p>
        </div>
      </div>
    {/if}
  {/each}
  
  <!-- Caja de entrada para el usuario -->
  <div class="border-t p-3 flex items-end mt-2.5">
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
  