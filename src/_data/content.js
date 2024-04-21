var header = '<h1>Digital Rights are going great: Elections edition </h1>';

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
// const entries = [
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
      "id": "The real problem with AI fakery | India News",
      "categories": [
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-01T00:00:00",
      "title": "The real problem with AI fakery | India News",
      "image": {
          "link": "https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms",
          "src": "https://static.toiimg.com/thumb/msid-106457478,width-1070,height-580,imgsize-222326,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "alt": "",
          "caption": "The real problem with AI fakery | India News"
      },
      "body": "India News: Even as the threat of \u2018deepfake elections\u2019 looms large, tools to battle it remain limited. Regulatory over-compliance by platforms can even lead to ce",
      "links": [
          {
              "href": "https://timesofindia.indiatimes.com/india/the-real-problem-with-ai-fakery/articleshow/106457024.cms",
              "linkText": "Link to Times of India article"
          }
      ]
  },
  {
      "id": "Deepfakes set to deceive voters in India ahead of national elections, ET Government",
      "categories": [
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-03T00:00:00",
      "title": "Deepfakes set to deceive voters in India ahead of national elections, ET Government",
      "image": {
          "link": "https://government.economictimes.indiatimes.com/news/technology/deepfakes-set-to-deceive-voters-in-india-ahead-of-national-elections/106500815",
          "src": "https://etimg.etb2bimg.com/thumb/msid-106500815,imgsize-26320,width-1200,height=765,overlay-etgovernment/news/technology/deepfakes-set-to-deceive-voters-in-india-ahead-of-national-elections.jpg",
          "alt": "",
          "caption": "Deepfakes set to deceive voters in India ahead of national elections, ET Government"
      },
      "body": "While experts say social media platforms, governments are not doing enough to curb deepfakes, Meta and Google claim they have policies in place to check the menace.",
      "links": [
          {
              "href": "https://government.economictimes.indiatimes.com/news/technology/deepfakes-set-to-deceive-voters-in-india-ahead-of-national-elections/106500815",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "X account of Hindutva Watch withheld in India",
      "categories": [
          "CENSORSHIP",
          "PLATFORMS"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-16T00:00:00",
      "title": "X account of Hindutva Watch withheld in India",
      "image": {
          "link": "https://scroll.in/latest/1062244/x-account-of-hindutva-watch-withheld-in-india",
          "src": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/197572-azgwclbnjl-1705407570.jpeg",
          "alt": "",
          "caption": "X account of Hindutva Watch withheld in India"
      },
      "body": "The founder of the research initiative said that this would not deter them from their work.",
      "links": [
          {
              "href": "https://scroll.in/latest/1062244/x-account-of-hindutva-watch-withheld-in-india",
              "linkText": "Link to Scroll article"
          }
      ]
  },
  {
      "id": "11 Talking Points: \u2018Deep Fakes and Democracy\u2019",
      "categories": [
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-18T00:00:00",
      "title": "11 Talking Points: \u2018Deep Fakes and Democracy\u2019",
      "image": {
          "link": "https://www.medianama.com/2024/01/223-11-talking-points-deep-fakes-democracy-discussion-nama/",
          "src": "https://www.medianama.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-18-at-1.53.31-PM.jpeg",
          "alt": "",
          "caption": "11 Talking Points: \u2018Deep Fakes and Democracy\u2019"
      },
      "body": "Top 11 talking points highlighting some of the most interesting points from our recently held discussion on 'Deep fakes and Democracy'.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/01/223-11-talking-points-deep-fakes-democracy-discussion-nama/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "AI-powered disinformation emerges major risk for nations including India in election year 2024, ET Government",
      "categories": [
          "AI",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-19T00:00:00",
      "title": "AI-powered disinformation emerges major risk for nations including India in election year 2024, ET Government",
      "image": {
          "link": "https://government.economictimes.indiatimes.com/news/technology/ai-powered-disinformation-emerges-major-risk-for-nations-including-india-in-election-year-2024/106982316?utm_source=newslisting&utm_medium=latestNews",
          "src": "https://etimg.etb2bimg.com/thumb/msid-106982316,imgsize-72564,width-1200,height=765,overlay-etgovernment/news/technology/ai-powered-disinformation-emerges-major-risk-for-nations-including-india-in-election-year-2024.jpg",
          "alt": "",
          "caption": "AI-powered disinformation emerges major risk for nations including India in election year 2024, ET Government"
      },
      "body": "AI-powered Disinformation: 2024 has been labelled a \"make-or-break\" year for democracy, with crucial votes due in more than 60 countries, including India, South Africa, Pakistan, Britain, Indonesia and the United States, as well as the European Union.",
      "links": [
          {
              "href": "https://government.economictimes.indiatimes.com/news/technology/ai-powered-disinformation-emerges-major-risk-for-nations-including-india-in-election-year-2024/106982316?utm_source=newslisting&utm_medium=latestNews",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "The data collection app at the heart of the BJP's Indian election campaign",
      "categories": [
          "POLITICAL PARTY",
          "DATA PRIVACY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-01-20T00:00:00",
      "title": "The data collection app at the heart of the BJP's Indian election campaign",
      "image": {
          "link": "https://restofworld.org/2024/bjp-saral-app-data-gathering/",
          "src": "https://149346090.v2.pressablecdn.com/wp-content/uploads/2024/01/SaralApp_007-1600x900.jpg",
          "alt": "",
          "caption": "The data collection app at the heart of the BJP's Indian election campaign"
      },
      "body": "Rest of World\u2019s reporting shows that India\u2019s ruling Bharatiya Janata Party\u2019s app Saral is gathering unprecedented levels of data about voters.",
      "links": [
          {
              "href": "https://restofworld.org/2024/bjp-saral-app-data-gathering/",
              "linkText": "Link to Rest of World article"
          }
      ]
  },
  {
      "id": "Karnataka HC Issues Notice to Election Commission in Plea Seeking Guidelines on Tech-Enabled Voter Manipulation: Report",
      "categories": [
          "AI",
          "DISINFORMATION",
          "ECI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-05T00:00:00",
      "title": "Karnataka HC Issues Notice to Election Commission in Plea Seeking Guidelines on Tech-Enabled Voter Manipulation: Report",
      "image": {
          "link": "https://www.medianama.com/2024/02/223-karnataka-hc-notice-eci-plea-voter-manipulation/",
          "src": "https://www.medianama.com/wp-content/uploads/2022/07/1280px-High_Court_Karnataka_8361.jpg",
          "alt": "",
          "caption": "Karnataka HC Issues Notice to Election Commission in Plea Seeking Guidelines on Tech-Enabled Voter Manipulation: Report"
      },
      "body": "The PIL before the Karnataka HC was filed by four politicians who were defeated during their assembly election runs last year.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/02/223-karnataka-hc-notice-eci-plea-voter-manipulation/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "Epidemic of fake news takes over social media as elections nearing; Karnataka takes action.\"",
      "categories": [
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-10T00:00:00",
      "title": "Epidemic of fake news takes over social media as elections nearing; Karnataka takes action.\"",
      "image": {
          "link": "https://www.newindianexpress.com/states/karnataka/2024/Feb/10/epidemic-of-fake-news-takes-over-social-media-as-elections-nearing-karnataka-takes-action",
          "src": "https://media.assettype.com/newindianexpress%2F2024-02%2F60d11415-04e8-40a6-ab4f-0132f087cb34%2FFake_news.jpg?rect=0%2C16%2C1200%2C630&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
          "alt": "",
          "caption": "Epidemic of fake news takes over social media as elections nearing; Karnataka takes action.\""
      },
      "body": "Lok Sabha elections nearing; surge in political fake news on social media. Karnataka takes steps against misinformation, but challenges persist. Prominent parti",
      "links": [
          {
              "href": "https://www.newindianexpress.com/states/karnataka/2024/Feb/10/epidemic-of-fake-news-takes-over-social-media-as-elections-nearing-karnataka-takes-action",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Tech companies plan to sign accord to combat AI-generated election trickery - The Economic Times",
      "categories": [
          "PLATFORMS",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-14T00:00:00",
      "title": "Tech companies plan to sign accord to combat AI-generated election trickery - The Economic Times",
      "image": {
          "link": "https://economictimes.indiatimes.com/tech/technology/tech-companies-plan-to-sign-accord-to-combat-ai-generated-election-trickery/articleshow/107677571.cms",
          "src": "https://img.etimg.com/thumb/msid-107677618,width-1200,height-630,imgsize-178644,overlay-ettech/photo.jpg",
          "alt": "",
          "caption": "Tech companies plan to sign accord to combat AI-generated election trickery - The Economic Times"
      },
      "body": "The upcoming event at the Munich Security Conference in Germany comes as more than 50 countries are due to hold national elections in 2024.",
      "links": [
          {
              "href": "https://economictimes.indiatimes.com/tech/technology/tech-companies-plan-to-sign-accord-to-combat-ai-generated-election-trickery/articleshow/107677571.cms",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "Want to work with allies like India to combat disinformation, says US - The Economic Times",
      "categories": [
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-22T00:00:00",
      "title": "Want to work with allies like India to combat disinformation, says US - The Economic Times",
      "image": {
          "link": "https://economictimes.indiatimes.com/news/india/want-to-work-with-allies-like-india-to-combat-disinformation-says-us/articleshow/107921665.cms",
          "src": "https://img.etimg.com/thumb/msid-107921674,width-1200,height-630,imgsize-35114,overlay-economictimes/photo.jpg",
          "alt": "",
          "caption": "Want to work with allies like India to combat disinformation, says US - The Economic Times"
      },
      "body": "The US government collaborates with India to combat Russian and Chinese disinformation. Efforts are directed towards Russia and China, focusing on their information warfare. Iran's role in supporting terrorist groups and destabilizing the Middle East is emphasized, along with their involvement in shipping operations and increased costs.",
      "links": [
          {
              "href": "https://economictimes.indiatimes.com/news/india/want-to-work-with-allies-like-india-to-combat-disinformation-says-us/articleshow/107921665.cms",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "Mandate videography, webcasting at polling stations: BJP to Election Commission | Latest News India - Hindustan Times",
      "categories": [
          "POLITICAL PARTY",
          "SURVEILLLANCE",
          "ECI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-28T00:00:00",
      "title": "Mandate videography, webcasting at polling stations: BJP to Election Commission | Latest News India - Hindustan Times",
      "image": {
          "link": "https://www.hindustantimes.com/india-news/mandate-videography-webcasting-at-polling-stations-bjp-to-election-commission-101709122279757.html",
          "src": "https://www.hindustantimes.com/ht-img/img/2024/02/28/1600x900/The-Election-Commission-of-India---File-photo-_1709122271954.jpg",
          "alt": "",
          "caption": "Mandate videography, webcasting at polling stations: BJP to Election Commission | Latest News India - Hindustan Times"
      },
      "body": "Also set up polling stations in urban housing societies before announcing the general elections, BJP to EC | Latest News India",
      "links": [
          {
              "href": "https://www.hindustantimes.com/india-news/mandate-videography-webcasting-at-polling-stations-bjp-to-election-commission-101709122279757.html",
              "linkText": "Link to Hindustan Times article"
          }
      ]
  },
  {
      "id": "Byte The Ballot: Elections In The Age Of Artificial Intelligence",
      "categories": [
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-27T00:00:00",
      "title": "Byte The Ballot: Elections In The Age Of Artificial Intelligence",
      "image": {
          "link": "https://www.livelaw.in/lawschool/articles/artificial-intelligence-justice-ks-puttaswamy-v-union-of-india-openai-cambridge-analytica-scandal-deep-fakes-ministry-of-electronics-information-technology-european-unions-ai-act-trai-250670",
          "src": "https://www.livelaw.in/h-upload/2024/02/27/524737-untitled-design-71.webp",
          "alt": "",
          "caption": "Byte The Ballot: Elections In The Age Of Artificial Intelligence"
      },
      "body": "\u201cConstitutional guarantees cannot be subjected to the vicissitudes of technology.\u201d - Justice K.S. Puttaswamy v. Union of IndiaOn 16th February 2024, 20 technology giants including Google, Microsoft,...",
      "links": [
          {
              "href": "https://www.livelaw.in/lawschool/articles/artificial-intelligence-justice-ks-puttaswamy-v-union-of-india-openai-cambridge-analytica-scandal-deep-fakes-ministry-of-electronics-information-technology-european-unions-ai-act-trai-250670",
              "linkText": "Link to LiveLaw article"
          }
      ]
  },
  {
      "id": "Lok Sabha polls: Chief Electoral Officer in Kerala warns against misusing social media - The Hindu",
      "categories": [
          "PLATFORMS",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-02-29T00:00:00",
      "title": "Lok Sabha polls: Chief Electoral Officer in Kerala warns against misusing social media - The Hindu",
      "image": {
          "link": "https://www.thehindu.com/news/national/kerala/lok-sabha-polls-chief-electoral-officer-in-kerala-warns-against-misusing-social-media/article67895986.ece",
          "src": "https://www.thehindu.com/theme/images/og-image.png",
          "alt": "",
          "caption": "Lok Sabha polls: Chief Electoral Officer in Kerala warns against misusing social media - The Hindu"
      },
      "body": "Lok Sabha polls: Using social media to spread false information about matters related to the upcoming Lok Sabha polls will invite strong action, Kerala Chief Electoral Officer said on Wednesday",
      "links": [
          {
              "href": "https://www.thehindu.com/news/national/kerala/lok-sabha-polls-chief-electoral-officer-in-kerala-warns-against-misusing-social-media/article67895986.ece",
              "linkText": "Link to The Hindu article"
          }
      ]
  },
  {
      "id": "Google partners with fact-checkers and publications to combat misinformation ahead of general elections | Technology News - The Indian Express",
      "categories": [
          "PLATFORMS",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-01T00:00:00",
      "title": "Google partners with fact-checkers and publications to combat misinformation ahead of general elections | Technology News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/technology/tech-news-technology/google-general-election-misinformation-fight-shakti-partnership-9190092/",
          "src": "https://images.indianexpress.com/2024/03/google-logo-featured-1.jpg",
          "alt": "",
          "caption": "Google partners with fact-checkers and publications to combat misinformation ahead of general elections | Technology News - The Indian Express"
      },
      "body": "Google is providing tools, training for Indian publishers to detect deepfakes and misinformation before massive general elections.",
      "links": [
          {
              "href": "https://indianexpress.com/article/technology/tech-news-technology/google-general-election-misinformation-fight-shakti-partnership-9190092/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "India\u2019s Election Commission fixes privacy flaws that exposed citizens\u2019 information-seeking data | TechCrunch",
      "categories": [
          "ECI",
          "DATA PRIVACY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-07T00:00:00",
      "title": "India\u2019s Election Commission fixes privacy flaws that exposed citizens\u2019 information-seeking data | TechCrunch",
      "image": {
          "link": "https://techcrunch.com/2024/03/07/india-election-commission-rti-privacy-flaws-fixed/",
          "src": "https://techcrunch.com/wp-content/uploads/2024/03/election-commission-india-rti-portal.jpg?w=1200",
          "alt": "",
          "caption": "India\u2019s Election Commission fixes privacy flaws that exposed citizens\u2019 information-seeking data | TechCrunch"
      },
      "body": "India's federal election commission has fixed flaws on its Right to Information portal that exposed data related to citizens' requests.",
      "links": [
          {
              "href": "https://techcrunch.com/2024/03/07/india-election-commission-rti-privacy-flaws-fixed/",
              "linkText": "Link to TechCrunch article"
          }
      ]
  },
  {
      "id": "Linking Aadhaar with voter ID: Why EC wants changes in electoral forms | Explained News - The Indian Express",
      "categories": [
          "AADHAAR",
          "ECI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-08T00:00:00",
      "title": "Linking Aadhaar with voter ID: Why EC wants changes in electoral forms | Explained News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/explained/linking-aadhaar-with-voter-id-rules-explained-9201995/",
          "src": "https://images.indianexpress.com/2024/03/aadhaar-card-1600.jpg",
          "alt": "",
          "caption": "Linking Aadhaar with voter ID: Why EC wants changes in electoral forms | Explained News - The Indian Express"
      },
      "body": "The EC in a letter to the Law Ministry in December proposed amending the RP Act, 1950 to remove the requirement of a \u201csufficient cause\u201d for not providing Aadhaar.",
      "links": [
          {
              "href": "https://indianexpress.com/article/explained/linking-aadhaar-with-voter-id-rules-explained-9201995/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Who can protect India\u2019s general elections from deepfakes and disinformation?",
      "categories": [
          "AI",
          "DISINFORMATION",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-09T00:00:00",
      "title": "Who can protect India\u2019s general elections from deepfakes and disinformation?",
      "image": {
          "link": "https://www.deccanherald.com/elections/india/who-can-protect-indias-general-elections-from-deepfakes-and-disinformation-2928991",
          "src": "https://images.deccanherald.com/deccanherald%2F2024-03%2F77ab36e8-0c19-4365-9b73-f3ca583769fd%2FiStock_1657496656.jpg?rect=0%2C0%2C2309%2C1212&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
          "alt": "",
          "caption": "Who can protect India\u2019s general elections from deepfakes and disinformation?"
      },
      "body": "With an estimated 60-80 elections (depending on your sources) covering nearly 4 billion people, 2024 is the year of elections. In India, nearly a billion people are estimated to be eligible to vote. Given the ongoing global conversation about the impact of generative AI, in general, and deepfakes in particular, it is natural to think about how they will interact, and what it may mean for democracies. The simple, but unsatisfying answer to those questions is that it depends \u2013 on many factors.",
      "links": [
          {
              "href": "https://www.deccanherald.com/elections/india/who-can-protect-indias-general-elections-from-deepfakes-and-disinformation-2928991",
              "linkText": "Link to Deccan Herald article"
          }
      ]
  },
  {
      "id": "India\u2019s Modi government rushes to regulate AI ahead of national elections | India Election 2024 News | Al Jazeera",
      "categories": [
          "AI",
          "MEITY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-13T00:00:00",
      "title": "India\u2019s Modi government rushes to regulate AI ahead of national elections | India Election 2024 News | Al Jazeera",
      "image": {
          "link": "https://www.aljazeera.com/news/2024/3/13/indias-modi-rushes-to-regulate-ai-ahead-of-national-elections",
          "src": "https://www.aljazeera.com/wp-content/uploads/2024/03/2024-03-12T082354Z_1412506638_RC25K6AYEEBV_RTRMADP_3_INDIA-POLITICS-MODI-1710306856.jpg?resize=1920%2C1440",
          "alt": "",
          "caption": "India\u2019s Modi government rushes to regulate AI ahead of national elections | India Election 2024 News | Al Jazeera"
      },
      "body": "As all major parties deploy AI-based manipulation in campaigns, the Indian government is threatening to crack down.",
      "links": [
          {
              "href": "https://www.aljazeera.com/news/2024/3/13/indias-modi-rushes-to-regulate-ai-ahead-of-national-elections",
              "linkText": "Link to Al Jazeer article"
          }
      ]
  },
  {
      "id": "How is Election Commission preparing for the new challenge of the misinformation monster? - The Economic Times",
      "categories": [
          "ECI",
          "DISINFORMATION",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-18T00:00:00",
      "title": "How is Election Commission preparing for the new challenge of the misinformation monster? - The Economic Times",
      "image": {
          "link": "https://economictimes.indiatimes.com/opinion/et-commentary/how-is-election-commission-preparing-for-the-new-challenge-of-the-misinformation-monster/articleshow/108595895.cms",
          "src": "https://img.etimg.com/thumb/msid-108595981,width-1200,height-630,imgsize-107358,overlay-economictimes/photo.jpg",
          "alt": "",
          "caption": "How is Election Commission preparing for the new challenge of the misinformation monster? - The Economic Times"
      },
      "body": "Misinformation is not just an electoral issue in Indian elections but across the many democracies going to polls this year.  Last months Indonesian elections already pointed to this malaise, while the run-up to the US elections this November is already throwing up worrying indications. This is a much more potent problem than what the Cambridge Analytica data scandal in the run-up to the 2019 Lok Sabha elections was. ",
      "links": [
          {
              "href": "https://economictimes.indiatimes.com/opinion/et-commentary/how-is-election-commission-preparing-for-the-new-challenge-of-the-misinformation-monster/articleshow/108595895.cms",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "Did you get PM Modi's 'Viksit Bharat Sampark' letter on WhatsApp? People in Pakistan, UAE received it too | Mint",
      "categories": [
          "MEITY",
          "ECI",
          "DATA PRIVACY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-18T00:00:00",
      "title": "Did you get PM Modi's 'Viksit Bharat Sampark' letter on WhatsApp? People in Pakistan, UAE received it too | Mint",
      "image": {
          "link": "https://www.livemint.com/news/india/did-you-get-pm-modi-viksit-bharat-sampark-whatsapp-letter-people-in-pakistan-dubai-uae-britain-11710777009121.html",
          "src": "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/PM_Modi_Viksit_Bharat_sampark_1710777315754_1710777316192.jpg",
          "alt": "",
          "caption": "Did you get PM Modi's 'Viksit Bharat Sampark' letter on WhatsApp? People in Pakistan, UAE received it too | Mint"
      },
      "body": "A number of non-Indians from Pakistan, and Dubai have receved PM Modi's \u2018Viksit Bharat Sampark\u2019 letter on WhatsApp",
      "links": [
          {
              "href": "https://www.livemint.com/news/india/did-you-get-pm-modi-viksit-bharat-sampark-whatsapp-letter-people-in-pakistan-dubai-uae-britain-11710777009121.html",
              "linkText": "Link to Mint article"
          }
      ]
  },
  {
      "id": "Meta to operationalise Elections Centre; to curb misinformation, misuse of AI-made content \u2013 ThePrint",
      "categories": [
          "PLATFORMS",
          "AI",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-19T00:00:00",
      "title": "Meta to operationalise Elections Centre; to curb misinformation, misuse of AI-made content \u2013 ThePrint",
      "image": {
          "link": "https://theprint.in/economy/meta-to-operationalise-elections-centre-to-curb-misinformation-misuse-of-ai-made-content/2007140/",
          "src": "",
          "alt": "",
          "caption": "Meta to operationalise Elections Centre; to curb misinformation, misuse of AI-made content \u2013 ThePrint"
      },
      "body": "New Delhi, Mar 19 (PTI) Facebook and Instagram-owner Meta on Tuesday vowed to crack down on any misinformation and misuse of AI-generated content during general elections in India, saying it will remove them if they suppress voting, incite violence and use a network of fact-checkers to label content that is fake, altered or manipulated.\n Meta said it will operationalise an India-specific Elections Operations Centre, bringing together experts from across the organisation to identify potential threats and put specific mitigations in place across its apps and technologies in real-time.\n\n\n The social media giant said it is building tools to label AI-generated images from Google, OpenAI, Microsoft, and others that users post to Facebook, Instagram and Threads, as the social media giant pledged its commitment towards election integrity efforts ahead of the Lok Sabha polls.\n\n\r\n\t\t\t\t\tShow Full Article",
      "links": [
          {
              "href": "https://theprint.in/economy/meta-to-operationalise-elections-centre-to-curb-misinformation-misuse-of-ai-made-content/2007140/",
              "linkText": "Link to The Print article"
          }
      ]
  },
  {
      "id": "Spotlight On Election Misinformation: A problem in any language, but some get more attention than others",
      "categories": [
          "DISINFORMATION",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-20T00:00:00",
      "title": "Spotlight On Election Misinformation: A problem in any language, but some get more attention than others",
      "image": {
          "link": "https://www.newindianexpress.com/nation/2024/Mar/20/spotlight-on-election-misinformation-a-problem-in-any-language-but-some-get-more-attention-than-others",
          "src": "https://media.assettype.com/newindianexpress%2F2024-03%2F9a9235a1-b601-4875-95ae-195a39544a96%2Felection_misinformation.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
          "alt": "",
          "caption": "Spotlight On Election Misinformation: A problem in any language, but some get more attention than others"
      },
      "body": "The laws governing social media platforms vary by nation, and critics of tech companies say they have been faster to address concerns about misinformation in th",
      "links": [
          {
              "href": "https://www.newindianexpress.com/nation/2024/Mar/20/spotlight-on-election-misinformation-a-problem-in-any-language-but-some-get-more-attention-than-others",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Why the Opposition is alleging that a WhatsApp forward from Modi is a poll code violation",
      "categories": [
          "MEITY",
          "ECI",
          "DATA PRIVACY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-19T00:00:00",
      "title": "Why the Opposition is alleging that a WhatsApp forward from Modi is a poll code violation",
      "image": {
          "link": "https://scroll.in/article/1065417/why-the-opposition-is-alleging-that-a-whatsapp-forward-from-modi-is-a-poll-code-violation",
          "src": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/199374-qtbblajtvo-1710831988.jpeg",
          "alt": "",
          "caption": "Why the Opposition is alleging that a WhatsApp forward from Modi is a poll code violation"
      },
      "body": "Many Indians and even several foreigners living in the UAE received the message that says it has been sent by the government of India.",
      "links": [
          {
              "href": "https://scroll.in/article/1065417/why-the-opposition-is-alleging-that-a-whatsapp-forward-from-modi-is-a-poll-code-violation",
              "linkText": "Link to Scroll article"
          }
      ]
  },
  {
      "id": "ECI issues directions to remove unauthorised political advertisements | Lok Sabha Elections News - Business Standard",
      "categories": [
          "MEITY",
          "ECI",
          "DATA PRIVACY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-21T00:00:00",
      "title": "ECI issues directions to remove unauthorised political advertisements | Lok Sabha Elections News - Business Standard",
      "image": {
          "link": "https://www.business-standard.com/elections/lok-sabha-election/eci-issues-directions-to-remove-unauthorised-political-advertisements-124032000980_1.html",
          "src": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/16/full/1710586514-2902.jpg",
          "alt": "",
          "caption": "ECI issues directions to remove unauthorised political advertisements | Lok Sabha Elections News - Business Standard"
      },
      "body": "Chief Election Commissioner (CEC) Rajiv Kumar warned against the spread of misinformation during the Lok Sabha elections",
      "links": [
          {
              "href": "https://www.business-standard.com/elections/lok-sabha-election/eci-issues-directions-to-remove-unauthorised-political-advertisements-124032000980_1.html",
              "linkText": "Link to Business Standard article"
          }
      ]
  },
  {
      "id": "MCA fights against deepfake information ahead of Lok Sabha elections through this newly launched WhatsApp Channel - Digital Transformation News | The Financial Express",
      "categories": [
          "AI",
          "PLATFORMS"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-21T00:00:00",
      "title": "MCA fights against deepfake information ahead of Lok Sabha elections through this newly launched WhatsApp Channel - Digital Transformation News | The Financial Express",
      "image": {
          "link": "https://www.financialexpress.com/business/digital-transformation-mca-fights-against-deepfake-information-ahead-of-lok-sabha-elections-through-this-newly-launched-whatsapp-channel-bkg-3433076/",
          "src": "https://www.financialexpress.com/wp-content/uploads/2024/03/max-muselmann-9NXdr0gDKgw-unsplash-1.jpg",
          "alt": "",
          "caption": "MCA fights against deepfake information ahead of Lok Sabha elections through this newly launched WhatsApp Channel - Digital Transformation News | The Financial Express"
      },
      "body": "The Deepfakes Analysis Unit (DAU) of the Misinformation Combat Alliance (MCA) has partnered with Meta to launch a WhatsApp tipline aimed at detecting deepfakes.",
      "links": [
          {
              "href": "https://www.financialexpress.com/business/digital-transformation-mca-fights-against-deepfake-information-ahead-of-lok-sabha-elections-through-this-newly-launched-whatsapp-channel-bkg-3433076/",
              "linkText": "Link to Financial Express article"
          }
      ]
  },
  {
      "id": "Watch what you post on social media, say EC officials",
      "categories": [
          "ECI",
          "DISINFORMATION",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-21T00:00:00",
      "title": "Watch what you post on social media, say EC officials",
      "image": {
          "link": "https://www.newindianexpress.com/states/karnataka/2024/Mar/21/watch-what-you-post-on-social-media-say-ec-officials",
          "src": "https://media.assettype.com/TNIE%2Fimport%2F2018%2F12%2F18%2Foriginal%2FSOCIAL_MEID.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
          "alt": "",
          "caption": "Watch what you post on social media, say EC officials"
      },
      "body": "Citing the example of the recent Hanuman Chalisa row, the election official said, \u201cCognisance has been taken of hate, religious and provocative speeches, where ",
      "links": [
          {
              "href": "https://www.newindianexpress.com/states/karnataka/2024/Mar/21/watch-what-you-post-on-social-media-say-ec-officials",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Artificial intelligence makes a debut in Lok Sabha polls with deepfakes, voice cloning | Long Reads News - The Indian Express",
      "categories": [
          "AI",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-21T00:00:00",
      "title": "Artificial intelligence makes a debut in Lok Sabha polls with deepfakes, voice cloning | Long Reads News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/long-reads/artificial-intelligence-debut-lok-sabha-polls-2024-deepfakes-9225701/",
          "src": "https://images.indianexpress.com/2024/03/AI-Feat.jpeg",
          "alt": "",
          "caption": "Artificial intelligence makes a debut in Lok Sabha polls with deepfakes, voice cloning | Long Reads News - The Indian Express"
      },
      "body": "AI could potentially be a deciding factor in the 2024 polls \u2014 like social media was in the 2014 polls",
      "links": [
          {
              "href": "https://indianexpress.com/article/long-reads/artificial-intelligence-debut-lok-sabha-polls-2024-deepfakes-9225701/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Express View on deepfakes of deceased politicians: Campaigning, dead or alive",
      "categories": [
          "POLITICAL PARTY",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-22T00:00:00",
      "title": "Express View on deepfakes of deceased politicians: Campaigning, dead or alive",
      "image": {
          "link": "https://indianexpress.com/article/opinion/editorials/express-view-on-deepfakes-of-deceased-politicians-campaigning-dead-or-alive-9227403/",
          "src": "https://images.indianexpress.com/2024/03/express-view-39.jpg",
          "alt": "",
          "caption": "Express View on deepfakes of deceased politicians: Campaigning, dead or alive"
      },
      "body": "This election season, AI is being used to generate life-like impressions of deceased stalwarts. It's problematic.",
      "links": [
          {
              "href": "https://indianexpress.com/article/opinion/editorials/express-view-on-deepfakes-of-deceased-politicians-campaigning-dead-or-alive-9227403/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Misinformation during Indian elections: The saga from 2019 to 2024 - The Hindu",
      "categories": [
          "DISINFORMATION",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-25T00:00:00",
      "title": "Misinformation during Indian elections: The saga from 2019 to 2024 - The Hindu",
      "image": {
          "link": "https://www.thehindu.com/news/national/misinformation-during-indian-elections-the-saga-from-2019-to-2024/article67989996.ece",
          "src": "https://th-i.thgim.com/public/incoming/sg5fdh/article67989998.ece/alternates/LANDSCAPE_1200/08GNRAO-FAKE%20NEWS-01.JPG",
          "alt": "",
          "caption": "Misinformation during Indian elections: The saga from 2019 to 2024 - The Hindu"
      },
      "body": "A prelude to The Hindu\u2019s coverage of the evolving nature of misinformation in Indian elections, from the use of WhatsApp to AI-generated synthetic content.",
      "links": [
          {
              "href": "https://www.thehindu.com/news/national/misinformation-during-indian-elections-the-saga-from-2019-to-2024/article67989996.ece",
              "linkText": "Link to The Hindu article"
          }
      ]
  },
  {
      "id": "Social media influencers are India\u2019s new election campaigners - The Hindu",
      "categories": [
          "PLATFORMS",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-27T00:00:00",
      "title": "Social media influencers are India\u2019s new election campaigners - The Hindu",
      "image": {
          "link": "https://www.thehindu.com/sci-tech/technology/social-media-influencers-are-indias-new-election-campaigners/article67996976.ece",
          "src": "https://th-i.thgim.com/public/incoming/9u46oy/article67996985.ece/alternates/LANDSCAPE_1200/India_Elections_93615.jpg",
          "alt": "",
          "caption": "Social media influencers are India\u2019s new election campaigners - The Hindu"
      },
      "body": "Prime Minister Narendra Modi\u2019s BJP has reached out to several hundred social media influencers, all of whom have clout on either Instagram or YouTube.",
      "links": [
          {
              "href": "https://www.thehindu.com/sci-tech/technology/social-media-influencers-are-indias-new-election-campaigners/article67996976.ece",
              "linkText": "Link to The Hindu article"
          }
      ]
  },
  {
      "id": "Lok Sabha elections 2024 will be fought on and decided by mobile phones | Latest News India - Hindustan Times",
      "categories": [
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-26T00:00:00",
      "title": "Lok Sabha elections 2024 will be fought on and decided by mobile phones | Latest News India - Hindustan Times",
      "image": {
          "link": "https://www.hindustantimes.com/india-news/lok-sabha-elections-2024-will-be-fought-on-and-decided-by-mobile-phones-101711454578122.html",
          "src": "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Lok_sabha_elections_1711454825328_1711454825498.jpg",
          "alt": "",
          "caption": "Lok Sabha elections 2024 will be fought on and decided by mobile phones | Latest News India - Hindustan Times"
      },
      "body": "Meta accounts for an overwhelming per cent of social or communication app usage in India. Combined with AI, it makes a potent weapon for Lok Sabha candidates. | Latest News India",
      "links": [
          {
              "href": "https://www.hindustantimes.com/india-news/lok-sabha-elections-2024-will-be-fought-on-and-decided-by-mobile-phones-101711454578122.html",
              "linkText": "Link to Hindustan Times article"
          }
      ]
  },
  {
      "id": "Lok Sabha polls: How GenAI is rewriting political campaigning strategies | Tech News - Business Standard",
      "categories": [
          "POLITICAL PARTY",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-21T00:00:00",
      "title": "Lok Sabha polls: How GenAI is rewriting political campaigning strategies | Tech News - Business Standard",
      "image": {
          "link": "https://www.business-standard.com/industry/news/lok-sabha-polls-how-genai-is-rewriting-political-campaigning-strategies-124031700325_1.html",
          "src": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/17/full/1710695331-55.jpg",
          "alt": "",
          "caption": "Lok Sabha polls: How GenAI is rewriting political campaigning strategies | Tech News - Business Standard"
      },
      "body": "GenAI is being widely employed by political parties and candidates for a personalised approach to voters",
      "links": [
          {
              "href": "https://www.business-standard.com/industry/news/lok-sabha-polls-how-genai-is-rewriting-political-campaigning-strategies-124031700325_1.html",
              "linkText": "Link to Business Standard article"
          }
      ]
  },
  {
      "id": "Misinformation to censorship: A social media moderation dilemma",
      "categories": [
          "PLATFORMS",
          "DISINFORMATION",
          "CENSORSHIP"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-03-28T00:00:00",
      "title": "Misinformation to censorship: A social media moderation dilemma",
      "image": {
          "link": "https://www.medianama.com/2024/03/223-misinformation-social-media-moderation/",
          "src": "https://www.medianama.com/wp-content/uploads/2023/07/fake-news-word-around-magnifying-glass-scaled-1-2048x2048-1.jpg",
          "alt": "",
          "caption": "Misinformation to censorship: A social media moderation dilemma"
      },
      "body": "During the event, speaker Malu Berges noted how COVID-19 vaccine related queries were marked as misinformation during the pandemic.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/03/223-misinformation-social-media-moderation/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "AI-generated deepfake videos, voice cloning emerge as potential threats during election season - The Hindu",
      "categories": [
          "AI",
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-02T00:00:00",
      "title": "AI-generated deepfake videos, voice cloning emerge as potential threats during election season - The Hindu",
      "image": {
          "link": "https://www.thehindu.com/sci-tech/technology/ai-generated-deepfake-videos-voice-cloning-emerge-as-potential-threats-during-election-season/article68018672.ece",
          "src": "https://th-i.thgim.com/public/incoming/9sbclo/article68018675.ece/alternates/LANDSCAPE_1200/India_Election_Explainer_34452.jpg",
          "alt": "",
          "caption": "AI-generated deepfake videos, voice cloning emerge as potential threats during election season - The Hindu"
      },
      "body": "Cybersecurity experts have raised concerns over the possible misuse of AI and deepfake technology during Lok Sabha elections.",
      "links": [
          {
              "href": "https://www.thehindu.com/sci-tech/technology/ai-generated-deepfake-videos-voice-cloning-emerge-as-potential-threats-during-election-season/article68018672.ece",
              "linkText": "Link to The Hindu article"
          }
      ]
  },
  {
      "id": "Congress moves EC on BJP ad using \u2018distorted videos\u2019 | India News - The Indian Express",
      "categories": [
          "AI",
          "DISINFORMATION",
          "ECI",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-03T00:00:00",
      "title": "Congress moves EC on BJP ad using \u2018distorted videos\u2019 | India News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/india/congress-moves-ec-on-bjp-ad-using-distorted-videos-9247912/#:",
          "src": "https://images.indianexpress.com/2024/04/CONGRESS-BJP.jpg",
          "alt": "",
          "caption": "Congress moves EC on BJP ad using \u2018distorted videos\u2019 | India News - The Indian Express"
      },
      "body": "The ECI was requested to take immediate action against the authors of this low-level campaign",
      "links": [
          {
              "href": "https://indianexpress.com/article/india/congress-moves-ec-on-bjp-ad-using-distorted-videos-9247912/#:",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "AI in elections, the good, the bad and the ugly - The Hindu",
      "categories": [
          "AI",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-02T00:00:00",
      "title": "AI in elections, the good, the bad and the ugly - The Hindu",
      "image": {
          "link": "https://www.thehindu.com/opinion/op-ed/ai-in-elections-the-good-the-bad-and-the-ugly/article68017085.ece",
          "src": "https://th-i.thgim.com/public/opinion/op-ed/sf6lux/article68017082.ece/alternates/LANDSCAPE_1200/iStock-1344307113.jpg",
          "alt": "",
          "caption": "AI in elections, the good, the bad and the ugly - The Hindu"
      },
      "body": "The widespread application of AI is likely to bring about a paradigm shift in the general election in 2024",
      "links": [
          {
              "href": "https://www.thehindu.com/opinion/op-ed/ai-in-elections-the-good-the-bad-and-the-ugly/article68017085.ece",
              "linkText": "Link to The Hindu article"
          }
      ]
  },
  {
      "id": "LS polls: EC launches 'Myth vs Reality Register' to tackle misinformation | Lok Sabha Elections News - Business Standard",
      "categories": [
          "ECI",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-03T00:00:00",
      "title": "LS polls: EC launches 'Myth vs Reality Register' to tackle misinformation | Lok Sabha Elections News - Business Standard",
      "image": {
          "link": "https://www.business-standard.com/elections/lok-sabha-election/ls-polls-ec-launches-myth-vs-reality-register-to-tackle-misinformation-124040200868_1.html",
          "src": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/18/thumb/featurecrop/400X400/1668747444-5394.jpg",
          "alt": "",
          "caption": "LS polls: EC launches 'Myth vs Reality Register' to tackle misinformation | Lok Sabha Elections News - Business Standard"
      },
      "body": "In a bid to check the spread of misinformation during the Lok Sabha polls, the Election Commission on Tuesday launched a \"Myth vs Reality Register\" that will be updated regularly to include the latest fake news busted.",
      "links": [
          {
              "href": "https://www.business-standard.com/elections/lok-sabha-election/ls-polls-ec-launches-myth-vs-reality-register-to-tackle-misinformation-124040200868_1.html",
              "linkText": "Link to Business Standard article"
          }
      ]
  },
  {
      "id": "Exclusive: YouTube Approved Ads Promoting Disinformation on India\u2019s Election",
      "categories": [
          "PLATFORMS",
          "POLITICAL PARTY",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-02T00:00:00",
      "title": "Exclusive: YouTube Approved Ads Promoting Disinformation on India\u2019s Election",
      "image": {
          "link": "https://time.com/6961504/youtube-ads-disinformation-india-election/?s=09",
          "src": "https://api.time.com/wp-content/uploads/2024/03/indian-election-youtube-disinformation.jpg?quality=85&w=1024&h=628&crop=1",
          "alt": "",
          "caption": "Exclusive: YouTube Approved Ads Promoting Disinformation on India\u2019s Election"
      },
      "body": "YouTube approved dozens of ads promoting voter suppression and incitement to violence ahead of the upcoming election in India.",
      "links": [
          {
              "href": "https://time.com/6961504/youtube-ads-disinformation-india-election/?s=09",
              "linkText": "Link to Time article"
          }
      ]
  },
  {
      "id": "Combatting AI-driven disinformation in elections - Hindustan Times",
      "categories": [
          "AI",
          "DISINFORMATION",
          "PLATFORMS"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-02T00:00:00",
      "title": "Combatting AI-driven disinformation in elections - Hindustan Times",
      "image": {
          "link": "https://www.hindustantimes.com/ht-insight/governance/combatting-ai-driven-disinformation-in-elections-101712123972548.html",
          "src": "https://www.hindustantimes.com/ht-img/img/2024/04/03/1600x900/0ed45db8-4470-11ec-bd68-b2b71042cab0_1636801007972_1712124069838.jpg",
          "alt": "",
          "caption": "Combatting AI-driven disinformation in elections - Hindustan Times"
      },
      "body": "This article is authored by Ananya Raj Kakoti and Gunwant Singh, scholars of international relations, Jawaharlal Nehru University, New Delhi. \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0",
      "links": [
          {
              "href": "https://www.hindustantimes.com/ht-insight/governance/combatting-ai-driven-disinformation-in-elections-101712123972548.html",
              "linkText": "Link to Hindustan Times article"
          }
      ]
  },
  {
      "id": "Amidst Lok Sabha elections, why fake news, disinformation and fact-checking matter | Explained News - The Indian Express",
      "categories": [
          "DISINFORMATION",
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-02T00:00:00",
      "title": "Amidst Lok Sabha elections, why fake news, disinformation and fact-checking matter | Explained News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/explained/everyday-explainers/lok-sabha-polls-fake-news-fact-checking-9246488/",
          "src": "https://images.indianexpress.com/2024/04/fake-news.jpeg",
          "alt": "",
          "caption": "Amidst Lok Sabha elections, why fake news, disinformation and fact-checking matter | Explained News - The Indian Express"
      },
      "body": "International Fact-checking Day: In this election season, a range of threats abound \u2013 traditional misinformation, generative AI images and videos, and deepfakes. Here's what to know about them and how to safeguard yourself. ",
      "links": [
          {
              "href": "https://indianexpress.com/article/explained/everyday-explainers/lok-sabha-polls-fake-news-fact-checking-9246488/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Mozilla Suggests Changes To WhatsApp In Order To Restrict Message Forwards and Combat Election Disinformation",
      "categories": [
          "DISINFORMATION",
          "PLATFORMS"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-04T00:00:00",
      "title": "Mozilla Suggests Changes To WhatsApp In Order To Restrict Message Forwards and Combat Election Disinformation",
      "image": {
          "link": "https://www.medianama.com/2024/04/223-mozilla-whatsapp-changes-election-disinformation/",
          "src": "https://www.medianama.com/wp-content/uploads/2024/02/WhatsApp-header-1024x500-1.jpg",
          "alt": "",
          "caption": "Mozilla Suggests Changes To WhatsApp In Order To Restrict Message Forwards and Combat Election Disinformation"
      },
      "body": "Mozilla wants WhatsApp to add an additional step nudging users to \u201cpause and reflect\u201d before forwarding messages on the platform.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/04/223-mozilla-whatsapp-changes-election-disinformation/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "India, grappling with election misinfo, weighs up labels and its own AI safety coalition | TechCrunch",
      "categories": [
          "DISINFORMATION",
          "AI",
          "PLATFORMS"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-04T00:00:00",
      "title": "India, grappling with election misinfo, weighs up labels and its own AI safety coalition | TechCrunch",
      "image": {
          "link": "https://techcrunch.com/2024/04/04/india-ai-safety/",
          "src": "https://techcrunch.com/wp-content/uploads/2024/03/content-authenticity-initiative.jpg?w=1200",
          "alt": "",
          "caption": "India, grappling with election misinfo, weighs up labels and its own AI safety coalition | TechCrunch"
      },
      "body": "Tech companies, who built the tools in the first place, are making trips to India to push solutions for AI safety.",
      "links": [
          {
              "href": "https://techcrunch.com/2024/04/04/india-ai-safety/",
              "linkText": "Link to TechCrunch article"
          }
      ]
  },
  {
      "id": "AI misinformation concerns: Deepfake detection workshop to protect electoral integrity organised in Shravasti, ET Government",
      "categories": [
          "AI",
          "DISINFORMATION"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-08T00:00:00",
      "title": "AI misinformation concerns: Deepfake detection workshop to protect electoral integrity organised in Shravasti, ET Government",
      "image": {
          "link": "https://government.economictimes.indiatimes.com/news/secure-india/ai-misinformation-concerns-government-initiates-deepfake-detection-workshop-to-protect-electoral-iintegrity/109117377",
          "src": "https://etimg.etb2bimg.com/thumb/msid-109117377,imgsize-448766,width-1200,height=765,overlay-etgovernment/news/secure-india/ai-misinformation-concerns-government-initiates-deepfake-detection-workshop-to-protect-electoral-iintegrity.jpg",
          "alt": "",
          "caption": "AI misinformation concerns: Deepfake detection workshop to protect electoral integrity organised in Shravasti, ET Government"
      },
      "body": "Inclusive AI: Through interactive sessions, case studies, and practical demonstrations, the participants were exposed to practical strategies and tools for detecting and combating deepfakes. The purpose of the workshop was to inform and educate the government officials of Shravasti on how to detect deepfakes. ",
      "links": [
          {
              "href": "https://government.economictimes.indiatimes.com/news/secure-india/ai-misinformation-concerns-government-initiates-deepfake-detection-workshop-to-protect-electoral-iintegrity/109117377",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "Meta overhauls rules on deepfakes, other altered media | Technology News - The Indian Express",
      "categories": [
          "PLATFORMS",
          "AI"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-06T00:00:00",
      "title": "Meta overhauls rules on deepfakes, other altered media | Technology News - The Indian Express",
      "image": {
          "link": "https://indianexpress.com/article/technology/tech-news-technology/meta-overhauls-rules-on-deepfakes-other-altered-media-9254343/",
          "src": "https://images.indianexpress.com/2024/04/meta-logo-featured-1.jpg",
          "alt": "",
          "caption": "Meta overhauls rules on deepfakes, other altered media | Technology News - The Indian Express"
      },
      "body": "Meta will begin applying the more prominent \"high-risk\" labels immediately, among other things.",
      "links": [
          {
              "href": "https://indianexpress.com/article/technology/tech-news-technology/meta-overhauls-rules-on-deepfakes-other-altered-media-9254343/",
              "linkText": "Link to Indian Express article"
          }
      ]
  },
  {
      "id": "Tech Manifestos 2024: INC Vows to Withdraw Broadcast Bill, Amend Data Protection Act, and Tackle Government Censorship",
      "categories": [
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-08T00:00:00",
      "title": "Tech Manifestos 2024: INC Vows to Withdraw Broadcast Bill, Amend Data Protection Act, and Tackle Government Censorship",
      "image": {
          "link": "https://www.medianama.com/2024/04/223-congress-manifesto-2024-general-elections-censorship-dpdp/",
          "src": "https://www.medianama.com/wp-content/uploads/2024/04/Manifesto-1.jpeg",
          "alt": "",
          "caption": "Tech Manifestos 2024: INC Vows to Withdraw Broadcast Bill, Amend Data Protection Act, and Tackle Government Censorship"
      },
      "body": "Congress has vowed to repeal Broadcasting Services (Regulation) Bill and remove 'restrictive provisions' of the DPDP Act, amid other promises.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/04/223-congress-manifesto-2024-general-elections-censorship-dpdp/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "Digital Democracy: Social media influencers rally millions to vote for Modi, ET Government",
      "categories": [
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-11T00:00:00",
      "title": "Digital Democracy: Social media influencers rally millions to vote for Modi, ET Government",
      "image": {
          "link": "https://government.economictimes.indiatimes.com/news/digital-india/digital-democracy-social-media-influencers-rally-millions-to-vote-for-modi/109216188?utm_source=latest_news&utm_medium=homepage",
          "src": "https://etimg.etb2bimg.com/thumb/msid-109216188,imgsize-24272,width-1200,height=765,overlay-etgovernment/news/digital-india/digital-democracy-social-media-influencers-rally-millions-to-vote-for-modi.jpg",
          "alt": "",
          "caption": "Digital Democracy: Social media influencers rally millions to vote for Modi, ET Government"
      },
      "body": "Social Media Influencers: With India's marathon general elections set to start on April 19, critics say Modi's ruling Bharatiya Janata Party (BJP) has co-opted the vast youth fan bases of hugely influential social media stars -- in fields ranging from music to culture, and fashion to fitness -- to push their political message.",
      "links": [
          {
              "href": "https://government.economictimes.indiatimes.com/news/digital-india/digital-democracy-social-media-influencers-rally-millions-to-vote-for-modi/109216188?utm_source=latest_news&utm_medium=homepage",
              "linkText": "Link to ET article"
          }
      ]
  },
  {
      "id": "Lok Sabha elections 2024: Video of Aamir Khan warning against rhetoric fake, says actor's spokesperson",
      "categories": [
          "AI",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-16T00:00:00",
      "title": "Lok Sabha elections 2024: Video of Aamir Khan warning against rhetoric fake, says actor's spokesperson",
      "image": {
          "link": "https://www.deccanherald.com/elections/india/lok-sabha-elections-2024-video-of-aamir-khan-warning-against-rhetoric-fake-says-actors-spokesperson-2980378",
          "src": "https://images.deccanherald.com/deccanherald%2F2024-04%2F12f27534-60da-49d0-b109-c29e71e49249%2FPTI4_29_2019_000044B.jpg?rect=0%2C41%2C2182%2C1146&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
          "alt": "",
          "caption": "Lok Sabha elections 2024: Video of Aamir Khan warning against rhetoric fake, says actor's spokesperson"
      },
      "body": "New Delhi, Apr 16 (PTI) Aamir Khan has never endorsed any political party in his 35-year career and the viral video of the Bollywood superstar is fake and alarming, his spokesperson said on Tuesday.",
      "links": [
          {
              "href": "https://www.deccanherald.com/elections/india/lok-sabha-elections-2024-video-of-aamir-khan-warning-against-rhetoric-fake-says-actors-spokesperson-2980378",
              "linkText": "Link to Deccan Herald article"
          }
      ]
  },
  {
      "id": "X takes down four political posts after Election Commission directives, but says it disagrees",
      "categories": [
          "ECI",
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-17T00:00:00",
      "title": "X takes down four political posts after Election Commission directives, but says it disagrees",
      "image": {
          "link": "https://scroll.in/latest/1066734/x-takes-down-four-political-posts-after-election-commission-directives-but-says-it-disagrees",
          "src": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/195053-gdfxsberkk-1697512106.jpg",
          "alt": "",
          "caption": "X takes down four political posts after Election Commission directives, but says it disagrees"
      },
      "body": "The social media platform also called on the poll body \u2018to publish all of its takedown orders going forward\u2019.",
      "links": [
          {
              "href": "https://scroll.in/latest/1066734/x-takes-down-four-political-posts-after-election-commission-directives-but-says-it-disagrees",
              "linkText": "Link to Scroll article"
          }
      ]
  },
  {
      "id": "Congress questions EC on getting social media post on electoral bonds deleted | India News",
      "categories": [
          "ECI",
          "PLATFORMS",
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-17T00:00:00",
      "title": "Congress questions EC on getting social media post on electoral bonds deleted | India News",
      "image": {
          "link": "https://timesofindia.indiatimes.com/india/congress-questions-ec-on-getting-social-media-post-on-electoral-bonds-deleted/articleshow/109375580.cms",
          "src": "https://static.toiimg.com/thumb/msid-109375721,width-1070,height-580,imgsize-1505289,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "alt": "",
          "caption": "Congress questions EC on getting social media post on electoral bonds deleted | India News"
      },
      "body": "India News: NEW DELHI: The Congress on Wednesday questioned the Election Commission's move to get a post on electoral bonds scheme deleted from social media platf.",
      "links": [
          {
              "href": "https://timesofindia.indiatimes.com/india/congress-questions-ec-on-getting-social-media-post-on-electoral-bonds-deleted/articleshow/109375580.cms",
              "linkText": "Link to Times of India article"
          }
      ]
  },
  {
      "id": "Tech Manifestos 2024: BJP Wants To Promote ONDC, Increase Digitisation Of Land Records, No Mention Of AI, Digital India Act",
      "categories": [
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-16T00:00:00",
      "title": "Tech Manifestos 2024: BJP Wants To Promote ONDC, Increase Digitisation Of Land Records, No Mention Of AI, Digital India Act",
      "image": {
          "link": "https://www.medianama.com/2024/04/223-tech-manifesto-2024-bjp-land-record-digitisation-no-ai/",
          "src": "https://www.medianama.com/wp-content/uploads/2024/04/BJP-manifesto.jpeg",
          "alt": "",
          "caption": "Tech Manifestos 2024: BJP Wants To Promote ONDC, Increase Digitisation Of Land Records, No Mention Of AI, Digital India Act"
      },
      "body": "Despite BJP promoting Aadhaar as one of the fundamental components of DPI and IndiaStack, it is not even mentioned once in the manifesto.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/04/223-tech-manifesto-2024-bjp-land-record-digitisation-no-ai/",
              "linkText": "Link to Medianama article"
          }
      ]
  },
  {
      "id": "Tech Manifestos 2024: CPI(M) Promises To Scrap Data Protection Law, Repeal IT Rules\u2019, Fact-Check Amendment And More",
      "categories": [
          "POLITICAL PARTY"
      ],
      "color": "green",
      "faicon": "vote-yea",
      "datetime": "2024-04-11T00:00:00",
      "title": "Tech Manifestos 2024: CPI(M) Promises To Scrap Data Protection Law, Repeal IT Rules\u2019, Fact-Check Amendment And More",
      "image": {
          "link": "https://www.medianama.com/2024/04/223-tech-manifestos-2024-cpim-data-protection-law-fact-check-amendment/",
          "src": "https://www.medianama.com/wp-content/uploads/2019/03/cpim-tech-manifesto-elections-2019.jpg.jpg",
          "alt": "",
          "caption": "Tech Manifestos 2024: CPI(M) Promises To Scrap Data Protection Law, Repeal IT Rules\u2019, Fact-Check Amendment And More"
      },
      "body": "Tech policy highlights from the election manifesto of Communist Party of India (Marxist) for Indian General Elections 2024.",
      "links": [
          {
              "href": "https://www.medianama.com/2024/04/223-tech-manifestos-2024-cpim-data-protection-law-fact-check-amendment/",
              "linkText": "Link to Medianama article"
          }
      ]
  }
]
const pageTitle = 'Digital Rights are going great - Elections edition'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
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