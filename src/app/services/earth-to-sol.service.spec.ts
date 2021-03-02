import { TestBed } from '@angular/core/testing';

import { EarthToSolService } from './earth-to-sol.service';

describe('EarthToSolService', () => {
  let service: EarthToSolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarthToSolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
