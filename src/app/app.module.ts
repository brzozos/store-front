import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing';
import { CourierComponent } from './modules/courier/courier.component';
import {ClientComponent} from './modules/client/client.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClientOrderComponent } from './modules/client-order/client-order.component';
import { CourierOrderComponent } from './modules/courier-order/courier-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CourierComponent,
    ClientComponent,
    DashboardComponent,
    ClientOrderComponent,
    CourierOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {paramsInheritanceStrategy: 'always'}),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
