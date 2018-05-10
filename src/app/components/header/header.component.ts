import { Component } from '@angular/core';
import {InfoService} from '../../services/info.service'; 
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

	constructor(public _is:InfoService){
		

	}


}
