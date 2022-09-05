import numberCruncher from "./numberCruncher.js"
import percentage from ".util/percentage.js"

describe('numberCruncher unit tests', () => {

 it ('should return 9 when adding 2 and 7', () => {
	 const data = { numOne: 2, operator: "add", numTwo: 7 }
	 expect(numberCruncher(data)).toBe(9)

 })

describe("numberCruncher integration tests", () => {

 it ('it should return 50 when given 1 and 2', () =>
 	const data = { numOne: 1, operator: "percentage", numTwo:2 }
 	expect(numberCruncher(data)).toBe(50)

})
