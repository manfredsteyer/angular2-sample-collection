/// <reference path="../typings/typings.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf, Inject} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlugService} from 'flug-service';
import {CityValidator} from 'city'; 
  
@Component({
    selector: 'flug-suchen'
})
@View({
    templateUrl: 'flug-suchen.html',
    directives: [NgFor, NgIf, FORM_DIRECTIVES, CityValidator]
})
export class FlugSuchen {

    filter;
    fluege;
    selectedFlug;
    message;
    flugService: FlugService;
    
    constructor(flugService: FlugService) {
        
        this.fluege = [];
        
        this.filter = {
            von: 'Graz',
            nach: 'Hamburg'
        };
        
        this.flugService = flugService;
    }
    
    flugSuchen() {

        var filter = this.filter;
        this
            .flugService
            .find(filter.von, filter.nach)
            .then((fluege) => { 
                this.fluege = fluege;
                this.message = fluege.length + " Flüge geladen!";
            });
    }

    selectFlug(flug) {
        this.selectedFlug = flug;
    }    
}
