/// <reference path="../../../typings/typings.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';

@Component({})
@View({
	templateUrl: 'components/flug-edit/flug-edit.html'
})
export class FlugEdit {

	info;
	currentId;
	
	constructor(params: RouteParams) {
		this.info = "FlugEdit";		
		this.currentId = params.get('id');
	}
	
}