import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TrackscrollDirective } from './track-scroll.directive';

@Component({
  template: '<div appTrackScroll><h1>This is scrolling</h1></div>',
  styles: ['{min-width: 600px; font-size: 24px; padding: 1rem 2rem; border-radius: 1rem;}']
})
class TestTrackScrollComponent {

}

describe('Is Checking for Scroll', () => {
  let component: TestTrackScrollComponent;
  let fixture: ComponentFixture<TestTrackScrollComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackscrollDirective, TestTrackScrollComponent]
    });

    fixture = TestBed.createComponent(TestTrackScrollComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement;
  });

  it('scrolling track', () => {
    const scrollEvent = document.createEvent( 'CustomEvent' ); // MUST be 'CustomEvent'
    scrollEvent.initCustomEvent( 'scroll', false, false, null );

    window.document.body.style.minHeight = '9000px';
    window.scrollTo( 0, 1000 );
    window.dispatchEvent( scrollEvent );
    fixture.detectChanges();
    setTimeout(() => {
      console.log(divEl.nativeElement.querySelector('.searchInput-fixed'));
      expect(divEl.nativeElement.querySelector('.searchInput-fixed')).toBeTruthy();
    }, 50);
  });
});
