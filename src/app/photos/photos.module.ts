import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';

const photosRoutes: Routes = [
  {path: '', component: PhotoGalleryComponent}
];

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(photosRoutes),
    MatGridListModule,
    MatSliderModule,
  ]
})
export class PhotosModule { }
