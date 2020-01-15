import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
import { Observable, Subscription } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  images: string[];
  imageIterator = 0;
  len: number;
  sub: Subscription;
  showMessage = true;
  constructor(private svc: GalleryService) { }

  ngOnInit() {
    this.getImages();
    this.len = this.images.length;
  }

  ngOnDesctruct() {
    this.sub.unsubscribe();
  }

  getImages(): void {
    this.sub = this.svc.getImages().subscribe(images => this.images = images);
  }

  hideMessage() {
    setTimeout(() => { this.showMessage = false; }, 300);
  }

}
