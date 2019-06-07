import {
    ILetterState,
    idOrNull,
} from '../types/board';
// import DICTIONARY from './dictionary/dictionary.json';
const DICTIONARY = require('./dictionary/dictionary');
const PREFIXES = require('./dictionary/prefixes');

// export const boggle = (letters: ILetterState[]) => {
//     let results: string[] = [];

//     letters.forEach(letter => {
//         let currentString: string = '';
//         let visitedIds: number[] = [];
//         traverseBoard(
//             letter,
//             currentString,
//             visitedIds,
//             results,
//         );
//     });

//     return results;
// };

// const traverseBoard = (currentLetter: ILetterState, currentString: string, visitedIds: number[], results: string[]) {
//     currentString += currentLetter.val;
//     visitedIds.push(currentLetter.id);

//     if (!isPrefix(currentString)) {
//         return;
//     }

//     if (isWord(currentString) && !results.includes(currentString)) {
//         results.push()
//     }
// };

const isWord = (word: string): Boolean => {
    return !!DICTIONARY[word];
};

const isPrefix = (word: string): Boolean => {
    return !!PREFIXES[word];
};

export class WordSearch {
    letters: ILetterState[];
    results: string[];

    constructor(letters: ILetterState[]) {
        this.letters = letters;
        this.results = [];
        this.boggle(letters);
        // return this.results;
    };


    boggle(letters: ILetterState[]) {
        letters.forEach(letter => {
            let currentString: string = '';
            let visitedIds: number[] = [];
            this.traverseBoard(
                letter,
                currentString,
                visitedIds,
            );
        });
    
        return this.results;
    };

    traverseBoard(currentLetter: ILetterState, currentString: string, visitedIds: number[]) {
        currentString += currentLetter.val;
        visitedIds.push(currentLetter.id);
    
        if (!isPrefix(currentString)) {
            return;
        }
        
        if (isWord(currentString) && !this.results.includes(currentString)) {
            this.results.push(currentString);
        }

        Object.keys(currentLetter).forEach(key => {
            if (key === "id" || key === "val") {
                return;
            }

            let nextSquareId: any = currentLetter[key];

            if (nextSquareId === null) {
                return;
            }

            if (visitedIds.includes(nextSquareId)) {
                return;
            }

            let nextSquare: ILetterState = this.getSquareById(nextSquareId);

            this.traverseBoard(
                nextSquare,
                currentString,
                visitedIds,
            );
        });
    };

    getSquareById(id: number): ILetterState | undefined {
        return this.letters.find(letter => letter.id === id);
    };
};