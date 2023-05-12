import { TestBed } from '@angular/core/testing'

import { CountriesReferenceService } from './countries-reference.service'

describe('CountriesReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: CountriesReferenceService = TestBed.get(CountriesReferenceService)
    expect(service).toBeTruthy()
  })
})
