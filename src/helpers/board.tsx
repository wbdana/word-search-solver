import { idOrNull } from '../types/board';
import {
    IGetLetterObject,
    IGetCardinalDirections,
    IGetOrdinalDirections,
} from '../types/helpers';

export function createLetters(x: number, y: number) {
    let total = x * y;
    // Create an array of the necessary letter object IDs
    // @ts-ignore
    let rangeArray = [ ...Array(x * y).keys() ];

    // Given the desired ID, create a letter object based on the board
    return rangeArray.map(index => (
        getLetterObject(x, y, total, index + 1)
    ));
};

// Return the letter object
const getLetterObject = (
    x: number,
    y: number,
    total: number,
    id: number
): IGetLetterObject => {
    // x is number of columns
    // y is number of rows
    const {
        north,
        east,
        south,
        west,
    } = getCardinalDirections(x, total, id);

    const {
        northeast,
        southeast,
        southwest,
        northwest,
    } = getOrdinalDirections(north, east, south, west, x, id);

    return {
        id,
        val: '',
        north,
        northeast,
        east,
        southeast,
        south,
        southwest,
        west,
        northwest,
    }
};

const getCardinalDirections = (
    x: number,
    // y: number,
    total: number,
    id: number
): IGetCardinalDirections => {
    let
        north,
        south,
        east,
        west
    ;

    // North
    if (id - x <= 0) {
        north = null;
    }
    else {
        north = id - x;
    };

    // East
    if (id % x === 0) {
        east = null;
    }
    else {
        east = id + 1;
    };

    // South
    if (total - id < x) {
        south = null;
    }
    else {
        south = id + x;
    };

    // West
    if (id % x === 1) {
        west = null;
    }
    else {
        west = id - 1;
    };

    return {
        north,
        east,
        south,
        west,
    };
};

const getOrdinalDirections = (
    north: idOrNull,
    east: idOrNull,
    south: idOrNull,
    west: idOrNull,
    x: number,
    id: number,
): IGetOrdinalDirections => {
    let
        northeast,
        southeast,
        southwest,
        northwest
    ;

    // Northeast
    if (north && east) {
        northeast = id - x + 1;
    }
    else {
        northeast = null;
    };

    // Southeast
    if (east && south) {
        southeast = id + x + 1;
    }
    else {
        southeast = null;
    };

    // Southwest
    if (south && west) {
        southwest = id + x - 1;
    }
    else {
        southwest = null;
    };

    // Northwest
    if (west && north) {
        northwest = id - x - 1;
    }
    else {
        northwest = null;
    };

    return {
        northeast,
        southeast,
        southwest,
        northwest,
    };
}