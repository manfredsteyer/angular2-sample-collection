///<reference path="../typings/typings.d.ts"/>
define(["require", "exports", 'angular2/angular2', 'angular2/angular2', 'flug-suchen', 'flug-service'], function (require, exports, angular2_1, angular2_2, flug_suchen_1, flug_service_1) {
    var services = [
        angular2_2.FORM_BINDINGS,
        flug_service_1.FlugService
    ];
    angular2_1.bootstrap(flug_suchen_1.FlugSuchen, [services]);
});
//# sourceMappingURL=app.js.map