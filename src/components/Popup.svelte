<script>
	export let message = '';
	function close() {
		document.getElementById('btnClose').parentElement.remove();
	}
</script>

<div class="bg-slate-200 max-w-3xl rounded-md px-5 py-4 m-2 absolute bottom-0 flex justify-between gap-3">
	<slot />
	<button id="btnClose" on:click={close} class=""><i class="material-icons hover:text-slate-400">close</i></button>
</div>