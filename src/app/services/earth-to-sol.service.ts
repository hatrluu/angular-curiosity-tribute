import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarthToSolService {
  sol: number = 1/1.02749125170;
  landingDate: Date = new Date('6/8/2012');
  constructor() { }

  earthToSol(earthDate:Date){
    return new Observable((observer) => {
        // @ts-ignore
        let dateDiff:number = Math.abs(earthDate-this.landingDate)/1000/60/60/24;
        Math.trunc(dateDiff*this.sol);
    })
  }
}
