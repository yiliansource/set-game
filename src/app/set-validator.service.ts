import { Injectable } from '@angular/core';
import { SetCard } from './set-card/set-card';

@Injectable({
  providedIn: 'root',
})
export class SetValidatorService {
  constructor() {}

  validate(cards: SetCard[]): boolean {
    return (['color', 'count', 'fill', 'symbol'] as (keyof SetCard)[])
      .map((property) => cards.map((c) => c[property]))
      .every(this.validatePropertySet);
  }

  validatePropertySet<T>(props: T[]): boolean {
    const uniques = new Set<T>(props).size;
    return uniques === 1 || uniques === 3;
  }
}
