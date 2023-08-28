<script>
  // import { onMount } from "svelte";
	import { typeScale, inputText, scale } from "../stores.js";
	// import { makeTypeScale } from "$lib";
  import LineOfType from "../components/LineOfType.svelte";
	import Controller from "../components/Controller.svelte";
  import AddButton from "../components/AddButton.svelte";

  // onMount(() => {
	// 	const options = document.querySelectorAll("option");
	// 	options[3].selected = true;
  // });
</script>

<Controller />

<main class="py-3 flex flex-col justify-center items-center">
  <!-- <AddButton /> -->
  {#each $typeScale as item}
    <LineOfType {item}>{$inputText}</LineOfType>
  {/each}
  <!-- <AddButton /> -->
</main>

<style lang="postcss">
  /* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
