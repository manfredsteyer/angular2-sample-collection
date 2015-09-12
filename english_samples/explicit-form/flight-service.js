define(["require", "exports"], function (require, exports) {
    var FlightService = (function () {
        function FlightService() {
        }
        FlightService.prototype.find = function (from, to) {
            var url = "http://www.angular.at/api/flug"
                + "?abflugOrt="
                + encodeURIComponent(from)
                + "&zielOrt="
                + encodeURIComponent(to);
            return fetch(url).then(function (r) { return r.json(); });
        };
        return FlightService;
    })();
    exports.FlightService = FlightService;
});
//# sourceMappingURL=flight-service.js.map