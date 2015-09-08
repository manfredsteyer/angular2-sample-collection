///<reference path="../typings/typings.d.ts"/>

import { bootstrap } from 'angular2/angular2';
import { Component, View } from 'angular2/angular2';
import { OptionBox } from 'option-box';

@Component({ 
	selector: 'app'
})
@View({ 
	templateUrl: 'app.html', 
	directives: [OptionBox] 
})
class App {
	option;
	constructor() {
		this.option = 1;
	}
}



bootstrap(App);