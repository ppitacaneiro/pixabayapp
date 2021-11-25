import { SearchmediaRoutes } from './searchmedia.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchmediaComponent } from './searchmedia.component';

@NgModule({
  imports: [
    CommonModule,
    SearchmediaRoutes
  ],exports : [
    SearchmediaComponent
  ],
  declarations: [SearchmediaComponent]
})
export class SearchmediaModule { }
