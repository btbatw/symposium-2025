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
			'to': new Date('2024/08/24 08:45 EDT'),
			'title': 'Registration and Poster Setup',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 08:45 EDT'),
			'to': new Date('2024/08/24 09:00 EDT'),
			'title': 'Opening Remarks',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Pei-Jung Wu'],
				speakersObj['Ming-Ju Tsai'],
			]
		}, {
			'from': new Date('2024/08/24 09:00 EDT'),
			'to': new Date('2024/08/24 10:00 EDT'),
			'title': 'Keynote Speech I: Laura Sepp-Lorenzino, CSO at Intellia Therapeutics',
			'topic': "A journey on innovation: Making genetic medicines are reality for patients",
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [speakersObj['Laura Sepp-Lorenzino']],
			'moderators': [
				{'name': 'Pei-Jung Wu', 'link': 'https://www.linkedin.com/in/pei-jung-wu-94ba1a159'},
				{'name': 'Shu-Wei Wu', 'link': 'https://www.linkedin.com/in/shu-wei-wu-570a98120/'}
			],
		}, {
			'from': new Date('2024/08/24 10:00 EDT'),
			'to': new Date('2024/08/24 10:20 EDT'),
			'title': 'Group Photo and Coffee Break',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 10:20 EDT'),
			'to': new Date('2024/08/24 11:50 EDT'),
			'title': 'Trending Topic',
			'topic': 'Antibody-Drug Conjugate (ADC): Challenges and Opportunities',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Yuk-Cheung (Chris) Chan'],
				speakersObj['Rakesh Dixit'],
				speakersObj['Yvonne (Yi-Yang) Lau'],
				speakersObj['Ting-Hui Wu'],
			],
			'moderators': [
				{'name': 'Hsuan-Ping Chang', 'link': 'https://www.linkedin.com/in/hsuan-ping-chang/'},
				{'name': 'Shu-Hong Lin', 'link': 'https://www.linkedin.com/in/shuhong-lin-bioinfo/'}
			],
		}, {
			'from': new Date('2024/08/24 11:50 EDT'),
			'to': new Date('2024/08/24 12:00 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 12:00 EDT'),
			'to': new Date('2024/08/24 13:45 EDT'),
			'title': 'Lunch & Round Table with Speakers - Industry',
			'numOfParallelSessions': 2,
			'topic': null,
			'sessionDescription': `
			<p>Topics</p>
			<ul>
				<li>Industry Room1: Jon hunting</li>
				<li>Industry Room2:  Stress Management</li>
				<li>Industry Room3: Leadership and Management</li>
				<li>Industry Room4: Different Possibilities in the Industry</li>
				<li>Industry Room5: Goal Setting and Strategies for Career Advancement</li>
			</ul>`,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Szu-Ta (Starr) Chen'],
				speakersObj['Wen-Chi Chou'],
				speakersObj['Emily Hsiue'],
				speakersObj['Hsiao-Ling Hung'],
				speakersObj['Yvonne (Yi-Yang) Lau'],
				speakersObj['Lih-Ling Lin'],
				speakersObj['June Lin'],
				speakersObj['Mei-Hsiu Ling'],
				speakersObj['Jason (Yen-Chun) Lu'],
				speakersObj['Yi-Li Min'],
				speakersObj['Ting-Hui Wu'],
				speakersObj['Po-Jen (Will) Yen'],
			]
		}, {
			'from': new Date('2024/08/24 12:00 EDT'),
			'to': new Date('2024/08/24 13:45 EDT'),
			'title': 'Lunch & Round Table with Speakers - Academic',
			'numOfParallelSessions': 2,
			'topic': '',
			'sessionDescription': `
			<p>Topics</p>
			<ul>
				<li>Academia Room1: Industrial or Academic Postdoc? (Speaker: Yen-Cheng Chen & Yi-Yun Ho)</li>
				<li>Academia Room2: How can I apply for my first grant as a young professional or faculty member? (Speaker: Meng-Ju Wu & Ming-Ru Wu)</li>
				<li>Academia Room3: Differences in the Academic Environments Between Taiwan and the U.S.(Speaker: Mong-Hsun Tsai & Hsiao-Ying Monica Wey)</li>
			</ul>`,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Yen-Cheng Chen'],
				speakersObj['Yi-Yun Ho'],
				speakersObj['Mong-Hsun Tsai'],
				speakersObj['Hsiao-Ying Monica Wey'],
				speakersObj['Meng-Ju Wu'],
				speakersObj['Ming-Ru Wu'],
			]
		}, {
			'from': new Date('2024/08/24 13:45 EDT'),
			'to': new Date('2024/08/24 14:00 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 14:00 EDT'),
			'to': new Date('2024/08/24 15:30 EDT'),
			'numOfParallelSessions': 2,
			'title': 'Panel 1: Advanced Bioprocessing',
			'topic': 'Advanced Bioprocessing and CDMO',
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Mark Brader'],
				speakersObj['Chih-Chi (Jimmy) Chu'],
				speakersObj['Samantha Hullah'],
				speakersObj['Nicole Payton'],
			],
			'moderators': [
				{'name': 'Wei-Chung (Jimmy) Luo', 'link': 'https://www.linkedin.com/in/jimmy-luo/'},
				{'name': 'Chia-Hsing Pi', 'link': 'https://www.linkedin.com/in/chia-hsing-pi-13a29490/'}
			],
		}, {
			'from': new Date('2024/08/24 14:00 EDT'),
			'to': new Date('2024/08/24 15:30 EDT'),
			'numOfParallelSessions': 2,
			'title': 'Panel 2: Business Development',
			'topic': 'Exploring the Role of Business Development in Modern Drug Discovery Strategy',
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['JM Lee'],
				speakersObj['Gina Song'],
				speakersObj['Po-Jen (Will) Yen'],
			],
			'moderators': [
				{'name': 'Maurice Shen', 'link': 'https://www.linkedin.com/in/maurice-shen-ph-d-40a86121/'},
				{'name': 'Yi-Yun Ho', 'link': ''}
			],
		}, {
			'from': new Date('2024/08/24 15:30 EDT'),
			'to': new Date('2024/08/24 15:40 EDT'),
			'title': 'Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 15:40 EDT'),
			'to': new Date('2024/08/24 16:40 EDT'),
			'title': 'Special Talk: Robert Ang, President and CEO at Vor Bio',
			'topic': 'The Story of a Double Migrant in Biotech',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [speakersObj['Robert Ang']],
			'moderators': [
				{'name': 'Chun Liu', 'link': 'https://www.linkedin.com/in/chun-liu-sysbiophys/'},
				{'name': 'Liang-Yuan Chiu', 'link': 'https://www.linkedin.com/in/liang-yuan-chiu-0307678b/'}
			],
		}, {
			'from': new Date('2024/08/24 16:40 EDT'),
			'to': new Date('2024/08/24 17:40 EDT'),
			'title': 'Oral Presentation from Best Poster Award',
			'topic': '',
			'sessionDescription': `
			<ol>
				<li>Using nanoparticles as artificial antigen presenting cells to activate human CD4 T cells for immunotherapy</li>
				<li>Predicting Antibody Developability Properties using Machine Learning</li>
				<li>Genome-wide Screening Identifies Trim33 as an Essential Regulator of Dendritic Cell Differentiation</li>
			</ol>
			`,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Si-Sim Kang'],
				speakersObj['Hsin-Ting Chen'],
				speakersObj['Pei-Feng Hsu'],
			],
			'moderators': [
				{'name': 'Alex Yi-Lin Tsai', 'link': 'https://www.linkedin.com/in/alexyilintsai/'},
				{'name': 'Hsin-Wen Liang', 'link': ''}
			],
		}, {
			'from': new Date('2024/08/24 17:40 EDT'),
			'to': new Date('2024/08/24 18:30 EDT'),
			'title': 'Poster session / Coffee Break',
			'topic': '',
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': []
		}, {
			'from': new Date('2024/08/24 18:30 EDT'),
			'to': new Date('2024/08/24 20:30 EDT'),
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
				speakersObj['Ethen Cheng'],
				speakersObj['Hee June Choi'],
				speakersObj['Chia-Yu Chung'],
				speakersObj['Szu-Chin (George) Fu'],
				speakersObj['Yi-Chen Hsieh'],
				speakersObj['Tsung-Lin Hsieh'],
				speakersObj['Yan-Shu Huang'],
				speakersObj['Amy (Yu-Han) Hung'],
				speakersObj['Hsiao-Ling Hung'],
				speakersObj['Rose (MingJeng) Lee'],
				speakersObj['Hong-Guann Lee'],
				speakersObj['Yi-En Liao'],
				speakersObj['June Lin'],
				speakersObj['Jason (Yen-Chun) Lu'],
				speakersObj['Jimmy Luo'],
				speakersObj['Yi-Li Min'],
				speakersObj['Robert Morfino'],
				speakersObj['Chia-Hsing Pi'],
				speakersObj['Maurice Shen'],
				speakersObj['Chun Mei Su'],
				speakersObj['Phoebe Tsai'],
				speakersObj['Anthony Wang'],
				speakersObj['Laurie (Yen-Chi) Wu'],
			],
			'tags': [],
			'rooms': []
		}, {
			'from': new Date('2024/08/25 09:40 EDT'),
			'to': new Date('2024/08/25 10:40 EDT'),
			'title': 'Keynote Speech II: Samir Mitragotri, Core Faculty at Wyss Institute/Harvard University',
			'topic': `A Hitchhiker's and Backpacker's Guide to Drug Delivery`,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Samir Mitragotri'],
			],
			'moderators': [
				{'name': 'Yu-Ting Huang', 'link': 'https://www.linkedin.com/in/yu-ting-huang-b2b9069b/'},
				{'name': 'Yun-Ti Chen', 'link': 'https://www.linkedin.com/in/yun-ti-chen-704189107/'}
			],
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
			'topic': 'Bridging the gap: translational science from discovery to patient impact',
			'numOfParallelSessions': 2,
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Liang-Hui Chu'],
				speakersObj['GuoPing Feng'],
				speakersObj['Emily Hsiue'],
			],
			'moderators': [
				{'name': 'Yi-En Liao', 'link': 'https://www.linkedin.com/in/yien-liao/'},
				{'name': 'Yuan-Chen Chang', 'link': 'https://www.linkedin.com/in/yuanchenchang0726/'}
			],
		}, {
			'from': new Date('2024/08/25 10:50 EDT'),
			'to': new Date('2024/08/25 12:20 EDT'),
			'title': 'Panel 4: Entrepreneurship',
			'topic': 'Biotech Entrepreneur Forum-Shaping the Future with Biotech Industry Leaders',
			'numOfParallelSessions': 2,
			'sessionDescription': ``,
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Robert Ang'],
				speakersObj['Daniel Fischer'],
				speakersObj['David Lee'],
				speakersObj['Sabrina Yang'],
			],
			'moderators': [
				{'name': 'George Wang', 'link': 'https://www.linkedin.com/in/george-wang-formosa-83348250/'},
				{'name': 'Duane Juang', 'link': 'https://www.linkedin.com/in/duanesj/'}
			],
		}, {
			'from': new Date('2024/08/25 12:20 EDT'),
			'to': new Date('2024/08/25 12:40 EDT'),
			'title': 'Closing Remarks & Award Ceremony',
			'topic': null,
			'sessionDescription': '',
			'tags': [],
			'rooms': [],
			'speakers': [
				speakersObj['Pei-Jung Wu'],
				speakersObj['Ming-Ju Tsai'],
			]
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
				'name': 'NTSC (國科會)',
				'logoUrl': 'NSTC_logo.png',
				'link': 'https://www.nstc.gov.tw'
			},
			{
				'level': 'string',
				'name': 'TECO Boston',
				'logoUrl': 'teco.png',
				'link': 'https://www.roc-taiwan.org/usbos_en/'
			},
			{
				'level': 'string',
				'name': 'Ministry of Education',
				'logoUrl': 'Ministry_of_Education.png',
				'link': 'https://english.moe.gov.tw/'
			},
			{
				'level': 'string',
				'name': '僑委會',
				'logoUrl': 'OCAC.png',
				'link': 'https://www.ocac.gov.tw/OCAC/SubSites/Home.aspx?site=7a4eb84a-7632-4679-ac66-35970250e9c9'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'PharmaEssentia.png',
				'link': 'https://us.pharmaessentia.com/'
			},
			{
				'level': '',
				'name': 'metistx',
				'logoUrl': 'metis.png',
				'link': 'https://www.metistx.com/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'MJNE.png',
				'link': 'http://www.mj-ne.org/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'Applied-Photophysics.png',
				'link': 'https://www.photophysics.com/'
			},
			{
				'level': 'string',
				'name': 'iHisto',
				'logoUrl': 'ihisto.png',
				'link': 'https://www.ihisto.io/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'taihoya_logo.png',
				'link': 'https://taihoya.com/en'
			},
			{
				'level': 'string',
				'name': 'Vizuro',
				'logoUrl': 'vizuro.png',
				'link': 'https://www.vizuro.com/'
			},
			{
				'level': 'string',
				'name': '3G Leadership Solutions',
				'logoUrl': '3g-leadership-solutions.png',
				'link': 'https://www.linkedin.com/in/chia-lin-ho/'
			},
			{
				'level': 'string',
				'name': 'BioLegend',
				'logoUrl': 'biolegend.png',
				'link': 'https://www.biolegend.com'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'dcb.png',
				'link': 'https://www.dcb.org.tw/pages/1?locale=en'
			},
			{
				'level': 'string',
				'name': 'InFocus Therapeutics',
				'logoUrl': 'infocus-therapeutics.png',
				'link': 'https://infocustx.com/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'sheen-lab.png',
				'link': 'https://molbio.mgh.harvard.edu/sheenweb/main_page.html'
			},
			{
				'level': 'string',
				'name': 'SinoBiological',
				'logoUrl': 'sino.png',
				'link': 'https://www.sinobiological.com/'
			},
			{
				'level': 'string',
				'name': '永昕生物醫藥',
				'logoUrl': 'mycenax.png',
				'link': 'https://www.mycenax.com/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'ab-biosciences.png',
				'link': 'https://abbiosciences.com/'
			},
			{
				'level': 'string',
				'name': 'Wellesley Toyota',
				'logoUrl': 'wellesley-toyota.png',
				'link': 'https://www.wellesleytoyota.com/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'BTCC.png',
				'link': 'https://www.facebook.com/bostonbtcc'
			},
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
			// 	'name': 'Immunwork, Inc.',
			// 	'logoUrl': 'Immunwork.png',
			// 	'link': 'https://www.immunwork.com/index.php?lang=en'
			// },

			// {
			// 	'level': 'string',
			// 	'name': 'string',
			// 	'logoUrl': 'YBBiotech.png',
			// 	'link': 'https://si.secda.info/yb/'
			// },
		]
	},
	'imgs': [{
		'usage': 'string',
		'imgLinks': []
	}]
};

// module.exports = ttbaSymposium2017;
