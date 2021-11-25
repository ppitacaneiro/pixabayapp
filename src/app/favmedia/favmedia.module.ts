import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavmediaComponent } from './favmedia.component';
import { FavmediaRoutes } from './favmedia.routing';

@NgModule({
  imports: [
    CommonModule,
    FavmediaRoutes
  ],
  declarations: [FavmediaComponent]
})
export class FavmediaModule { }
