import { writable } from 'svelte/store';
import { makeTypeScale } from '$lib';
// import { ptToPx } from '$lib';

export let baseSize = writable(24);
export let scale = writable(1.250);
export let inputText = writable('Lorem ipsum dolor sit amet.');
export let typeScale = writable(makeTypeScale(scale, baseSize));