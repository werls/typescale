export let baseSize = 12;
export let scale = 1;

export let typeScale = [
	{
		type: "h1",
		size: baseSize * scale * 5,
	},
	{
		type: "h2",
		size: baseSize * scale * 4,
	},
	{
		type: "h3",
		size: baseSize * scale * 3,
	},
	{
		type: "h4",
		size: baseSize * scale * 2,
	},
	{
		type: "body",
		size: baseSize * scale * 1,
	},
	{
		type: "small",
		size: (baseSize / scale) * 1,
	}
];