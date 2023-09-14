export class TypeScale {
	constructor(baseSize_, scale_, levels_ = 4, unit_ = 'px') {
		this.baseSize = baseSize_
		this.scale = scale_
		this.levels = levels_
		this.unit = unit_
		this.typeScale = {
			headings: [],
			body: { type: "body", size: this.baseSize },
			small: [{ type: "small", size: this.baseSize / this.scale }]
		}

		this.createHeadings(this.levels)
	}

	static generateTypeScale(baseSize_, scale_, levels_ = 4, unit_ = 'px') {
		const ptToPx = (pt) => { return (pt * 1.3333333333333) }
		const pxToPt = (px) => { return (px / 1.3333333333333) }

		let typeScale = ''
		if (unit_ === 'px') {
			typeScale = {
				headings: [],
				body: { type: "body", size: baseSize_ },
				small: [{ type: "small", size: baseSize_ / scale_ }]
			}

			for (let i = 1; i <= levels_; i++) {
				typeScale.headings.push({
					type: `h${i}`,
					size: (baseSize_ * scale_ ** (levels_ - i + 1)).toFixed(2),
				})
			}
		} else if (unit_ === 'pt') {
			typeScale = {
				headings: [],
				body: { type: "body", size: ptToPx(baseSize_) },
				small: [{ type: "small", size: ptToPx(baseSize_ / scale_) }]
			}

			for (let i = 1; i <= levels_; i++) {
				typeScale.headings.push({
					type: `h${i}`,
					size: (ptToPx(baseSize_) * scale_ ** (levels_ - i + 1)).toFixed(2),
				})
			}
		}

		return typeScale
	}

	createHeadings(levels) {
		for (let i = 1; i <= levels; i++) {
			this.typeScale.headings.push({
				type: `h${i}`,
				size: this.baseSize * this.scale ** (levels - i + 1),
			})
		}

		// Sort headings array from h1 to h6
		this.typeScale.headings.sort((a, b) => {
			if (a.type < b.type) return -1;
			if (a.type > b.type) return 1;
			return 0;
		});
	}

	getTypeScale() {
		return this.typeScale
	}

	getHeadings() {
		return this.typeScale.headings
	}

	getBody() {
		return this.typeScale.body
	}

	updateTypeScale(baseSize_, scale_, levels_) {
		this.baseSize = baseSize_
		this.scale = scale_
		this.levels = levels_
		this.typeScale = {
			headings: [],
			body: [{ type: "body", size: this.baseSize }],
			small: [{ type: "small", size: this.baseSize / this.scale }]
		}

		this.createHeadings(this.levels)
	}
}