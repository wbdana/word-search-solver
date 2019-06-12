import { ISolveOptionsState } from '../types/solveOptions';

export const SET_SOLVE_OPTION_FORWARD = 'SET_SOLVE_OPTION_FORWARD';
export type SET_SOLVE_OPTION_FORWARD = typeof SET_SOLVE_OPTION_FORWARD;

export const SET_SOLVE_OPTION_BACKWARD = 'SET_SOLVE_OPTION_BACKWARD';
export type SET_SOLVE_OPTION_BACKWARD = typeof SET_SOLVE_OPTION_BACKWARD;

export const SET_SOLVE_OPTION_DIAGONAL = 'SET_SOLVE_OPTION_DIAGONAL';
export type SET_SOLVE_OPTION_DIAGONAL = typeof SET_SOLVE_OPTION_DIAGONAL;

export const SET_SOLVE_OPTION_ZIGZAG = 'SET_SOLVE_OPTION_ZIGZAG';
export type SET_SOLVE_OPTION_ZIGZAG = typeof SET_SOLVE_OPTION_ZIGZAG;

export const SET_SOLVE_OPTIONS = 'SET_SOLVE_OPTIONS';
export type SET_SOLVE_OPTIONS = typeof SET_SOLVE_OPTIONS;

export const initialState: ISolveOptionsState = {
    forward: true,
    backward: true,
    diagonal: true,
    zigzag: true,
};
