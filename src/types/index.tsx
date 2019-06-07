import { IBoardState } from './board';
// import { IBoardSizeState } from './boardSize';
// import { ILetterState } from './letters';
import { IResultsState } from './results';
import { ISolveOptionsState } from './solveOptions';

export interface IStoreState {
    board: IBoardState;
    // boardSize: IBoardSizeState;
    // letters: ILetterState[];
    results: IResultsState;
    solveOptions: ISolveOptionsState;
};
