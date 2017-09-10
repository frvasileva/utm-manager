import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utm } from '../entities/utm';

@Injectable()
export class UtmService {

    private results;


	constructor(private http: HttpClient ) {}


	getUtm(): void {

	    this.http.get('http://localhost:3000/utm/2').subscribe(data => {
	    this.results = data;
	    
	    console.log("res from service ",this.results);	   

	    return this.results;
	    }); 		
	  } 
}