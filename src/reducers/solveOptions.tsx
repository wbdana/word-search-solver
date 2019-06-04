import { ISolveOptionsAction } from '../actions/solveOptions';
import { ISolveOptionsState } from '../types/solveOptions';
import {

} from '../constants/solveOptions';

const initialState: ISolveOptionsState = {
    forward: true,
    backward: true,
    diagonal: true,
    zigZag: true,
};

export function solveOptionsReducer(
    state = initialState,
    action: ISolveOptionsAction,
): ISolveOptionsState {
    const { payload, type } = action;
    switch(type) {
        default:
            return state;
    };
};

export default solveOptionsReducer;
