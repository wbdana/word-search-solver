import * as React from 'react';
import {
    StyledCheckbox,
} from '../styled/checkboxes';
import {
    StyledSolveOptions,
} from '../styled/solveOptions';

export interface IProps {
    forward: Boolean;
    backward: Boolean;
    up: Boolean;
    down: Boolean;
    diagonal: Boolean;
    setForward: (payload: Boolean) => void;
    setBackward: (payload: Boolean) => void;
    setUp: (payload: Boolean) => void;
    setDown: (payload: Boolean) => void;
    setDiagonal: (payload: Boolean) => void;
};

function SolveOptions({
    forward,
    backward,
    up,
    down,
    diagonal,
    setForward,
    setBackward,
    setUp,
    setDown,
    setDiagonal,
}: IProps) {

    const handleForwardChecked = () => {
        setForward(!forward);
    };

    const handleBackwardChecked = () => {
        setBackward(!backward);
    };

    const handleUpChecked = () => {
        setUp(!up);
    };

    const handleDownChecked = () => {
        setDown(!down);
    };

    const handleDiagonalChecked = () => {
        setDiagonal(!diagonal);
    };

    return (
        <StyledSolveOptions>
            <label>
                Forward
                <StyledCheckbox
                    type="checkbox"
                    id="forward"
                    name="forward"
                    // @ts-ignore
                    checked={forward}
                    onChange={handleForwardChecked}
                />
            </label>

            <label>
                Backward
                <StyledCheckbox
                    type="checkbox"
                    id="backward"
                    name="backward"
                    // @ts-ignore
                    checked={backward}
                    onChange={handleBackwardChecked}
                />
            </label>

            <label>
                Up
                <StyledCheckbox
                    type="checkbox"
                    id="backward"
                    name="backward"
                    // @ts-ignore
                    checked={up}
                    onChange={handleUpChecked}
                />
            </label>

            <label>
                Down
                <StyledCheckbox
                    type="checkbox"
                    id="backward"
                    name="backward"
                    // @ts-ignore
                    checked={down}
                    onChange={handleDownChecked}
                />
            </label>

            <label>
                Diagonal
                <StyledCheckbox
                    type="checkbox"
                    id="diagonal"
                    name="diagonal"
                    // @ts-ignore
                    checked={diagonal}
                    onChange={handleDiagonalChecked}
                />
            </label>
        </StyledSolveOptions>
    );
};

export default SolveOptions;
