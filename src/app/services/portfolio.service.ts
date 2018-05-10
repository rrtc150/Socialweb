import { Injectable } from '@angular/core';

import { Http } from "@angular/http"; 


@Injectable()
export class PortfolioService {

	portfolio:any[] = [];
  portfolio2:any[] = [];
	uploading_portfolio:boolean = true; 

  constructor(private http:Http) {

  	//this.upload_portfolio();

   }
/*
   public upload_portfolio(){

   		this.uploading_portfolio = true;

 
   		this.http.get('https://social-web-1b59a.firebaseio.com/portfolio_idx.json')
   				.subscribe( res => {
   					console.log(res.json());
   					this.uploading_portfolio = false;
   					this.portfolio = res.json();
   				})

   }*/

}
