import { Component} from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent{

	constructor(private _ps:PortfolioService){

		
	}

}
