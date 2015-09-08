import { Directive, bind, forwardRef, Binding, Control, NgValidator } from 'angular2/angular2';


var MyBinding:any = Binding;
 
@Directive({
	selector: '[city]', 
	// bindings: [new MyBinding(NgValidator, { toAlias: forwardRef(() => CityValidator)})]
	bindings: [bind(NgValidator).toAlias(CityValidator)]
}) 
export class CityValidator { 
	
	get validator() { return CityValidator.validate; }
	
	static validate(c) {
		if (c.value != "Graz") {
			return { city: true };
		}
		return { };
	}
	
} 
