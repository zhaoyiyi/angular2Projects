import {Injectable} from 'angular2/core';

@Injectable()
export class MenuService{
  getItems(): Array<Object>{
    return [
      {
        path: '/',
        label: 'Home',
        name: 'Home',
        glyphicon: 'glyphicon-home'
      },
      {
        path: '/doctors/...',
        label: 'Doctors',
        name: 'Doctors',
        glyphicon: 'glyphicon-education'
      },
      {
        path: '/patients',
        label: 'Patients',
        name: 'Patients',
        glyphicon: 'glyphicon-heart'
      },
      {
        path: '/volunteers',
        label: 'Volunteers',
        name: 'Volunteers',
        glyphicon: 'glyphicon-grain'
      }
    ]
  }

}
