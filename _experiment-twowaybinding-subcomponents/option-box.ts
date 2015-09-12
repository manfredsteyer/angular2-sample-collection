import { Component, View, EventEmitter } from 'angular2/angular2';

@Component({ 
	selector: 'option-box',
	properties: ['value'],
	events: ['valueChanged: value']
})
@View({ 
	templateUrl: 'option-box.html'
})
export class OptionBox {
	value;
	valueChanged = new EventEmitter();
	
	nextValue() {
		this.value.option++;
		if (this.value.option > 5) this.value.option = 1;
		this.valueChanged.next(this.value);
	}
	
}