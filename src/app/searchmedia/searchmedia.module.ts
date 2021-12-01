import { SearchdetailComponent } from './searchdetail/searchdetail.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { SearchmediaRoutes } from './searchmedia.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchmediaComponent } from './searchmedia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  imports: [
    CommonModule,
    SearchmediaRoutes,
    FormsModule,
    ReactiveFormsModule
  ],exports : [
    SearchmediaComponent,
    SearchformComponent,
    SearchlistComponent,
    SearchdetailComponent
  ],
  declarations: [
    SearchmediaComponent,
    SearchformComponent,
    SearchlistComponent,
    SearchdetailComponent
  ]
})
export class SearchmediaModule { }
