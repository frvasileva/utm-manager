import { Component, OnInit } from '@angular/core';
import { Utm } from '../entities/utm';
import { UtmService } from '../services/utm.services';

@Component({
  selector: 'app-utms',
  templateUrl: './utms.component.html',
  styleUrls: ['./utms.component.css'],
  providers: [UtmService]
})
export class UtmsComponent implements OnInit {

  private utmList = new Array<Utm>();


   constructor(private utmService: UtmService ) {

   }

  ngOnInit() {
  	console.log("starting utms components");
  	    this.utmService.getUtms().subscribe((utm) => {
     		this.utmList = utm;
      		console.log("FANI: got from service: ", this.utmList);
    });  
  }

}
