import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAllFavsImages() {
    return this.favsImages;
  }

}
