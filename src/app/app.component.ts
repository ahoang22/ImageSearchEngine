import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageService } from './services/image.service';
import { Image } from './core/image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  images : Image[];

  constructor(private imageService: ImageService) { }

  onSubmit() {
    this.imageService.getImages(this.form.value.query).subscribe(response => {
      this.images = response;
    });
  }
}
