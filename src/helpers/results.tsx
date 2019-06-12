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
        
        if (isWord(currentString) && !this.results.includes(currentString)) {
            this.results.push(currentString);
        }

        const filteredDirections = this.getFilteredDirections();

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

    getFilteredDirections(): String[] {
        // x is number of columns
        const { x, y } = this.size;
        // TODO zigzag is really the same as forward, backward, and diagonal all being true
        // What about north/south exclusively? solveOptions should include vertical
        // TODO So really, remove zigzag, and add a "vertical" option
        const { forward, backward, diagonal, zigzag } = this.solveOptions;
        const directions = [
            "north",
            "northeast",
            "east",
            "southeast",
            "south",
            "southwest",
            "west",
            "northwest",
        ];

        const filteredForward = forward ? ["east"] : [];
        const filteredBackward = backward ? ["west"] : [];
        // const filteredVertical = vertical ? ["north", "south"] : [];
        const filteredDiagonal = diagonal ? ["northeast", "southeast", "southwest", "northwest"] : [];

        return [];
    };

    getSquareById(id: number): ILetterState | undefined {
        return this.letters.find(letter => letter.id === id);
    };
};
