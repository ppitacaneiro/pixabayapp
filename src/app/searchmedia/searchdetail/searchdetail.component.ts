import { PixabayapiService } from 'src/app/services/pixabayapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {

  photoId?:number;
  photo?:Image;

  constructor(
    private route:ActivatedRoute,
    private pixabayapiService:PixabayapiService
  ) { }

  ngOnInit() {
    this.photoId = parseInt(this.route.snapshot.params['id']);
    this.pixabayapiService.getPhoto(this.photoId).subscribe(
      (result) => {
        this.photo = result.hits[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
