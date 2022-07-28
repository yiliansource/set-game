import { SetCardData } from "../SetCard";
import { validateSet } from "./setValidator";

export function findSet(cards: SetCardData[]): number[] | null {
    return findSets(cards).next().value || null;
}

export function* findSets(cards: SetCardData[]) {
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            for (let k = 0; k < cards.length; k++) {
                if (k > j && j > i) {
                    if (validateSet([cards[i], cards[j], cards[k]])) {
                        yield [i, j, k];
                    }
                }
            }
        }
    }
}
