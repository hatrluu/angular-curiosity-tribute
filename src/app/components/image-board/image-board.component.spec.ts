import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoardComponent } from './image-board.component';

describe('ImageBoardComponent', () => {
  let component: ImageBoardComponent;
  let fixture: ComponentFixture<ImageBoardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBoardComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBoardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display h3 message if no photos', () => {
    component.photos = [];
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('h3').textContent).toContain('No image found, try looking for any dates between');
  });
});
