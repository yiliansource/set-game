import { TestBed } from '@angular/core/testing';

import { SetSolverService } from './set-solver.service';

describe('SetSolverService', () => {
  let service: SetSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
