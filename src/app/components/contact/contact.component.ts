import { Component } from '@angular/core';
import {InfoService} from "../../services/info.service";
import {MessageService} from "../../services/message.service";
import * as swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent{

	constructor(public _is:InfoService,
				public _MessageService: MessageService){

	}

	contactForm(form) {
 		this._MessageService.sendMessage(form).subscribe(() => {
 			swal('Contact form', 'Message sent', 'success');
 		});
 	}

}