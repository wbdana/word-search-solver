import * as React from 'react';

export interface IProps {
    value: string;
    onValueChange: (val: string) => void;
};

interface IState {

};

function Square({ value, onValueChange }: IProps) {
    const onChange = (val: string) => {
        onValueChange(val);
    };



    return (
        <div className="board board__square">
            <input type="text" className="board board__square-input" value={value} />
        </div>
    );
};

export default Square;
