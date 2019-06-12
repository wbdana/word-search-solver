import * as solveOptionsConstants from '../constants/solveOptions';
import { ISolveOptionsState } from '../types/solveOptions';

export interface ISetSolveOptionForward {
    type: solveOptionsConstants.SET_SOLVE_OPTION_FORWARD;
    payload: Boolean;
};

export interface ISetSolveOptionBackward {
    type: solveOptionsConstants.SET_SOLVE_OPTION_BACKWARD;
    payload: Boolean;
};

export interface ISetSolveOptionDiagonal {
    type: solveOptionsConstants.SET_SOLVE_OPTION_DIAGONAL;
    payload: Boolean;
};

export interface ISetSolveOptionZigzag {
    type: solveOptionsConstants.SET_SOLVE_OPTION_ZIGZAG;
    payload: Boolean;
};
export interface ISetSolveOptions {
    type: solveOptionsConstants.SET_SOLVE_OPTIONS;
    payload: ISolveOptionsState;
};

export type ISolveOptionsAction =
    ISetSolveOptionForward |
    ISetSolveOptionBackward |
    ISetSolveOptionDiagonal |
    ISetSolveOptionZigzag
;

export function setSolveOptionForward(payload: Boolean): ISetSolveOptionForward {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_FORWARD,
        payload,
    };
};

export function setSolveOptionBackward(payload: Boolean): ISetSolveOptionBackward {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_BACKWARD,
        payload,
    };
};

export function setSolveOptionDiagonal(payload: Boolean): ISetSolveOptionDiagonal {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_DIAGONAL,
        payload,
    };
};

export function setSolveOptionZigzag(payload: Boolean): ISetSolveOptionZigzag {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_ZIGZAG,
        payload,
    };
};

export function setSolveOptions(payload: ISolveOptionsState): ISetSolveOptions {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTIONS,
        payload,
    };
};
