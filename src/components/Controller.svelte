<script>
  import { onMount } from "svelte";
  import { TypeScale } from "$lib/typeScale";
  // import { makeTypeScale } from '$lib';
  import {
    baseSize,
    inputText,
    scale,
		levels,
    typeScale
  } from "../stores.js";

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
  });
</script>

<aside>
  <form class="bg-slate-200 p-3 flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <label class="text-sm" for="base-size">Tamanho base</label>
      <div class="flex gap-2 items-center">
        <input
          class="p-1 bg-slate-300 w-20"
          name="base-size"
          type="number"
          bind:value={$baseSize}
          on:input={handleInput}
        />
        <span class="text-sm align-bottom">px</span>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-sm" for="base-size">Escala</label>
      <div class="flex gap-2 items-center">
        <select
          class="p-1 bg-slate-300"
          name="scale"
          id="scale"
          bind:value={$scale}
          on:change={handleInput}
        >
          {#each scales as scaleOption}
            <option value={scaleOption.value}
              >{scaleOption.value} — {scaleOption.name}</option
            >
          {/each}
        </select>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label for="input-text" class="text-sm">Texto</label>
      <div class="flex gap-2 items-center">
        <input type="text" class="p-1 bg-slate-300" bind:value={$inputText} />
      </div>
    </div>
  </form>
</aside>
