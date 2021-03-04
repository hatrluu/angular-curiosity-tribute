import { TestBed } from '@angular/core/testing';

import { EarthToSolService } from './earth-to-sol.service';

describe('EarthToSolService', () => {
  let service: EarthToSolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarthToSolService);
  });

  it('should convert to 1000 sol', () => {
    const oneThousandSol = new Date('5/31/2015');
    expect(service.earthToSol(oneThousandSol)).toEqual(1000);
  });
});
