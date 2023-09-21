<script>
	import { scale } from "../stores.js";
	export let options;
	export let handler;
	export let label;
	export let bind;
</script>

<div class="flex flex-col gap-1">
	<label class="text-sm" for="base-size">{label}</label>
	<div class="flex gap-2 items-center">
		<select
			class="bg-slate-300 h-8 bg-transparent"
			name="{label}"
			id="{label}"
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