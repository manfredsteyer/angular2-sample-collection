/// <reference path="../typings/typings.d.ts" />
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
define(["require", "exports", 'angular2/angular2', 'angular2/angular2', 'flug-service'], function (require, exports, angular2_1, angular2_2, flug_service_1) {
    var FlugSuchen = (function () {
        function FlugSuchen(flugService, fb) {
            this.fluege = [];
            this.filter = fb.group({
                von: ['Graz', angular2_2.Validators.required],
                nach: ['Hamburg', angular2_2.Validators.required]
            });
            this.filter.controls['von'].valueChanges.observer({
                next: function (value) {
                    console.debug(value);
                }
            });
            this.filter.valueChanges.observer({
                next: function (value) {
                    console.debug(value);
                }
            });
            this.flugService = flugService;
        }
        FlugSuchen.prototype.selectFlug = function (flug) {
            this.selectedFlug = flug;
        };
        FlugSuchen.prototype.flugSuchen = function () {
            var _this = this;
            var filter = this.filter.value;
            this
                .flugService
                .find(filter.von, filter.nach)
                .then(function (fluege) {
                _this.fluege = fluege;
                _this.message = fluege.length + " Flüge geladen!";
            });
        };
        FlugSuchen = __decorate([
            angular2_1.Component({
                selector: 'flug-suchen'
            }),
            angular2_1.View({
                templateUrl: 'flug-suchen.html',
                directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_2.FORM_DIRECTIVES]
            }), 
            __metadata('design:paramtypes', [flug_service_1.FlugService, angular2_2.FormBuilder])
        ], FlugSuchen);
        return FlugSuchen;
    })();
    exports.FlugSuchen = FlugSuchen;
});
//# sourceMappingURL=flug-suchen.js.map