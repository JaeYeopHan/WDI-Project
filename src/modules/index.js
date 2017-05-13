import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';

const TEST = 'TEST';

export const test = createAction(TEST);

const initialState = Map({
    test: 'test'
});

export default handleActions({
    [TEST]: (state, action) => {
        console.log('TEST action!');
    }
}, initialState);
