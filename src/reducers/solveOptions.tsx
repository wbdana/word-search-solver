import { ISolveOptionsAction } from '../actions/solveOptions';
import {
    initialState,
    SET_SOLVE_OPTION_FORWARD,
    SET_SOLVE_OPTION_BACKWARD,
    SET_SOLVE_OPTION_UP,
    SET_SOLVE_OPTION_DOWN,
    SET_SOLVE_OPTION_DIAGONAL,
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
        case SET_SOLVE_OPTION_UP:
            return {
                ...state,
                up: payload,
            };
        case SET_SOLVE_OPTION_DOWN:
            return {
                ...state,
                down: payload,
            };
        case SET_SOLVE_OPTION_DIAGONAL:
            return {
                ...state,
                diagonal: payload,
            };
        default:
            return state;
    };
};

export default solveOptionsReducer;
