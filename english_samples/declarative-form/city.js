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
    var MyBinding = angular2_1.Binding;
    var CityValidator = (function () {
        function CityValidator() {
        }
        Object.defineProperty(CityValidator.prototype, "validator", {
            get: function () { return CityValidator.validate; },
            enumerable: true,
            configurable: true
        });
        CityValidator.validate = function (c) {
            var validValues = ["Graz", "Hamburg", "Wien", "Frankfurt"];
            var cnt = validValues
                .filter(function (item) { return item == c.value; })
                .length;
            if (cnt == 0) {
                return { city: true };
            }
        };
        CityValidator = __decorate([
            angular2_1.Directive({
                selector: '[city]',
                // bindings: [new MyBinding(NgValidator, { toAlias: forwardRef(() => CityValidator)})]
                bindings: [angular2_1.bind(angular2_1.NgValidator).toAlias(CityValidator)]
            }), 
            __metadata('design:paramtypes', [])
        ], CityValidator);
        return CityValidator;
    })();
    exports.CityValidator = CityValidator;
});
//# sourceMappingURL=city.js.map