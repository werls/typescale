<script>
  export let handler;
  export let bind;
  export let label;
  export let disabled = false;
</script>

<div class="flex flex-col gap-1">
  <label class="text-sm" for="base-size">{label}</label>
  <div class="flex gap-2 items-center">
    <input
      class="bg-transparent flex-none h-8 w-12"
      name="base-size"
      type="number"
      bind:value={$bind}
      on:input={handler}
      {disabled}
    />
    <!-- <span class="text-sm align-bottom">{unit}</span> -->
  </div>
</div>