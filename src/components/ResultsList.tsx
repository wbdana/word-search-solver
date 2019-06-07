import * as React from 'react';

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
        <div className="resultslist">
            <ul>
                {formattedResults}
            </ul>
        </div>
    );
};

export default ResultsList;
