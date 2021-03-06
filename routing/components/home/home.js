/// <reference path="../../../typings/typings.d.ts" />
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
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Home = (function () {
        function Home() {
            this.info = "Home!";
        }
        Home = __decorate([
            angular2_1.Component({}),
            angular2_1.View({
                templateUrl: 'components/home/home.html'
            }), 
            __metadata('design:paramtypes', [])
        ], Home);
        return Home;
    })();
    exports.Home = Home;
});
//# sourceMappingURL=home.js.map