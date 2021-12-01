import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PixabayapiService } from 'src/app/services/pixabayapi.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {

  formSearch:FormGroup = new FormGroup({});
  imageTypes:any[] = [];
  imageOrientations:any[] = [];
  imageCategories:any[] = [];
  imageColors:any[] = [];
  loading:boolean = false;
  
  resultsOfSearch:any;
  filter?:string;

  message?:string;

  constructor(private pixabayapiService:PixabayapiService) {}

  ngOnInit() {
    this.formSearch.addControl('imageType', new FormControl());
    this.formSearch.addControl('imageOrientation', new FormControl());
    this.formSearch.addControl('imageCategories', new FormControl());
    this.formSearch.addControl('imageColors', new FormControl());
    this.formSearch.addControl('searchTerm', new FormControl());
    
    this.imageTypes = this.getImageTypes();
    this.imageOrientations = this.getImageOrientations();
    this.imageCategories = this.getImageCategories();
    this.imageColors = this.getImageColors();
  }

  filterSearch(formValues:any):string {
    let searchFilter = '';

    if (formValues.searchTerm != null) {
      searchFilter += '&q=' + formValues.searchTerm;
    }

    if (formValues.imageType != null) {
      searchFilter += '&image_type=' + formValues.imageType;
    }

    if (formValues.imageCategories != null) {
      searchFilter += '&category=' + formValues.imageCategories;
    }

    if (formValues.imageColors != null) {
      searchFilter += '&colors=' + formValues.imageColors;
    }

    if (formValues.imageOrientation != null) {
      searchFilter += '&orientation=' + formValues.imageOrientation;
    }

    return searchFilter;
  }

  processSearch(formValues:any) {
    this.loading = true;
    this.filter = this.filterSearch(formValues);

    this.pixabayapiService.getPhotos(this.filter).subscribe(
      (result) => {
        this.loading = false;
        this.resultsOfSearch = result;
      }
      ,(error) => {
        console.log(error);
      }
    );
  }

  displayLoadingSpinner(isLoading:boolean) {
    this.loading = isLoading;
  }

  getImageTypes():string[] {
    return ['all','photo','illustration','vector'];
  }

  getImageOrientations():string[] {
    return ['all','horizontal','vertical'];
  }

  getImageCategories():string[] {
    return [
      'backgrounds',
      'fashion',
      'nature',
      'science',
      'education',
      'feelings',
      'health',
      'people',
      'religion',
      'places',
      'animals',
      'industry',
      'computer',
      'food',
      'sports',
      'transportation',
      'travel',
      'buildings',
      'business',
      'music'
    ];
  }

  getImageColors():string[] {
    return [
      'grayscale',
      'transparent',
      'red',
      'orange',
      'yellow',
      'green',
      'turquoise',
      'blue',
      'lilac',
      'pink',
      'white',
      'gray',
      'black',
      'brown'
    ];
  }
}
