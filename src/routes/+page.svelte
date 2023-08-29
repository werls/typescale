<script>
  import { onMount } from "svelte";
	import { typeScale, inputText, scale, levels, baseSize } from "../stores.js";
  import { TypeScale } from "$lib/typeScale";
	// import { makeTypeScale } from "$lib";
  import LineOfType from "../components/LineOfType.svelte";
	import Controller from "../components/Controller.svelte";
  import Button from "../components/Button.svelte";

  function handleAdd() {
    levels.set($levels + 1)
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  function handleRemove() {
    levels.set($levels - 1)
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  onMount(() => {
  });
</script>

<Controller />

<main class="py-3 flex flex-col justify-center items-center">
  <div class="px-3 flex gap-2 w-full">
    <Button clickHandler={handleAdd}>+</Button>
    <Button clickHandler={handleRemove}>-</Button>
  </div>
  {#each $typeScale.headings as item}
    <LineOfType {item}>{$inputText}</LineOfType>
  {/each}
    <LineOfType item={$typeScale.body}>{$inputText}</LineOfType>
  <!-- <AddButton /> -->
</main>

<style lang="postcss">
  /* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
