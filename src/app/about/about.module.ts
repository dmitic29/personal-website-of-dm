import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';

const aboutRoutes: Routes = [
  {path: '', component: AboutMeComponent},
];

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes),
  ]
})
export class AboutModule { }
