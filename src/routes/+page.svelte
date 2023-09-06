<script>
  import { onMount } from "svelte";
	import { typeScale, inputText, scale, levels, baseSize } from "../stores.js";
  import { TypeScale } from "$lib/typeScale";
	// import { makeTypeScale } from "$lib";
  import LineOfType from "../components/LineOfType.svelte";
	import Controller from "../components/Controller.svelte";
  import Button from "../components/Button.svelte";
  import ButtonIcon from "../components/ButtonIcon.svelte";
  // import Preview from "../components/Preview.svelte";

  function handleAdd() {
    levels.set($levels + 1)
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  function handleRemove() {
    if ($levels === 1) return
    levels.set($levels - 1)
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  function copyToClipboard() {
    var myDiv = document.getElementById('content')
    var range = document.createRange();
    range.selectNode(myDiv)

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

    window.getSelection().removeAllRanges();
    alert('Conteúdo copiado!')
  }

  onMount(() => {
  });
</script>

<Controller />

<main class="py-3 flex flex-col justify-center items-center">
  <div class="px-3 flex items-center gap-3 w-full">
    <div class="flex gap-2">
      <Button description="Adicionar um nível" clickHandler={handleAdd}>+</Button>
      <Button description="Remover um nível" clickHandler={handleRemove}>-</Button>
    </div>
    <div class="text-sm">Níveis de título: <strong>{$levels}</strong></div>
    <!-- <ButtonIcon text="Copiar" icon="content_copy" handler={copyToClipboard}/> -->
  </div>
  <div class="w-full flex">
    <div id="content" class="w-full">
      {#each $typeScale.headings as item}
        <LineOfType {item}>{$inputText}</LineOfType>
      {/each}
        <LineOfType item={$typeScale.body}>{$inputText}</LineOfType>
    </div>
    <div>
      <!-- <Preview /> -->
    </div>
  </div>
</main>

<style lang="postcss">
  /* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
