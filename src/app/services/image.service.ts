import { Injectable } from '@angular/core';
import { HttpService } from './htttp.service';
import { Image, ImageAdapter } from './../core/image.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageResults } from '../api/interfaces/image-results';
import { ImageSearchOption } from '../api/interfaces/image-search-option';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpService: HttpService, private adapter: ImageAdapter) { }

  private imageResults : ImageResults;

  getImages(options: ImageSearchOption): Observable<Image[]> {
    return this.httpService.get(options).pipe(map((response: ImageResults) => {
      this.imageResults = response;
      return response.hits.map(item => this.adapter.adapt(item))}));
  }

  get totalResults() {
    return this.imageResults.totalHits;
  }
}
