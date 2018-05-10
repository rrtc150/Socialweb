import { Component } from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'

})
export class BannerComponent  {

	constructor (public _is:InfoService){

	}
}
