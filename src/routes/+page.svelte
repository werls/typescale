<script>
  import { onMount } from "svelte";
  import LineOfType from "../components/LineOfType.svelte";
  import AddButton from "../components/AddButton.svelte";

  const ptToPx = (pt) => (pt * 1.3333333333333).toFixed(0);
  const pxToPt = (px) => (px / 1.3333333333333).toFixed(0);

  let baseSize = pxToPt(18);
  let scale = 1.333;

  let typeScale = [
    {
      type: "h1",
      size: baseSize * scale * 5,
    },
    {
      type: "h2",
      size: baseSize * scale * 4,
    },
    {
      type: "h3",
      size: baseSize * scale * 3,
    },
    {
      type: "h4",
      size: baseSize * scale * 2,
    },
    {
      type: "body",
      size: baseSize * scale * 1,
    },
    {
      type: "small",
      size: (baseSize / scale) * 1,
    }
  ];

  let inputText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  function updateFontSize() {
    typeScale = [
      {
        type: "h1",
        size: baseSize * scale * 5,
      },
      {
        type: "h2",
        size: baseSize * scale * 4,
      },
      {
        type: "h3",
        size: baseSize * scale * 3,
      },
      {
        type: "h4",
        size: baseSize * scale * 2,
      },
      {
        type: "body",
        size: baseSize * scale * 1,
      },
      {
        type: "small",
        size: (baseSize / scale) * 1,
      }
    ];
  }

  onMount(() => {
    scale = document.querySelector("option[selected]");
    // updateFontSize();
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
          bind:value={baseSize}
          on:input={updateFontSize}
        />
        <span class="text-sm align-bottom">pt</span>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-sm" for="base-size">Escala</label>
      <div class="flex gap-2 items-center">
        <select
          class="p-1 bg-slate-300"
          name="scale"
          id="scale"
          bind:value={scale}
          on:change={updateFontSize}
        >
          <option value="1.067">1.067 — Segunda Menor</option>
          <option value="1.125">1.125 — Segunda Maior</option>
          <option value="1.2">1.200 — Terceira Menor</option>
          <option value="1.25" selected>1.250 — Terceira Maior</option>
          <option value="1.333">1.333 — Quarta Perfeita</option>
          <option value="1.414">1.414 — Quarta Aumentada</option>
          <option value="1.5">1.500 — Quinta Perfeita</option>
          <option value="1.618">1.618 — Razão Áurea</option>
        </select>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label for="input-text" class="text-sm">Texto</label>
      <div class="flex gap-2 items-center">
        <input type="text" class="p-1 bg-slate-300" bind:value={inputText} />
      </div>
    </div>
  </form>
</aside>

<main class="py-3 flex flex-col justify-center items-center">
  <!-- <AddButton /> -->
  {#each typeScale as item}
    <LineOfType {item}>{inputText}</LineOfType>
  {/each}
  <!-- <AddButton /> -->
</main>

<style lang="postcss">
  /* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
