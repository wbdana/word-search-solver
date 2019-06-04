export interface ILetterState {
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

export type idOrNull = number | null;
