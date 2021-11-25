import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'search', loadChildren: () => import('./searchmedia/searchmedia.module').then(module => module.SearchmediaModule) },
  { path: 'favorites', loadChildren: () => import('./favmedia/favmedia.module').then(module => module.FavmediaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
