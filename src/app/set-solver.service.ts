import { Injectable } from '@angular/core';
import { SetCard } from './set-card/set-card';
import { SetValidatorService } from './set-validator.service';

@Injectable({
  providedIn: 'root',
})
export class SetSolverService {
  constructor(private setValidator: SetValidatorService) {}

  findSet(cards: SetCard[]) {
    for (let i = 0; i < cards.length; i++)
      for (let j = 0; j < cards.length; j++)
        for (let k = 0; k < cards.length; k++) {
          if (i != j && j != k && k != i) {
            if (this.setValidator.validate([cards[i], cards[j], cards[k]])) {
              return [i, j, k];
            }
          }
        }

    return null;
  }
}
