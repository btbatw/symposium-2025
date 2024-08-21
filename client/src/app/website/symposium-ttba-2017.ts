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
		'programbookLink': 'https://www.canva.com/design/DAGK-ORbYj0/bcREqkkhg_nr97yOpXb5dg/view?utm_content=DAGK-ORbYj0&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
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
			'topic': "A Journey In Innovation: Making Genetic Medicines A Reality for Patients",
			'sessionDescription': 'Many of us in science and biopharma are driven by personal connections to disease and an inner drive to find safe and effective therapies - ideally cures - to improve the lives of patients and their families. Dr. Sepp-Lorenzino has been privileged to work with talented colleagues in innovative organizations to translate science into medicine. She will be sharing some of her journey and what she has learned along the way, as well as the exciting work being pursued at Intellia Therapeutics. They are employing a modular gene editing platform to create diverse in vivo and ex vivo therapeutics, spanning a range of disease indications. Guided by this full-spectrum approach, they are committed to making CRISPR-based medicines a reality for people suffering from genetic diseases and to creating novel engineered cell therapies for various cancers and autoimmune diseases.',
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
				<li>Industry-I (B105): Job Hunting. Hosts: Wen-Chi Chou & Jason (Yen-Chun) Lu</li>
				<li>Industry-II (B110): Stress Management. Hosts: Emily Hsiue & Mei-Hsiu Ling</li>
				<li>Industry-III (B106): Leadership and Management. Hosts: Yi-Li Min & Hsiao-Ling Hung & Yvonne (Yi-Yang) Lau</li>
				<li>Industry-IV (B104): Different Possibilities in the Industry. Hosts: Po-Jen (Will) Yen & Ting-Hui Wu</li>
				<li>Industry-V (B107): Goal Setting and Strategies for Career Advancement. Hosts: Szu-Ta (Starr) Chen & Lih-Ling Lin & June Lin</li>
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
				<li>Academia-I (1F-Table II): PhD or not? Which is better after PhD? Industrial or Academic postdoc? Hosts: Yen-Cheng Chen & Yi-Yun Ho</li>
				<li>Academia-II (B109): How can I apply for my first grant as a young professional or faculty member? Hosts: Meng-Ju Wu & Ming-Ru Wu</li>
				<li>Academia-III (1F-Table II): Difference between the academic environment in Taiwan and the U.S. Hosts: Mong-Hsun Tsai & Hsiao-Ying Monica Wey</li>
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
			'sessionDescription': 'Dr. Samir will discuss some key observations and learnings from his journey which have had a deep impact on him. He will also summarize the experiences and people that provided the foundation for his approach to research, education and entrepreneurship. He will end his talk by discussing their current research and approach to nanoparticle-based drug delivery systems. Despite their promise, poor vascular circulation, limited targeting and the inability to negotiate many biological barriers have limited their clinical translation. Biology has provided many examples of successful “carriers” in the form of circulatory cells, which routinely overcome the hurdles faced by synthetic nanoparticle systems. They have explored “cellular hitchhiking and backpacking” approaches which involve combining synthetic particles with circulatory cells to drastically alter the in vivo fate of the particles as well as the cells. He will provide an overview of the principles and examples of hitchhiking and backpacking approaches for drug and cell therapy.',
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
			'topic': 'Bridging The Gap: Translational Science From Discovery To Patient Impact',
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
				'name': 'Ministry of Education 教育部',
				'logoUrl': 'Ministry_of_Education.png',
				'link': 'https://english.moe.gov.tw/'
			},
			{
				'level': 'string',
				'name': 'TECO Boston',
				'logoUrl': 'teco.png',
				'link': 'https://www.roc-taiwan.org/usbos_en/'
			},
			{
				'level': 'string',
				'name': '僑委會',
				'logoUrl': 'OCAC.png',
				'link': 'https://www.ocac.gov.tw/OCAC/SubSites/Home.aspx?site=7a4eb84a-7632-4679-ac66-35970250e9c9'
			},
			{
				'level': 'string',
				'name': 'PharmaEssentia',
				'logoUrl': 'PharmaEssentia.png',
				'link': 'https://us.pharmaessentia.com/'
			},
			{
				'level': '',
				'name': 'METiS Therapeutics',
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
				'level': '',
				'name': 'WW Holding',
				'logoUrl': 'ww-holding.png',
				'link': 'https://www.ww-holding.com.tw/en/'
			},
			{
				'level': 'string',
				'name': 'iHisto',
				'logoUrl': 'ihisto.png',
				'link': 'https://www.ihisto.io/'
			},
			{
				'level': 'string',
				'name': 'Vizuro',
				'logoUrl': 'vizuro.png',
				'link': 'https://www.vizuro.com/'
			},
			{
				'level': 'string',
				'name': 'Genemessener Science/Taihoya',
				'logoUrl': 'taihoya_logo.png',
				'link': 'https://taihoya.com/en'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'Applied-Photophysics.png',
				'link': 'https://www.photophysics.com/'
			},
			{
				'level': 'string',
				'name': 'Wegreened',
				'logoUrl': 'North America Immigration Law Group.png',
				'link': 'https://www.wegreened.com/'
			},
			{
				'level': 'string',
				'name': 'BioLegend',
				'logoUrl': 'biolegend.png',
				'link': 'https://www.biolegend.com'
			},
			{
				'level': 'string',
				'name': 'Development Center of Biotechnology',
				'logoUrl': 'dcb.png',
				'link': 'https://www.dcb.org.tw/pages/1?locale=en'
			},
			{
				'level': 'string',
				'name': '3G Leadership Solutions',
				'logoUrl': '3g-leadership-solutions.png',
				'link': 'https://www.linkedin.com/in/chia-lin-ho/'
			},
			{
				'level': 'string',
				'name': 'Home Boston Group',
				'logoUrl': 'home-boston-group.png',
				'link': 'https://homeboston-spassetinvest.mystrikingly.com'
			},
			{
				'level': 'string',
				'name': 'InFocus Therapeutics',
				'logoUrl': 'infocus-therapeutics.png',
				'link': 'https://infocustx.com/'
			},
			{
				'level': 'string',
				'name': 'SinoBiological',
				'logoUrl': 'sino.png',
				'link': 'https://www.sinobiological.com/'
			},
			{
				'level': 'string',
				'name': 'MT Law LCC',
				'logoUrl': 'mt-law-lcc.png',
				'link': 'https://www.mtlawllc.com/en/homepage'
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
				'logoUrl': 'sheen-lab.png',
				'link': 'https://molbio.mgh.harvard.edu/sheenweb/main_page.html'
			},
			{
				'level': 'string',
				'name': 'Prometrika',
				'logoUrl': 'prometrika.png',
				'link': 'https://www.prometrika.com/'
			},
			{
				'level': 'string',
				'name': 'string',
				'logoUrl': 'BTCC.png',
				'link': 'https://www.facebook.com/bostonbtcc'
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
