import { speakersObj } from './speakers-obj';
import { commiteesArray } from './commitees-array';
import { commiteesObj } from './commitees-array';


export const ttbaSymposium2017 = {
    'symposiumInfo': {
        'name': 'BTBA Symposium 2023',
        'location': 'Virtual',
        'time': {
            'from': new Date('2023/07/08'),
            'to': new Date('2023/07/09')
		},
		'timeZone': 'America/New_York',
        'year': '2023',
        'title': '',
        'showPageLink': false,
        'registrationLink': 'https://www.tickettailor.com/events/btba/676096'
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
        'title': 'BTBA 2023 Annual Symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': `
                <p>2023 BTBA 11th Anniversary Symposium will take place on <b>July 8-9</b>, at the <b>Harvard University Northwest Building, in Cambridge, MA </b></p>
                <p>Featured keynote speakers at the symposium include world-renowned gene editing pioneer <b>Dr George Church</b>, and healthcare entrepreneurship guru <b>Dr. Liz Kwo</b>.</p>
                <p>2023 Symposium speakers will cover a range of topics including cell and gene therapy industry workshop, bioindustry investment panel, trending topics 1, leveraging multi-omics data, real world data, and AI for precision drug discovery and clinical trials and trending topics 2, Health Economics and outcomes research (HEOR). And most important, networking sessions, including the breakfast networking session, lunch career diagnostic room. 
                </p>
                <p>To celebrate our 11th anniversary, we would like to invite you to attend our conference dinner & poster session on July 8, 6:00 pm. This will be not only a great opportunity for you to share your science in poster session but also to get connected with our distinguished speakers, BTBA committee members, and symposium attendees. <a href="https://www.btbatw.org/symposium.html">Learn more about our past annual symposia.</a></p>`
        }, {
            'title': 'Registration',
            'description': `<p>Registration info coming soon</p>`
        }, {
            'title': 'About BTBA',
            'description': '<p>BTBA is a 501(c)(3) non-profit organization started in 2012 by a group of Taiwanese graduate Students, postdocs and young professionals in the greater Boston area. Our goals are to foster individual career development, to enhance scientific collaborations, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US. We hold annual symposiums as well as seminars and workshops throughout the year. We hope to serve as a platform to foster a community for young scientists to share their research, exchange ideas and explore career opportunities. <a href="https://btbatw.org/committee.html">Our organizing committee.</a></p>'
        }]
    },
    'programme': {
        'title': 'Programme',
        'showPageLink': true,
        'schedules': [{
            'from': new Date('2023/07/08 08:00 EDT'),
            'to': new Date('2023/07/08 09:00 EDT'),
            'title': 'Registration and poster set up',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': []
        },{
            'from': new Date('2023/07/08 09:00 EDT'),
            'to': new Date('2023/07/08 09:10 EDT'),
            'title': 'Opening Remarks',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
                commiteesObj['Liang-Yuan Chiu'],
                commiteesObj['Yi-Yun Ho']
            ]
        }, {
            'from': new Date('2023/07/08 09:10 EDT'),
            'to': new Date('2023/07/08 10:00 EDT'),
            'title': 'Keynote Speech I: George Church, Professor at Harvard (Dr. Church will join us virtually)',
            'topic': "",
            'sessionDescription': '',
            //'moderators': [
				//{'name': '', 'link': ''},
                //{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [],
            'speakers': [
                speakersObj['']
            ]
        },{
            'from': new Date('2023/07/08 10:00 EDT'),
            'to': new Date('2023/07/08 10:30 EDT'),
            'title': 'Coffee Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [

            ]
        },{
            'from': new Date('2023/07/08 10:30 EDT'),
            'to': new Date('2023/07/08 12:00 EDT'),
            'title': 'Trending Topic',
            'topic': "Leveraging Real World Data, Multi-Omics Data, and AI for Precision Drug Discovery and clinical trial (Panel discussion)",
            'sessionDescription': `<p>Pharmaceutical and life sciences industries increasingly embrace the use of rich data and better digital technologies such as artificial intelligence (AI) to extract insights. Leveraging diverse sources of data (such as those generated in R&D, clinical trials, and from caregivers and patients) have led us to a new era in which we can reimagine medical innovation.</p>
            <p>In this panel, we have invited three experts from the healthcare industry. They will share their experience in developing data-driven innovation, such as drug target identification, drug discovery, and clinical development.</p>`,
            //'moderators': [
				//{'name': '', 'link': ''},
				//{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Bin Li'],
                speakersObj['Yi-Hsiang Hsu']
			]
        }, {
            'from': new Date('2023/07/08 12:00 EDT'),
            'to': new Date('2023/07/08 14:30 EDT'),
            'title': 'Lunch & Career diagnostic room',
            'topic': null,
            'sessionDescription': '',
            //'moderators': [],
            'tags': [],
            'rooms': [],
            'speakers': []
        }, {
            'from': new Date('2023/07/08 14:30 EDT'),
            'to': new Date('2023/07/08 16:00 EDT'),
            'numOfParallelSessions': 2,
            'title': 'Workshop 1',
            'topic': 'Cell and Gene Therapy: Career Insights into the Preclinical and Clinical Stages of Drug Development Life Cycle',
			'sessionDescription': ``,
            //'moderators': [
				//{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [],
            'speakers': [
                //speakersObj['Christina Haddad']
			]
        }, {
            'from': new Date('2023/07/08 14:30 EDT'),
            'to': new Date('2023/07/08 16:00 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Workshop 2',
            'topic': 'Beyond the Bench: Navigate Successful Career Paths in Biotech Capital Market',
            'sessionDescription': ``,
            //'moderators': [
				//{'name': '', 'link': ''},
                //{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [],
            'speakers': [
                //commiteesObj['Szu-Ta Chen'],
            ]
        }, {
            'from': new Date('2023/07/08 16:00 EDT'),
            'to': new Date('2023/07/08 17:00 EDT'),
            'title': 'Oral Presentation',
            'topic': '',
			'sessionDescription': '',
            //'moderators': [
				//{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [''],
            'speakers': []
        }, {
            'from': new Date('2023/07/08 17:00 EDT'),
            'to': new Date('2023/07/08 18:00 EDT'),
            'title': 'Coffee Break & Networking',
            'topic': '',
			'sessionDescription': '',
            'tags': [],
            'rooms': [''],
            'speakers': []
        },{
            'from': new Date('2023/07/08 18:00 EDT'),
            'to': new Date('2023/07/08 20:00 EDT'),
            'title': 'Networking Dinner & Poster session',
            'topic': '',
			'sessionDescription': '',
            'tags': [],
            'rooms': [''],
            'speakers': []
        },{
            'from': new Date('2023/07/09 08:00 EDT'),
            'to': new Date('2023/07/09 09:30 EDT'),
            'title': 'Breakfast and Meet',
            'topic': null,
			'sessionDescription': ``,
            //'moderators': [
				//{'name': '', 'link': ''},
                //{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [''],
            'speakers': []
        },{
            'from': new Date('2023/07/09 09:20 EDT'),
            'to': new Date('2023/07/09 10:20 EDT'),
            'title': 'Keynote Speech II: Liz Kwo, CMO, Everly Health',
            'topic': '',
			'sessionDescription': '',
			//'moderators': [
				//{'name': '', 'link': ''},
				//{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [''],
            'speakers': [
                //speakersObj['Jeannie Lee'],
                speakersObj['']
            ]
        },{
            'from': new Date('2023/07/09 10:20 EDT'),
            'to': new Date('2023/07/09 10:30 EDT'),
            'title': 'Coffee Break',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': [''],
            'speakers': []
        },{
            'from': new Date('2023/07/09 10:30 EDT'),
            'to': new Date('2023/07/09 12:00 EDT'),
            'title': 'Trending topic: Health Economcis and Outcomes Research (HEOR)',
            'topic': '',
			'sessionDescription': ``,
			//'moderators': [
				//{'name': '', 'link': ''},
				//{'name': '', 'link': ''}
			//],
            'tags': [],
            'rooms': [],
            'speakers': [
			]
        }, {
            'from': new Date('2023/07/09 12:00 EDT'),
            'to': new Date('2023/07/09 12:30 EDT'),
            'title': 'Closing Remarks & Award Ceremony',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Liang-Yuan Chiu'],
                commiteesObj['Yi-Yun Ho']
            ]
        }]
    },
    'submission': {
        'title': 'Call for Submissions',
        'showPageLink': true,
        'text': '',
        'link': 'https://easychair.org/conferences/?conf=2023btba'
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
            'logoUrl': 'teco_S_and_T_logo.png',
            'link': 'https://www.most.gov.tw/boston/en'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'Ministry_of_Education.png',
            'link': 'https://english.moe.gov.tw/'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'teco.png',
            'link': 'https://www.roc-taiwan.org/usbos_en/'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'OCAC.png',
            'link': 'https://english.ocac.gov.tw/ocac/eng/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'metis.png',
            'link': 'https://www.metistx.com/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'ihisto.png',
            'link': 'https://www.ihisto.io/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'ast.png',
            'link': 'https://www.astp.com/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'MJNE.png',
            'link': 'http://www.mj-ne.org/'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'biolegend.png',
            'link': 'https://www.biolegend.com'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'BTCC.png',
            'link': 'https://www.facebook.com/bostonbtcc'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'NATMA.png',
            'link': 'https://www.natma.org'
        },{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'vizuro.png',
            'link': 'https://www.vizuro.com/'
        },
        {
           'level': 'string',
           'name': 'string',
           'logoUrl': 'lantheus.png',
           'link': 'https://www.lantheus.com'
        },
        {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'wellesley-toyota.png',
            'link': 'https://www.wellesleytoyota.com/dealership/about.htm'
        },
		{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'dcb.png',
            'link': 'https://www.dcb.org.tw/pages/1?locale=en'
        } ]
    },
    'imgs': [{
        'usage': 'string',
        'imgLinks': []
    }]
};

// module.exports = ttbaSymposium2017;


