// place files you want to import through the `$lib` alias in this folder.
export const ptToPx = (pt) => (pt * 1.3333333333333).toFixed(0);
export const pxToPt = (px) => (px / 1.3333333333333).toFixed(0);

export const makeTypeScale = (scale, baseSize) => {
	return [
		{
			type: "h1",
			size: baseSize * scale * 4,
		},
		{
			type: "h2",
			size: baseSize * scale * 3,
		},
		{
			type: "h3",
			size: baseSize * scale * 2,
		},
		{
			type: "h4",
			size: baseSize * scale * 1,
		},
		{
			type: "body",
			size: baseSize,
		},
		{
			type: "small",
			size: baseSize / scale,
		}
	];
}