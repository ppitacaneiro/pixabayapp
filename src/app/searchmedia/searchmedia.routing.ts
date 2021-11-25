import { SearchmediaComponent } from './searchmedia.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchformComponent } from './searchform/searchform.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { SearchdetailComponent } from './searchdetail/searchdetail.component';

const routes: Routes = [
  { path: 'form', component: SearchformComponent },
  { path: 'list', component: SearchlistComponent },
  { path: 'detail', component: SearchdetailComponent }
];

export const SearchmediaRoutes = RouterModule.forChild(routes);
