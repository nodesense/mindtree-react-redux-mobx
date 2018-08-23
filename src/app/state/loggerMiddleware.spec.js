import loggerMiddleware from "./loggerMiddleware";
import * as actions from "./actions";

describe ("testing logger middleware ", () => {
    it("test action forward", () => {
        const mockStore = {}
        const fwdFunc = loggerMiddleware(mockStore);
        // create mock function
        const mockCallback = jest.fn();

        const actionFunc = fwdFunc(mockCallback);

        actionFunc(actions.increment(1))

        expect(mockCallback).toBeCalled();
        expect(mockCallback).toHaveBeenCalledTimes(1)

        expect(mockCallback)
            .toHaveBeenCalledWith(actions.increment(1))

    })
})