
function add(a, b) {
    return a + b;
}

//test suite, collection of test cases
// BDD/TDD
describe("math test suite", () => {
    //test case
    it("should add two 0s", () => {
        //assertion/BDD, expectation
        // jasmine library
        //expect(actual).toBe(expected)
        expect(add(0, 0)).toBe(0)
    })

    it("should add two negatives", () => {
        expect(add(-1,-2)).toBe(-3)
    })
})