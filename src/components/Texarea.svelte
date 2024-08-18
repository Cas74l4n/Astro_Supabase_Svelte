<script>
    export let value = "";
  </script>
  
  
  <textarea
    id="result"
    class="max-w-3xl w-full m-auto text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    placeholder="Put your english to fix"
    name="comment"
    rows="5"
    cols="40"
    bind:value={value}
  />