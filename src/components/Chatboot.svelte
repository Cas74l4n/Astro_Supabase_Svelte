<!-- 
    <script>
    /*     export interface StoreConversationEntrada {
        message: string;
        response: string;
    }
    let message = "";
    let response = "";
    let loading = false;
    const reviews = writable<StoreConversationEntrada[]>([]);

    async function fetchReviews() {
    try {
      const res = await fetch("/api/StoreConversation");
      const data = await res.json();
      if (res.ok) {
        reviews.set(data);
      } else {
        console.error(data.response);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  } */
    </script>

        /* // Regex to disallow special characters and numbers as a single word
        const regex = /^[a-zA-Z\s]+$/;

        if (!submittedText || !regex.test(submittedText)) {
            alert("Please enter a valid input without special characters or numbers.");
            return;
        } */

-->

<script lang="ts">
    import { fixMyEnglish } from "../service/AI";
    import { onMount } from "svelte";

    // Definir las variables reactivas
    let text = "Hello! How can I help you, today?";
    let displayText = "";
    let index = 0;
    const typingSpeed = 50; // Velocidad del efecto (en milisegundos)

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

<!-- Mensaje de texto enviado por el usuario -->
{#if submittedText}
    <div class="flex items-end justify-end">
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            <p>{submittedText}</p>
        </div>
    </div>
{/if}

<!-- Mensaje con el texto corregido -->
{#if correctText}
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
            <p>{correctText}</p>
        </div>
    </div>
{/if}

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

