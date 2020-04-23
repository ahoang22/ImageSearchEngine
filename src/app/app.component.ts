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

  images: Image[];
  totalResults: number;
  query: string;

  constructor(private imageService: ImageService) {
    this.images = [];
  }

  onSubmit() {
    this.images = [];
    this.query = this.form.value.query;
    this.imageService.getImages({ q: this.query, page: 1 }).subscribe(response => {
      this.images = response;
      this.totalResults = this.imageService.totalResults;
    });
  }

  onPageChange(page : number) {
    this.imageService.getImages({ q: this.query, page }).subscribe(response => {
      this.images = response;
    });
  }
}
