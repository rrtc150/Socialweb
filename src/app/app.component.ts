import { Component } from '@angular/core';
import {InfoService} from "./services/info.service";
import {PortfolioService} from "./services/portfolio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor( public _is:InfoService,
				 public _ps:PortfolioService) {

	}

}
