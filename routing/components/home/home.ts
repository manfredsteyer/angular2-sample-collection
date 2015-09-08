/// <reference path="../../../typings/typings.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';


@Component({})
@View({
	templateUrl: 'components/home/home.html'
})
export class Home {

	info;
	
	constructor() {
		this.info = "Home!";	
	}
	
}