//jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
jest.useFakeTimers();

//async (ajax, setTimeout, setInterval)
// should use the callback function
describe("async test suite", () => {
    it("setTimeout test", (done) => {
        console.log("timeout", jasmine.DEFAULT_TIMEOUT_INTERVAL)

        setTimeout( () => {
            console.log("**Called later")
            expect(10+20).toBe(30)
            done()
            // fail after 2 secs
        }, 500);

        jest.runAllTimers(); 
    })
})
