import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utm } from '../entities/utm';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtmService {

	constructor(private http: HttpClient ) {}

	getUtm(): Observable<Utm> {
	    return this.http.get('http://localhost:3000/utm/2')
	    	.map(results => {
	    		var data = results[0]
	    		return new Utm(
	    			'no url',
	    			data.name,
	    			data.source,
	    			data.medium,
	    			data.term,
	    			data.content
	    		)
	    	});		
	  } 
}