import * as React from 'react';

export interface IProps {
    words: string[];
};

function ResultsList({ words }: IProps) {
    const formattedResults = words.map(word => (
        <li>{word}</li>
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
