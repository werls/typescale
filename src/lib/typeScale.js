/**
 * Represents a type scale object that generates a typographic scale based on a base size and a scale factor.
 */
export class TypeScale {
	/**
	 * Creates a new TypeScale object.
	 * @param {number} baseSize_ - The base font size in pixels or points.
	 * @param {number} scale_ - The scale factor used to generate the font sizes.
	 * @param {number} levels_ - The number of heading levels to generate (default is 4).
	 * @param {string} unit_ - The unit of measurement for the base size (default is 'px').
	 */
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

	/**
	 * Generates a type scale object based on a base size and a scale factor.
	 * @param {number} baseSize_ - The base font size in pixels or points.
	 * @param {number} scale_ - The scale factor used to generate the font sizes.
	 * @param {number} levels_ - The number of heading levels to generate (default is 4).
	 * @param {string} unit_ - The unit of measurement for the base size (default is 'px').
	 * @returns {object} - The generated type scale object.
	 */
	static generateTypeScale(baseSize_, scale_, levels_ = 4) {
		let typeScale = ''
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
		return typeScale
	}

	/**
	 * Creates the heading levels for the type scale object.
	 * @param {number} levels - The number of heading levels to generate.
	 */
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

	/**
	 * Returns the type scale object.
	 * @returns {object} - The type scale object.
	 */
	getTypeScale() {
		return this.typeScale
	}

	/**
	 * Returns the heading levels of the type scale object.
	 * @returns {array} - The heading levels of the type scale object.
	 */
	getHeadings() {
		return this.typeScale.headings
	}

	/**
	 * Returns the body font size of the type scale object.
	 * @returns {object} - The body font size of the type scale object.
	 */
	getBody() {
		return this.typeScale.body
	}

	/**
	 * Updates the type scale object with new base size, scale factor and number of heading levels.
	 * @param {number} baseSize_ - The new base font size in pixels or points.
	 * @param {number} scale_ - The new scale factor used to generate the font sizes.
	 * @param {number} levels_ - The new number of heading levels to generate.
	 */
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