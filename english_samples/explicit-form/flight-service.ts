
export class FlightService {
    
    find(from, to) {
        
        var url = "http://www.angular.at/api/flug"
                + "?abflugOrt=" 
                + encodeURIComponent(from) 
                + "&zielOrt=" 
                + encodeURIComponent(to);

        return fetch(url).then(r => r.json());
       
    }
}
