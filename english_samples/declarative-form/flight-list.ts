///<reference path="../../typings/typings.d.ts"/>

import {Component, View, bootstrap, NgFor, NgIf, Inject} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlightService} from 'flight-service';
import {CityValidator} from 'city'; 
  
@Component({
    selector: 'flight-list'
})
@View({
    templateUrl: 'flight-list.html',
    directives: [NgFor, NgIf, FORM_DIRECTIVES, CityValidator]
})
export class FlightList {

    filter;
    flights;
    selectedFlight;
    message;
    flightService: FlightService;
    
    constructor(flugService: FlightService) {
        
        this.flights = [];
        
        this.filter = {
            from: 'Graz',
            to: 'Hamburg'
        };
        
        this.flightService = flugService;
    }
    
    searchFlight() {

        var filter = this.filter;
        this
            .flightService
            .find(filter.from, filter.to)
            .then((fluege) => { 
                this.flights = fluege;
                this.message = fluege.length + " flights found!";
            });
    }

    selectFlight(flug) {
        this.selectedFlight = flug;
    }    
}
