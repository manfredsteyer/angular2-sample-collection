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
    var FlugSuchen = (function () {
        function FlugSuchen() {
            this.name = 'Susi';
        }
        FlugSuchen = __decorate([
            angular2_1.Component({
                selector: 'flug-suchen'
            }),
            angular2_1.View({
                template: '<h1>Hello {{ name }}</h1>'
            }), 
            __metadata('design:paramtypes', [])
        ], FlugSuchen);
        return FlugSuchen;
    })();
    exports.FlugSuchen = FlugSuchen;
});
//bootstrap(App, [HTTP_BINDINGS]);
/*
///<reference path="../typings/typings.d.ts"/>

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlugService} from 'flug-service';
 
@Component({
    selector: 'flug-suchen',
    appInjector: [FlugService, FormBuilder]
})
@View({
  templateUrl: 'flug-suchen.html',
  directives: [NgFor, NgIf, FORM_DIRECTIVES]
})
export class FlugSuchen {

    fluege;
    selectedFlug;
    filter;
    message;
    flugService: FlugService;
    
    constructor(flugService: FlugService, fb: FormBuilder) {
        
        this.fluege = [];
        
        this.filter = fb.group({
            von: ['Graz', Validators.required],
            nach: ['Hamburg', Validators.required]
        });
        
        this.flugService = flugService;
    }
    
    selectFlug(flug) {
        this.selectedFlug = flug;
    }
    
    flugSuchen() {

        var filter = this.filter.value;
        this
            .flugService
            .find(filter.von, filter.nach)
            .then((fluege) => {
                this.fluege = fluege;
                this.message = fluege.length + " Flüge geladen!";
            });
    }
    
}



*/ 
//# sourceMappingURL=flug-suchen.js.map