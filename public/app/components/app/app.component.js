System.register(['angular2/core', 'angular2/router', '../sidemenu/sidemenu', '../headerBar/headerBar.component', '../home/home', '../doctors/doctors.component', '../sidemenu/menu.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sidemenu_1, headerBar_component_1, home_1, doctors_component_1, menu_service_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sidemenu_1_1) {
                sidemenu_1 = sidemenu_1_1;
            },
            function (headerBar_component_1_1) {
                headerBar_component_1 = headerBar_component_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (doctors_component_1_1) {
                doctors_component_1 = doctors_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_menuService) {
                    this._menuService = _menuService;
                }
                App.prototype.onSearch = function (text) {
                    this.searchText = text;
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/components/app/app.html',
                        styleUrls: ['app/components/app/app.css'],
                        directives: [sidemenu_1.SideMenu, headerBar_component_1.HeaderBar, router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, menu_service_1.MenuService],
                        inputs: ['search']
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Home', component: home_1.Home, useAsDefault: true },
                        { path: '/doctors/...', as: 'Doctors', component: doctors_component_1.DoctorsComponent },
                        { path: '/patients', as: 'Patients', component: home_1.Home },
                        { path: '/volunteers', as: 'Volunteers', component: home_1.Home }
                    ]), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
