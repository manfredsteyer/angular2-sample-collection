///<reference path="../../typings/typings.d.ts"/>

import { bootstrap } from 'angular2/angular2';
import { FORM_BINDINGS } from 'angular2/angular2';
import { FlightList } from 'flight-list';
import { FlightService } from 'flight-service';

var services = [ 
	FORM_BINDINGS,
	FlightService
];

bootstrap(FlightList, [services]);