import { Injectable } from '@angular/core';
import { MarsConstant } from '../constants/mars-constant';

@Injectable({
  providedIn: 'root'
})
export class EarthToSolService {
  sol: number = MarsConstant.solConversion;
  landingDate: Date = MarsConstant.landingDate;

  constructor() { }

  earthToSol(earthDate: Date): number {
    // @ts-ignore
    const dateDiff: number = Math.abs(earthDate - this.landingDate) / 1000 / 60 / 60 / 24;
    return Math.trunc(dateDiff * this.sol);
  }
}
