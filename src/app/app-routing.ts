import {Routes} from '@angular/router';
import {ClientComponent} from './modules/client/client.component';
import {CourierComponent} from './modules/courier/courier.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'courier',
    component: CourierComponent
  }
]
