import * as React from 'react';
import {
    StyledSolveButton,
} from '../styled/buttons';

export interface IProps {
    solveBoard: () => void;
};

function SolveButton({ solveBoard }: IProps) {
    return (
        <StyledSolveButton
            onClick={solveBoard}
        >
            Solve Board!
        </StyledSolveButton>
    );
};

export default SolveButton;
