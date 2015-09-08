import { ROUTER_BINDINGS } from 'angular2/router';
import { FORM_BINDINGS } from 'angular2/angular2';
import { NgFor, NgIf } from 'angular2/angular2';
import {CityValidator} from 'validation/city'; 
import { View } from 'angular2/angular2';


export function AppView(options) {
	
	if (!options.directives) {
		options.directives = [
			ROUTER_BINDINGS, 
			FORM_BINDINGS, 
			NgFor, 
			NgIf, 
			CityValidator
		];
	}
	
	return View(options);
}