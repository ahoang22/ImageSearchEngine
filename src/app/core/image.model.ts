import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Image {
  constructor(
    public id: number,
    public previewURL: string,
    public webformatURL: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ImageAdapter implements Adapter<Image> {

  adapt(item: any): Image {
    return new Image(
      item.id,
      item.previewURL,
      item.webformatURL,
    );
  }
}