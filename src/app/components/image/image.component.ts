import { Component, Input, OnInit } from '@angular/core';
import { CuriosityCommunicationService } from 'src/app/services/curiosity-communication.service';

@Component({
  selector: 'app-image',
  template: '<img [src]="photoSrc">',
  styles: ['img { width: 100%; height: auto; object-fit: cover }']
})
export class ImageComponent implements OnInit{
  @Input() photoSrc: string;
  constructor() { }

  ngOnInit(): void {}
}
