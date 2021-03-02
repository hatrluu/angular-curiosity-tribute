import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuriosityCommunicationService {
  mockData = '/assets/mock.json';
  endPoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

  constructor(private http: HttpClient) { }

  getimages(sol: number, camera: string = '', apiKey: string = ''): Observable<any> {
    const params: any = {
      'sol': sol,
      'camera': camera,
      'api_key' : apiKey,
    }
    return this.http.get(this.endPoint, {params: params});
  }

  getMockImages(): Observable<any> {
    return this.http.get(this.mockData);
  }
}
