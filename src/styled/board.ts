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
    val?: string;
    value?: string;
};

export const StyledBoardContainer = styled.div<IBoardSizeState>`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: ${props => props.x * 45}px;
`;

export const StyledBoard = styled.div<IBoardProps>`
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    position: relative;
`;

export const StyledBoardItem = styled.div<IBoardItemProps>`
    background-color: ${props => props.val === '' ? 'black' : 'white'};
    border-color: black;
    border-style: solid;
    border-width; 5px;
    height: 40px;
    position: relative;
    width: 40px;
`;

export const StyledBoardItemInput = styled.input<IBoardItemProps>`
    background-color: ${props => props.value === '' ? 'black' : 'white'};
    border: none;
    display: block;
    font-size: 25px;
    position: relative;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    &:focus {
        outline: ${props => props.value === '' ? '3px dashed white' : 'none'};
    };
`;
