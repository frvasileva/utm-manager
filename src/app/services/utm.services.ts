import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utm } from '../entities/utm';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtmService {

	constructor(private http: HttpClient ) {}

	getUtm(id): Observable<Utm> {
	    return this.http.get('http://localhost:3000/utm/edit/' + id)
	    	.map(results => {
	    		var data = results[0]
	    		return new Utm(
	    			data.id,
	    			data.url,
	    			data.name,
	    			data.source,
	    			data.medium,
	    			data.term,
	    			data.content
	    		)
	    	});		
	  } 

	  getUtms(): Observable<Utm[]> {
	  	return this.http.get('http://localhost:3000/utms')
	    	  .map(response => response as Array<Utm>);		
	  } 

	  saveUtm(data): Observable<boolean> {
	  	return this.http.post('http://localhost:3000/utm/edit/' + data.id, data)
	    	.map(results => {
    		 console.log("post",data);
    		 return true;
	    	});		
	  } 

	  createUtm(data): Observable<boolean> {
	  	return this.http.post('http://localhost:3000/utm/create/', data)
	    	.map(results => {
    		 console.log("create post", data);
    		 return true;
	    	});		
	  }
}