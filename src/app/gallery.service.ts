import { Injectable } from '@angular/core';
import { GALLERY_IMAGES } from './gallery-images';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor() { }

  getImages(): Observable<string[]> {
    return of(GALLERY_IMAGES);
  }
}
