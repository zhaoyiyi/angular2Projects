import { Component, EventEmitter, Output } from 'angular2/core';

@Component({
  selector: 'header-bar',
  templateUrl: 'app/components/headerBar/header-bar.html',
  styleUrls: ['app/components/headerBar/headerBar.css'],
  host: {
    class: 'row'
  },
  outputs: ['search']
})
export class HeaderBar {
  constructor() { }

  search: EventEmitter<any> = new EventEmitter();
  onSearch(text: string){
    this.search.emit(text);
  }
}
