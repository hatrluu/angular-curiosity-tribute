import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SearchPanelComponent } from './search-panel.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input', () => {
    expect(de.query(By.css('input'))).toBeTruthy();
  });

  it('should have label', () => {
    const compiled = de.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Search a date to find out what Curiosity saw!');
  });
});
