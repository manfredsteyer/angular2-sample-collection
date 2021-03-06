/// <reference path="../../../typings/typings.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf, Inject} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlugService} from 'services/flug-service';
import {CityValidator} from 'validation/city'; 
import { ROUTER_DIRECTIVES } from 'angular2/router'; 
 
@Component({
    selector: 'flug-suchen'
})
@View({
  templateUrl: 'components/flug-suchen/flug-suchen.html',
  directives: [NgFor, NgIf, FORM_DIRECTIVES, CityValidator, ROUTER_DIRECTIVES]
})
export class FlugSuchen {

    form;
    fluege;
    selectedFlug;
    filter;
    message;
    flugService: FlugService;
    
    constructor(flugService: FlugService, fb: FormBuilder) {
        
        this.fluege = [];
        
        this.filter = {
            von: 'Graz',
            nach: 'Hamburg'
        };
        
        this.flugService = flugService;
    }
    
    selectFlug(flug) {
        this.selectedFlug = flug;
    }
    
    flugSuchen(f) {

        var filter = this.filter;
        this
            .flugService
            .find(filter.von, filter.nach)
            .then((fluege) => { 
                this.fluege = fluege;
                this.message = fluege.length + " Flüge geladen!";
            });
    }
    
}
