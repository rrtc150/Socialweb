import { Component } from '@angular/core';
import {InfoService} from "./services/info.service";
import {PortfolioService} from "./services/portfolio.service";
import { MessageService } from "./services/message.service";
import * as swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor( public _is:InfoService,
				 public _ps:PortfolioService,
				 public _MessageService: MessageService) {

	}

	contactForm(form) {
 		this._MessageService.sendMessage(form).subscribe(() => {
 			swal('Contact form', 'Message sent', 'success');
 		});
 	}

}
