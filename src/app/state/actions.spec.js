// actions.spec.js
// test action creators
import * as ActionTypes from './action-types';
import * as actions from './actions';

describe("Counter Action Creators Tests", () => {
    it("test increment action", () => {
        expect(actions.increment(10)).toEqual({
            type: ActionTypes.INCREMENT,
            payload: {value: 10}
        })
    })
})