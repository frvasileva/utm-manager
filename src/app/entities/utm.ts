//import {Injectable} from '@angular/core';

export class Utm {

 //public id: number;
 public campaignUrl: string;
 public campaignName: string;
 public campaignSource: string;
 public campaignMedium: string;
 public campaignTerm: string;
 public campaignContent: string;

 public constructor(campaignUrl?, campaignName?, campaignSource?, campaignMedium?, campaignTerm?, campaignContent?) 
   { 
   	//this.id = id; 
   	this.campaignUrl = campaignUrl; 
   	this.campaignName = campaignName; 
   	this.campaignSource = campaignSource; 
   	this.campaignMedium = campaignMedium; 
   	this.campaignTerm = campaignTerm; 
   	this.campaignContent = campaignContent; 
   }
}


