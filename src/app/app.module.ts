import { SearchmediaModule } from './searchmedia/searchmedia.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [				
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SearchmediaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
