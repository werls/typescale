<script>
  import { onMount } from "svelte";

  const ptToPx = (pt) => (pt * 1.3333333333333).toFixed(0);
  const pxToPt = (px) => (px / 1.3333333333333).toFixed(0);

  let baseSize = pxToPt(16);
  // let scale = 1.2;
  let scale;
  let inputText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  function updateFontSize() {
    const headings = document.querySelectorAll(".text-scale");
    headings.forEach((heading, index) => {
      let size;
      if (heading.id === "body-base") {
        size = baseSize;
      } else if (heading.id === "body-min") {
        size = baseSize / scale;
      } else {
        size = (baseSize * Math.pow(scale, headings.length - index - 1))
          .toFixed(3)
          .replace(/\.?0+$/, "");
      }
      heading.style.fontSize = `${size}pt`;
      heading.style.transition = "font-size .3s";
      const hSize = document.querySelector(`#${heading.id}-size`);
      hSize.innerHTML = `${size} pt`;
    });
  }

  onMount(() => {
    let scale = document.querySelector("option[selected]");
    updateFontSize();
  });
</script>

<header class="bg-slate-300 p-3">
  <h1 class="text-xl font-medium">Escala Tipográfica</h1>
</header>

<!-- <aside class="fixed top-0 w-full"> -->
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



<div class="p-3 text-slate-400">
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Título 1</div>
    <div id="h1" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="h1-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Título 2</div>
    <div id="h2" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="h2-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Título 3</div>
    <div id="h3" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="h3-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Título 4</div>
    <div id="h4" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="h4-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Título 5</div>
    <div id="h5" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="h5-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Corpo base</div>
    <div id="body-base" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs col-span-1" id="body-size" />
  </div>
  <hr class="border-gray-300" />
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">Corpo mínimo</div>
    <div id="body-min" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      {inputText}
    </div>
    <div class="text-xs w-20" id="body-min-size" />
  </div>
  <hr class="border-gray-300" />
</div>

<style lang="postcss">
  /* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
