import { Component, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
	selector: 'app-website-sponsor',
	templateUrl: './website-sponsor.component.html',
	styleUrls: ['./website-sponsor.component.scss']
})
export class WebsiteSponsorComponent {
	@Input() symposium;
	displayedColumns = ['', ...sponsorTypes.map(el => el.title)];
	referenceColumns = ['name', '0', '1', '2', '3'];
	sponsorTabledataSource = new SponsorTableDataSource();
	packageImgs = [
		'Sponsorship_Packages.png'
	];
	sponsorImgs = [
		'taiwan_ministry_of_science_and_technology.png',
		'teco_S_and_T_logo.png',
		'OCAC.png',
		'ihisto.png'
		//'teco_houston_techno.png',
		//'hsinchu_sci_park.png',
		//'biovision.png'
	];

	constructor() { }

	parseCamelCase(str) {
		return str.replace( /([A-Z])/g, ' $1' ).trim();
	}

	number(str) {
		return Number(str);
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
	// stripStr(str) {
	// 	return str.replace(/\W+/g, '');
	// }

}

const sponsorBenefits = [
	'5-minute promotion at symposium venue',
	'Exhibition space',
	'Acknowledgement at symposium opening and closing',
	'Slideshow (full page) to feature sponsor before and after sessions',
	'Promotional material in program book',
	'Promotional material in registration desk',
	'Logo featured on event materials: slideshow, website & program book',
	'VIP tickets at symposium and gala'
];

const sponsorTypes = [
	{
		title: 'Platinum\n$5,000',
		benefits: [
			'✅',
			'✅',
			'✅',
			'✅',
			'✅',
			'✅',
			'✅',
			'5'
		]
	},
	{
		title: 'Gold\n$3,000',
		benefits: [
			'',
			'✅',
			'✅',
			'✅',
			'✅',
			'✅',
			'✅',
			'3'
		]
	},
	{
		title: 'Silver\n$1,500',
		benefits: [
			'',
			'',
			'',
			'✅',
			'✅',
			'✅',
			'✅',
			'2'
		]
	},
	{
		title: 'Bronze\n$500',
		benefits: [
			'',
			'',
			'',
			'',
			'',
			'✅',
			'✅',
			'1'
		]
	},
];

const data = sponsorBenefits.map((el, idx) => {
	return {
		...{name: el},
		...Array(4)
			.fill(0)
			.map((_, innerIdx) => sponsorTypes[innerIdx].benefits[idx])
	}
});

export class SponsorTableDataSource extends DataSource<any> {
	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<any[]> {
		console.log(data)
		return Observable.of(data);
	}

	disconnect() { }
}
