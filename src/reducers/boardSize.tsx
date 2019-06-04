import { IBoardSizeAction } from '../actions/boardSize';
import { IBoardSizeState } from '../types/boardSize';
import {

} from '../constants/boardSize';

const initialState: IBoardSizeState = {
    x: 0,
    y: 0,
};

export function boardSizeReducer(
    state = initialState,
    action: IBoardSizeAction,
): IBoardSizeState {
    const { payload, type } = action;
    switch(type) {
        default:
            return state;
    };
};

export default boardSizeReducer;
