<script>
	import { scale } from "../stores.js";
	export let options;
	export let handler;
	export let label;
	export let bind;
	export let disabled = false;
</script>

<div class="flex flex-col gap-1">
	<label class="text-sm font-bold px-1" for="base-size">{label}</label>
	<div class="flex gap-2 items-center">
		<select
			class="h-10 bg-transparent border rounded-lg p-1 hover:border-slate-300"
			name={label}
			id={label}
			bind:value={$bind}
			on:change={handler}
			{disabled}
		>
			{#each options as option}
				<option value={option.value}
					>{option.value} — {option.name}</option
				>
			{/each}
		</select>
	</div>
</div>