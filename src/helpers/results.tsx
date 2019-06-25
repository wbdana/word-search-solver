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
            let topLevelLetterId = letter.id;
            let lastString = '';
            // console.log("top level traverseBoard, letter: ", letter, "currentString: ", currentString, "visitedIds: ", visitedIds);
            this.traverseBoard(
                letter,
                currentString,
                visitedIds,
                topLevelLetterId,
                lastString,
            );
        });
    
        console.log(this.results);
        // @ts-ignore
        console.log([...new Set(this.results)]);

        // @ts-ignore
        return [...new Set(this.results)];
        // return this.results;
    };

    traverseBoard(currentLetter: ILetterState, currentString: string, visitedIds: number[], topLevelLetterId: number, lastString: string) {
        // if (currentLetter.val === 'a' || currentLetter.val === 'A') {
        //     console.log("a values");
        //     console.log (currentLetter, currentString, visitedIds);
        // }
        currentString += currentLetter.val;
        visitedIds.push(currentLetter.id);
    
        if (!isPrefix(currentString)) {
            if (topLevelLetterId === 6) {
                console.log("NOT A PREFIX: ", currentString);
            }
            // Remove visitedIds from the last iteration if the lastString's length is different than the currentString
            // E.G., if lastString was 'atip'
            // and currenttString is 'at'
            // We know we used two more letters in the last attempt (and added those letters' ids to visitedIds) than we now have
            // and therefore must remove the last two visitedIds
            if (lastString.length !== currentString.length + 1) {
                for (let i=0; i < lastString.length; i++) {
                    visitedIds.pop();
                }
            }
            return;
        };

        if (isWord(currentString) && !this.results.includes(currentString)) {
            this.results.push(currentString);
        };

        let directions = Object.keys(currentLetter).filter(key => key !== "id" && key !== "val");

        const filteredDirections = this.getFilteredDirections();

        directions = directions.filter(key => {
            return filteredDirections.indexOf(key) < 0;
        });

        directions.forEach(key => {
            // TODO The problem here is that after constructing a word, and then backtracking, visitedIds remain unchanged.
            // Therefore this skips certain letters that should not be skipped in their subsequent iteration


            if (topLevelLetterId === 6) {
                console.log("currentString: ", currentString);
                console.log("next key/direction: ", key);
            }

            // @ts-ignore
            let nextSquareId: any = currentLetter[key];

            if (nextSquareId === null) {
                return;
            }

            if (visitedIds.includes(nextSquareId)) {
                // console.log("currentLetter.val: ",  currentLetter.val);
                // console.log("currentString: ", currentString);
                if (topLevelLetterId === 6) {
                    console.log("visitedIds: ", visitedIds);
                    console.log("nextSquareId: ", nextSquareId);
                    console.log("Skipping the above iteration");
                }
                return;
            }

            // @ts-ignore
            let nextSquare: ILetterState = this.getSquareById(nextSquareId);

            this.traverseBoard(
                nextSquare,
                currentString,
                visitedIds,
                topLevelLetterId,
                currentString,
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
