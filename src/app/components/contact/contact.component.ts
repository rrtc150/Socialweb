import { Component } from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent{

	constructor(public _is:InfoService){

	}

}