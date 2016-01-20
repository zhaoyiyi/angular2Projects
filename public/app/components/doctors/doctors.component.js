System.register(['angular2/core', 'angular2/router', './list.component', './detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, list_component_1, detail_component_1;
    var DoctorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (detail_component_1_1) {
                detail_component_1 = detail_component_1_1;
            }],
        execute: function() {
            DoctorsComponent = (function () {
                function DoctorsComponent() {
                }
                DoctorsComponent = __decorate([
                    core_1.Component({
                        selector: 'doctors',
                        template: "\n    doctors page\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/main', as: 'DoctorsList', component: list_component_1.ListComponent, useAsDefault: true },
                        { path: '/:id', as: 'DoctorDetail', component: detail_component_1.DetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], DoctorsComponent);
                return DoctorsComponent;
            })();
            exports_1("DoctorsComponent", DoctorsComponent);
        }
    }
});
