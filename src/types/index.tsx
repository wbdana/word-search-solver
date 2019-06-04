import { IBoardSizeState } from './boardSize';
import { ILetterState } from './letters';
import { ISolveOptionsState } from './solveOptions';

export interface IStoreState {
    boardSize: IBoardSizeState;
    letters: ILetterState[];
    solveOptions: ISolveOptionsState;
};
