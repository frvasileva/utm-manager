import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-utm-component',
  templateUrl: './create-utm-component.component.html',
  styleUrls: ['./create-utm-component.component.css']
})
export class CreateUtmComponentComponent implements OnInit {


 	public campaignUrl: string;
    public campaignName: string;
    public campaignSource: string;
    public campaignMedium: string;
    public campaignTerm: string;
    public campaignContent: string;


  onSubmit(utmForm){
    console.log(utmForm.value);

    console.log("submitted");

    var test = new CreateUtmComponentComponent();
    
    console.log("test", test);
    }


 constructor() {

    this.campaignUrl = 'https://www.klearlending.com/';
    this.campaignName = 'Windstorm';

 }

  ngOnInit() {
  }

}

