<script>
  export let handler;
  export let bind;
  export let label;
  export let disabled = false;
</script>

<div class="flex flex-col gap-1">
  <label class="text-sm font-bold px-1" for="base-size">{label}</label>
  <div class="flex gap-2 items-center">
    <input
    class="h-10 w-20 bg-transparent border rounded-lg p-1 hover:border-slate-300"
      name="base-size"
      type="number"
      bind:value={$bind}
      on:input={handler}
      {disabled}
    />
    <!-- <span class="text-sm align-bottom">{unit}</span> -->
  </div>
</div>