import { Component, OnInit } from '@angular/core';
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

  constructor(
    private cardFactory: SetCardFactoryService,
    private setValidator: SetValidatorService,
    private setSolver: SetSolverService
  ) {
    this.cards = this.cardFactory.getRandomCards(12);
    this.validateBoard();
  }

  ngOnInit(): void {}

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
          this.selected.forEach(
            (i) => (this.cards[i] = this.cardFactory.getRandomCard())
          );
          this.validateBoard();
        }

        this.selected.splice(0, 3);
      }
    }
  }

  giveHint() {
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
