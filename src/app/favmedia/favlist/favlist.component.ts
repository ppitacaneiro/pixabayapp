import { FavmediaService } from './../../services/favmedia.service';
import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {

  favsImages?:Image[];

  constructor(private favMediaService:FavmediaService) { }

  ngOnInit() {
    this.favsImages = this.favMediaService.getAllFavsImages();
  }

}
