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
define(["require", "exports", 'angular2/angular2', 'http/http', 'http/http'], function (require, exports, angular2_1, http_1, http_2) {
    var App = (function () {
        function App(http) {
            this.name = 'Susi';
            var x = http
                .get('./fluege.txt')
                .toRx()
                .map(function (resp) {
                console.debug(resp);
                return resp.json();
            })
                .subscribe(function (body) {
                console.debug(body);
            });
        }
        App = __decorate([
            angular2_1.Component({
                selector: 'app'
            }),
            angular2_1.View({
                template: '<h1>Hello {{ name }}</h1>'
            }), 
            __metadata('design:paramtypes', [http_2.Http])
        ], App);
        return App;
    })();
    angular2_1.bootstrap(App, [http_1.HTTP_BINDINGS]);
});
//# sourceMappingURL=app.js.map