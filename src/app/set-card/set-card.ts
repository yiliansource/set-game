export enum SetCardSymbol {
  Oval = 'oval',
  Diamond = 'diamond',
  Squiggle = 'squiggle',
}

export enum SetCardColor {
  Red = '#e73d40',
  Green = '#05b45d',
  Purple = '#482c90',
}

export enum SetCardFill {
  Blank = 'blank',
  Semi = 'semi',
  Full = 'full',
}

export interface SetCard {
  symbol: SetCardSymbol;
  color: SetCardColor;
  fill: SetCardFill;
  count: number;
}
