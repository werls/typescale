<script>
	import { scale } from "../stores.js";
	export let options;
	export let handler;
	export let title;
	export let bind;
</script>

<div class="flex flex-col gap-1">
	<label class="text-sm" for="base-size">{title}</label>
	<div class="flex gap-2 items-center">
		<select
			class="p-1 bg-slate-300"
			name="{title}"
			id="{title}"
			bind:value={$bind}
			on:change={handler}
		>
			{#each options as option}
				<option value={option.value}
					>{option.value} — {option.name}</option
				>
			{/each}
		</select>
	</div>
</div>