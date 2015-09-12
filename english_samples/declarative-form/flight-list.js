///<reference path="../../typings/typings.d.ts"/>
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
define(["require", "exports", 'angular2/angular2', 'angular2/angular2', 'flight-service', 'city'], function (require, exports, angular2_1, angular2_2, flight_service_1, city_1) {
    var FlightList = (function () {
        function FlightList(flugService) {
            this.flights = [];
            this.filter = {
                from: 'Graz',
                to: 'Hamburg'
            };
            this.flightService = flugService;
        }
        FlightList.prototype.searchFlight = function () {
            var _this = this;
            var filter = this.filter;
            this
                .flightService
                .find(filter.from, filter.to)
                .then(function (fluege) {
                _this.flights = fluege;
                _this.message = fluege.length + " flights found!";
            });
        };
        FlightList.prototype.selectFlight = function (flug) {
            this.selectedFlight = flug;
        };
        FlightList = __decorate([
            angular2_1.Component({
                selector: 'flight-list'
            }),
            angular2_1.View({
                templateUrl: 'flight-list.html',
                directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_2.FORM_DIRECTIVES, city_1.CityValidator]
            }), 
            __metadata('design:paramtypes', [flight_service_1.FlightService])
        ], FlightList);
        return FlightList;
    })();
    exports.FlightList = FlightList;
});
//# sourceMappingURL=flight-list.js.map