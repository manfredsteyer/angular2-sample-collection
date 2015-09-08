///<reference path="../typings/typings.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2', 'components/home/home', 'angular2/router', 'components/flug-edit/flug-edit', 'angular2/router', 'angular2/angular2', 'angular2/router', 'components/flug-suchen/flug-suchen', 'services/flug-service'], function (require, exports, angular2_1, home_1, router_1, flug_edit_1, router_2, angular2_2, router_3, flug_suchen_1, flug_service_1) {
    var App = (function () {
        function App(location) {
            this.title = "Flug-Demo-App";
            this.location = location;
        }
        App.prototype.isActive = function (path) {
            return (this.location.path() == path);
        };
        App = __decorate([
            angular2_1.Component({
                selector: 'app'
            }),
            angular2_1.View({
                directives: [router_1.RouterLink, router_1.RouterOutlet],
                templateUrl: 'app.html'
            }),
            router_1.RouteConfig([
                { path: '/', component: home_1.Home, as: 'home' },
                { path: '/flug-suchen', component: flug_suchen_1.FlugSuchen, as: 'flugSuchen' },
                { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, as: 'flugEdit' }
            ]), 
            __metadata('design:paramtypes', [router_3.Location])
        ], App);
        return App;
    })();
    exports.App = App;
    var services = [
        router_2.ROUTER_BINDINGS,
        angular2_2.FORM_BINDINGS,
        angular2_1.bind(router_3.LocationStrategy).toClass(router_3.HashLocationStrategy),
        flug_service_1.FlugService
    ];
    angular2_1.bootstrap(App, [services]);
});
//# sourceMappingURL=app.js.map