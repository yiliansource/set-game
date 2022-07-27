import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCardComponent } from './set-card.component';

describe('SetCardComponent', () => {
  let component: SetCardComponent;
  let fixture: ComponentFixture<SetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
