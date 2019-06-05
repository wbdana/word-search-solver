import { IBoardAction } from '../actions/board';
import { IBoardState } from '../types/board';
import {
    initialState,
    SET_X,
    SET_Y,
} from '../constants/board';
import { createLetters } from '../helpers/board';

export function boardReducer(
    state = initialState,
    action: IBoardAction,
): IBoardState {
    const { payload, type } = action;
    switch(type) {
        case SET_X:
            return {
                letters: createLetters(Number(payload), state.size.y),
                size: {
                    ...state.size,
                    x: Number(payload),
                },
            };
        case SET_Y:
            return {
                letters: createLetters(state.size.x, Number(payload)),
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
