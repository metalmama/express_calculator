import numberCruncher from "../../src/modules/calculation/numberCruncher.js"
import percentage from "../../src/modules/calculation/util/percentage.js"
import gcd from "../../src/modules/calculation/util/gcd.js"
import exp from "../../src/modules/calculation/util/exp.js"



describe("numberCruncher integration tests", () => {

	it('should return 50 when given 1 and 2', () => {

	const data = { numOne: 1, operator: "percentage", numTwo: 2 }
	expect (numberCruncher(data)).toBe(50)

	}) 

	it('should return 5 when given 1 and 2', () => {

        const data = { numOne: 15, operator: "gcd", numTwo: 10 }
        expect (numberCruncher(data)).toBe(5)

        })

	it('should return 8 when given 2 and 3', () => {

        const data = { numOne: 2, operator: "exponent", numTwo: 3 }
        expect (numberCruncher(data)).toBe(8)

        })


})

