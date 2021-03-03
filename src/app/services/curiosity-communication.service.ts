import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuriosityCommunicationService {
  // API Endpoints
  mockData = '/assets/mock.json';
  endPoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

  private _sol = new BehaviorSubject<number>(0);
  sol = this._sol.asObservable();

  constructor(private http: HttpClient) { }

  getPhotos(sol: number): Observable<any> {
    const params: any = {
      sol,
      api_key : environment.NASA_API_KEY,
    };
    return this.http.get(this.endPoint, {params});
  }

  getMockPhotos(sol): Observable<any> {
    return this.http.get(this.mockData);
  }

  solOnChange(value): void {
    this._sol.next(value);
  }
}
