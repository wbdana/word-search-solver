import { idOrNull } from './board';

export interface IGetLetterObject {
    id: number;
    val: string;
    north: idOrNull;
    northeast: idOrNull;
    east: idOrNull;
    southeast: idOrNull;
    south: idOrNull;
    southwest: idOrNull;
    west: idOrNull;
    northwest: idOrNull;
};

export interface IGetCardinalDirections {
    north: idOrNull;
    east: idOrNull;
    south: idOrNull;
    west: idOrNull;
};

export interface IGetOrdinalDirections {
    northeast: idOrNull;
    southeast: idOrNull;
    southwest: idOrNull;
    northwest: idOrNull;
};
