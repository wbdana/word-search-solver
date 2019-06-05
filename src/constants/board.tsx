import { IBoardState } from '../types/board';

export const SET_X = 'SET_X';
export type SET_X = typeof SET_X;

export const SET_Y = 'SET_Y';
export type SET_Y = typeof SET_Y;

export const SET_LETTERS = 'SET_LETTERS';
export type SET_LETTERS = typeof SET_LETTERS;

export const initialState: IBoardState = {
    size: {
        x: 1,
        y: 1,
    },
    letters: [
        {
            id: 0,
            val: '',
            north: null,
            northeast: null,
            east: null,
            southeast: null,
            south: null,
            southwest: null,
            west: null,
            northwest: null,
        },
    ],
};
