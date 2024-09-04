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
-->
<script>
    import { fixMyEnglish } from "../service/AI";
    import { onMount } from "svelte";

    const text = "Hello! How can I help you, today?";
    let displayText = "";
    let index = 0;
    const typingSpeed = 50; // Velocidad del efecto (en milisegundos)

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

    let promise = null;
    let inputText = ""; // Current input value
    let submittedText = ""; // Text that has been submitted
    let correctText = ""; // Corrected text returned from the service

    const handleClick = async () => {
        submittedText  = document.getElementById("result").value.trim();
        /* // Regex to disallow special characters and numbers as a single word
        const regex = /^[a-zA-Z\s]+$/;

        if (!submittedText || !regex.test(submittedText)) {
            alert("Please enter a valid input without special characters or numbers.");
            return;
        } */
       
        if (submittedText  === "") return;

        promise = fixMyEnglish(submittedText);
        const value = await promise;
        correctText = value;

        /* Clear Input */
        inputText= "";
        document.getElementById("result").value = "";

        promise = null;
    };
</script>

<!-- Left Message (Text with typing effect) -->
{#if displayText}
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
            <p>{displayText}</p>
        </div>
    </div>
{/if}

<!-- Right Message (User input) -->
{#if submittedText}
    <div class="flex items-end justify-end">
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            <p>{submittedText}</p>
        </div>
    </div>
{/if}

<!-- Left Message (Corrected text) -->
{#if correctText}
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-900 p-3 rounded-lg max-w-xs">
            <p>{correctText}</p>
        </div>
    </div>
{/if}

<!-- Input Box  Binds the input value to inputText -->
<div class="border-t p-3 flex items-center mt-2.5">
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
