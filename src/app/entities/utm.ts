//import {Injectable} from '@angular/core';

export class Utm {

 public id: number;
 public url: string;
 public name: string;
 public source: string;
 public medium: string;
 public term: string;
 public content: string;

 public constructor(id?, url?, name?, source?, medium?, term?, content?) 
   { 
   	this.id = id; 
   	this.url = url; 
   	this.name = name; 
   	this.source = source; 
   	this.medium = medium; 
   	this.term = term; 
   	this.content = content; 
   }
}


