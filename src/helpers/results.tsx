import {
    ILetterState,
    IBoardState,
    IBoardSizeState,
    // idOrNull,
} from '../types/board';
const DICTIONARY = require('./dictionary/dictionary');
const PREFIXES = require('./dictionary/prefixes');

const isWord = (word: string): Boolean => {
    return !!DICTIONARY[word];
};

const isPrefix = (word: string): Boolean => {
    return !!PREFIXES[word];
};

export class WordSearch {
    letters: ILetterState[];
    size: IBoardSizeState;
    results: string[];

    constructor(board: IBoardState) {
        this.letters = board.letters;
        this.size = board.size;
        this.results = [];
        this.boggle(this.letters, this.size);
    }


    boggle(letters: ILetterState[], size: IBoardSizeState) {
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

            // TODO Filter out appropriate directions based on grid size and solve options


            // @ts-ignore
            let nextSquareId: any = currentLetter[key];

            if (nextSquareId === null) {
                return;
            }

            if (visitedIds.includes(nextSquareId)) {
                return;
            }

            // @ts-ignore
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
