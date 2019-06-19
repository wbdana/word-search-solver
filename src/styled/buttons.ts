import styled from 'styled-components';

export const StyledSolveButton = styled.button`
    background-color: black;
    border: none;
    color: lightgrey;
    font-size: 20px;
    left: 50%;
    margin-top: 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate(-50%, 0);
    transition: all .2s ease;

    &:hover {
        background-color: lightgrey;
        border: 1px solid black;
        color: black;
        transform: translate(-50%, -3px);
    };
`;
