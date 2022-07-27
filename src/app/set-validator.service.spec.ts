import { TestBed } from '@angular/core/testing';

import { SetValidatorService } from './set-validator.service';

describe('SetValidatorService', () => {
  let service: SetValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
