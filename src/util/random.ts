export function randomInteger(start: number, end: number): number {
  return start + Math.floor(Math.random() * (end - start));
}

export function randomPick<T>(array: T[]): T {
  return array[randomInteger(0, array.length)];
}
