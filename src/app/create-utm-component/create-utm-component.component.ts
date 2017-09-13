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


  	public campaignUrl: string;
    public campaignName: string;
    public campaignSource: string;
    public campaignMedium: string;
    public campaignTerm: string;
    public campaignContent: string;

    //test:
    private results;


  onSubmit(utmForm) {
    console.log(utmForm.value);

    console.log("submitted");
    }


 constructor(private http: HttpClient, private utmService: UtmService ) {


    this.campaignUrl = 'https://www.klearlending.com/';
    this.campaignName = 'Windstorm';
    this.campaignSource = 'fakeSource';
    this.campaignMedium = 'fakeMedium';
    this.campaignTerm = 'fakeCampaignTerm';
    this.campaignContent = 'fakeCampaignContent';

 }

   // ngOnInit() {
   // }


  ngOnInit(): void {
  

    // // Make the HTTP request:
    // this.http.get('http://localhost:3000/utm/2').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.results = data;

    //   console.log(this.results);
    // });

    this.utmService.getUtm().subscribe((utm) => {
      this.results = utm
      console.log("got from service: ", this.results);
    });

  
  }
}

