/// <reference path="../typings/typings.d.ts" />
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'flug-suchen'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
export class FlugSuchen {
    name: string;

    constructor() {
        this.name = 'Susi';
    }
}



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