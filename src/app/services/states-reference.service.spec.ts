import { TestBed } from '@angular/core/testing';

import { StatesReferenceService } from './states-reference.service';

describe('StatesReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatesReferenceService = TestBed.get(StatesReferenceService);
    expect(service).toBeTruthy();
  });
});
