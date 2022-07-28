import { SetCardData } from "../SetCard";

export function validateSet(cards: SetCardData[]): boolean {
    return (["color", "count", "fill", "symbol"] as (keyof SetCardData)[])
        .map((property) => cards.map((c) => c[property]))
        .every(validatePropertySet);
}

export function validatePropertySet<T>(props: T[]): boolean {
    const uniques = new Set<T>(props).size;
    return uniques === 1 || uniques === 3;
}
