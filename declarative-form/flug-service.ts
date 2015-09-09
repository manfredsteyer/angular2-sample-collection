import { Injectable } from 'angular2/angular2';

@Injectable()
export class FlugService {
    
    find(von, nach) {
        
        var url = "http://www.angular.at/api/flug"
                + "?abflugOrt=" 
                + encodeURIComponent(von) 
                + "&zielOrt=" 
                + encodeURIComponent(nach);

        return fetch(url).then(r => r.json());
       
    }
}
