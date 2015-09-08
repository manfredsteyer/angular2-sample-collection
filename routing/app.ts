///<reference path="../typings/typings.d.ts"/>

import { Component, View, bootstrap, bind } from 'angular2/angular2';
import { Home } from 'components/home/home';
import { RouteConfig, RouterLink, RouterOutlet, RouteDefinition } from 'angular2/router';
import { FlugEdit } from 'components/flug-edit/flug-edit';
import { ROUTER_BINDINGS } from 'angular2/router';
import { FORM_BINDINGS } from 'angular2/angular2';
import { LocationStrategy, HashLocationStrategy, Location } from 'angular2/router';
import { FlugSuchen } from 'components/flug-suchen/flug-suchen'
import { FlugService } from 'services/flug-service'; 

@Component({
	selector: 'app'
})
@View({
	directives: [RouterLink, RouterOutlet],
	templateUrl: 'app.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'home' },
	{ path: '/flug-suchen', component: <any>FlugSuchen, as: 'flugSuchen' },
	{ path: '/flug-edit/:id', component: FlugEdit, as: 'flugEdit' }	
])
export class App {
	title;
	location: Location;
	constructor(location: Location) {
		this.title = "Flug-Demo-App";
		this.location = location;
	}
	
	isActive(path): boolean {
		return (this.location.path() == path);
	}
}

var services = [
	ROUTER_BINDINGS,
	FORM_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
	FlugService
];

bootstrap(App, [services]);