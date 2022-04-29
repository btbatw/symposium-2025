import { speakersObj } from './speakers-obj';
import { commiteesArray } from './commitees-array';
import { commiteesObj } from './commitees-array';


export const ttbaSymposium2017 = {
    'symposiumInfo': {
        'name': 'BTBA Symposium 2022',
        'location': 'Virtual',
        'time': {
            'from': new Date('2022/07/23'),
            'to': new Date('2022/07/24')
		},
		'timeZone': 'America/New_York',
        'year': '2022',
        'title': 'HUSTLING IN THE ERA OF BIOTECH',
        'showPageLink': false,
        'registrationLink': ''
    },
    'host': {
        'name': 'Boston Taiwanese Biotechnology Association',
        'nameShort': 'BTBA',
        'nameCh': '波士頓臺灣人生物科技協會',
        'webLink': 'https://www.btbatw.org/',
		'logoSmall': 'logo-ttba-small.png',
		'email': 'btba.tw@gmail.com',
		'supportLink': 'https://www.btbatw.org/support.html'
    },
    'about': {
        'title': '2022 BTBA Annual Symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': `<p>The Boston Taiwanese Biotechnology Association (BTBA) will hold its 10th BTBA Annual Symposium (in-person) on July 23 and 24, 2022 in Boston. There will be keynote speeches, career development workshops, poster presentations, and networking sessions at the event. We cordially invite you to attend our annual symposium to share, learn, and network. Early bird registration will open soon. Please stay tuned and follow our social media for further announcements. We look forward to seeing you this summer in Boston! <a href="https://btbatw.org/symposium.html">Learn more about our past annual symposia.</a></p>`
        }, {
            'title': 'Registration',
            'description': '<p>Early bird registration will be open in early May. Please stay tuned and follow our social media and this website for further announcements.</p>'
        }, {
            'title': 'About BTBA',
            'description': '<p>BTBA is a 501(c)(3) non-profit organization started in 2012 by a group of Taiwanese graduate Students, postdocs and young professionals in the greater Boston area. Our goals are to foster individual career development, to enhance scientific collaborations, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US. We hold annual symposiums as well as seminars and workshops throughout the year. We hope to serve as a platform to foster a community for young scientists to share their research, exchange ideas and explore career opportunities. <a href="https://btbatw.org/committee.html">Our organizing committee.</a></p>'
        }]
    },
    'programme': {
        'title': 'Programme',
        'showPageLink': true,
        'schedules': [{
            'from': new Date('2022/07/23 08:00 EDT'),
            'to': new Date('2022/07/23 09:00 EDT'),
            'title': 'Registration',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': []
        },{
            'from': new Date('2022/07/23 09:00 EDT'),
            'to': new Date('2022/07/23 09:10 EDT'),
            'title': 'Opening Remarks',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
                commiteesObj['Yu-Tien Hsu'],
                commiteesObj['Chih-Hung Chou']
            ]
        }, {
            'from': new Date('2022/07/23 09:10 EDT'),
            'to': new Date('2022/07/23 10:10 EDT'),
            'title': 'Keynote Speech I',
            'topic': "Keynote by Robert S. Langer, Professor at MIT",
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
                speakersObj['Robert Langer']
            ]
        },{
            'from': new Date('2022/07/23 10:10 EDT'),
            'to': new Date('2022/07/23 10:30 EDT'),
            'title': 'Coffee Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
                
            ]
        },{
            'from': new Date('2022/07/23 10:30 EDT'),
            'to': new Date('2022/07/23 12:00 EDT'),
            'title': 'Trending Topic',
            'topic': "Data-driven innovation in healthcare industry: drug discovery and clinical trial (Panel discussion)",
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				//speakersObj['Herren Wu'],
			]
        }, {
            'from': new Date('2022/07/23 12:00 EDT'),
            'to': new Date('2022/07/23 13:40 EDT'),
            'title': 'Lunch & Round Table with Speakers',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': []
        }, {
            'from': new Date('2022/07/23 13:50 EDT'),
            'to': new Date('2022/07/23 14:50 EDT'),
            'title': 'Special Talk',
            'topic': 'Special Talk by Timothy Yu, Associate Professor at Harvard Medical School',
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Timothy Yu']
			]
        }, {
            'from': new Date('2022/07/23 14:50 EDT'),
            'to': new Date('2022/07/23 15:00 EDT'),
            'title': 'Coffee Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': []
        }, {
            'from': new Date('2022/07/23 15:00 EDT'),
            'to': new Date('2022/07/23 16:30 EDT'),
            'numOfParallelSessions': 2,
            'title': 'Workshop 1',
            'topic': 'How to Sail Smoothly from School to Industry',
			'sessionDescription': null,
            'tags': [],
            'rooms': [],
            'speakers': [
                speakersObj['Jason Lin'],
                speakersObj['Michael Dubrosky']
			]
        }, {
            'from': new Date('2022/07/23 15:00 EDT'),
            'to': new Date('2022/07/23 16:30 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Workshop 2',
            'topic': 'Careers in Biotech Industry (Panel discussion)',
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                //commiteesObj['Szu-Ta Chen'],
                //speakersObj['Hsiao-Ling Hung'],
                //speakersObj['Allen Chia-En Lien'],
                //speakersObj['Dajun Sun'],
                //speakersObj['Rosa Wang'],
                //commiteesObj['Margaret (Chia-Ying) Wey'],
            ]
        }, {
            'from': new Date('2022/07/23 16:30 EDT'),
            'to': new Date('2022/07/23 17:30 EDT'),
            'numOfParallelSessions': 2,
            'title': 'Poster session',
            'topic': '',
			'sessionDescription': null,
            'tags': [],
            'rooms': [],
            'speakers': [
				//speakersObj['Sengwee Darren Toh'],
				//speakersObj['Lina Titievsky'],
				//speakersObj['Liz Garry'],
				// speakersObj['Shianhuey Chiang'],
			]
        }, {
            'from': new Date('2022/07/23 16:30 EDT'),
            'to': new Date('2022/07/23 17:30 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Oral Presentation',
            'topic': '',
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                //commiteesObj['Szu-Ta Chen'],
                //speakersObj['Hsiao-Ling Hung'],
                //speakersObj['Allen Chia-En Lien'],
                //speakersObj['Dajun Sun'],
                //speakersObj['Rosa Wang'],
                //commiteesObj['Margaret (Chia-Ying) Wey'],
            ]
        }, {
            'from': new Date('2022/07/23 18:30 EDT'),
            'to': new Date('2022/07/23 20:30 EDT'),
            'title': 'BTBA 10th Annual Symposium Gala',
            'topic': '',
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                //commiteesObj['Szu-Ta Chen'],
                //speakersObj['Hsiao-Ling Hung'],
                //speakersObj['Allen Chia-En Lien'],
                //speakersObj['Dajun Sun'],
                //speakersObj['Rosa Wang'],
                //commiteesObj['Margaret (Chia-Ying) Wey'],
            ]
        },{
            'from': new Date('2022/07/24 08:00 EDT'),
            'to': new Date('2022/07/24 09:30 EDT'),
            'title': 'Breakfast and Meeting with Experts',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': []
        },{
            'from': new Date('2022/07/24 09:40 EDT'),
            'to': new Date('2022/07/24 10:40 EDT'),
            'title': 'Keynote Speech II',
            'topic': "Keynote by Jo Vincey, CEO at Seismic Therapeutic",
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                //speakersObj['Jeannie Lee'],
                speakersObj['Jo Viney']
            ]
        },{
            'from': new Date('2022/07/24 10:40 EDT'),
            'to': new Date('2022/07/24 10:50 EDT'),
            'title': 'Coffee Break',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': []
        },{
            'from': new Date('2022/07/24 10:50 EDT'),
            'to': new Date('2022/07/24 12:20 EDT'),
            'numOfParallelSessions': 2,
            'title': 'Workshop 3',
            'topic': 'Academic Panel Discussion, The Academic Roadmap',
			'sessionDescription': null,
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Chia-Wei Cheng'],
				speakersObj['Erica Cai'],
				speakersObj['Chih-Chun Lin'],
				speakersObj['Morgan Sheng'],
			]
        }, {
            'from': new Date('2022/07/24 10:50 EDT'),
            'to': new Date('2022/07/24 12:20 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Workshop 4',
            'topic': 'Startup Panel',
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Robert Schultz']
            ]
        },{
            'from': new Date('2022/07/24 12:20 EDT'),
            'to': new Date('2022/07/24 12:40 EDT'),
            'title': 'Closing Remarks & Award Ceremony',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Yu-Tien Hsu'],
                commiteesObj['Chih-Hung Chou']
            ]
        }]
    },
    'submission': {
        'title': 'Call for Submissions',
        'showPageLink': true,
        'text': '',
        'link': 'https://easychair.org/conferences/?conf=btba2022'
    },
    'location': {
        'title': 'Location',
        'showPageLink': false,
        'text': 'Venue',
        'address': 'Harvard Northwest Science Building <br/>52 Oxford St, Cambridge, MA 02138',
        'googleMapLink': 'https://www.google.com/maps/place/Harvard+Northwest+Science+Building/@42.3799895,-71.1153309,18.44z/data=!4m12!1m6!3m5!1s0x89e37740b5a8044b:0x57eea3d2dca3f603!2sHarvard+Northwest+Science+Building!8m2!3d42.3799895!4d-71.1153309!3m4!1s0x89e37740b5a8044b:0x57eea3d2dca3f603!8m2!3d42.3799895!4d-71.1153309',
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
        'sponsors': [{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'taiwan_ministry_of_science_and_technology.png',
            'link': 'https://www.most.gov.tw/?l=en'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'logo_teco_boston.png',
            'link': 'https://www.roc-taiwan.org/usbos_en/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'lift_logo.png',
            'link': 'https://lifttaiwan.stpi.narl.org.tw/en'
        }]
    },
    'imgs': [{
        'usage': 'string',
        'imgLinks': []
    }]
};

// module.exports = ttbaSymposium2017;


