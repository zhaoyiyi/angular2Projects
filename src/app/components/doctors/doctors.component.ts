import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ListComponent} from './list.component';
import {DetailComponent} from './detail.component';

@Component({
  selector: 'doctors',
  template: `
    doctors page
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/main', as: 'DoctorsList', component: ListComponent, useAsDefault: true},
  { path: '/:id', as: 'DoctorDetail', component: DetailComponent}
])
export class DoctorsComponent{

  constructor() { }
}
