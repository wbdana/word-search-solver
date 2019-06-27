import * as React from 'react';
import {
    StyledBoardItem,
    StyledBoardItemInput,
} from '../styled/board';
import { ILetterState, ISetLetterPayload } from '../types/board';

export interface IProps {
    letter: ILetterState;
    setLetter: (payload: ISetLetterPayload) => void;
};

function BoardItem({ letter, setLetter }: IProps) {
    const {
        id,
        val,
    } = letter;

    const handleChange = (event: any) => {
        const regex = /[a-zA-Z]/;
        event.preventDefault();
        const { target } = event;
        const { value } = target;
        const newValue = value[value.length - 1] || '';
        
        console.log(value);

        if (regex.test(newValue)) {
            setLetter({
                id,
                val: newValue,
            });

            // TODO Automatically 'tab' to next input
        }
    };

    return (
        <StyledBoardItem>
            <StyledBoardItemInput
                type="text"
                className="board board__item board__item-input"
                onChange={handleChange}
                value={val}
            />            
        </StyledBoardItem>
    );
};

export default BoardItem;
