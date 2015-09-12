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
    var OptionBox = (function () {
        function OptionBox() {
            this.valueChanged = new angular2_1.EventEmitter();
        }
        OptionBox.prototype.nextValue = function () {
            this.value.option++;
            if (this.value.option > 5)
                this.value.option = 1;
            this.valueChanged.next(this.value);
        };
        OptionBox = __decorate([
            angular2_1.Component({
                selector: 'option-box',
                properties: ['value'],
                events: ['valueChanged: value']
            }),
            angular2_1.View({
                templateUrl: 'option-box.html'
            }), 
            __metadata('design:paramtypes', [])
        ], OptionBox);
        return OptionBox;
    })();
    exports.OptionBox = OptionBox;
});
//# sourceMappingURL=option-box.js.map