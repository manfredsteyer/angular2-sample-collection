/// <reference path="../typings/typings.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlugService} from 'flug-service';
import {CityValidator} from 'city-validator'; 
 
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
            von:  ['Graz',      Validators.compose([Validators.required, CityValidator.validate])],
            nach: ['Hamburg',   Validators.compose([Validators.required, CityValidator.validate])]
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
