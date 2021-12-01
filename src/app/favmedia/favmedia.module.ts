import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavmediaComponent } from './favmedia.component';
import { FavmediaRoutes } from './favmedia.routing';
import { FavlistComponent } from './favlist/favlist.component';

@NgModule({
  imports: [
    CommonModule,
    FavmediaRoutes
  ],
  declarations: [FavmediaComponent,FavlistComponent]
})
export class FavmediaModule { }
