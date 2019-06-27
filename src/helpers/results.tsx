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
            let lastString = '';
            this.traverseBoard(
                letter,
                currentString,
                visitedIds,
                lastString,
            );
        });

        // @ts-ignore
        return [...new Set(this.results)];
    };

    traverseBoard(currentLetter: ILetterState, currentString: string, visitedIds: number[], lastString: string) {
        if (currentLetter.val === '') {
            return;
        }

        currentString += currentLetter.val;
        // visitedIds.push(currentLetter.id);

        if (currentString === 'piousn') {
            console.log('--- XXX ---');
            console.log(visitedIds);
        }

        let difference = currentString.length - visitedIds.length;

        if (currentString === 'p') {
            console.log("--- HERE ---");
            console.log("p");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'pi') {
            console.log("--- HERE ---");
            console.log("pi");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'pio') {
            console.log("--- HERE ---");
            console.log("pio");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'piou') {
            console.log("--- HERE ---");
            console.log("piou");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'pious') {
            console.log("--- HERE ---");
            console.log("pious");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'piousn') {
            console.log("--- HERE ---");
            console.log("piousn");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'piousne') {
            console.log("--- HERE ---");
            console.log("piousne");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'piousnes') {
            console.log("--- HERE ---");
            console.log("piousnes");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        if (currentString === 'piousness') {
            console.log("--- HERE ---");
            console.log("piousness");
            console.log(currentLetter);
            console.log(visitedIds);
            console.log("\n\n");
        }

        // if (currentString.length !== visitedIds.length + 1) {
        //     if (currentLetter.id === 23 && currentString.includes('piousnes') && currentString[0] !== 'i') {
        //         console.log(
        //             "ERROR: difference: ",
        //             difference,
        //             "\n",
        //             "currentString: ",
        //             currentString,
        //             "\n",
        //             "visitedIds: ",
        //             visitedIds,
        //             "\n",
        //             "\n",
        //         );
        //     }
        // }

        // if (lastString.length !== currentString.length + 1) {
        //      for (let i=0; i < lastString.length-1; i++) {
        //             // TODO Removing way too many?
        //             // if (currentString.includes('piousnes') && currentString[0] !== 'i') {
        //                 // console.log("i = " + i, " removing id: ", visitedIds.pop());
        //             // }

        //             visitedIds.pop();

        //             // visitedIds = visitedIds.slice(0, visitedIds.length - 1);
        //     }
        // }

        // if (difference !== 0 && currentString[0] === 'p') {
        //     console.log('slicing');
        //     visitedIds = visitedIds.slice(0, visitedIds.length - difference);
        // }

    
        if (!isPrefix(currentString)) {
            // Remove visitedIds from the last iteration if the lastString's length is different than the currentString
            // E.G., if lastString was 'atip'
            // and currentString is 'at'
            // We know we used two more letters in the last attempt (and added those letters' ids to visitedIds) than we now have
            // and therefore must remove the last two visitedIds
            // if (lastString.length !== currentString.length + 1) {

                // Debugging
                if (currentString.includes('piousnes') && currentString[0] !== 'i') {
                    console.log(
                        "lastString and length: ",
                        lastString,
                        lastString.length,
                        "\n",
                        "currentString and length: ",
                        currentString,
                        currentString.length,
                        "\n",
                        "\n",
                    );
                }
                // Debugging

                // console.log("VISITED IDS: ", visitedIds);


                for (let i=0; i < lastString.length-1; i++) {
                //     // TODO Removing way too many?
                //     // if (currentString.includes('piousnes') && currentString[0] !== 'i') {
                //         // console.log("i = " + i, " removing id: ", visitedIds.pop());
                //     // }

                    visitedIds.pop();

                //     // visitedIds = visitedIds.slice(0, visitedIds.length - 1);
                }
 

                // visitedIds = visitedIds.slice(0, visitedIds.length - 1);

                // visitedIds = visitedIds.slice(0, visitedIds.length - lastString.length - 1);
            // }

            // visitedIds = visitedIds.slice(0, visitedIds.length - 1);

            // if (currentString[0] === 'p') {
            //     console.log(currentString + " is not a prefix, returning \n" + visitedIds.toString());
            // }

            // visitedIds.pop();
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
            // @ts-ignore
            let nextSquareId: any = currentLetter[key];

            if (nextSquareId === null) {
                return;
            };

            if (visitedIds.includes(nextSquareId)) {
                return;
            };

            // @ts-ignore
            let nextSquare: ILetterState = this.getSquareById(nextSquareId);

            if (currentString.includes('piousnes') && currentString[0] !== 'i') {
                // console.log(
                //     "current square val: ",
                //     currentLetter,
                //     "\n",
                //     "nextSquare id: ",
                //     nextSquare.id,
                //     "nextSquare val: ",
                //     nextSquare.val,
                //     "\n",
                //     "visitedIds.includes(nextSquare.id): ",
                //     visitedIds.includes(nextSquare.id),
                //     "\n",
                //     "visitedIds: ",
                //     visitedIds,
                //     "\n",
                //     "current string + next letter: ",
                //     currentString + nextSquare.val,
                //     "\n",
                //     "\n",
                // );
            }

            visitedIds.push(currentLetter.id);


            this.traverseBoard(
                nextSquare,
                currentString,
                visitedIds,
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
