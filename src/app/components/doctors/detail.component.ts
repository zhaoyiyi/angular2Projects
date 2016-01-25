import { Component, OnInit, OnChanges } from 'angular2/core';
import { Http, HTTP_PROVIDERS} from 'angular2/http';
import { RouteParams, Router } from 'angular2/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {Doctor} from './doctor';
import {DoctorsService} from './doctors.service';


// TODO: form validation

@Component({
  selector: 'doctor-detail',
  templateUrl: 'app/components/doctors/detail.component.html',
  styleUrls: ['app/components/doctors/detail.component.css'],
  providers: [DoctorsService, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES],
  inputs: ['doctor', 'isCreating']
})
export class DetailComponent implements OnInit{
  doctor: Doctor;
  isEditing: boolean;
  isCreating: boolean = ( this._routePrams.get('id')==='new');
  doctorForm: ControlGroup;

  constructor(
    private _doctorsService: DoctorsService,
    private _formBuilder: FormBuilder,
    private _routePrams: RouteParams,
    private _router: Router
){}

  ngOnInit(){
    if(this.isCreating){
      this.doctor = new Doctor();
      this.setForm(this.doctor);
      this.isEditing = true;
    }else{
      this._doctorsService.getOne( this._routePrams.get('id') )
        .subscribe(
          data => this.doctor = data,
          err => console.log(err),
          () => this.setForm(this.doctor)
        );
    }
  }
// TODO: notify parent action complete.

  setForm(doctor:Doctor){
    this.doctorForm = this._formBuilder.group({
      'first_name': [doctor && doctor.first_name || '', Validators.required],
      'last_name': [doctor && doctor.last_name || '', Validators.required],
      'department': [doctor && doctor.department || '', Validators.required],
      'email': [doctor && doctor.email || '', Validators.required],
      'phone': [doctor && doctor.phone || '', Validators.required],
      'id': [doctor && doctor.id || null, Validators.required]
    });
  }

  onSubmit(doctor){
    if(this.isCreating){
      this.createDoctor(doctor);
      this.isCreating = false;
    }else{
      this.updateDoctor(doctor);
      this.isEditing = false;
    }
  }
  exitEditing(){
    // reset form values
    this.setForm(this.doctor);
    this.isEditing = false;
  }
  goBack(){
    this._router.navigate(['DoctorsList']);
  }

  // Data
  createDoctor(doctor){
    this._doctorsService.createDoctor(doctor)
      .subscribe(
        data => console.log(data)
      );
  }
  edit(){
    this.isEditing = true;
    console.log('creating', this.isCreating)
  }
  updateDoctor(doctor){
    this._doctorsService.updateDoctors( doctor )
      .subscribe(
        data => console.log(data)
      );
  }
  deleteDoctor(){
    this._doctorsService.deleteDoctor(this.doctor)
      .subscribe(
        data => console.log(data)
      );
    this.isEditing = false;
  }
}
