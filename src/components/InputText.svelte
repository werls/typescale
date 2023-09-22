<script>
  export let bind;
  export let label;
  export let disabled = false;
  export let textOptions;

  function handleClick() {
    const newOption = document.getElementById('input-text').value;
    textOptions = [...textOptions, newOption];
  }

  // import { onMount } from "svelte";

  // onMount(() => {
  //   console.log(textOptions)
  // });
</script>

<div class="flex flex-col gap-1">
  <label for="input-text" class="text-sm font-bold px-1">{label}</label>
  <div class="flex gap-2 items-center">
    <input
      id="input-text"
      type="text"
      list="options"
      class="h-10 bg-transparent border rounded-lg p-1 hover:border-slate-300"
      bind:value={$bind}
      {disabled}
    />
    <datalist id="options">
      {#each textOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </datalist>
    <!-- <button on:click={handleClick}>+</button> -->
  </div>
  
</div>
