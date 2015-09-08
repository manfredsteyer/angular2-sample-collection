define(["require", "exports"], function (require, exports) {
    var FlugService = (function () {
        function FlugService() {
        }
        FlugService.prototype.find = function (von, nach) {
            var url = "http://www.angular.at/api/flug"
                + "?abflugOrt="
                + encodeURIComponent(von)
                + "&zielOrt="
                + encodeURIComponent(nach);
            return fetch(url).then(function (r) { return r.json(); });
        };
        return FlugService;
    })();
    exports.FlugService = FlugService;
});
//# sourceMappingURL=flug-service.js.map