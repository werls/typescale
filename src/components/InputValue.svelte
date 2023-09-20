<script>
  export let handler;
  export let bind;
</script>

<div class="flex flex-col gap-1">
  <label class="text-sm" for="base-size">Tamanho base</label>
  <div class="flex gap-2 items-center">
    <input
      class="p-1 bg-transparent flex-none"
      name="base-size"
      type="number"
      bind:value={$bind}
      on:input={handler}
    />
    <span class="text-sm align-bottom">px</span>
  </div>
</div>