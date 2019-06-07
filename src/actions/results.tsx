import * as resultsConstants from '../constants/results';
import { IResultsState } from '../types/results';
import { WordSearch } from '../helpers/results';

export interface ISolveBoard {
    type: resultsConstants.SOLVE_BOARD;
};

export interface ISetWords {
    type: resultsConstants.SET_WORDS;
    payload: string[];
};

export type IResultsAction = ISetWords;

export function solveBoard() {
    return (dispatch: any, getState: any) => {
        const { boardState } = getState();
        const { letters } = boardState;
        const results = new WordSearch(letters).results;
        dispatch(setWords(results));
    }
};

export function setWords(payload: string[]): ISetWords {
    return {
        type: resultsConstants.SET_WORDS,
        payload,
    };
};
