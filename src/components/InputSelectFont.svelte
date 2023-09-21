<script>
	// export let fonts;
	import { onMount } from 'svelte';
	import fontsData from '$lib/fonts.json';
	import { font } from '../stores.js';
	import { updateFont } from '$lib/updateFont.js';
	const fonts = fontsData.items;

	const sort = Math.floor(Math.random() * fonts.length);

	export let disabled = false;

	function handleInput() {
		updateFont($font)
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
		{disabled}
		>
				{#each fonts as font}
					<option value={font.family}>{font.family}</option>
				{/each}
    </select>
  </div>
</div>
