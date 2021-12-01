import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class PixabayapiService {

  private urlApi:string = 'https://pixabay.com/api/?key=';
  private apiKey:string = '24517568-ae4b7df3a3e757ae1d4e02567';

  constructor(private httpClient:HttpClient) { }

  getPhotos(searchFilter:string):Observable<any> {
    return this.httpClient.get(this.urlApi + this.apiKey + searchFilter);
  }

  getPhoto(id:number):Observable<any> {
    return this.httpClient.get(this.urlApi + this.apiKey + '&id=' + id);
  }
}
