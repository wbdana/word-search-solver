import styled from 'styled-components';

interface IBoardProps {
    columns: string;
    // rows: string;
};

interface IBoardItemProps {

};

export const StyledBoard = styled.div<IBoardProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.columns});
`;

export const StyledBoardItem = styled.div<IBoardItemProps>`

`;
