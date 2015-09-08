///<reference path="../typings/typings.d.ts"/>
import { Control } from 'angular2/angular2';

export class CityValidator {

	static validate(control: Control) {
		
		var validValues = ["Graz", "Hamburg", "Wien", "Frankfurt"];
		
		var cnt = validValues
					.filter(item => item == control.value)
					.length; 

		if (cnt == 0) {
			return { city: true }
		}
		
	}
		

}