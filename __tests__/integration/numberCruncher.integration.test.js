import numberCruncher from "./numberCruncher.js"
import percentage from "./util/percentage.js"

describe("numberCruncher integration tests", () => {

	it('should return 50 when given 1 and 2', () => {

	const data = { numOne: 1, operator: "percentage", numTwo: 2 }
	expect (numberCruncher(data)).toBe(50)

	})
})

