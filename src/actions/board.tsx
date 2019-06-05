import * as boardConstants from '../constants/board';
import { IBoardState } from '../types/board';
import { ILetterState } from '../types/board';

export interface ISetX {
    type: boardConstants.SET_X;
    payload: number;
};

export interface ISetY {
    type: boardConstants.SET_Y;
    payload: number;
};

export interface ISetLetters {
    type: boardConstants.SET_LETTERS;
    payload: ILetterState[];
};

export type IBoardAction =
    ISetX |
    ISetY |
    ISetLetters
;

export function setX(payload: number): ISetX {
    return {
        type: boardConstants.SET_X,
        payload,
    };
};

export function setY(payload: number): ISetY {
    return {
        type: boardConstants.SET_Y,
        payload,
    };
};

export function setLetters(payload: ILetterState[]): ISetLetters {
    return {
        type: boardConstants.SET_LETTERS,
        payload,
    };
};
