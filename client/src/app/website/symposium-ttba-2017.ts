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
        'title': 'BTBA 2022 Annual Symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': `<p>2022 BTBA 10th Anniversary Symposium will take place on <b>July 23-24</b>, at the <b>Harvard University Northwest Building, in Cambridge, MA. </b>Since 2013, BTBA has hosted 9 annual symposiums, each attracting more than 300 attendees from across North America, Europe, and Asia each year.</p>
            <p>Featured keynote speakers at the symposium include <b>Prof. Robert Langer</b>, David H. Koch Institute Professor at MIT, and <b>Dr. Jo Viney</b>, founder, President, and CEO of Seismic Therapeutics. Furthermore, <b>Dr. Timothy Yu</b>, a world-leading expert in personalized medicine at Harvard Medical School, will be our speaker of special talk.</p>
            <p>2022 Symposium speakers will cover a range of topics including career roadmap in academia, management skills, trending topics in data-driven innovation in healthcare industry, startup, internship and co-op opportunities, and networking sessions.</p>
            <p>To celebrate our 10th anniversary, we would like to invite you to attend our gala on July 23, 6:30 pm. This will be a great opportunity for you to get connected with our distinguished speakers, BTBA committee members, and symposium attendees. <a href="https://www.btbatw.org/symposium.html">Learn more about our past annual symposia.</a></p>`
        }, {
            'title': 'Registration',
            'description': `<p>Registration is now open in-person and virtually. Registration for in-person is limited.</p>
            <a href="https://www.tickettailor.com/events/btba/676096"><b>Register Now</b></a>`
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
            'title': 'Keynote Speech I: Robert S. Langer, Professor at MIT (Dr. Langer will join us virtually)',
            'topic': "From nanotechnology to mRNA vaccines: How overcoming skepticism and barriers led to new cancer treatments and ways to tackle a global health challenge",
            'sessionDescription': '',
            'moderators': [
				{'name': 'Yen-Chun Lu', 'link': ''},
                {'name': 'Chi-An (Annie) Cheng', 'link': ''}
			],
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
            'sessionDescription': `<p>Pharmaceutical and life sciences industries increasingly embrace the use of rich data and better digital technologies such as artificial intelligence (AI) to extract insights. Leveraging diverse sources of data (such as those generated in R&D, clinical trials, and from caregivers and patients) have led us to a new era in which we can reimagine medical innovation.</p>
            <p>In this panel, we have invited three experts from the healthcare industry. They will share their experience in developing data-driven innovation, such as drug target identification, drug discovery, clinical development, and post-market real world evidence research. Please join us to learn how data and digital solutions enable patients to access effective therapies faster and at a lower cost!</p>`,
            'moderators': [
				{'name': 'Fan-En Chen', 'link': ''},
				{'name': 'Nae-Chyun Chen', 'link': ''}
			],
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Ivy Weng'],
                speakersObj['Yi-Hsiang Hsu'],
                speakersObj['Dejan Maglic']
			]
        }, {
            'from': new Date('2022/07/23 12:00 EDT'),
            'to': new Date('2022/07/23 13:40 EDT'),
            'title': 'Lunch & Round Table with Speakers',
            'topic': null,
            'sessionDescription': '',
            'moderators': [
				{'name': 'Chun Liu', 'link': ''},
                {'name': 'Yi-Jung Shen', 'link': ''},
                {'name': 'Chun Mei Su', 'link': ''},
                {'name': 'Hsiao-Ying Wey', 'link': ''}
			],
            'tags': [],
            'rooms': [],
            'speakers': [
                speakersObj['Chia-Wei Cheng'],
                speakersObj['Erica Cai'],
                speakersObj['Chih-Chun Lin'],
                speakersObj['Robert Schultz'],
                speakersObj['Lo-I Cheng'],
                speakersObj['Meng-Ju Wu'],
                speakersObj['Samuel Chen'],
                speakersObj['Ivy Weng'],
                speakersObj['Yi-Hsiang Hsu'],
                speakersObj['Dejan Maglic'],
                speakersObj['Wei-Chien Hung'],
                speakersObj['Hsiao-Ling Hung'],
                speakersObj['Jenny Shu'],
                speakersObj['Miao-Chih Tsai'],
                speakersObj['Shian-Huey Chiang'],
                speakersObj['Jun-Han Su'],
                speakersObj['Jason Lin'],
                speakersObj['Will McLean'],
                speakersObj['I-hung Shih']
            ]
        }, {
            'from': new Date('2022/07/23 13:50 EDT'),
            'to': new Date('2022/07/23 14:50 EDT'),
            'title': 'Special Talk: Timothy Yu, Associate Professor at Harvard Medical School',
            'topic': 'Advancing individualized therapies for orphan diseases',
            'sessionDescription': '',
			'moderators': [
				{'name': 'Chih-Fu Wei', 'link': ''},
				{'name': 'Selina Lin', 'link': ''}
			],
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
            'title': 'Panel 1',
            'topic': 'How to Sail Smoothly from School to Industry',
			'sessionDescription': `
			<p>Entering the biotech/pharmaceutical industry has been a dream job for many biomedical students after completing their degree. However, starting their first industrial career can be challenging. Therefore, putting your best foot forward and gaining industrial experience through internship/co-op while studying can be an important step.</p>
			<p>Join us for an hour and a half with speakers including a former master's student, Ph.D. students, and a hiring manager! Learn how they prepare themselves from an internship application to launching their industry career! In this session, our speakers will share their internship/Co-op experiences and discuss how they benefit from them.</p>
			`,
            'moderators': [
				{'name': 'Liang-Yuan Chiu', 'link': ''}
			],
            'tags': [],
            'rooms': [],
            'speakers': [
                speakersObj['Jason Lin'],
                speakersObj['Michael Dubrovsky'],
                speakersObj['Lo-I Cheng'],
                speakersObj['Wan-Chih Su']
                //speakersObj['Christina Haddad']
			]
        }, {
            'from': new Date('2022/07/23 15:00 EDT'),
            'to': new Date('2022/07/23 16:30 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Panel 2',
            'topic': 'Soft Skills and Career Development in Biotech Industry',
            'sessionDescription': `<p>- How to demonstrate leadership at all levels?</p>
            <p>- How to maximize your strengths and improve on your weaknesses?</p>
            <p>Career development is a process to find out what we want to be. As we climb up the career ladder, we will encompass additional responsibilities to make critical decisions and to lead a team. While an organization may have people with various talents and capabilities, it is leadership that harnesses individual efforts toward the collective goal.
            </p>
            <p>We invited 4 industry leaders across Manufacturing Sciences, Regulatory, Equity Investment, and R&D to share their important decisions made in their industry journey, experiences to empower others, and tips for team building</p>
            <p>Come join us and learn how to find out your strengths, resolve conflicts, lead a team, and build your value over time.</p>`,
            'moderators': [
				{'name': 'Jimmy Chu', 'link': ''},
                {'name': 'Kai-Chih Huang', 'link': ''}
			],
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                //commiteesObj['Szu-Ta Chen'],
                speakersObj['I-hung Shih'],
                speakersObj['Wei-Chien Hung'],
                speakersObj['Hsiao-Ling Hung'],
                speakersObj['Jenny Shu']
            ]
        }, {
            'from': new Date('2022/07/23 16:30 EDT'),
            'to': new Date('2022/07/23 17:30 EDT'),
            'numOfParallelSessions': 2,
            'title': 'Poster session',
            'topic': '',
			'sessionDescription': null,
            'moderators': [
				{'name': 'Hsin Yi Cho', 'link': ''}
			],
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
            'moderators': [
				{'name': 'Yi-Yun Ho', 'link': ''}
			],
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
			'sessionDescription': `<p>This session aims to provide a platform for attendees to establish a network with invited speakers across diverse backgrounds. Through an informal and relaxed breakfast session, you will be able to:
            </p>
            <li>Learn and practice initiating conversations with people you are interested in connecting with</li>
            <li>Polish your “elevator pitch” skills to leave a good impression in brief conversations</li>
            <li>Seek advice and suggestions from someone who might have a career trajectory that you would like to pursue</li>
            <li>Make new friends and reconnect with old friends</li>
            <li>Enjoy the excellent food we prepared for you!!</li>
            <p>Do not miss this great opportunity to expand your network for further career development!</p>`,
            'moderators': [
				{'name': 'Shu-Wei Wu', 'link': ''},
                {'name': 'Fu-Kai Hsieh', 'link': ''}
			],
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': []
        },{
            'from': new Date('2022/07/24 09:40 EDT'),
            'to': new Date('2022/07/24 10:40 EDT'),
            'title': 'Keynote Speech II: Jo Viney, CEO at Seismic Therapeutic',
            'topic': 'It’s the climb: Ascending biotech’s career ladder without losing balance',
			'sessionDescription': '',
			'moderators': [
				{'name': 'Yvonne Meng', 'link': ''},
				{'name': 'Phoebe Tsai', 'link': ''}
			],
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
            'title': 'Panel 3',
            'topic': 'A Bittersweet Journey - Climbing the Academic Ladder',
			'sessionDescription': `
			<p>Are you a Ph.D. scientist aspiring for an academia career?</p>
			<p>Are you a physician-scientist who is juggling research and clinical responsibilities?</p>
			<p>Are you an assistant professor suffering from grant writing and building up a functional lab?</p>

			<p>While pursuing a career in academia, it is easy to come across hurdles or get overwhelmed by working in various roles. This panel presents a career map of what others could and have done at different points along their academia journey. Through shared discussion of different experiences, the panel would be particularly useful for jumpstarting your own climb on the academic ladder.</p>

			<p>Come join us for a discussion with academic professionals at different career stages. We have invited a group of faculty at different stages in their academic careers (instructor, assistant professor, and full professor) and in various career tracks (Ph.D.-track, physician-scientist track, and a hybrid career in both academia and industry) to share their experiences. Find out more about their travels, challenges, and successes throughout their careers and find inspiration for your own career goals!</p>
			`,
			'moderators': [
				{'name': 'Erica Cai', 'link': ''},
				{'name': 'Meng-Ju Wu', 'link': ''}
			],
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Chia-Wei Cheng'],
				speakersObj['Erica Cai'],
				speakersObj['Chih-Chun Lin'],
				speakersObj['Morgan Sheng'],
                speakersObj['Meng-Ju Wu']
			]
        }, {
            'from': new Date('2022/07/24 10:50 EDT'),
            'to': new Date('2022/07/24 12:20 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Panel 4',
            'topic': 'From IP to IPO: Startup Experience Sharing',
			'sessionDescription': `
			<p>Do you feel your research is so promising that it has the potential to become a good product and make some money (money sign)? Lots of people might already have a passion for a “startup” but don’t know how to actually “start it.” The saying “only 10% of startups can survive” is certainly intimidating. How might we be able to increase our success rate? You will find some answers in this workshop session with a range of panelists in startup-related fields.</p>

			<p>This panel discussion is going to introduce you to the experiences of successful startups from three different founders/co-founders or CEOs who are currently heading the biotech companies they have built. No matter your question - whether it be related to the different stages of a startup, financial resources for the startup, or management skills - our panelists will provide invaluable insight and tips. What are you waiting for? If you are interested in creating and spearheading your own business, please come and join us for more information about launching and managing your startup!</p>
			`,
			'moderators': [
				{'name': 'Chin-Ju (Ginnie) Hu', 'link': ''},
				{'name': 'Yu-Yang (Will) Lin', 'link': ''}
			],
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Robert Schultz'],
                speakersObj['Samuel Chen'],
                speakersObj['Will McLean']
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
        //{
        //    'level': 'string',
        //    'name': 'string',
        //    'logoUrl': 'vizuro.png',
        //    'link': 'https://www.lantheus.com'
        //},
        {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'wellesley-toyota.png',
            'link': 'https://www.wellesleytoyota.com/dealership/about.htm'
        } ]
    },
    'imgs': [{
        'usage': 'string',
        'imgLinks': []
    }]
};

// module.exports = ttbaSymposium2017;


