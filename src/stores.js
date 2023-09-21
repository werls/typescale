import { writable } from 'svelte/store';
import { TypeScale } from '$lib/typeScale';
import { loadFonts } from '$lib/loadFonts';
export let baseSize = writable(24);
export let scale = writable(1.250);
export let levels = writable(4);
export let unit = writable('pt');
export let typeScale = writable(TypeScale.generateTypeScale(baseSize, scale, levels));
export let inputText = writable('Lorem ipsum dolor sit amet.');
export let font = writable('Roboto');

export const fonts = writable([])
loadFonts().then((data) => {
  fonts.set(data);
})