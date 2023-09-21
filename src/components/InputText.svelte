<script>
  export let bind;
  export let label;
</script>

<div class="flex flex-col gap-1">
  <label for="input-text" class="text-sm">{label}</label>
  <div class="flex gap-2 items-center">
    <input type="text" class="bg-transparent h-8" bind:value={$bind} />
  </div>
</div>