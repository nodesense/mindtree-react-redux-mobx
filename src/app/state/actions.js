// action creators
import * as ActionTypes from './action-types';
import { Action } from 'rxjs/scheduler/Action';

export const increment = (value) => (
    {
        type: ActionTypes.INCREMENT,
        payload:  {value} // value: value
    }
)

export const reset = () => (
    {
        type: ActionTypes.RESET
    }
)