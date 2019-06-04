// TODO Move these imports in here?

import { IBoardSizeState } from './boardSize';
import { ILetterState } from './letters';

export interface IBoardState {
    letters: ILetterState[];
    size: IBoardSizeState;
};
