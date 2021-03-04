import { Component, EventEmitter, Output } from '@angular/core';
import { CuriosityCommunicationService } from 'src/app/services/curiosity-communication.service';
import { EarthToSolService } from 'src/app/services/earth-to-sol.service';
import { MarsConstant } from '../../constants/mars-constant';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})

export class SearchPanelComponent {
  @Output() firstRun = new EventEmitter<boolean>();

  constructor(private cComService: CuriosityCommunicationService, private etl: EarthToSolService) { }

  onFirstRun(): void {
    this.firstRun.emit(true);
  }
  onChange(event): void {
    const sol = this.etl.earthToSol(event.value);
    this.cComService.solOnChange(sol);
    this.firstRun.emit(false);
    window.scroll(0, 0);
  }

  outOfRange(d: Date): boolean{
    const date = (d || new Date());
    return date < new Date() && date >= MarsConstant.landingDate;
  }
}
