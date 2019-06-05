import { IBoardAction } from '../actions/board';
import { IBoardState } from '../types/board';
import {
    initialState,
    SET_X,
    SET_Y,
    SET_LETTER,
} from '../constants/board';
import {
    createLetters,
    updateLetter,
} from '../helpers/board';

export function boardReducer(
    state = initialState,
    // action: IBoardAction,
    action: any,
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
        case SET_LETTER:
            console.log(payload);
            // return state;
            return {
                ...state,
                letters: updateLetter(
                    payload.id,
                    payload.val,
                    state.letters
                ),
            };
        default:
            return state;
    };
};

export default boardReducer;
