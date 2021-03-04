import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CuriosityCommunicationService } from './curiosity-communication.service';

describe('CuriosityCommunicationService', () => {
  let service: CuriosityCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CuriosityCommunicationService);
  });

  it('should return value', () => {
    const dummyJson = {
      photos: [
        {
          id: 102693,
          sol: 1000,
          camera: {
              id: 20,
              name: 'FHAZ',
              rover_id: 5,
              full_name: 'Front Hazard Avoidance Camera'
          },
          img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
          earth_date: '2015-05-30',
          rover: {
              id: 5,
              name: 'Curiosity',
              landing_date: '2012-08-06',
              launch_date: '2011-11-26',
              status: 'active'
          }
      }]
    };
    const sol = new Date();
    service.getMockPhotos(sol).subscribe(data => {
      expect(data.photos.length).toBe(25);
      expect(data.photos[0]).toEqual(dummyJson);
    });
  });
});
