import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from './work-page/work-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const workRoutes: Routes = [
  {path: '', component: WorkPageComponent}
];

@NgModule({
  declarations: [WorkPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(workRoutes),
    PdfViewerModule,
  ]
})
export class WorkModule { }
