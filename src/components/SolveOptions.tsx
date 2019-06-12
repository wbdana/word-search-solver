import * as React from 'react';
import {
    StyledCheckbox,
} from '../styled/checkboxes';

export interface IProps {
    forward: Boolean;
    backward: Boolean;
    diagonal: Boolean;
    zigzag: Boolean;
    setForward: (payload: Boolean) => void;
    setBackward: (payload: Boolean) => void;
    setDiagonal: (payload: Boolean) => void;
    setZigzag: (payload: Boolean) => void;
};

function SolveOptions({
    forward,
    backward,
    diagonal,
    zigzag,
    setForward,
    setBackward,
    setDiagonal,
    setZigzag,
}: IProps) {

    const handleForwardChecked = () => {
        setForward(!forward);
    };

    const handleBackwardChecked = () => {
        setBackward(!backward);
    };

    const handleDiagonalChecked = () => {
        setDiagonal(!diagonal);
    };

    const handleZigzagChecked = () => {
        setZigzag(!zigzag);
    };

    return (
        <div>
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

            <label>
                ZigZag
                <StyledCheckbox
                    type="checkbox"
                    id="backward"
                    name="backward"
                    // @ts-ignore
                    checked={zigzag}
                    onChange={handleZigzagChecked}
                />
            </label>
        </div>
    );
};

export default SolveOptions;
