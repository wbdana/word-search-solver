import { ISolveOptionsAction } from '../actions/solveOptions';
import {
    initialState,
    SET_SOLVE_OPTION_FORWARD,
    SET_SOLVE_OPTION_BACKWARD,
    SET_SOLVE_OPTION_DIAGONAL,
    SET_SOLVE_OPTION_ZIGZAG,
} from '../constants/solveOptions';
import { ISolveOptionsState } from '../types/solveOptions';

export function solveOptionsReducer(
    state = initialState,
    action: ISolveOptionsAction,
): ISolveOptionsState {
    const { payload, type } = action;
    switch(type) {
        case SET_SOLVE_OPTION_FORWARD:
            return {
                ...state,
                forward: payload,
            };
        case SET_SOLVE_OPTION_BACKWARD:
            return {
                ...state,
                backward: payload,
            };
        case SET_SOLVE_OPTION_DIAGONAL:
            return {
                ...state,
                diagonal: payload,
            };
        case SET_SOLVE_OPTION_ZIGZAG:
            return {
                ...state,
                zigzag: payload,
            };
        default:
            return state;
    };
};

export default solveOptionsReducer;
