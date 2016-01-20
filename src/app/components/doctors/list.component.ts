import { Component, OnInit } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Router } from 'angular2/router';
import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import {Doctor} from './doctor';
import {DoctorsService} from './doctors.service';

// TODO: hover event

@Component({
  selector: 'list',
  templateUrl: 'app/components/doctors/list.component.html',
  styleUrls: ['app/components/doctors/list.component.css'],
  providers: [DoctorsService, HTTP_PROVIDERS]
})
export class ListComponent implements OnInit{

  doctors: Doctor;
  selectedDoctor: Doctor = null;
  isEditing: boolean = false;
  isCreating: boolean = false;

  constructor(
    private _doctorsService: DoctorsService,
    private _router: Router
  ) { }

  ngOnInit(){
    this.getDoctors();
  }

  hoverStream = new Subject();
  hoverEvent = this.hoverStream
    .distinctUntilChanged()
    .debounceTime(300)
    .map( (doctor: Doctor) => this.selectedDoctor = doctor)
    .subscribe( data => console.log(data) );

// Functions
  onSelect(doctor: Doctor){
    this.selectedDoctor = doctor;
  }


  newDoctor(){
    // TODO: fix route
    this._router.navigate(['DoctorDetail', {id: 'new'}]);
  }
  toDetailPage(){
    this._router.navigate(['DoctorDetail', {id: this.selectedDoctor.id}]);
  }

// Data
  getDoctors(){
    this._doctorsService.getDoctors().subscribe(
      (data:Doctor) => this.doctors = data,
      err => console.log(err),
      () => console.log('finish loading doctors')
    );
  }
  deleteDoctor(){
    this._doctorsService.deleteDoctor(this.selectedDoctor)
      .subscribe(
        data => console.log(data)
      );
    console.log('doctor deleted');
    this.isEditing = false;
    this.getDoctors();
  }
}
