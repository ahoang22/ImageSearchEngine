import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/htttp.service';
import { ImageService } from './services/image.service';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
