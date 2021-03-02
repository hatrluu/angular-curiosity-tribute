import { TestBed } from '@angular/core/testing';

import { CuriosityCommunicationService } from './curiosity-communication.service';

describe('CuriosityCommunicationService', () => {
  let service: CuriosityCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriosityCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
