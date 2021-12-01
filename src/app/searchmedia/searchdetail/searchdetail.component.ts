import { FavmediaService } from './../../services/favmedia.service';
import { PixabayapiService } from 'src/app/services/pixabayapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {

  photoId?:number;
  photo?:Image;
  isPhotoLoaded?:boolean;

  constructor(
    private route:ActivatedRoute,
    private pixabayapiService:PixabayapiService,
    private favMediaService:FavmediaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.isPhotoLoaded = false;
    this.photoId = parseInt(this.route.snapshot.params['id']);
    this.pixabayapiService.getPhoto(this.photoId).subscribe(
      (result) => {
        this.isPhotoLoaded = true;
        this.photo = result.hits[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addImageToFavs(image:Image) {
    this.favMediaService.addFavImage(image);
    this.toastr.success("Image succesfully added to favs");
  }
}
