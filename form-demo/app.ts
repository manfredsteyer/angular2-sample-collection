/// <reference path="../typings/typings.d.ts" />
// import { bootstrap } from 'angular2/angular2';
// import { FORM_BINDINGS } from 'angular2/angular2';
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class App {
    name: string;

    constructor() {
        this.name = 'Susi';
    }
}
// import { FlugSuchen } from 'flug-suchen';

/*
var services = [ 
	FORM_BINDINGS,
	FlugSuchen
];
*/

bootstrap(App);