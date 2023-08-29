<script>
  export let clickHandler;
  export let description = "";
</script>

<button
  class="border-2 rounded-full text-2xl font-extralight text-slate-300 w-10 h-10 flex justify-center hover:bg-slate-200 hover:text-slate-900 transition-all"
  title={description}
  on:click={clickHandler}
>
  <slot />
</button>

<style>
</style>
