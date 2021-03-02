import { Component, OnInit } from '@angular/core';
import { CuriosityCommunicationService } from 'src/app/services/curiosity-communication.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-image-board',
  templateUrl: './image-board.component.html',
  styleUrls: ['./image-board.component.css']
})

export class ImageBoardComponent implements OnInit {
  photos: Photo[];

  constructor(private cComService: CuriosityCommunicationService) {
    this.photos = null;
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.cComService.getMockImages().subscribe(data => {
      this.photos = data.photos as Photo[];
      console.log(this.photos);
    });
  }
}
