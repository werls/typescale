<script>
	export let text = "Lorem ipsum dolor sit amet.";
	// export let name;
	// export let size;
	export let item;
</script>

<div class="p-3 text-slate-400 w-full">
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">{item.type}</div>
    <div id="h1" style="font-size:{item.size}px" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      <slot />
    </div>
    <div class="text-xs col-span-1" id="h1-size">{item.size}</div>
  </div>
  <hr class="border-gray-300" />
</div>