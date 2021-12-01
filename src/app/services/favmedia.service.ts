import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class FavmediaService {

  favsImages:Image[] = [];

  constructor() { }

  addFavImage(image:Image):void {
    this.favsImages.push(image);
  }

  getAllFavsImages():void {
    console.log(this.favsImages);
  }

}
