//counterReducer.spec.js
import * as actions from './actions';

import counterReducer from './counterReducer';

describe("counter reducer tests", () => {
    it("default test", () => {
        expect(counterReducer(undefined, {type: 'TEST'}))
                .toBe(0)
    })

    it("test increment", () => {
        expect(counterReducer(10, actions.increment(1)))
                .toBe(11)
    })
})