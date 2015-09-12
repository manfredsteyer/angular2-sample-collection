///<reference path="../typings/typings.d.ts"/>

import { bootstrap } from 'angular2/angular2';
import { Component, View } from 'angular2/angular2';
import { Wrapper } from 'wrapper';

@Component({ 
	selector: 'app'
})
@View({ 
	templateUrl: 'app.html', 
	directives: [Wrapper] 
})
class App {
	model;
	constructor() {
		this.model = {
			info: "Some Model",
			option: 1	
		};
	}
}

  

bootstrap(App);