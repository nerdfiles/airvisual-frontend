import { TestBed } from '@angular/core/testing';

import { CitiesReferenceService } from './cities-reference.service';

describe('CitiesReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesReferenceService = TestBed.get(CitiesReferenceService);
    expect(service).toBeTruthy();
  });
});
