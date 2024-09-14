<script>
  export let conversation = []; // Definir la prop 'conversation'

  let message = '';
  let response = '';

  // Función para insertar conversación
  async function submitConversation() {
    try {
      const res = await fetch('/api/StoreConversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, response }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error al insertar conversación:', errorData);
      } else {
        console.log('Conversación insertada exitosamente');
        
        // Actualizar manualmente la lista de conversaciones
        const newConversation = {
          userId,
          message,
          response,
          created_at: new Date().toISOString() // Genera una fecha actual para la nueva conversación
        };

        // Añadir la nueva conversación a la lista actual
        conversation = [newConversation, ...conversation];
        
        // Limpiar los campos después de insertar
        message = '';
        response = '';
      }
    } catch (error) {
      console.error('Error al enviar la petición:', error);
    }
  }
</script>

<!-- Formulario para enviar una conversación -->
<form on:submit|preventDefault={submitConversation}>
  <label for="message">Message:</label>
  <input class="text-black" id="message" type="text" bind:value={message} placeholder="Escribe el mensaje" />

  <label for="response">Response:</label>
  <input class="text-black" id="response" type="text" bind:value={response} placeholder="Escribe la respuesta" />

  <button type="submit">Enviar Conversación</button>
</form>

<!-- Mostrar los datos -->
<ul class="conversation-list">
  {#each conversation as entry}
    <li class="conversation-item">
      <div class="message">
        <p class="UUID"><strong>UUID:</strong> {entry.userId}</p>
        <p class="user"><strong>Message:</strong> {entry.message}</p>
        <p class="bot"><strong>Response:</strong> {entry.response}</p>
      </div>
      <div class="timestamp">
        <p>{entry.created_at}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  .conversation-list {
    padding: 20px;
  }

  .conversation-item {
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }

  .message {
    margin-bottom: 5px;
  }

  .UUID {
    color: wheat;
  }

  .user {
    color: blue;
  }

  .bot {
    color: green;
  }

  .timestamp {
    font-size: 12px;
    color: #999;
  }
</style>
