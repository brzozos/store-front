import {Routes} from '@angular/router';
import {ClientComponent} from './modules/client/client.component';
import {CourierComponent} from './modules/courier/courier.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {CourierOrderComponent} from './modules/courier-order/courier-order.component';
import {ClientOrderComponent} from './modules/client-order/client-order.component';

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
  },
  {
    path: 'courier/order/:id',
    component: CourierOrderComponent
  },
  {
    path: 'client/order/:id',
    component: ClientOrderComponent
  },
  {
    path: 'courier/order',
    component: CourierComponent
  },
  {
    path: 'client/order',
    component: ClientComponent
  }
]
