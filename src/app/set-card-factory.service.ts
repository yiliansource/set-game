import { Injectable } from '@angular/core';
import { randomPick, randomInteger } from 'src/util/random';
import {
  SetCard,
  SetCardColor,
  SetCardFill,
  SetCardSymbol,
} from './set-card/set-card';

@Injectable({
  providedIn: 'root',
})
export class SetCardFactoryService {
  constructor() {}

  getRandomCard(): SetCard {
    return {
      symbol: randomPick(Object.values(SetCardSymbol)),
      color: randomPick(Object.values(SetCardColor)),
      fill: randomPick(Object.values(SetCardFill)),
      count: randomInteger(1, 4),
    };
  }

  getRandomCards(count: number): SetCard[] {
    return Array.from({ length: count }, this.getRandomCard);
  }
}
