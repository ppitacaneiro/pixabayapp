import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { PixabayapiService } from 'src/app/services/pixabayapi.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent implements OnInit {

  @Input() results?: any;
  @Input() filterSearch?: any;
  @Output() isLoadingPage = new EventEmitter<boolean>();
  
  listOfImages:Image[] = [];
  pagesArray:number[] =[];

  pages:number = 0;
  total:number = 0;
  numInitialResults: number = 0; 
  currentPage:number = 0;

  constructor(
    private pixabayapiService:PixabayapiService,
    private router:Router
  ) { }

  ngOnInit() {
    this.listOfImages = this.results.hits;
    this.currentPage = 1;

    this.numInitialResults = this.results.hits.length;
    this.total = this.results.totalHits;
    this.pages = this.results.totalHits / this.results.hits.length;
    this.pages = this.pages + 1;
    this.pagesArray = [...Array(this.pages).keys()];
    this.pagesArray.shift();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.listOfImages = changes.results.currentValue.hits;
    this.currentPage = 1;
  }

  getPhotosByPage(numberOfPage:number) {
    this.isLoadingPage.emit(true);
    const searchFilterWithPagination = this.filterSearch + '&page= ' + numberOfPage;
    this.pixabayapiService.getPhotos(searchFilterWithPagination).subscribe(
      (result) => {
        this.isLoadingPage.emit(false);
        this.currentPage = numberOfPage;
        this.listOfImages = result.hits;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getDetail(id:number) {
    this.router.navigate(['/detail',id]);
  }
}
