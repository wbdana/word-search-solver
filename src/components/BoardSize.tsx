import * as React from 'react';

export interface IProps {
    x: number;
    y: number;
    setX: (event: any) => void;
    setY: (event: any) => void;
};

function BoardSize({ x, y, setX, setY }: IProps) {

    // TODO Types for these callbacks
    const handleXChange = (event: any) => {
        setX(event.target.value);
    };

    const handleYChange = (event: any) => {
        setY(event.target.value);
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
