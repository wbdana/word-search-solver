import * as boardSizeConstants from '../constants/boardSize';
import { IBoardSizeState } from '../types/boardSize';

export interface ISetX {
    type: boardSizeConstants.SET_X;
    payload: number;
};

export interface ISetY {
    type: boardSizeConstants.SET_Y;
    payload: number;
};

export interface ISetBoardSize {
    type: boardSizeConstants.SET_BOARD_SIZE;
    payload: IBoardSizeState;
};

export type IBoardSizeAction =
    ISetX |
    ISetY |
    ISetBoardSize
;

export function setX(payload: number): ISetX {
    return {
        type: boardSizeConstants.SET_X,
        payload,
    };
};

export function setY(payload: number): ISetY {
    return {
        type: boardSizeConstants.SET_Y,
        payload,
    };
};

export function setBoardSize(payload: IBoardSizeState): ISetBoardSize {
    return {
        type: boardSizeConstants.SET_BOARD_SIZE,
        payload,
    };
};
