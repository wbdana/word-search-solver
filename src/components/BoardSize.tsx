import * as React from 'react';

export interface IProps {
    x: number;
    y: number;
    setX: (event: any) => void;
    setY: (event: any) => void;
};

function BoardSize({ x, y, setX, setY }: IProps) {
    const handleChange = (event: any) => {
        const regex = /[1-9]+/;
        event.preventDefault();
        const { target } = event;
        const { name, value } = target;

        if (regex.test(value) || value === "") {
            if (name === 'x') {
                setX(value);
            }
    
            if (name === 'y') {
                setY(value);
            }
        }
    }

    return (
        <div className="boardsize">
            <p>
                Board Size:
                <input
                    type="text"
                    className="boardsize boardsize__input"
                    name="x"
                    value={x}
                    onChange={handleChange}
                />
                x
                <input
                    type="text"
                    className="boardsize boardsize__input"
                    name="y"
                    value={y}
                    onChange={handleChange}
                />
            </p>
        </div>
    );
};

export default BoardSize;
