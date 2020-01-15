import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'work', loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
  },
  {
    path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  }
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
