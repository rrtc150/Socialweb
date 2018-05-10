import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class InfoService {

	info:any = {};
	upload:boolean = false; 

  constructor(public http:Http) {

  		this.http.get("assets/data/page.info.json")
  					.subscribe( data => {
  						//console.log(data);
  						this.upload = true;
  						this.info = data.json();
  					})
   }

}
