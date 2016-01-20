System.register(['angular2/core', 'angular2/router', './menu.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, menu_service_1;
    var SideMenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            // TODO: figure out how to user attribute selector
            SideMenu = (function () {
                function SideMenu(_menuService) {
                    this._menuService = _menuService;
                    this.menu = this._menuService.getItems();
                }
                SideMenu.prototype.onSelected = function (item) {
                    this.selectedItem = item;
                };
                SideMenu = __decorate([
                    core_1.Component({
                        selector: 'side-menu',
                        templateUrl: 'app/components/sidemenu/side-menu.html',
                        styleUrls: ['app/components/sidemenu/sidemenu.css'],
                        inputs: ['label'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [menu_service_1.MenuService],
                        host: {
                            class: 'sideMenu'
                        }
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService])
                ], SideMenu);
                return SideMenu;
            })();
            exports_1("SideMenu", SideMenu);
        }
    }
});
