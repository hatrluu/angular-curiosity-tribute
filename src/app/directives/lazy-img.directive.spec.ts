import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LazyImgDirective } from './lazy-img.directive';

@Component({
  template: '<img src=""><img src=""><img src="">'
})
class TestLazyImgComponent {

}

describe('LazyImgDirective', () => {
  let component: TestLazyImgComponent;
  let fixture: ComponentFixture<TestLazyImgComponent>;
  let des: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyImgDirective, TestLazyImgComponent]
    });

    fixture = TestBed.createComponent(TestLazyImgComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    des = fixture.debugElement.queryAll(By.directive(LazyImgDirective));
  });

  it('should create image(s)', () => {
    expect(des.length).toBe(3);
  });
});
