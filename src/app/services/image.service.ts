import { Injectable } from '@angular/core';
import { HttpService } from './htttp.service';
import { Image, ImageAdapter } from './../core/image.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpService: HttpService, private adapter: ImageAdapter) { }

  getImages(query: string): Observable<Image[]> {
    return this.httpService.get({ q: query }).pipe(map((response: any) => response.hits.map(item => this.adapter.adapt(item))));
  }
}
