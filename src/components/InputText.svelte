<script>
  export let bind;
</script>

<div class="flex flex-col gap-1">
  <label for="input-text" class="text-sm">Texto</label>
  <div class="flex gap-2 items-center">
    <input type="text" class="p-1 bg-slate-300" bind:value={$bind} />
  </div>
</div>