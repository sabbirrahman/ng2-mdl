System.register(['angular2/router', 'angular2/core', '../directives/MdlUpgrade/MdlUpgrade', './RouterComponents/Dashboard/Dashboard', './RouterComponents/MdlUpgradePage/MdlUpgradePage'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, MdlUpgrade_1, Dashboard_1, MdlUpgradePage_1;
    var App;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MdlUpgrade_1_1) {
                MdlUpgrade_1 = MdlUpgrade_1_1;
            },
            function (Dashboard_1_1) {
                Dashboard_1 = Dashboard_1_1;
            },
            function (MdlUpgradePage_1_1) {
                MdlUpgradePage_1 = MdlUpgradePage_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        encapsulation: core_1.ViewEncapsulation.None,
                        templateUrl: './app/components/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, MdlUpgrade_1.MdlUpgrade]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: Dashboard_1.Dashboard, name: 'Dashboard' },
                        { path: '/mdlUpgrade', component: MdlUpgradePage_1.MdlUpgradePage, name: 'MdlUpgradePage' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map