import numberCruncher from "./numberCruncher.js"

describe('numberCruncher unit tests', () => {

 it ('should return 9 when adding 2 and 7', () => {
	 const data = { numOne: 2, operator: "add", numTwo: 7 }
	 expect(numberCruncher(data)).toBe(9)

 })

})
