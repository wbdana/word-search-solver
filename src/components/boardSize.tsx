import * as React from 'react';

export interface IProps {
    x: number;
    y: number;
    onXChange: (event: any) => void;
    onYChange: (event: any) => void;
};

function BoardSize({ x, y, onXChange, onYChange }: IProps) {

    const handleXChange = (event: any) => {
        onXChange(event.target.value);
    };

    const handleYChange = (event: any) => {
        onYChange(event.target.value);
    };

    return (
        <div className="boardsize">
            <p>
                Board Size:
                <input
                    type="text"
                    className="boardsize boardsize__input"
                    name="x"
                    value={x}
                    onChange={handleXChange}
                />
                <input
                    type="text"
                    className="boardsize boardsize__input"
                    name="y"
                    value={y}
                    onChange={handleYChange}
                />
            </p>
        </div>
    );
};

export default BoardSize;
