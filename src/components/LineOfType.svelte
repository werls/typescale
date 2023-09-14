<script>
  import { unit } from '../stores.js';
  import { onMount } from 'svelte';

  export let item;

  let fontSize;

  $: fontSize = `${item.size}${$unit}`;

  onMount(() => {
    console.log($unit);
  });
</script>

<div class="p-3 text-slate-400 w-full">
  <div class="grid grid-cols-10 items-baseline gap-2">
    <div class="text-xs col-span-1">{item.type}</div>
    <div style="font-size:{fontSize}" class="text-scale text-gray-900 line-clamp-1 col-span-8 transition-all duration-500">
      <slot />
    </div>
    <div class="text-xs col-span-1 justify-self-end">{fontSize}</div>
  </div>
  <hr class="border-gray-300" />
</div>