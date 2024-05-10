var header = '<br><br><br><br><h1>Digital Rights are going great: Elections edition </h1>';

var footer = '';
// Additional content to be appended to the footer
const footerContent = `
  <a href="https://internetfreedom.in/">
    <img src="img/logo.svg" alt="Internet Freedom Foundation" style="height: 5rem;">
  </a>
`;
// Append the additional content to the footer
footer += footerContent;
header += footerContent;
//   {
//     "id": 'http://placekitten.com',
//     "categories": [''],
//     "color": "green",
//     "faicon": 'vote-yea',
//     "datetime": '2024-03-08',
//     "title": 'Cats are very good',
//     "image": {
//       "link": 'http://placekitten.com',
//       "src": 'http://placekitten.com/200/300',
//       "alt": '',
//       "caption": '',
//     },
//     "body": "",
//     "links": [
//       {
//         "href": 'https://en.wikipedia.org/wiki/Cat',
//         "linkText": 'Cat',
//       },
//     ],
//   }
//   ,{
//   'id': 'The real problem with AI fakery | India News',
//   'categories': [
//     'AI',
//     ' Deepfakes'
//   ],
//   'color': 'green',
//   'faicon': 'vote-yea',
//   'datetime': '2024-01-01T00:00:00',
//   'title': 'The real problem with AI fakery | India News',
//   'image': {
//     'link': 'https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms',
//     'src': 'https://static.toiimg.com/thumb/msid-106457478,width-1070,height-580,imgsize-222326,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
//     'alt': '',
//     'caption': 'The real problem with AI fakery | India News'
//   },
//   'body': 'The real problem with AI fakery | India News',
//   'links': [
//     {
//       'href': 'https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms',
//       'linkText': 'The real problem with AI fakery | India News'
//     }
//   ]
// },
//   // {'id': 'The real problem with AI fakery | India News', 'categories': 'AI, Deepfakes', 'color': 'green', 'faicon': 'vote-yea', 'datetime': '2024-01-01T00:00:00', 'title': 'The real problem with AI fakery | India News', 'image': {'link': 'https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms', 'src': 'https://static.toiimg.com/thumb/msid-106457478,width-1070,height-580,imgsize-222326,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', 'alt': '', 'caption': 'The real problem with AI fakery | India News'}, 'body': 'The real problem with AI fakery | India News', 'links': [{'href': 'https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms', 'linkText': 'The real problem with AI fakery | India News'}]},
//   {
//     id: 'dog',
//     categories: ['April 2024'],
//     color: 'green',
//     faicon: 'vote-yea',
//     datetime: '2024-04-08',
//     title: 'Puppies are great too',
//     image: {
//       link: 'http://place-puppy.com',
//       src: 'img/favicon.png',
//       alt: 'A placeholder puppy',
//       caption: 'Puppy!',
//     },
//     body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
//     links: [
//       {
//         href: 'https://en.wikipedia.org/wiki/Dog',
//         linkText: 'Dog',
//       },
//     ],
//   },
// ];

// Page details
const entries = [
    {
        "id": "Violative of Legal Framework': EC Asks X To Take Down Karnataka BJP's Video",
        "categories": [
            "POLITICAL PARTY",
            "PLATFORM",
            "DISINFORMATION",
            "ECI"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-07T00:00:00",
        "title": "Violative of Legal Framework': EC Asks X To Take Down Karnataka BJP's Video",
        "image": {
            "link": "https://www.thequint.com/elections/karnataka-bjp-leader-nadda-amit-malviya-complaint-filed-congress-manifesto-obc-muslims-video#read-more",
            "src": "https://images.thequint.com/thequint%2F2024-05%2Fc4dcfdbe-6c79-4ad3-95d1-00bf8058433a%2Fhero_image_nre_Recovered_Recovered_Recovered_Recovered_Recovered.jpg",
            "alt": "",
            "caption": "Violative of Legal Framework': EC Asks X To Take Down Karnataka BJP's Video"
        },
        "body": "The Bengaluru police on Sunday, 5 May filed a First Information Report (FIR) against BJP president JP Nadda, state chief BY Vijayendra and the party's IT cell head Amit Malviya for \"inciting hatred between two communities.\"",
        "links": [
            {
                "href": "https://www.thequint.com/elections/karnataka-bjp-leader-nadda-amit-malviya-complaint-filed-congress-manifesto-obc-muslims-video#read-more",
                "linkText": "Link to The Quint article"
            }
        ]
    },
    {
        "id": "Cropped Video Viral As Kangana Ranaut Accepting People Will Not Vote For Her ",
        "categories": [
            "POLITICAL PARTY",
            "DISINFORMATION"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-07T00:00:00",
        "title": "Cropped Video Viral As Kangana Ranaut Accepting People Will Not Vote For Her ",
        "image": {
            "link": "https://www.boomlive.in/fact-check/viral-video-kangana-ranaut-bjp-vote-lok-sabha-elections-claim-social-media-25189",
            "src": "https://www.boomlive.in/h-upload/2024/05/07/1026175-1026131-kangana-13.webp",
            "alt": "",
            "caption": "Cropped Video Viral As Kangana Ranaut Accepting People Will Not Vote For Her "
        },
        "body": "BOOM found that Ranaut was responding to a remark made by Himachal Congress president Pratibha Singh in the original video.",
        "links": [
            {
                "href": "https://www.boomlive.in/fact-check/viral-video-kangana-ranaut-bjp-vote-lok-sabha-elections-claim-social-media-25189",
                "linkText": "Link to Boomlive article"
            }
        ]
    },
    {
        "id": "Old Photo Peddled As President Accompanying PM Modi To File LS Nomination ",
        "categories": [
            "POLITICAL PARTY",
            "DISINFORMATION"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-07T00:00:00",
        "title": "Old Photo Peddled As President Accompanying PM Modi To File LS Nomination ",
        "image": {
            "link": "https://www.boomlive.in/fact-check/fact-check-picture-of-president-draupadi-murmus-nomination-viral-false-claim-pm-modis-nomination-25188",
            "src": "https://www.boomlive.in/h-upload/2024/05/07/1026166-modi-nomination-02.webp",
            "alt": "",
            "caption": "Old Photo Peddled As President Accompanying PM Modi To File LS Nomination "
        },
        "body": "BOOM found that the photo is from 2022, when Modi and other senior BJP leaders accompanied Murmu to file her candidature for the presidential post.",
        "links": [
            {
                "href": "https://www.boomlive.in/fact-check/fact-check-picture-of-president-draupadi-murmus-nomination-viral-false-claim-pm-modis-nomination-25188",
                "linkText": "Link to Boomlive article"
            }
        ]
    },
    {
        "id": "Video of Andhra Pradesh Minister Shared With False Claims Linked to Chhattisgarh",
        "categories": [
            "POLITICAL PARTY",
            "DISINFORMATION"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-07T00:00:00",
        "title": "Video of Andhra Pradesh Minister Shared With False Claims Linked to Chhattisgarh",
        "image": {
            "link": "https://www.thequint.com/news/webqoof/vidadala-rajini-andhra-pradesh-muslims-mosque-elections-not-nikita-fact-check#read-more",
            "src": "https://images.thequint.com/thequint%2F2024-05%2Ff98fdcc8-da81-4812-91a6-0e85d4bae8ce%2FRujuta_WQ_43_.jpg",
            "alt": "",
            "caption": "Video of Andhra Pradesh Minister Shared With False Claims Linked to Chhattisgarh"
        },
        "body": "Fact-check: A video of a YSRCP minister from Andhra Pradesh is being shared to falsely claim that it shows a SDM of Chhattisgarh at a mosque.  Vidadala Rajini, YSRCP minister from Andhra Pradesh has been misidentified in the video.",
        "links": [
            {
                "href": "https://www.thequint.com/news/webqoof/vidadala-rajini-andhra-pradesh-muslims-mosque-elections-not-nikita-fact-check#read-more",
                "linkText": "Link to The Quint article"
            }
        ]
    },
    {
        "id": "This Video Doesn\u2019t Show Rahul Gandhi Visiting Ayodhya After Filing Nomination",
        "categories": [
            "POLITICAL PARTY",
            "DISINFORMATION"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-08T00:00:00",
        "title": "This Video Doesn\u2019t Show Rahul Gandhi Visiting Ayodhya After Filing Nomination",
        "image": {
            "link": "https://www.thequint.com/news/webqoof/crowd-chanting-modi-modi-jai-shree-ram-slogans-rahul-gandhi-ayodhya-viral-video-fact-check#read-more",
            "src": "https://images.thequint.com/thequint%2F2024-05%2F6e92793a-819d-4f63-bf31-f69ed196d662%2FAbhishek_WQ_3___2024_05_08T091439_790.jpg?rect=0%2C49%2C1920%2C1008",
            "alt": "",
            "caption": "This Video Doesn\u2019t Show Rahul Gandhi Visiting Ayodhya After Filing Nomination"
        },
        "body": "Fact-Check | An unrelated video is being shared to falsely claim that Congress leader Rahul Gandhi visited Ayodhya after filing nomination for 2024 Lok Sabha Elections.",
        "links": [
            {
                "href": "https://www.thequint.com/news/webqoof/crowd-chanting-modi-modi-jai-shree-ram-slogans-rahul-gandhi-ayodhya-viral-video-fact-check#read-more",
                "linkText": "Link to The Quint  article"
            }
        ]
    },
    {
        "id": "Fake Letter About 'Financial Support' to Muslim Voters in Karnataka Goes Viral",
        "categories": [
            "POLITICAL PARTY",
            "DISINFORMATION"
        ],
        "color": "green",
        "faicon": "vote-yea",
        "datetime": "2024-05-07T00:00:00",
        "title": "Fake Letter About 'Financial Support' to Muslim Voters in Karnataka Goes Viral",
        "image": {
            "link": "https://www.thequint.com/news/webqoof/fake-letter-on-organisation-paying-for-muslim-voters-in-karnataka-for-lok-sabha-election-goes-viral-fact-check",
            "src": "https://images.thequint.com/thequint%2F2024-05%2F138abb2f-248d-4072-86c1-8c9edcc1e700%2FKHUSHI___WQ_NEW.png?rect=0%2C0%2C1920%2C1008",
            "alt": "",
            "caption": "Fake Letter About 'Financial Support' to Muslim Voters in Karnataka Goes Viral"
        },
        "body": "Fact-Check: A purported letter claiming to give financial support for Muslim voters going for polling in the ongoing elections is being shared on social media platforms. However, the letter is fake. ",
        "links": [
            {
                "href": "https://www.thequint.com/news/webqoof/fake-letter-on-organisation-paying-for-muslim-voters-in-karnataka-for-lok-sabha-election-goes-viral-fact-check",
                "linkText": "Link to The Quint article"
            }
        ]
    }
]
const pageTitle = 'Digital Rights are going great - Elections edition'; // The title of the page that shows in the browser tab
const pageDescription = 'Digital Rights Are Going Great - Election Edition seeks to document all instances of arbitrary power being exercised over the internet by the state, which can alter electoral outcomes & hamper integrity.'; // The description of the page for search engines
const pageAuthor = 'Internet Freedom Foundation'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
// const getFilters = (entries) => {
//   const filters = new Set();
//   for (var i = 0; i < entries.length; i++) {
//     var entry = entries[i];
//     if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
//       for (var j = 0; j < entry.categories.length; j++) {
//         filters.add(entry.categories[j]);
//       }
//     }
//   }
//   var filtersArray = [...filters];
//   filtersArray.sort();
//   return filtersArray;
// };
const getFilters = (entries) => {
  const categoriesLeft = new Set([
    'ai',
    'surveillance',
    'disinformation',
    'data privacy',
    'aadhaar',
    'censorship'
  ]);

  const filtersLeft = new Set();
  const filtersRight = new Set();

  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (const category of entry.categories) {
        if (categoriesLeft.has(category.toLowerCase())) {
          filtersLeft.add(category);
        } else {
          filtersRight.add(category);
        }
      }
    }
  }

  return {
    filtersLeft: [...filtersLeft].sort(),
    filtersRight: [...filtersRight].sort()
  };
};



const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};




// <section data-bs-version="5.1" class="list1 cid-uajPOEtzmu" id="manifesto-analysis">
// 	<div class="container">
// 		<div class="row justify-content-center">
// 			<div class="col-12 col-md-12 col-lg-10 m-auto">
// 				<div class="content">
// 					<div class="row justify-content-center mb-5">
// 						<div class="col-12 content-head">
// 							<div class="mbr-section-head">
// 								<h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-5"><strong>How do each party's guarantees fare against our 7 point agenda? &nbsp;</strong><strong><br></strong></h4>
// 								<h5 class="mbr-section-subtitle mbr-fonts-style align-center mt-4 mb-0 display-7">  <b>Disclaimer:</b> This table includes direct quotes from the manifestos of the 5 parties mentioned below. Please note that not all technology adjacent electoral guarantees have been added to this table as its scope is limited to the 7 demands on technology and human rights that we listed in our <a href="index.html#list01-1i" class="text-secondary">7 point agenda.</a> Thus, only the guarantees/ promises which align with the digital rights demands made in our agenda have been included in the table below. A more comprehensive analysis and commentary on all the technology related election guarantees of these 5 parties will be released soon.</a></div></h5>
// 							</div>
// 						</div>
// 					</div>
// 						<div class="card">
// 							<table class="table table-bordered table-hover table-condensed">
// 								<thead><tr><th title="IFF’s 7 point agenda">IFF’s 7 point agenda</th>
// 								<th title="INC">INC</th>
// 								<th title="BJP">BJP</th>
// 								<th title="DMK">DMK</th>
// 								<th title="CPI(M)">CPI(M)</th>
// 								<th title="TMC">TMC</th>
// 								</tr></thead>
// 								<tbody><tr>
// 								<td><b>I. Digital rights are human rights</b></td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>“Based on the judgments of the case <b>Justice K.S. Puttaswamy (Retd.) vs Union of India (2017 and 2019)</b>, where digital privacy was declared a fundamental right, amendments will be made in the sections related to privacy under the Internet Data Protection Act to include <b>digital rights as fundamental human rights.</b>”</td>
// 								<td>--</td>
// 								<td>--</td>
// 								</tr>
// 								<tr>
// 								<td><b>II. Technology should lead to inclusion and equality</b></td>
// 								<td>--</td>
// 								<td>“To expand the 5G networks and take the lead in the development of 6G technology.”<br/><br/>“Strengthening social security systems through digitisation and digital India network to facilitate easy enrolment for the schemes and seamless payment.”<br/><br/>“Providing comprehensive training to senior citizens in using UPI and other online payment methods, while increasing awareness about online scams.”</td>
// 								<td>“National e-Governance Program to establish complete computerized administration in all villages.”<br/><br/>“Free Wi-Fi services will be provided in all important locations state-wide.”</td>
// 								<td>“To <b>Repeal the Telecommunications Bill, 2023</b>; reversing pro-private telecom policies to <b>encourage telecom and internet penetration</b> in rural and remote areas via public sector; strengthening public sector telecom companies BSNL and MTNL by guaranteeing a level playing field and rapid roll-out of 4G and 5G services. Ensuring the right to internet;”<br/><br/>“<b>Promote free and open source software (FOSS)</b> and other new technologies.”</td>
// 								<td>“Bengal’s cutting-edge E-governance efforts will be further strengthened. TMC will further enhance the state’s e-governance initiatives, pioneering greater digital citizen participation across the length and breadth of governance services.”<br/><br/>“Real-time information management systems, and online feedback mechanisms ensures all relevant information related to the Government’s progress across its various programs, schemes, and implementations is accessible to citizens 24x7. Will extend this cutting-edge service to more people in the state.”<br/><br/>“Digital Sahayata Kendras will be set up all over India. TMC will ensure online public services are also within easy reach of all citizens.”<br/><br/>“Tablets/smartphones will be provided as an educational aid to students. TMC will affordably promote digital literacy for Bengal’s students.”<br/><br/>“Through a grant of ₹10,000 per pupil under the Taruner Swapno scheme, we will enable students to purchase tablets/smartphones for digital learning and access toonline study materials.”</td>
// 								</tr>
// 								<tr>
// 								<td><b>III. Free speech must be respected</b></td>
// 								<td>“Congress will <b>pass a law to preserve the freedom of the Internet and to prevent arbitrary and frequent shutdowns of the Internet.</b>”<br/><br/>“To amend Cinematograph Act 1952 for transparent reasonable grading by the central board of Film Certification.”<br/><br/>“<b>Review the Telecommunications Act, 2023</b> and remove the provisions that restrict freedom of speech (...).”<br/><br/>“Self-regulation is the best way to correct the misuse of the media. Congress will amend the Press Council of India Act, 1978 to strengthen the system of self-regulation, protect journalistic freedoms, uphold editorial independence and guard against government interference.”<br/><br/>“Amendment to the Press Council of India Act, 1978 to empower the Council to deal with the menace of fake news and paid news.”<br/><br/>“<b>Promise to restore freedom of speech and expression including full freedom of the media</b>.”<br/><br/>“Laws like, the <b>Broadcasting Services (Regulation) Bill, 2023; Digital Personal Data Protection Act, 2023; Press and Registration of Periodicals Act, 2023, etc.) give unbridled powers of censorship to the government</b>. The first named Bill will be withdrawn. The restrictive provisions of the two Acts will be amended or deleted to eliminate backdoor censorship. “</td>
// 								<td>--</td>
// 								<td>“Section 124 of the Indian Penal Code [IPC], which suppresses the freedom of speech, will be removed.”</td>
// 								<td>“A <b>full-fledged review and revision of the three Criminal Codes </b>to eliminate anti-democratic provisions and enhancement of police powers; protect the right to dissent.”<br/><br/>“To strengthen the Right to Information Act and establishing institutionalized mechanisms for citizens to participate in all aspects of decision making in governance; implementing Section 4 of the RTI Act, for a transparent and participatory pre-legislative process soliciting citizen feedback before laws are passed.”<br/><br/>“Steps to <b>control the spread of fake news</b> and act on those groups and individuals promoting fake news.”<br/><br/>“The <b>2021 amendments to the IT Rules will be withdrawn</b> and the draft Registration of Press and Periodicals Bill, 2022, will be reviewed; the <b>draft Broadcasting Services (Regulation) Bill, 2023 replacing the Cable Television Networks (Regulation Act), will not be considered.</b>”<br/><br/>“A common Media Council for print, electronic and digital media will be set up, with representatives from the media, media unions and independent public persons; a Media Commission will be established to study the deplorable working conditions of journalists and the new trends in the media since the onset of globalisation.”<br/><br/>“To institute effective mechanisms for providing protection to RTI users and anti corruption crusaders and amending the Whistleblowers Protection Act to make it effective.”<br/><br/>“To <b>roll back the draconian IT Amendment Rules (2023)</b> which grants the government total censorship powers by providing for the establishment of a fact check unit, established at the sole discretion of the Union government, and aimed at attacking online criticism.”</td>
// 								<td>“A well-defined set of regulations and protocols to <b>prevent unilateral imposition of internet shutdowns.</b>”</td>
// 								</tr>
// 								<tr>
// 								<td><b>IV. Upholding informational privacy</b></td>
// 								<td>“Promise to review all laws that interfere with the right to privacy and make suitable amendments to various laws to uphold the right to privacy.”<br/><br/>“To <b>review the Telecommunications Act, 2023</b> and remove the provisions that (…) violate the right to privacy.”</td>
// 								<td>“<b>Protection against Cyber threats</b>, will create a suite of public cybersecurity products to help small traders and MSMEs protect themselves against the cyber threats and frauds.”</td>
// 								<td>--</td>
// 								<td>“<b>Protection from cyber-attacks and phishing; protection of the privacy </b>of all individuals.” <br/><br/><b>“To introduce new legislation to give a proper justiciable framework for the Supreme Court&#39;s Puttuswamy judgement on privacy as a fundamental right;</b> also enact new legislation to create an independent constitutional authority to oversee violations by government as well as private businesses of citizens‟ right to privacy.”</td>
// 								<td>“TMC will ensure India’s citizens are <b>safeguarded from personal data breaches, undue surveillance, and denial of their digital rights.</b>”<br/><br/>“We will introduce a new Digital Liberties Bill in Parliament to safeguard the digital rights of citizens through new regulations to <b>bolster the security provisions for the collection, storage, and fair use of the personal data</b> of citizens by Government agencies, businesses, and other entities.”</td>
// 								</tr>
// 								<tr>
// 								<td><b>V. Checks on surveillance</b></td>
// 								<td>“Congress will <b>restrict the powers of the government for surveillance of journalists, seizure of their devices </b>and exposure of their sources for independent journalism.”</td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>“<b>Scrapping the mandatory use of Aadhaar and biometrics</b> for all social welfare schemes.”<br/><br/>“Prevention of snooping and surveillance over individuals.”<br/><br/>“To Regulate AI, genetic engineering, data-mining and IT-based surveillance so as to ensure public good.”<br/><br/>“To <b>stop all forms of digital surveillance by State agencies <b>without explicit and specific warrants and under strict judicial supervision; prevent use of malware, hacking or other intrusive technologies such as Pegasus to gain control over citizens‟ phones, computers and other digital devices.”<br/><br/>“To <b>scrap the Digital Personal Data Protection Act (2023),</b> which is meant to cement digital authoritarianism by giving State agencies broad powers of surveillance over citizens and also big businesses a free hand to use citizens‟ data for their own profits.”<br/><br/>“To <b>roll back the draconian provisions of the Telecommunication Act 2023 </b>related to surveillance and interception, internet shutdowns, weakening of encrypted services, and KYC requirements of social media users. “</td>
// 								<td>“New regulations to <b>outlaw the misuse of surveillance technologies to spy</b> on private citizens, media, or politicians.”</td>
// 								</tr>
// 								<tr>
// 								<td><b>VI. Making consumer facing digital platforms accountable</b></td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>--</td>
// 								</tr>
// 								<tr>
// 								<td><b>VII. Ensuring legitimate use of generative AI</b></td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>--</td>
// 								<td>“Will provide mission-mode R&amp;D funding for AI, Internet of Things (IoT), bio and nano-technology.”</td>
// 								<td>--</td>
// 								</tr>
// 								</tbody></table>
// 						</div>





// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>