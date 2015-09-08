///<reference path="../typings/typings.d.ts"/>
import { Component, View, bootstrap } from 'angular2/angular2';
import { HTTP_BINDINGS } from 'http/http';
import { Http } from 'http/http';

@Component({
    selector: 'app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class App {
    name: string;

    constructor(http: Http) {
        this.name = 'Susi';
        
        var x = http
                    .get('./fluege.txt')
                    .toRx()
                    .map(resp => { 
                        console.debug(resp);
                        return resp.json();
                        })
                    .subscribe(body => {
                        console.debug(body);
                    });
       
        
    }
}

bootstrap(App, [HTTP_BINDINGS]);