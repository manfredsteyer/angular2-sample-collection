///<reference path="../../typings/typings.d.ts"/>

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/angular2';
import {FlightService} from 'flight-service';
 
@Component({
    selector: 'flight-list'
})
@View({
  templateUrl: 'flight-list.html',
  directives: [NgFor, NgIf, FORM_DIRECTIVES]
})
export class FlightList {

    flights;
    selectedFlight;
    filter: ControlGroup;
    message: string;
    flightService: FlightService;
    
    constructor(flightService: FlightService, fb: FormBuilder) {
        
        this.flights = [];
        
        this.filter = fb.group({
            from: ['Graz', Validators.required],
            to: ['Hamburg', Validators.required]
        });
        
        this.filter.controls['from'].valueChanges.observer({
            next: (value) => { 
                console.debug(value);    
            }            
        });
        
        this.filter.valueChanges.observer({
            next: (value) => { 
                console.debug(value);
            }            
        });

        
        
        this.flightService = flightService;
    }
    
    selectFlight(flight) {
        this.selectedFlight = flight;
    }
    
    searchFlight() {

        var filter = this.filter.value;
        this
            .flightService
            .find(filter.from, filter.to)
            .then((fluege) => { 
                this.flights = fluege;
                this.message = fluege.length + " flights found!";
            });
    }
    
}
