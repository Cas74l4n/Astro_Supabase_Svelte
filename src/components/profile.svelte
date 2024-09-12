<!-- <script>
    import { onMount } from "svelte";
    import { supabase } from "../lib/supabase.ts";
    let messages = []; // Array to store conversations
    let inputText = "";
    let userId = null;

    // Function to obtain the user ID
    async function getUserId() {
        try {
            const { data, error } = await supabase.auth.getSession(); // Get active session

            if (error) {
                console.error("Error getting user session:", error);
            } else if (data?.session) {
                userId = data.session.user.id;
                console.log("User authenticated, ID:", userId);
            }
        } catch (error) {
            console.error("Unexpected error getting userId:", error);
        }
    }

    // Function to send a message and update conversations
    async function sendMessage() {
        if (!inputText.trim()) return;

        try {
            // Send message to Supabase (replace with your AI integration if applicable)
            const { data, error } = await supabase
                .from("StoreConversation")
                .insert({ userId, message: inputText });

            if (error) {
                console.error("Error saving message:", error);
            } else {
                console.log("Message saved:", data);
                await fetchConversations(userId); // Update conversations after sending
            }
        } catch (error) {
            console.error("Unexpected error sending message:", error);
        }

        inputText = ""; // Clear input after sending
    }

    // Function to fetch conversations
    async function fetchConversations(userId) {
        try {
            const url = new URL(
                "/api/StoreConversation",
                window.location.origin,
            );
            if (userId) {
                url.searchParams.set("userId", userId);
            }

            const response = await fetch(url.toString());

            if (!response.ok) {
                throw new Error(
                    `Network response was not ok: ${response.statusText}`,
                );
            }

            const data = await response.json();
            messages = data;
            console.log("Conversations fetched:", messages); // Verifica los datos obtenidos
        } catch (error) {
            console.error("Error fetching conversations:", error);
        }
    }

    onMount(async () => {
        await getUserId(); // Get user ID on component mount
        await fetchConversations(userId); // Get conversations
    });
</script>

<div class="chat-container">
    {#each messages as message}
        <div
            class="message {message.userId == userId
                ? 'user-message'
                : 'bot-message'}"
        >
            {message.message}
        </div>
    {/each}

    <div class="input-container">
        <input
            class="bg-black"
            type="text"
            bind:value={inputText}
            placeholder="Escribe tu mensaje"
        />
        <button on:click={sendMessage}>Enviar</button>
    </div>
</div>

/*Displaying the conversations*/
{#if conversations.length > 0}
    <ul>
        {#each conversations as conversation}
            <li>
                <p><strong>Message:</strong> {conversation.message}</p>
                <p><strong>Response:</strong> {conversation.response}</p>
                <p>
                    <strong>Created at:</strong>
                    {new Date(conversation.created_at).toLocaleString()}
                </p>
            </li>
        {/each}
    </ul>
{:else}
    <p>No conversations found.</p>
{/if}
 -->

<!-- <script lang="ts" context="module">
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabase.ts"; // Asegúrate de importar el cliente de Supabase correctamente
  import Loading from "./icons/Loading.svelte";

  // Exportamos el tipo de dato de cada entrada de conversación
  // Interfaz para las entradas de conversación
  export interface StoreConversationEntry {
    id: number;
    userId: string;
    message: string;
    response: string;
    created_at: string;
  }

  // Función para obtener las conversaciones desde Supabase
  export async function getAllStoreConversation(): Promise<StoreConversationEntry[]> {
    try {
      // Verifica si hay sesión
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      const session = sessionData?.session;
      if (!session) {
        throw new Error("No se encontró una sesión activa");
      }

      // Realiza la consulta
      const { data, error } = await supabase
        .from('StoreConversation')
        .select('message, response, created_at')
        .eq('userId', session.user.id);
      if (error) throw error;

      return data || [];
    } catch (err) {
      console.error("Error al obtener las conversaciones:", err);
      return []; // Retorna una lista vacía en caso de error
    }
  }

  // Llamamos la función al montar el componente
  onMount(() => {
    getAllStoreConversation();
  });
</script>

Aquí podrías mostrar las conversaciones obtenidas
<script>
    export let StoreConversationEntry = [];
  </script>
  
  <div class="H">
    {#if StoreConversationEntry.length > 0}
      <ul>
        {#each StoreConversationEntry as Entry}
          <li>
            <p><strong>Mensaje:</strong> {Entry.message}</p>
            <p><strong>Respuesta:</strong> {Entry.response}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No hay conversaciones almacenadas.</p>
    {/if}
  </div>


<script>
  import { onMount } from "svelte";
  let name = "";
  let message = "";
  let guestbookEntries = [];
  let loading = false;

  async function fetchGuestbook() {
    const response = await fetch("/api/guestbook");
    guestbookEntries = await response.json();
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (!name || !message) return;
    
    loading = true;

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, message })
    });

    const newEntry = await res.json();
    guestbookEntries = [...guestbookEntries, ...newEntry];
    name = "";
    message = "";
    loading = false;
  }

  onMount(() => {
    fetchGuestbook();
  });
</script>

<div class="max-w-3xl w-full">
  <form on:submit={onSubmitHandler} class="form">
    <div>
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Sam"
        required
        bind:value={name}
      />
    </div>
    <div>
      <label for="message">Message</label>
      <input
        id="message"
        type="text"
        placeholder="A friendly message"
        required
        bind:value={message}
      />
    </div>
    <button type="submit" {disabled}>
      {loading ? "Submitting..." : "Submit"}
    </button>
  </form>

  <ul>
    {#each guestbookEntries as entry}
      <li>
        <p>{entry.name}</p>
        <p>{entry.message}</p>
      </li>
    {/each}
  </ul>
</div>




-->

<script>
    export let conversation = []; // Definir la prop 'conversation'
</script>

<ul>
    {#each conversation as entry}
        <li>
            <p><strong>Message:</strong> {entry.message}</p>
            <p><strong>Response:</strong> {entry.response}</p>
        </li>
    {/each}
</ul>
