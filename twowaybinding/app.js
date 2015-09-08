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
define(["require", "exports", 'angular2/angular2', 'angular2/angular2', 'option-box'], function (require, exports, angular2_1, angular2_2, option_box_1) {
    var App = (function () {
        function App() {
            this.option = 1;
        }
        App = __decorate([
            angular2_2.Component({
                selector: 'app'
            }),
            angular2_2.View({
                templateUrl: 'app.html',
                directives: [option_box_1.OptionBox]
            }), 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    })();
    angular2_1.bootstrap(App);
});
//# sourceMappingURL=app.js.map