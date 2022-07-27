import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SetCardFactoryService } from '../set-card-factory.service';
import { SetCard } from '../set-card/set-card';
import { SetSolverService } from '../set-solver.service';
import { SetValidatorService } from '../set-validator.service';

@Component({
  selector: 'app-set-board',
  templateUrl: './set-board.component.html',
  styleUrls: ['./set-board.component.scss'],
})
export class SetBoardComponent implements OnInit {
  cards: SetCard[] = [];
  selected: number[] = [];
  hasAnySet: boolean = false;
  score: number = 0;
  time: number = 0;

  get formattedTime() {
    return (
      Math.floor(this.time / 60) +
      ':' +
      Math.floor(this.time % 60)
        .toString()
        .padStart(2, '0')
    );
  }

  constructor(
    private cardFactory: SetCardFactoryService,
    private setValidator: SetValidatorService,
    private setSolver: SetSolverService
  ) {}

  ngOnInit(): void {
    this.cards = this.cardFactory.getRandomCards(12);
    this.validateBoard();

    interval(1000).subscribe((val) => (this.time = val));
  }

  isCardSelected(index: number): boolean {
    return this.selected.includes(index);
  }

  toggleSelection(index: number): void {
    if (this.isCardSelected(index)) {
      this.selected.splice(this.selected.indexOf(index), 1);
    } else {
      this.selected.push(index);

      if (this.selected.length === 3) {
        if (
          this.setValidator.validate(this.selected.map((i) => this.cards[i]))
        ) {
          this.collectSet(this.selected);
        }

        this.selected.splice(0, 3);
      }
    }
  }

  collectSet(indices: number[]): void {
    this.score++;
    for (const i of indices) {
      this.cards[i] = this.cardFactory.getRandomCard();
    }
    this.validateBoard();
  }

  giveHint(): void {
    const setIndices = this.setSolver.findSet(this.cards);

    if (setIndices) {
      this.selected = this.selected.filter((i) => setIndices.includes(i));

      const newIndex = setIndices.find((i) => !this.selected.includes(i));
      if (newIndex !== undefined) {
        this.toggleSelection(newIndex);
      }
    }
  }

  randomize() {
    this.cards = this.cardFactory.getRandomCards(12);
    this.validateBoard();
  }

  validateBoard() {
    this.hasAnySet = this.setSolver.findSet(this.cards) != null;
  }
}
