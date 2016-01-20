import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {MenuService} from './menu.service';

// TODO: figure out how to user attribute selector
@Component({
  selector: 'side-menu',
  templateUrl: 'app/components/sidemenu/side-menu.html',
  styleUrls: ['app/components/sidemenu/sidemenu.css'],
  inputs: ['label'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MenuService],
  host: {
    class: 'sideMenu'
  }
})
export class SideMenu{
  constructor(private _menuService: MenuService){

  }
  label: string;
  selectedItem: Object;
  menu = this._menuService.getItems();

  onSelected(item){
    this.selectedItem = item;
  }

}
