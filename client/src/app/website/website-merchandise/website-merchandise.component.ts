import { Component } from '@angular/core';
import 'rxjs/add/observable/of';

@Component({
	selector: 'app-website-merchandise',
	templateUrl: './website-merchandise.component.html',
	styleUrls: ['./website-merchandise.component.scss']
})
export class WebsiteMerchandiseComponent {
	constructor() { }

	goToLink(link) {
		window.open(link, '_blank');
	}

}

