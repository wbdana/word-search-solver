import {
    ILetterState,
    IBoardState,
    IBoardSizeState,
    // idOrNull,
} from '../types/board';
import { ISolveOptionsState } from '../types/solveOptions';
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
    solveOptions: ISolveOptionsState;
    results: string[];

    constructor(board: IBoardState, solveOptions: ISolveOptionsState) {
        const { letters, size } = board;
        this.letters = letters;
        this.size = size;
        this.solveOptions = solveOptions;
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
        
//        if (isWord(currentString) && !this.results.includes(currentString)) {
//          this.results.push(currentString);
//        }

        if (isWord(currentString)) {
            this.results.push(currentString);
        };

        let directions = Object.keys(currentLetter).filter(key => key !== "id" && key !== "val");
        const filteredDirections = this.getFilteredDirections();
        directions = directions.filter(key => {
            return filteredDirections.indexOf(key) < 0;
        });

        directions.forEach(key => {
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

    getFilteredDirections(): String[] {
        const { forward, backward, up, down, diagonal, } = this.solveOptions;

        let directionsToFilter = [];

        if (!forward) {
            directionsToFilter.push("east");
        };

        if (!backward) {
            directionsToFilter.push("west");
        };

        if (!up) {
            directionsToFilter.push("north");
        };

        if (!down) {
            directionsToFilter.push("south");
        };

        if (!diagonal) {
            directionsToFilter.push(["northeast", "southeast", "southwest", "northwest"]);
            directionsToFilter = directionsToFilter.flat();
        };

        return directionsToFilter;
    };

    getSquareById(id: number): ILetterState | undefined {
        return this.letters.find(letter => letter.id === id);
    };
};
