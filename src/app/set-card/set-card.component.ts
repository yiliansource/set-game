import { Component, Input, OnInit } from '@angular/core';
import { SetCard } from './set-card';

@Component({
  selector: 'app-set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss'],
})
export class SetCardComponent implements OnInit {
  @Input() card: SetCard | null = null;
  @Input() selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
