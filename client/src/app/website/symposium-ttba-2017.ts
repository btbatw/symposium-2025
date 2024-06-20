import { speakersObj } from './speakers-obj';
import { commiteesArray } from './commitees-array';
import { commiteesObj } from './commitees-array';


export const ttbaSymposium2017 = {
	'symposiumInfo': {
		'name': 'BTBA Symposium 2024',
		'location': 'Virtual',
		'time': {
			'from': new Date('2024/08/24'),
			'to': new Date('2024/08/25')
		},
		'timeZone': 'America/New_York',
		'year': '2024',
		'title': '',
		'showPageLink': false,
		'registrationLink': 'https://buytickets.at/btba/1264921',
		'programbookLink': ''
	},
	'host': {
		'name': 'Boston Taiwanese Biotechnology Association',
		'nameShort': 'BTBA',
		'nameCh': '波士頓臺灣人生物科技協會',
		'webLink': 'https://www.btbatw.org/',
		'logoSmall': 'logo-ttba-small.png',
		'email': 'btba@btbatw.org',
		'supportLink': 'https://www.btbatw.org/support.html'
	},
	'about': {
		'title': 'BTBA 2024 Annual Symposium',
		'showPageLink': true,
		'subjects': [{
			'title': '',
			'description': `
			<p>2024 BTBA 12th Annual Symposium will take place on <b>August 24-25, at the Harvard University Northwest Building, in Cambridge, MA</b> <a href="https://www.btbatw.org/symposium.html">Learn more about our past annual symposia.</a></p>
            `
		}, {
			'title': 'Registration',
			'description': `<p>Registration is now open for in-person attendance and is limited.</p>`
		}, {
			'title': 'About BTBA',
			'description': '<p>BTBA is a 501(c)(3) non-profit organization started in 2012 by a group of Taiwanese graduate Students, postdocs and young professionals in the greater Boston area. Our goals are to foster individual career development, to enhance scientific collaborations, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US. We hold annual symposiums as well as seminars and workshops throughout the year. We hope to serve as a platform to foster a community for young scientists to share their research, exchange ideas and explore career opportunities. <a href="https://btbatw.org/committee.html">Our organizing committee.</a></p>'
		}]
	},
	'programme': {
		'title': 'Programme',
		'showPageLink': true,
		'schedules': [{
			'from': new Date('2024/08/24 08:00 EDT'),
			'to': new Date('2024/08/24 09:00 EDT'),
			'title': 'Registration and Poster Setup',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 09:00 EDT'),
			'to': new Date('2024/08/24 09:10 EDT'),
			'title': 'Opening Remarks',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 09:10 EDT'),
			'to': new Date('2024/08/24 10:00 EDT'),
			'title': 'Keynote Speech I: Laura Sepp-Lorenzino, CSO at Intellia Therapeutics',
			'topic': "",
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [speakersObj['Laura Sepp-Lorenzino']]
		}, {
			'from': new Date('2024/08/24 10:00 EDT'),
			'to': new Date('2024/08/24 10:30 EDT'),
			'title': 'Group Photo and Coffee Break',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 10:30 EDT'),
			'to': new Date('2024/08/24 12:00 EDT'),
			'title': 'Trending Topic: Next-Generation of Antibody Drug Conjugate',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Rakesh Dixit'],
				speakersObj['Yvonne (Yi-Yang) Lau'],
				speakersObj['Ting-Hui Wu'],
				speakersObj['Yuk-Cheung (Chris) Chan'],
			]
		}, {
			'from': new Date('2024/08/24 12:00 EDT'),
			'to': new Date('2024/08/24 12:10 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 12:00 EDT'),
			'to': new Date('2024/08/24 14:10 EDT'),
			'title': 'Lunch & Round Table with Speakers',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Hsiao-Ying Monica Wey'],
				speakersObj['Meng-Ju Wu'],
				speakersObj['Ming-Ru Wu'],
				speakersObj['Yen-Cheng Chen'],
			]
		}, {
			'from': new Date('2024/08/24 14:10 EDT'),
			'to': new Date('2024/08/24 14:20 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 14:20 EDT'),
			'to': new Date('2024/08/24 15:50 EDT'),
			'numOfParallelSessions': 2,
			'title': 'Panel 1: Advanced Bioprocessing',
			'topic': '',
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Mark Brader'],
				speakersObj['Nicole Payton'],
			]
		}, {
			'from': new Date('2024/08/24 14:20 EDT'),
			'to': new Date('2024/08/24 15:50 EDT'),
			'numOfParallelSessions': 2,
			'title': 'Panel 2: Business Development',
			'topic': '',
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Gina Song'],
				speakersObj['Po-Jen (Will) Yen'],
				speakersObj['Irene Lau'],
				speakersObj['JM Lee'],
			]
		}, {
			'from': new Date('2024/08/24 15:50 EDT'),
			'to': new Date('2024/08/24 16:00 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 16:00 EDT'),
			'to': new Date('2024/08/24 17:00 EDT'),
			'title': 'Oral Presentation from Best Poster Award',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 17:00 EDT'),
			'to': new Date('2024/08/24 18:00 EDT'),
			'title': 'Poster session / Networking',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 18:00 EDT'),
			'to': new Date('2024/08/24 21:00 EDT'),
			'title': 'Networking Dinner',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/25 08:00 EDT'),
			'to': new Date('2024/08/25 09:30 EDT'),
			'title': 'Breakfast and Meeting with Experts',
			'topic': null,
			'sessionDescription': ``,
			'speakers': [
				speakersObj['Hsiao-Ling Hung'],
			],
			'tags': [],
			'rooms': []
		}, {
			'from': new Date('2024/08/25 09:40 EDT'),
			'to': new Date('2024/08/25 10:40 EDT'),
			'title': 'Keynote Speech III: Samir Mitragotri,Core Faculty at Wyss Institute at Harvard University',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Samir Mitragotri'],
			]
		}, {
			'from': new Date('2024/08/25 10:40 EDT'),
			'to': new Date('2024/08/25 10:50 EDT'),
			'title': 'Coffee Break',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/25 10:50 EDT'),
			'to': new Date('2024/08/25 12:20 EDT'),
			'title': 'Panel 3: Translational Science',
			'topic': '',
			'numOfParallelSessions': 2,
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Yi-Li Min'],
				speakersObj['Emily Hsiue'],
			]
		}, {
			'from': new Date('2024/08/25 10:50 EDT'),
			'to': new Date('2024/08/25 12:20 EDT'),
			'title': 'Panel 4: Entrepreneurship',
			'topic': '',
			'numOfParallelSessions': 2,
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Robert Ang'],
				speakersObj['Daniel Fischer'],
				speakersObj['Sabrina Yang'],
				speakersObj['Yen-Ming Hsu'],
			]
		}, {
			'from': new Date('2024/08/25 12:20 EDT'),
			'to': new Date('2024/08/25 12:40 EDT'),
			'title': 'Closing Remarks & Award Ceremony',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}]
	},
	'submission': {
		'title': 'Call for Submissions',
		'showPageLink': true,
		'text': '',
		'link': 'https://easychair.org/conferences/?conf=2024btba'
	},
	'location': {
		'title': 'Location',
		'showPageLink': true,
		'text': 'Venue',
		'address': 'Harvard Northwest Building <br/>52 Oxford St, Cambridge, MA 02138',
		'googleMapLink': 'https://www.google.com/maps/place/Northwest+Building/@42.3801535,-71.1152319,15z/data=!4m6!3m5!1s0x89e37740b5a8044b:0x439e0d320f628161!8m2!3d42.3801535!4d-71.1152319!16s%2Fg%2F11clvx3pq2?entry=ttu',
		'directions': [{
			'method': 'Parking',
			'lots': [{
				'name': 'street parking',
				'description': '$1/hour on Saturday free after 6 pm; free on Sunday',
				'address': 'On Dean Keeton Street',
				'link': ''
			}, {
				'name': 'San Jacinto Garage (SJG)',
				'description': '$3/hour, max $18/day',
				'address': '2401 San Jacinto Boulevard',
				'link': 'https://www.google.com/maps/place/San+Jacinto+Garage/@30.2866002,-97.7330305,17.36z/data=!4m5!3m4!1s0x0:0xa097d977872555e7!8m2!3d30.287725!4d-97.7328837'
			}, {
				'name': 'Speedway Garage (SWG)',
				'description': '$3/hour, max $18/day',
				'address': '2105 E. 27th Street',
				'link': 'https://www.google.com/maps/place/Speedway+Garage+(SWG)/@30.2901508,-97.737673,18z/data=!4m5!3m4!1s0x8644b583975605b3:0x2e2d30a8bb92908a!8m2!3d30.2911695!4d-97.7370948'
			}, {
				'name': '27th Street Garage (TSG)',
				'description': '$3/hour, max $18/day',
				'address': '109 W. 27th St.',
				'link': 'https://www.google.com/maps/place/27th+Street+Garage,+109+W+27th+St,+Austin,+TX+78712/@30.2912949,-97.7407441,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b583b190db59:0x2e1eb5678aa95217!8m2!3d30.2912611!4d-97.7385507'
			}]
		}],
		'lodging': {
			'text': 'Lodging',
			'description': '<a>Drury Inn & Suites Austin North</a> is our partner of TTBA 2017 Symposium. Rooms have been held for TTBA attendees. Make your reservations by <a>Friday, October 13, 2017</a> to receive the group rate. For more info, click the button below.',
			'hotels': [{
				'name': 'Drury Inn & Suites Austin North',
				'location': '6711 IH 35 NORTH, Austin, TX 78752',
				'tel': '(512) 467-9500',
				'displayText': 'Please make your reservations by Wednesday, October 13, 2017 to receive the group rate.'
			}]
		}
	},
	'acknowledgement': {
		'title': 'Organizing Committee',
		'description': '',
		'commitees': commiteesArray
	},
	'sponsor': {
		'title': 'Sponsors',
		'showPageLink': false,
		'sponsors': [
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'NSTC_logo.png',
				'link': 'https://www.nstc.gov.tw'
			},
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'teco.png',
			// 	'link': 'https://www.roc-taiwan.org/usbos_en/'
			// },
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'teco_S_and_T_logo.png',
				'link': 'https://www.nstc.gov.tw/boston/en/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'Ministry_of_Education.png',
				'link': 'https://english.moe.gov.tw/'
			},
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'OCAC.png',
			// 	'link': 'https://www.ocac.gov.tw/OCAC/SubSites/Home.aspx?site=7a4eb84a-7632-4679-ac66-35970250e9c9'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'ihisto.png',
			// 	'link': 'https://www.ihisto.io/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'biolegend.png',
			// 	'link': 'https://www.biolegend.com'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'Wegreened',
			// 	'logoUrl': 'North America Immigration Law Group.png',
			// 	'link': 'https://www.wegreened.com/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'Green Maple Law Group',
			// 	'logoUrl': 'Green_Maple.png',
			// 	'link': 'https://www.greenmaplelaw.com/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'vizuro.png',
			// 	'link': 'https://www.vizuro.com/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'BTCC.png',
			// 	'link': 'https://www.facebook.com/bostonbtcc'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'dcb.png',
			// 	'link': 'https://www.dcb.org.tw/pages/1?locale=en'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'MJNE.png',
			// 	'link': 'http://www.mj-ne.org/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'Immunwork, Inc.',
			// 	'logoUrl': 'Immunwork.png',
			// 	'link': 'https://www.immunwork.com/index.php?lang=en'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'PharmaEssentia.png',
			// 	'link': 'https://us.pharmaessentia.com/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'YBBiotech.png',
			// 	'link': 'https://si.secda.info/yb/'
			// },
			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'taihoya_logo.png',
			// 	'link': 'https://taihoya.com/en'
			// },
		]
	},
	'imgs': [{
		'usage': 'string',
		'imgLinks': []
	}]
};

// module.exports = ttbaSymposium2017;
