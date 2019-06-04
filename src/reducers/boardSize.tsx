import { IBoardSizeAction } from '../actions/boardSize';
import { IBoardSizeState } from '../types/boardSize';
import {
    SET_X,
    SET_Y,
} from '../constants/boardSize';

const initialState: IBoardSizeState = {
    x: 1,
    y: 1,
};

export function boardSizeReducer(
    state = initialState,
    action: IBoardSizeAction,
): IBoardSizeState {
    const { payload, type } = action;
    switch(type) {
        case SET_X:
            return {
                ...state,
                x: Number(payload),     // TODO Should Number() be handled elsewhere?
            };
        case SET_Y:
            return {
                ...state,
                y: Number(payload),     // TODO Here too
            };
        default:
            return state;
    };
};

export default boardSizeReducer;
