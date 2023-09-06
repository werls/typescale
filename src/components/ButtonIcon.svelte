<script>
	export let handler;
	export let text;
	export let icon;
</script>

<button class="text-sm bg-slate-200 flex gap-1 items-center border-2 border-slate-300 rounded-full px-1 py-1" on:click={handler}>{text} <i class=
	"material-icons">{icon}</i></button>