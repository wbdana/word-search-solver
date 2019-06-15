import { IBoardState, IBoardSizeState } from '../types/board';
import { createLetters } from '../helpers/board';

export const SET_X = 'SET_X';
export type SET_X = typeof SET_X;

export const SET_Y = 'SET_Y';
export type SET_Y = typeof SET_Y;

export const SET_LETTER = 'SET_LETTER';
export type SET_LETTER = typeof SET_LETTER;

const initialSize: IBoardSizeState = {
    x: 5,
    y: 5,
};

export const initialState: IBoardState = {
    size: {
        x: initialSize.x,
        y: initialSize.y,
    },
    letters: createLetters(initialSize.x, initialSize.y),
};
