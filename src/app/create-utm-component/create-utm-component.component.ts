import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utm } from '../entities/utm';
import { UtmService } from '../services/utm.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-create-utm-component',
  templateUrl: './create-utm-component.component.html',
  styleUrls: ['./create-utm-component.component.css'],
  providers: [UtmService]
})
export class CreateUtmComponentComponent implements OnInit {

  private utm = new Utm();
  private id;

  onSubmit(utmForm) {
    console.log("form submitted values: ", utmForm.value);
    console.log("submitted");
    
    console.log("utm submitted", this.utm);
    this.utmService.saveUtm(this.utm).subscribe((result) => {
       this.router.navigate(['utms']);    
     });

   
  }


   constructor(private http: HttpClient, private utmService: UtmService, private route: ActivatedRoute, private router: Router ) {
    this.utm = new Utm();

    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // console.log("params ", params);
       // console.log("route ", this.id);
    });

   }

   ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    // debugger;
    // console.log("NAME---",id);
    
    this.utmService.getUtm(id).subscribe((utm) => {
      this.utm = utm
      console.log("got from service: ", this.utm);

    });  
  }
}