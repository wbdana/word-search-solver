import * as React from 'react';
import { StyledBoardItem } from '../styled/board';
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
        setLetter({
            id,
            val: event.target.value,
        })
    };

    return (
        <StyledBoardItem>
            {/* TODO Input should be a styled component */}
            <input
                type="text"
                className="board board__item board__item-input"
                onChange={handleChange}
                value={val}
            />            
        </StyledBoardItem>
    );
};

export default BoardItem;
