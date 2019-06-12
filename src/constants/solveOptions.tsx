import { ISolveOptionsState } from '../types/solveOptions';

export const SET_SOLVE_OPTION_FORWARD = 'SET_SOLVE_OPTION_FORWARD';
export type SET_SOLVE_OPTION_FORWARD = typeof SET_SOLVE_OPTION_FORWARD;

export const SET_SOLVE_OPTION_BACKWARD = 'SET_SOLVE_OPTION_BACKWARD';
export type SET_SOLVE_OPTION_BACKWARD = typeof SET_SOLVE_OPTION_BACKWARD;

export const SET_SOLVE_OPTION_UP = 'SET_SOLVE_OPTION_UP';
export type SET_SOLVE_OPTION_UP = typeof SET_SOLVE_OPTION_UP;

export const SET_SOLVE_OPTION_DOWN = 'SET_SOLVE_OPTION_DOWN';
export type SET_SOLVE_OPTION_DOWN = typeof SET_SOLVE_OPTION_DOWN;

export const SET_SOLVE_OPTION_DIAGONAL = 'SET_SOLVE_OPTION_DIAGONAL';
export type SET_SOLVE_OPTION_DIAGONAL = typeof SET_SOLVE_OPTION_DIAGONAL;

export const SET_SOLVE_OPTIONS = 'SET_SOLVE_OPTIONS';
export type SET_SOLVE_OPTIONS = typeof SET_SOLVE_OPTIONS;

export const initialState: ISolveOptionsState = {
    forward: true,
    backward: true,
    up: true,
    down: true,
    diagonal: true,
};
