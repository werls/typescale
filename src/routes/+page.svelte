<script>
  import { onMount } from "svelte";
  import {
    typeScale,
    inputText,
    scale,
    levels,
    baseSize,
    unit,
    font,
  } from "../stores.js";
  import { TypeScale } from "$lib/typeScale";
  import LineOfType from "../components/LineOfType.svelte";
  import Controller from "../components/Controller.svelte";
  import Button from "../components/Button.svelte";
  import ButtonIcon from "../components/ButtonIcon.svelte";
  import { updateFont } from "$lib/updateFont.js";

  function handleAdd() {
    levels.update((n) => n + 1);
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  function handleRemove() {
    if ($levels === 1) return;
    levels.update((n) => n - 1);
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  const textOptions = [
    "Edital de Seleção de Pesquisadores - Nº 01/2023",
    "Objetivo Geral",
    "Objetivos Específicos",
    "Áreas de Pesquisa",
    "Etapas do Processo Seletivo",
    "Documentos Necessários",
    "Avaliação e Resultados",
    "Disposições Finais",
  ];

  onMount(() => {
    updateFont($font);
    $inputText = textOptions[Math.floor(Math.random() * textOptions.length)];
  });
</script>

<Controller {textOptions} />

<main class="py-3 flex flex-col justify-center items-center">
  <div class="px-3 flex items-center gap-3 w-full">
    <div class="flex gap-2">
      <Button description="Adicionar um nível" clickHandler={handleAdd}
        >+</Button
      >
      <Button description="Remover um nível" clickHandler={handleRemove}
        >-</Button
      >
    </div>
    <div class="text-sm">Níveis de título: <strong>{$levels}</strong></div>
  </div>
  <div class="w-full flex">
    <div id="content" class="w-full">
      {#each $typeScale.headings as item}
        <LineOfType {item} unit={$unit}>{$inputText}</LineOfType>
      {/each}
      <LineOfType item={$typeScale.body} unit={$unit}>{$inputText}</LineOfType>
      <LineOfType item={$typeScale.small} unit={$unit}>{$inputText}</LineOfType>
    </div>
  </div>
</main>

<style lang="postcss">
  /* :global(html) {
    background-color: theme(colors.gray.100);
  } */
</style>