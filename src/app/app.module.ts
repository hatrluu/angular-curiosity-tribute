import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ImageBoardComponent } from './components/image-board/image-board.component';
import { ImageComponent } from './components/image/image.component';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { TrackscrollDirective } from './directives/track-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    ImageBoardComponent,
    ImageComponent,
    LazyImgDirective,
    TrackscrollDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
