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
    // letters: createLetters(initialSize.x, initialSize.y),
    // Debugging
    letters: [
        {
          id: 1,
          val: 't',
          north: null,
          northeast: null,
          east: 2,
          southeast: 7,
          south: 6,
          southwest: null,
          west: null,
          northwest: null
        },
        {
          id: 2,
          val: 'i',
          north: null,
          northeast: null,
          east: 3,
          southeast: 8,
          south: 7,
          southwest: 6,
          west: 1,
          northwest: null
        },
        {
          id: 3,
          val: 'r',
          north: null,
          northeast: null,
          east: 4,
          southeast: 9,
          south: 8,
          southwest: 7,
          west: 2,
          northwest: null
        },
        {
          id: 4,
          val: 'a',
          north: null,
          northeast: null,
          east: 5,
          southeast: 10,
          south: 9,
          southwest: 8,
          west: 3,
          northwest: null
        },
        {
          id: 5,
          val: 'd',
          north: null,
          northeast: null,
          east: null,
          southeast: null,
          south: 10,
          southwest: 9,
          west: 4,
          northwest: null
        },
        {
          id: 6,
          val: 'a',
          north: 1,
          northeast: 2,
          east: 7,
          southeast: 12,
          south: 11,
          southwest: null,
          west: null,
          northwest: null
        },
        {
          id: 7,
          val: 'm',
          north: 2,
          northeast: 3,
          east: 8,
          southeast: 13,
          south: 12,
          southwest: 11,
          west: 6,
          northwest: 1
        },
        {
          id: 8,
          val: 'p',
          north: 3,
          northeast: 4,
          east: 9,
          southeast: 14,
          south: 13,
          southwest: 12,
          west: 7,
          northwest: 2
        },
        {
          id: 9,
          val: 'h',
          north: 4,
          northeast: 5,
          east: 10,
          southeast: 15,
          south: 14,
          southwest: 13,
          west: 8,
          northwest: 3
        },
        {
          id: 10,
          val: 'e',
          north: 5,
          northeast: null,
          east: null,
          southeast: null,
          south: 15,
          southwest: 14,
          west: 9,
          northwest: 4
        },
        {
          id: 11,
          val: 'o',
          north: 6,
          northeast: 7,
          east: 12,
          southeast: 17,
          south: 16,
          southwest: null,
          west: null,
          northwest: null
        },
        {
          id: 12,
          val: 'i',
          north: 7,
          northeast: 8,
          east: 13,
          southeast: 18,
          south: 17,
          southwest: 16,
          west: 11,
          northwest: 6
        },
        {
          id: 13,
          val: 'b',
          north: 8,
          northeast: 9,
          east: 14,
          southeast: 19,
          south: 18,
          southwest: 17,
          west: 12,
          northwest: 7
        },
        {
          id: 14,
          val: 'i',
          north: 9,
          northeast: 10,
          east: 15,
          southeast: 20,
          south: 19,
          southwest: 18,
          west: 13,
          northwest: 8
        },
        {
          id: 15,
          val: 'd',
          north: 10,
          northeast: null,
          east: null,
          southeast: null,
          south: 20,
          southwest: 19,
          west: 14,
          northwest: 9
        },
        {
          id: 16,
          val: 's',
          north: 11,
          northeast: 12,
          east: 17,
          southeast: 22,
          south: 21,
          southwest: null,
          west: null,
          northwest: null
        },
        {
          id: 17,
          val: 'u',
          north: 12,
          northeast: 13,
          east: 18,
          southeast: 23,
          south: 22,
          southwest: 21,
          west: 16,
          northwest: 11
        },
        {
          id: 18,
          val: 'n',
          north: 13,
          northeast: 14,
          east: 19,
          southeast: 24,
          south: 23,
          southwest: 22,
          west: 17,
          northwest: 12
        },
        {
          id: 19,
          val: 'k',
          north: 14,
          northeast: 15,
          east: 20,
          southeast: 25,
          south: 24,
          southwest: 23,
          west: 18,
          northwest: 13
        },
        {
          id: 20,
          val: 'i',
          north: 15,
          northeast: null,
          east: null,
          southeast: null,
          south: 25,
          southwest: 24,
          west: 19,
          northwest: 14
        },
        {
          id: 21,
          val: 'd',
          north: 16,
          northeast: 17,
          east: 22,
          southeast: null,
          south: null,
          southwest: null,
          west: null,
          northwest: null
        },
        {
          id: 22,
          val: 'e',
          north: 17,
          northeast: 18,
          east: 23,
          southeast: null,
          south: null,
          southwest: null,
          west: 21,
          northwest: 16
        },
        {
          id: 23,
          val: 's',
          north: 18,
          northeast: 19,
          east: 24,
          southeast: null,
          south: null,
          southwest: null,
          west: 22,
          northwest: 17
        },
        {
          id: 24,
          val: 's',
          north: 19,
          northeast: 20,
          east: 25,
          southeast: null,
          south: null,
          southwest: null,
          west: 23,
          northwest: 18
        },
        {
          id: 25,
          val: 'x',
          north: 20,
          northeast: null,
          east: null,
          southeast: null,
          south: null,
          southwest: null,
          west: 24,
          northwest: 19
        }
      ]
};
