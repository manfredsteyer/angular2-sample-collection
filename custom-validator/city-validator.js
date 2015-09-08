define(["require", "exports"], function (require, exports) {
    var CityValidator = (function () {
        function CityValidator() {
        }
        CityValidator.validate = function (control) {
            var validValues = ["Graz", "Hamburg", "Wien", "Frankfurt"];
            var cnt = validValues
                .filter(function (item) { return item == control.value; })
                .length;
            if (cnt == 0) {
                return { city: true };
            }
        };
        return CityValidator;
    })();
    exports.CityValidator = CityValidator;
});
//# sourceMappingURL=city-validator.js.map