import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarsConstant } from 'src/app/constants/mars-constant';
import { CuriosityCommunicationService } from 'src/app/services/curiosity-communication.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-image-board',
  templateUrl: './image-board.component.html',
  styleUrls: ['./image-board.component.css']
})

export class ImageBoardComponent implements OnInit, OnDestroy {
  photos: Photo[];
  sol: number;
  solSubscription: Subscription;
  landingDate = MarsConstant.landingDate.toLocaleDateString();
  today = new Date().toLocaleDateString();

  constructor(private cComService: CuriosityCommunicationService) {
    this.photos = null;
  }

  ngOnInit(): void {
    this.solSubscription = this.cComService.sol.subscribe(value => {
        this.getImages(value);
    });
  }

  ngOnDestroy(): void{
    this.solSubscription.unsubscribe();
  }

  getImages(sol): void {
    this.cComService.getPhotos(sol).subscribe(data => {
      this.photos = data.photos as Photo[];
    });
  }

  get getPhotos(): number { return (this.photos && this.photos.length) ? this.photos.length : 0; }
}
