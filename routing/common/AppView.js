define(["require", "exports", 'angular2/router', 'angular2/angular2', 'angular2/angular2', 'validation/city', 'angular2/angular2'], function (require, exports, router_1, angular2_1, angular2_2, city_1, angular2_3) {
    function AppView(options) {
        if (!options.directives) {
            options.directives = [
                router_1.ROUTER_BINDINGS,
                angular2_1.FORM_BINDINGS,
                angular2_2.NgFor,
                angular2_2.NgIf,
                city_1.CityValidator
            ];
        }
        return angular2_3.View(options);
    }
    exports.AppView = AppView;
});
//# sourceMappingURL=AppView.js.map