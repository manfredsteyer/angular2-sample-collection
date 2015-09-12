import { Component, View, EventEmitter } from 'angular2/angular2';
import { OptionBox } from 'option-box';

@Component({ 
	selector: 'wrapper',
	properties: ['value']
})
@View({ 
	template: `
		<div style='border: 2px solid red'>
			Current Value: {{ value | json }}
			<div>
				<option-box [value]='value'></option-box>
			</div>
			<div>
				<option-box [value]='value'></option-box>
			</div>
		</div>`,
	directives: [OptionBox]
	
})
export class Wrapper {
	value;
}