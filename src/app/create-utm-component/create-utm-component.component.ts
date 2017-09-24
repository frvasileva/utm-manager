import { Component, OnInit } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule from @angular/common/http//
import { HttpClient } from '@angular/common/http';
import { Utm } from '../entities/utm';
import { UtmService } from '../services/utm.services';


@Component({
  selector: 'app-create-utm-component',
  templateUrl: './create-utm-component.component.html',
  styleUrls: ['./create-utm-component.component.css'],
  providers: [UtmService]
})
export class CreateUtmComponentComponent implements OnInit {

  private utm = new Utm();


  onSubmit(utmForm) {
    console.log(utmForm.value);
    console.log("submitted");
    this.utmService.saveUtm(utmForm.value).subscribe((result) => {
      
    });
  }


   constructor(private http: HttpClient, private utmService: UtmService ) {
    this.utm = new Utm();
    console.log("new utm", this.utm);
   }

   ngOnInit(): void {
    
    this.utmService.getUtm(17).subscribe((utm) => {
      this.utm = utm
      console.log("got from service: ", this.utm);

    });  
  }
}

