<script>
  export let bind;
  export let label;
  export let disabled = false;
</script>

<div class="flex flex-col gap-1">
  <label for="input-text" class="text-sm font-bold px-1">{label}</label>
  <div class="flex gap-2 items-center">
    <input
      type="text"
      class="h-10 bg-transparent border rounded-lg p-1 hover:border-slate-300"
      bind:value={$bind}
      {disabled}
    />
  </div>
</div>
