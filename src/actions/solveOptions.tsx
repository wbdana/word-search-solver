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

export interface ISetSolveOptionUp {
    type: solveOptionsConstants.SET_SOLVE_OPTION_UP;
    payload: Boolean;
};

export interface ISetSolveOptionDown {
    type: solveOptionsConstants.SET_SOLVE_OPTION_DOWN;
    payload: Boolean;
};

export interface ISetSolveOptionDiagonal {
    type: solveOptionsConstants.SET_SOLVE_OPTION_DIAGONAL;
    payload: Boolean;
};

export interface ISetSolveOptions {
    type: solveOptionsConstants.SET_SOLVE_OPTIONS;
    payload: ISolveOptionsState;
};

export type ISolveOptionsAction =
    ISetSolveOptionForward |
    ISetSolveOptionBackward |
    ISetSolveOptionUp |
    ISetSolveOptionDown |
    ISetSolveOptionDiagonal
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

export function setSolveOptionUp(payload: Boolean): ISetSolveOptionUp {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_UP,
        payload,
    };
};

export function setSolveOptionDown(payload: Boolean): ISetSolveOptionDown {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_DOWN,
        payload,
    };
};

export function setSolveOptionDiagonal(payload: Boolean): ISetSolveOptionDiagonal {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTION_DIAGONAL,
        payload,
    };
};

export function setSolveOptions(payload: ISolveOptionsState): ISetSolveOptions {
    return {
        type: solveOptionsConstants.SET_SOLVE_OPTIONS,
        payload,
    };
};
