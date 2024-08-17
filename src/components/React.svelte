<script>
    import { onMount } from "svelte";
    import { fixMyEnglish } from "../service/AI.js";
  
    let reviews = [];
    let inputText = "";
    let correctedText = "";
    let isCorrect = null;
    let loading = false;
  
    async function fetchReviews() {
      const res = await fetch("/api/StoreConversation");
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message);
      }
  
      reviews = data;
    }
  
    async function handleClick() {
      const input = document.getElementById("result");
      if (!input) return;
  
      inputText = input.value;
      loading = true;
  
      const value = await fixMyEnglish(input.value);
      correctedText = value;
  
      if (input.value.trim() === value.trim()) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      loading = false;
    }
  
    async function onSubmitHandler(e) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
  
      const message = formData.get("message")?.toString();
      const response = formData.get("response")?.toString();
  
      if (!message || !response) return;
  
      await fetch("/api/StoreConversation", {
        method: "POST",
        body: JSON.stringify({ message, response }),
      });
  
      fetchReviews();
    }
  
    onMount(() => {
      fetchReviews();
    });
  </script>
  
  <div class="max-w-3xl w-full">
    <form
      on:submit={onSubmitHandler}
      class="block border bg-blue-100 border-blue-300 rounded-md p-6 dark:bg-blue-950 dark:border-blue-800"
    >
      <div class="mt-3">
        <textarea
          id="result"
          class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Put your English to fix"
          name="comment"
          rows="5"
          cols="40"
        />
      </div>
  
      <div class="flex flex-col gap-y-2 mt-4">
        {#if loading}
          <button
            type="button"
            class="pointer-events-none py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Loading...
          </button>
        {:else}
          <button
            type="button"
            on:click={handleClick}
            class="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Fix my English!
          </button>
        {/if}
      </div>
    </form>
  
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {#each reviews as review}
        <li class="p-4 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700">
          <p class="text-sm font-medium text-red-500 dark:text-red-400">
            {review.message}
          </p>
          <p class="mt-1">{review.response}</p>
        </li>
      {/each}
    </ul>
  </div>
  