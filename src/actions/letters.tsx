import * as lettersConstants from '../constants/letters';
import { ILetterState } from '../types/letters';

export interface ISetLetters {
    type: lettersConstants.SET_LETTERS;
    payload: ILetterState[];
};

export type ILettersAction =
    ISetLetters
;

export function setLetters(payload: ILetterState[]): ISetLetters {
    return {
        type: lettersConstants.SET_LETTERS,
        payload,
    };
};
