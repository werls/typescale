import { loadFonts } from '$lib/loadFonts';
import { writable } from 'svelte/store';

// export let fonts = writable([])

// export const fonts = writable([])
// loadFonts().then((data) => {
//   fonts.set(data);
// })

export async function load({ page }) {
	let data = await loadFonts()
	data = data.props.data.items
	return {
		data
	}
}