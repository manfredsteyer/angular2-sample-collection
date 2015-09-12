///<reference path="../../typings/typings.d.ts"/>
define(["require", "exports", 'angular2/angular2', 'angular2/angular2', 'flight-list', 'flight-service'], function (require, exports, angular2_1, angular2_2, flight_list_1, flight_service_1) {
    var services = [
        angular2_2.FORM_BINDINGS,
        flight_service_1.FlightService
    ];
    angular2_1.bootstrap(flight_list_1.FlightList, [services]);
});
//# sourceMappingURL=app.js.map