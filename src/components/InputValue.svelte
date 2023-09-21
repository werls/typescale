<script>
  export let handler;
  export let bind;
  export let label;
</script>

<div class="flex flex-col gap-1">
  <label class="text-sm" for="base-size">{label}</label>
  <div class="flex gap-2 items-center">
    <input
      class="bg-transparent flex-none h-8"
      name="base-size"
      type="number"
      bind:value={$bind}
      on:input={handler}
    />
    <span class="text-sm align-bottom">px</span>
  </div>
</div>