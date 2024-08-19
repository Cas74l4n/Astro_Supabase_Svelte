<script>
  import { fixMyEnglish } from "../service/AI.js";
  import Loading from "../components/icons/Loading.svelte";
  import Upload from "../components/icons/Updoad.svelte";

  let promise = null;
  let inputText = "";
  let correctedText = "";
  let isCorrect = null;

  const handleClick = async () => {
    inputText = document.getElementById("result").value.trim();
    if (inputText === "") return;
    promise = fixMyEnglish(inputText);
    const value = await promise;

    correctedText = value;

    if (inputText.trim() === correctedText.trim()) {
      isCorrect = true;
    } else {
      isCorrect = false;
    }

    promise = null;
  };

</script>

<div class="max-w-3xl w-full mx-auto my-5">
  <textarea
    id="result"
    class="max-w-3xl w-full m-auto text-base pl-2.5 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    placeholder="Put your english to fix"
    name="comment"
    rows="5"
    cols="40"
  />

  <span class=" my-2.5 ">
    {#if promise === null}
    <button
      on:click={handleClick}
      type="button"
      class="py-2 my-2.5 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
      <Upload />
      Fix My English!
    </button>
  {:else}
    {#await promise}
      <button
        type="button"
        class="pointer-events-none py-2 px-4 my-2.5 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <Loading />
        Loading...
      </button>
    {/await}
  {/if}
  </span>
  
  <div>
    {#if isCorrect !== null}
      <p style="color: {isCorrect ? 'green' : 'red'}">
        {isCorrect
          ? "The input text is correct."
          : "The input text is incorrect."}
      </p>
      <p>
        Original: <span style="color: {isCorrect ? 'green' : 'red'}"
          >{inputText}</span
        >
      </p>
      <p>Corrected: {correctedText}</p>
    {/if}
  </div>
</div>