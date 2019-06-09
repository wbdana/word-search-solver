import * as React from 'react';
import BoardItem from './BoardItem';
import {
    StyledBoardContainer,
    StyledBoard,
} from '../styled/board';
import {
    IBoardSizeState,
    ILetterState,
    ISetLetterPayload,
} from '../types/board';

export interface IProps {
    letters: ILetterState[];
    size: IBoardSizeState,
    setLetter: (payload: ISetLetterPayload) => void;
};

function Board({ letters, size, setLetter }: IProps) {
    const columns = size.x.toString();

    const boardItems = letters.map((letter, index) => (
        <BoardItem
            key={index}
            letter={letter}
            setLetter={setLetter}
        />
    ));

    return (
        <StyledBoardContainer>
            <StyledBoard
                columns={columns}
            >
                {boardItems}
            </StyledBoard>
        </StyledBoardContainer>
    );
};

export default Board;