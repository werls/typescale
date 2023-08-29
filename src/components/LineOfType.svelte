<script>
	export let item;
</script>

<div class="p-3 text-slate-400 w-full">
  <div class="grid grid-cols-12 items-baseline gap-2">
    <div class="text-xs col-span-1">{item.type}</div>
    <div style="font-size:{item.size}px" class="text-scale text-gray-900 line-clamp-1 col-span-10">
      <slot />
    </div>
    <div class="text-xs col-span-1">{item.size} px</div>
  </div>
  <hr class="border-gray-300" />
</div>