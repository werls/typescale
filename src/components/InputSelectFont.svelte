<script>
	// export let fonts;
	import { onMount } from 'svelte';
	import fontsData from '$lib/fonts.json';
	import { font } from '../stores.js';
	import { updateFont } from '$lib/updateFont.js';
	const fonts = fontsData.items;

	const sort = Math.floor(Math.random() * fonts.length);

	const fontOptions = [
		"Roboto",
		"Raleway",
		"Fira Sans",
		"Manrope",
		"Assistant",
	]

	export let disabled = false;

	function handleInput() {
		updateFont($font)
	}

	onMount(() => {
		// $font = fonts[sort].family;
		$font = fontOptions[Math.floor(Math.random() * fontOptions.length)]
	})

</script>

<div class="flex flex-col gap-1">
  <label class="text-sm font-bold px-1" for="base-size">Fonte</label>
  <div class="flex gap-2 items-center">
    <select 
		class="h-10 bg-transparent border rounded-lg p-1 hover:border-slate-300"
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
