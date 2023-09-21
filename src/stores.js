import { writable } from 'svelte/store';
import { TypeScale } from '$lib/typeScale';
// import all from '$lib/fonts.json';
// import { load } from '$lib/fonts';
// import fontsData from '$lib/fonts.json';

// import { loadFonts } from '$lib/loadFonts';
export let baseSize = writable(24);
export let scale = writable(1.250);
export let levels = writable(4);
export let unit = writable('pt');
export let typeScale = writable(TypeScale.generateTypeScale(baseSize, scale, levels));
export let inputText = writable('Lorem ipsum dolor sit amet.');
export let font = writable('Nunito');

// export const fonts = writable([fontsData])

// export async function load() {
// 	const response = await fetch('$lib/fonts.json')
// 	const data = await response.json();
// 	console.log(data)
// 	// return data
// 	fonts.set(data.props.data.items)
// }

// load()

// fonts.set(fontsData())


// loadFonts().then((data) => {
//   fonts.set(data);
// })