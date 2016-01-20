// angular
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
// directives
import {SideMenu} from '../sidemenu/sidemenu';
import {HeaderBar} from '../headerBar/headerBar.component';
// components
import {Home} from '../home/home';
import {DoctorsComponent} from '../doctors/doctors.component';
// services
import {MenuService} from '../sidemenu/menu.service';


@Component({
  selector: 'app',
  templateUrl: 'app/components/app/app.html',
  styleUrls: ['app/components/app/app.css'],
  directives: [SideMenu, HeaderBar, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, MenuService],
  inputs: ['search']

})
@RouteConfig([
  { path: '/', as: 'Home', component: Home, useAsDefault: true },
  { path: '/doctors/...', as: 'Doctors', component: DoctorsComponent },
  { path: '/patients', as: 'Patients', component: Home },
  { path: '/volunteers', as: 'Volunteers', component: Home }

])
export class App{
  constructor(private _menuService: MenuService){}
  searchText: string;
  onSearch(text){
    this.searchText = text;
  }
}
