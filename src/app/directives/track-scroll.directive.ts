import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrackScroll]'
})
export class TrackscrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event']) onScroll(e): void {
    console.log(this.el);
    if (e.target.scrollingElement.scrollTop !== 0) {
      this.addClass(this.el.nativeElement);
    } else { this.removeClass(this.el.nativeElement); }
  }

  addClass(e): void{
    this.renderer.addClass(e, 'searchInput-fixed');
    this.renderer.removeClass(e, 'searchPanel');
  }
  removeClass(e): void{
    this.renderer.removeClass(e, 'searchInput-fixed');
    this.renderer.addClass(e, 'searchPanel');
  }
}
