<script>
	// export let fonts;
	import { onMount } from 'svelte';
	import fontsData from '$lib/fonts.json';
	import { font } from '../stores.js';
	const fonts = fontsData.items;

	const sort = Math.floor(Math.random() * fonts.length);
	
	
	// font.set(selectedFont)
	// console.log(selectedFont)

	function handleInput() {
		console.log($font)
	}

	onMount(() => {
		$font = fonts[sort].family;
	})

</script>

<div class="flex flex-col gap-1">
  <label class="text-sm" for="base-size">Fonte</label>
  <div class="flex gap-2 items-center">
    <select 
		class="h-8 bg-transparent"
		name="font"
		id="font"
		bind:value={$font}
		on:change={handleInput}
		>
				{#each fonts as font}
					<option value={font.family}>{font.family}</option>
				{/each}
    </select>
  </div>
</div>
