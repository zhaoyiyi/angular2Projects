import {Injectable} from 'angular2/core';
import {Http, Headers, Response, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

import {Doctor} from './doctor';

var headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class DoctorsService {
  constructor(private _http: Http) { }

  createDoctor(doctor){
    return this._http.post(`data/doctors/`, JSON.stringify(doctor), {headers} )
      .map( res => res.json() );
  }
  deleteDoctor(doctor){
    return this._http.delete(`data/doctors/${doctor.id}`)
      .map( res => res.json() );
  }
  getOne(id: string){
    return this._http.get(`data/doctors/${id}`)
      .map( res => res.json() );
  }
  getDoctors(){
    return this._http.get('data/doctors')
      .map( res => res.json() );
  }
  updateDoctors(doctor){
    return this._http.put(`data/doctors/${doctor.id}`, JSON.stringify(doctor), {headers} )
      .map( res => res.json() );
  }
}
