import { IResultsState } from '../types/results';

export const SOLVE_BOARD = 'SOLVE_BOARD';
export type SOLVE_BOARD = typeof SOLVE_BOARD;

export const SET_WORDS = 'SET_WORDS';
export type SET_WORDS = typeof SET_WORDS;

export const initialState: IResultsState = {
    words: [],
};
