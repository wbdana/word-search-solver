// import { IBoardSizeAction } from '../actions/boardSize';
// import { IBoardSizeState } from '../types/boardSize';
import { IBoardAction } from '../actions/board';
import { IBoardState } from '../types/board';
import {
    SET_X,
    SET_Y,
} from '../constants/boardSize';
import {

} from '../constants/letters';

const initialState: IBoardState = {
    size: {
        x: 1,
        y: 1,
    },
    letters: [],
};

export function boardReducer(
    state = initialState,  // TODO Make this
    action: IBoardAction, // TODO Make this
): IBoardState { // TODO Make this
    const { payload, type } = action;
    switch(type) {
        case SET_X:
            return {
                ...state,
                size: {
                    ...state.size,
                    x: Number(payload),
                },
            };
        case SET_Y:
            return {
                ...state,
                size: {
                    ...state.size,
                    y: Number(payload),
                },
            };
        default:
            return state;
    };
};

export default boardReducer;
