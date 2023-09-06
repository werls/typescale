import { writable } from 'svelte/store';
import { TypeScale } from '$lib/typeScale';
// import { makeTypeScale } from '$lib';
// import { ptToPx } from '$lib';

export let baseSize = writable(24);
export let scale = writable(1.250);
export let levels = writable(4);
export let unit = writable('px');
export let typeScale = writable(TypeScale.generateTypeScale(baseSize, scale, levels));

// export let typeScale = writable(new TypeScale(baseSize_, scale_));
// export let baseSize = typeScale.baseSize;
// export let scale = typeScale.scale;
export let inputText = writable('Lorem ipsum dolor sit amet.');
// export let typeScale = writable(makeTypeScale(scale, baseSize));