import styled from 'styled-components';

interface IBoardProps {
    columns: string;
};

interface IBoardItemProps {

};

export const StyledBoardContainer = styled.div`
    position: absolute;
    max-width: 800px;
    /* left: 50%; */
    /* transform: translateX(-50%); */
`;

export const StyledBoard = styled.div<IBoardProps>`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

export const StyledBoardItem = styled.div<IBoardItemProps>`

`;
