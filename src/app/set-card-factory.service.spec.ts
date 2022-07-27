import { TestBed } from '@angular/core/testing';

import { SetCardFactoryService } from './set-card-factory.service';

describe('SetCardFactoryService', () => {
  let service: SetCardFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetCardFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
