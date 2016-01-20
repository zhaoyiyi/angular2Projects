System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Subject', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', './doctors.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, Subject_1, doctors_service_1;
    var ListComponent;
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
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (doctors_service_1_1) {
                doctors_service_1 = doctors_service_1_1;
            }],
        execute: function() {
            // TODO: hover event
            ListComponent = (function () {
                function ListComponent(_doctorsService, _router) {
                    var _this = this;
                    this._doctorsService = _doctorsService;
                    this._router = _router;
                    this.selectedDoctor = null;
                    this.isEditing = false;
                    this.isCreating = false;
                    this.hoverStream = new Subject_1.Subject();
                    this.hoverEvent = this.hoverStream
                        .distinctUntilChanged()
                        .debounceTime(300)
                        .map(function (doctor) { return _this.selectedDoctor = doctor; })
                        .subscribe(function (data) { return console.log(data); });
                }
                ListComponent.prototype.ngOnInit = function () {
                    this.getDoctors();
                };
                // Functions
                ListComponent.prototype.onSelect = function (doctor) {
                    this.selectedDoctor = doctor;
                };
                ListComponent.prototype.newDoctor = function () {
                    // TODO: fix route
                    this._router.navigate(['DoctorDetail', { id: 'new' }]);
                };
                ListComponent.prototype.toDetailPage = function () {
                    this._router.navigate(['DoctorDetail', { id: this.selectedDoctor.id }]);
                };
                // Data
                ListComponent.prototype.getDoctors = function () {
                    var _this = this;
                    this._doctorsService.getDoctors().subscribe(function (data) { return _this.doctors = data; }, function (err) { return console.log(err); }, function () { return console.log('finish loading doctors'); });
                };
                ListComponent.prototype.deleteDoctor = function () {
                    this._doctorsService.deleteDoctor(this.selectedDoctor)
                        .subscribe(function (data) { return console.log(data); });
                    console.log('doctor deleted');
                    this.isEditing = false;
                    this.getDoctors();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/components/doctors/list.component.html',
                        styleUrls: ['app/components/doctors/list.component.css'],
                        providers: [doctors_service_1.DoctorsService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [doctors_service_1.DoctorsService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], ListComponent);
                return ListComponent;
                var _a;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
