import { IResultsAction } from '../actions/results';
import { IResultsState } from '../types/results';
import {
    initialState,
    SET_WORDS,
} from '../constants/results';

export function resultsReducer(
    state = initialState,
    action: IResultsAction,
): IResultsState {
    const { payload, type } = action;
    switch(type) {
        case SET_WORDS:
            return {
                ...state,
                words: payload,
            };
        default:
            return state;
    };
};

export default resultsReducer;
