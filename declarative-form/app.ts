///<reference path="../typings/typings.d.ts"/>

import { bootstrap } from 'angular2/angular2';
import { FORM_BINDINGS } from 'angular2/angular2';
import { FlugSuchen } from 'flug-suchen';
import { FlugService } from 'flug-service';

import { Injector, bind, QueryList } from 'angular2/angular2';

var services = [ 
	FORM_BINDINGS,
	FlugService
];

bootstrap(FlugSuchen, [services]);
