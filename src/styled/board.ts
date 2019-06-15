import styled from 'styled-components';

interface IBoardProps {
    columns: string;
};

interface IBoardItemProps {

};

export const StyledBoardContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    /* max-width: 800px; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
`;

export const StyledBoard = styled.div<IBoardProps>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

export const StyledBoardItem = styled.div<IBoardItemProps>`
    width: 40px;
    border-style: solid;
    border-widtH; 3px;
    border-color: red;
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
