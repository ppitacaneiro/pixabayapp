import { FavlistComponent } from './favlist/favlist.component';
import { FavcategoriesComponent } from './favcategories/favcategories.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categories', component: FavcategoriesComponent },
  { path: 'list', component: FavlistComponent },
];

export const FavmediaRoutes = RouterModule.forChild(routes);
