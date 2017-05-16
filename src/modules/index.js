import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

//ActionTypes
const TEST = 'TEST';

//Action Creator
export const test = createAction(TEST);

//Define initial state
const initialState = Map({
    test: 'test'
});

//Define actions
export default handleActions({
    [TEST]: (state, action) => {
        console.log(`state: ${state}, action: ${action}`);
    }
}, initialState);
