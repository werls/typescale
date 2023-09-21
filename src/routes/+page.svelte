<script>
  import { onMount } from "svelte";
  import { typeScale, inputText, scale, levels, baseSize, unit } from "../stores.js";
  import { TypeScale } from "$lib/typeScale";
  import LineOfType from "../components/LineOfType.svelte";
  import Controller from "../components/Controller.svelte";
  import Button from "../components/Button.svelte";
  import ButtonIcon from "../components/ButtonIcon.svelte";
  import { font } from "../stores.js";
  import { updateFont } from "$lib/updateFont.js";

  // export let data;
  // export let fonts = data.data;

  function handleAdd() {
    levels.update(n => n + 1);
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  function handleRemove() {
    if ($levels === 1) return;
    levels.update(n => n - 1);
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  // function copyToClipboard() {
  //   const myDiv = document.getElementById('content');
  //   const range = document.createRange();
  //   range.selectNode(myDiv);

  //   window.getSelection().removeAllRanges();
  //   window.getSelection().addRange(range);
  //   document.execCommand("copy");

  //   window.getSelection().removeAllRanges();
  //   alert('Conteúdo copiado!');
  // }

  // function updateFont() {
  //   const head = document.querySelector("head");
  //   const fontSheet = document.createElement("link");
  //   fontSheet.rel = "stylesheet";
  //   fontSheet.href = `https://fonts.googleapis.com/css2?family=${$font}:wght@400;500;600;700;800&display=swap`;
  //   head.appendChild(fontSheet);
  // }


  onMount(() => {
    document.title = "Typescale";
    updateFont($font)
    

    // const main = document.querySelector("main");
    // main.style.fontFamily = "Raleway, sans-serif";
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
  </div>
  <div class="w-full flex">
    <div id="content" class="w-full">
      {#each $typeScale.headings as item}
        <LineOfType {item} unit={$unit}>{$inputText}</LineOfType>
      {/each}
      <LineOfType item={$typeScale.body} unit={$unit}>{$inputText}</LineOfType>
    </div>
  </div>
</main>

<style lang="postcss">
  /* :global(html) {
    background-color: theme(colors.gray.100);
  } */
</style>
