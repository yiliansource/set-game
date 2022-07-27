import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBoardComponent } from './set-board.component';

describe('SetBoardComponent', () => {
  let component: SetBoardComponent;
  let fixture: ComponentFixture<SetBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
