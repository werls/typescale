<script>
  import { unit } from '../stores.js';
  import { font } from '../stores.js';
  import { onMount } from 'svelte';
  import { inputText } from '../stores.js';

  export let item;

  $: fontSize = `${item.size}${$unit}`;

  onMount(() => {
    // console.log($font)
  });
</script>

<div class="p-3 text-slate-400 w-full">
  <div class="grid grid-cols-10 items-end py-2 gap-2">
    <div class="text-xs col-span-1">{item.type}</div>
    <!-- <div style="font-size:{fontSize}" class="text-scale text-gray-900 line-clamp-1 col-span-8 transition-all duration-500"> -->
    <!-- <div style="font-size:{fontSize}; font-family:{$font}" class="text-scale text-gray-900 line-clamp-1 col-span-8 transition-all duration-500"> -->
    <input bind:value={$inputText} type="text" style="font-size:{fontSize}; font-family:{$font}" class="text-scale bg-transparent text-gray-900 line-clamp-1 col-span-8 transition-all duration-500 appearance-none"/>
      <!-- <slot /> -->
    <!-- </div> -->
    <div class="text-xs col-span-1 justify-self-end">{fontSize}</div>
    </div>
  <!-- </input> -->
  <hr class="border-gray-300" />
</div>