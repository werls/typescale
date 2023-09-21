<script>
  import {
    baseSize, inputText, scale, levels,
    typeScale, unit
  } from "../stores.js";

  import { onMount } from "svelte";
  import { TypeScale } from "$lib/typeScale";
  import InputSelect from "../components/InputSelect.svelte";
  import InputValue from "../components/InputValue.svelte";
  import InputText from "../components/InputText.svelte";
  import InputSelectFont from "../components/InputSelectFont.svelte";
  // import { base } from "$app/paths";

  const units = [
    {
      name: "Pixels",
      value: "px",
    },
    {
      name: "Pontos",
      value: "pt",
    }
  ]

  const scales = [
    {
      name: "Segunda Menor",
      value: 1.067,
    },
    {
      name: "Segunda Maior",
      value: 1.125,
    },
    {
      name: "Terça Menor",
      value: 1.2,
    },
    {
      name: "Terça Maior",
      value: 1.25,
    },
    {
      name: "Quarta Perfeita",
      value: 1.333,
    },
    {
      name: "Quarta Aumentada",
      value: 1.414,
    },
    {
      name: "Quinta Perfeita",
      value: 1.5,
    },
    {
      name: "Razão Áurea",
      value: 1.618,
    },
  ];

  function handleInput() {
    typeScale.set(TypeScale.generateTypeScale($baseSize, $scale, $levels));
  }

  onMount(() => {
		handleInput()
    // console.log(fonts)
  });
</script>

<aside>
  <form class="bg-slate-200 px-3 py-3 flex flex-row gap-6">
    
    <!-- Size -->
    <InputValue label="Tamanho base" bind={baseSize} handler={handleInput} />

    <!-- Units -->
    <InputSelect label="Unidade" bind={unit} options={units} handler={handleInput}/>
    
    <!-- Scale -->
    <InputSelect label="Escala" bind={scale} options={scales} handler={handleInput}/>

    <!-- Fonts -->
    <!-- <InputSelect label="Escala" bind={font} options={fonts} handler={handleInput}/> -->
    <InputSelectFont />
    
    <!-- Text -->
    <InputText label="Texto" bind={inputText}/>

  </form>
</aside>
