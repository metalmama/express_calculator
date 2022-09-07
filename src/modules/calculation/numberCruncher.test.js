import numberCruncher from "../../src/modules/calculation/numberCruncher.js"

describe('numberCruncher unit tests', () => {

  it('should return 9 when adding 2 and 7', () => {
    const data = { numOne: 2, operator: "add", numTwo: 7 }
    expect(numberCruncher(data)).toBe(9)
  })

  it('should return -3 when adding -2 and -1', () => {
    const data = { numOne: -2, operator: "add", numTwo: -1 }
    expect(numberCruncher(data)).toBe(-3)
  })

  it('should return hejdå when adding hej and då', () => {
    const data = { numOne: "hej", operator: "add", numTwo: "då" }
    expect(numberCruncher(data)).toBe(NaN)
  })

  it('should return 5 when subtracting 7 and 2', () => {
    const data = { numOne: 7, operator: "subtract", numTwo: 2 }
    expect(numberCruncher(data)).toBe(5)
  })

  it('should return 5.5 when subtracting 7 and 1.5', () => {
    const data = { numOne: 7, operator: "subtract", numTwo: 1.5 }
    expect(numberCruncher(data)).toBe(6)
  })

  it('should return Null when operator is not valid', () => {
    const data = { numOne: 1, operator: "notexistingop", numTwo: 2 }
    expect(numberCruncher(data)).toBe(null)
  })


  it('should return 8 when multiplying 4 and 2', () => {
    const data = { numOne: 4, operator: "multiply", numTwo: 2 }
    expect(numberCruncher(data)).toBe(8)
  })

  it('should return 5 when dividing 15 and 3', () => {
    const data = { numOne: 15, operator: "divide", numTwo: 3 }
    expect(numberCruncher(data)).toBe(5)
  })

})
