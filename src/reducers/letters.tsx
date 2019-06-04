import { ILettersAction } from '../actions/letters';
import { ILetterState } from '../types/letters';
import {

} from '../constants/letters';

const initialState: ILetterState[] = [];

export function lettersReducer(
    state = initialState,
    action: ILettersAction,
): ILetterState[] {
    const { payload, type } = action;
    switch(type) {
        default:
            return state;
    };
};

export default lettersReducer;
