import styled from 'styled-components';
import { IBoardSizeState } from '../types/board';

// interface IBoardContainerProps {
//     x: number;
//     y: number;
// };

interface IBoardProps {
    columns: string;
};

interface IBoardItemProps {

};

export const StyledBoardContainer = styled.div<IBoardSizeState>`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: ${props => props.x * 40}px;
`;

export const StyledBoard = styled.div<IBoardProps>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-column-gap: 0;
`;

export const StyledBoardItem = styled.div<IBoardItemProps>`
    width: 40px;
    border-style: solid;
    border-width; 5px;
    border-color: black;
    border-radius: 3px;
`;

export const StyledBoardItemInput = styled.input`
    width: 100%;
    border: none;
    font-size: 1rem;

    &:focus {
        outline: none;
    };
`;
