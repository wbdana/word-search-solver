import * as React from 'react';
import { StyledResultsList } from '../styled/results';

export interface IProps {
    words: string[];
};

function ResultsList({ words }: IProps) {
    const formattedResults = words.map((word, index) => (
        <li
            key={index}
        >
            {word}
        </li>
    ));

    return (
        <StyledResultsList>
            {formattedResults}
        </StyledResultsList>
    );
};

export default ResultsList;
