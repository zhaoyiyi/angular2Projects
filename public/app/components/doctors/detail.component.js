System.register(['angular2/core', 'angular2/http', 'angular2/router', 'angular2/common', './doctor', './doctors.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, common_1, doctor_1, doctors_service_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (doctor_1_1) {
                doctor_1 = doctor_1_1;
            },
            function (doctors_service_1_1) {
                doctors_service_1 = doctors_service_1_1;
            }],
        execute: function() {
            // TODO: form validation
            DetailComponent = (function () {
                function DetailComponent(_doctorsService, _formBuilder, _routePrams, _router) {
                    this._doctorsService = _doctorsService;
                    this._formBuilder = _formBuilder;
                    this._routePrams = _routePrams;
                    this._router = _router;
                    this.isCreating = (this._routePrams.get('id') === 'new');
                }
                DetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.isCreating) {
                        this.doctor = new doctor_1.Doctor();
                        this.setForm(this.doctor);
                        this.isEditing = true;
                    }
                    else {
                        this._doctorsService.getOne(this._routePrams.get('id'))
                            .subscribe(function (data) { return _this.doctor = data; }, function (err) { return console.log(err); }, function () { return _this.setForm(_this.doctor); });
                    }
                };
                // TODO: notify parent action complete.
                DetailComponent.prototype.setForm = function (doctor) {
                    this.doctorForm = this._formBuilder.group({
                        'first_name': [doctor && doctor.first_name || '', common_1.Validators.required],
                        'last_name': [doctor && doctor.last_name || '', common_1.Validators.required],
                        'department': [doctor && doctor.department || '', common_1.Validators.required],
                        'email': [doctor && doctor.email || '', common_1.Validators.required],
                        'phone': [doctor && doctor.phone || '', common_1.Validators.required],
                        'id': [doctor && doctor.id || null, common_1.Validators.required]
                    });
                };
                DetailComponent.prototype.onSubmit = function (doctor) {
                    if (this.isCreating) {
                        this.createDoctor(doctor);
                        this.isCreating = false;
                    }
                    if (this.isEditing) {
                        this.updateDoctor(doctor);
                        this.isEditing = false;
                    }
                };
                DetailComponent.prototype.exitEditing = function () {
                    // reset form values
                    this.setForm(this.doctor);
                    this.isEditing = false;
                };
                DetailComponent.prototype.goBack = function () {
                    this._router.navigate(['DoctorsList']);
                };
                // Data
                DetailComponent.prototype.createDoctor = function (doctor) {
                    this._doctorsService.createDoctor(doctor)
                        .subscribe(function (data) { return console.log(data); });
                };
                DetailComponent.prototype.edit = function () {
                    this.isEditing = true;
                    console.log('creating', this.isCreating);
                };
                DetailComponent.prototype.updateDoctor = function (doctor) {
                    this._doctorsService.updateDoctors(doctor)
                        .subscribe(function (data) { return console.log(data); });
                };
                DetailComponent.prototype.deleteDoctor = function () {
                    this._doctorsService.deleteDoctor(this.doctor)
                        .subscribe(function (data) { return console.log(data); });
                    this.isEditing = false;
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        selector: 'doctor-detail',
                        templateUrl: 'app/components/doctors/detail.component.html',
                        styleUrls: ['app/components/doctors/detail.component.css'],
                        providers: [doctors_service_1.DoctorsService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.FORM_DIRECTIVES],
                        inputs: ['doctor', 'isCreating']
                    }), 
                    __metadata('design:paramtypes', [doctors_service_1.DoctorsService, (typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
                ], DetailComponent);
                return DetailComponent;
                var _a, _b, _c;
            })();
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
