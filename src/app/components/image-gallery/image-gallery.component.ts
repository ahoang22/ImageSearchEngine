import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/core/image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  @Input() images : Image[]

  ngOnInit(): void {
  }

  trackByFn(index: number, item: Image) {
    return item.id;
  }
}
