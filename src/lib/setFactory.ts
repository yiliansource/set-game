import { SetCardColor, SetCardData, SetCardFill, SetCardSymbol } from "../SetCard";
import { randomInteger, randomPick } from "../util/random";

import { v4 as uuidv4 } from "uuid";

export function getRandomCard(): SetCardData {
    return {
        id: uuidv4(),
        symbol: randomPick(Object.values(SetCardSymbol)),
        color: randomPick(Object.values(SetCardColor)),
        fill: randomPick(Object.values(SetCardFill)),
        count: randomInteger(1, 4),
    };
}

export function getRandomCards(count: number): SetCardData[] {
    return Array.from({ length: count }, getRandomCard);
}
