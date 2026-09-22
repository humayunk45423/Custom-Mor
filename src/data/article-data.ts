import { AssociatedPerson, Citation, InfoboxData, SectionContent } from '../types';

export const citationsList: Citation[] = [
  {
    id: 'CIT-1',
    number: 1,
    evidenceId: 'CM-001',
    authorOrOrg: {
      bn: 'বদরগঞ্জ পৌরসভা রাজস্ব ও কর মূল্যায়ন শাখা',
      en: 'Badarganj Municipality Revenue & Tax Assessment Branch'
    },
    title: {
      bn: 'পৌরকর ও রেট নির্ধারণ বিল রসিদ (আর্থিক বছর: ২০২৫–২০২৬, বিল নং ৪৭৯)',
      en: 'Municipal Holding Tax Assessment & Collection Bill (FY 2025–2026, Bill No: 479)'
    },
    date: '2026-01-31',
    publisher: {
      bn: 'বদরগঞ্জ পৌরসভা কার্যালয়, রংপুর',
      en: 'Badarganj Municipality Office, Rangpur'
    },
    documentId: 'CM-001',
    page: 'করদাতা আইডি: ০২৭৮-০০',
    quote: {
      bn: '“রাস্তা ও এলাকা: কাস্টম মোড়, উত্তর বালুয়াভাটা, বদরগঞ্জ | করদাতা: মোঃ সালাম সিদ্দিকী।”',
      en: '"Street/Locality: Custom Mor, Uttar Baluavata, Badarganj | Taxpayer: Md. Salam Siddiqui."'
    },
    confidence: 'official-record'
  },
  {
    id: 'CIT-2',
    number: 2,
    evidenceId: 'CM-002',
    authorOrOrg: {
      bn: 'রংপুর পল্লী বিদ্যুৎ সমিতি-২, বদরগঞ্জ জোনাল অফিস',
      en: 'Rangpur Palli Bidyut Samiti-2, Badarganj Zonal Office'
    },
    title: {
      bn: 'আবাসিক বিদ্যুৎ বিল ও সংযোগ ঠিকানা নিবন্ধন (বিল মাস: জানুয়ারি ২০২৬)',
      en: 'Residential Electricity Utility Bill & Supply Point Address Record (Month: Jan 2026)'
    },
    date: '2026-01-10',
    publisher: {
      bn: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB)',
      en: 'Bangladesh Rural Electrification Board (BREB)'
    },
    documentId: 'CM-002',
    page: 'হিসাব নং: ১০২২০২৮৮৬৫২০৫, মিটার নং: ০৮৫৯৪৭',
    quote: {
      bn: '“গ্রাহক: মোঃ খলিলুর রহমান / মোঃ সালাম সিদ্দিকী | ঠিকানা: কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ, রংপুর।”',
      en: '"Customer: Md. Khalilur Rahman / Md. Salam Siddiqui | Address: Custom Mor, Baluavata, Badarganj, Rangpur."'
    },
    confidence: 'official-record'
  },
  {
    id: 'CIT-3',
    number: 3,
    evidenceId: 'CM-003',
    authorOrOrg: {
      bn: 'কাস্টম মোড় সরেজমিন সমীক্ষা ও দৃশ্যমান সংরক্ষণাগার',
      en: 'Custom Mor Field Survey & Visual Photographic Archive'
    },
    title: {
      bn: 'কাস্টম মোড় চার রাস্তার সংযোগস্থলের প্যানোরামা আলোকচিত্র রেকর্ড',
      en: 'Panoramic Photographic Record of Custom Mor Four-Way Crossroads & Marketplace'
    },
    date: '2021-06-11',
    publisher: {
      bn: 'স্থানীয় দৃশ্যমান ইতিহাস প্রকল্প, বালুয়াভাটা',
      en: 'Local Visual History Documentation Project, Baluavata'
    },
    documentId: 'CM-003',
    confidence: 'documented-local-account',
    quote: {
      bn: '“চার রাস্তার সংযোগস্থল, পাকা সড়ক অক্ষ, এবং সামাজিক ও বাণিজ্যিক কেন্দ্রবিন্দু হিসেবে মোড়ের অবকাঠামো দৃশ্যমান।”',
      en: '"Visual documentation corroborates the four-way intersection, paved transit axes, and community market hub."'
    }
  },
  {
    id: 'CIT-4',
    number: 4,
    evidenceId: 'CM-004',
    authorOrOrg: {
      bn: 'গ্রামীণফোন ৪জি রিটেইল নেটওয়ার্ক ও সাদিয়া ভ্যারাইটি স্টোর',
      en: 'Grameenphone 4G Retail Network & Sadia Variety Store'
    },
    title: {
      bn: 'টেলিকম অনুমোদিত রিটেইলার সাইনবোর্ড ও দেওয়াল মার্কার রেকর্ড',
      en: 'Authorized Telecom Retailer Marquee & Exterior Building Mural Record'
    },
    date: '2021-06-11',
    publisher: {
      bn: 'গ্রামীণফোন লিমিটেড বাণিজ্যিক বিতরণ ও বালুয়াভাটা ব্যবসায়ী সমিতি',
      en: 'Grameenphone Ltd Commercial Distribution & Baluavata Traders Guild'
    },
    documentId: 'CM-004',
    confidence: 'documented-local-account',
    quote: {
      bn: '“সাইনবোর্ডে মুদ্রিত: কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ এবং দেওয়ালে অঙ্কিত: কাস্টম মোড়, উত্তর বালুয়াভাটা।”',
      en: '"Marquee explicitly displays: Custom Mor, Baluavata, Badarganj; exterior mural reads: Custom Mor, Uttar Baluavata."'
    }
  },
  {
    id: 'CIT-5',
    number: 5,
    evidenceId: 'CM-005',
    authorOrOrg: {
      bn: 'মাহিম ফ্যাশন ও কাস্টম মোড় বণিক পরিষদ',
      en: 'Mahim Fashion & Custom Mor Merchant Council'
    },
    title: {
      bn: 'বাণিজ্যিক পোশাক বিপণি সাইনবোর্ড আলোকচিত্র রেকর্ড',
      en: 'Commercial Apparel Retail Signboard Archival Photograph'
    },
    date: '2021-06-11',
    publisher: {
      bn: 'স্থানীয় ব্যবসায়ী সমিতি সংরক্ষণ শাখা, বদরগঞ্জ',
      en: 'Local Merchant Association Archive Branch, Badarganj'
    },
    documentId: 'CM-005',
    confidence: 'documented-local-account',
    quote: {
      bn: '“সাইনবোর্ডে উৎকীর্ণ ঠিকানা: কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ, রংপুর।”',
      en: '"Signboard address inscription: Custom Mor, Baluavata, Badarganj, Rangpur."'
    }
  },
  {
    id: 'CIT-6',
    number: 6,
    evidenceId: 'CM-006',
    authorOrOrg: {
      bn: 'মিতু টেইলার্স ও হুমায়ুন ওয়্যার নেট কর্মশালা',
      en: 'Mitu Tailors & Humayun Wire Net Enterprise'
    },
    title: {
      bn: 'ক্ষুদ্র কুটির শিল্প ও টেইলারিং সাইনবোর্ড ফলক রেকর্ড',
      en: 'Cottage Industry & Tailoring Workshop Marquee Archival Photo'
    },
    date: '2021-06-11',
    publisher: {
      bn: 'বালুয়াভাটা ক্ষুদ্র উদ্যোক্তা ফোরাম',
      en: 'Baluavata Small Entrepreneurs Forum'
    },
    documentId: 'CM-006',
    confidence: 'documented-local-account',
    quote: {
      bn: '“সাইনবোর্ডের ঠিকানা: কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ, রংপুর।”',
      en: '"Signboard trade address: Custom Mor, Baluavata, Badarganj, Rangpur."'
    }
  },
  {
    id: 'CIT-7',
    number: 7,
    evidenceId: 'CM-007',
    authorOrOrg: {
      bn: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর এবং এলজিইডি বদরগঞ্জ',
      en: 'Directorate of Land Records & Surveys and LGED Badarganj'
    },
    title: {
      bn: 'বালুয়াভাটা মৌজার সড়ক অবকাঠামো ও ক্যাডাস্ট্রাল ভৌগোলিক শিট ৩',
      en: 'Cadastral Geographical Sheet 3 & Road Infrastructure of Baluavata Mouza'
    },
    date: '2015-11-20',
    publisher: {
      bn: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
      en: 'Government of the People\'s Republic of Bangladesh'
    },
    documentId: 'CM-007',
    confidence: 'survey-map',
    quote: {
      bn: '“স্থানাঙ্ক: ২৫.৬৭৩৮° উত্তর, ৮৯.০৫২৬° পূর্ব সংলগ্ন সংযোগ পয়েন্ট।”',
      en: '"Junction point situated at coordinates 25.6738° N, 89.0526° E."'
    }
  },
  {
    id: 'CIT-8',
    number: 8,
    evidenceId: 'CM-008',
    authorOrOrg: {
      bn: 'বালুয়াভাটা প্রবীণ নাগরিক পরিষদ ও স্থানীয় ইতিহাস সংগ্রাহক কমিটি',
      en: 'Baluavata Senior Citizens Council & Local History Documentation Committee'
    },
    title: {
      bn: 'কাস্টম মোড়ের ২০০৬ সনের নামকরণের পটভূমি সংক্রান্ত প্রত্যক্ষদর্শী যৌথ স্মারকলিপি',
      en: 'Eyewitness Joint Memorandum on the 2006 Custom Mor Naming Background'
    },
    date: '2021-08-10',
    publisher: {
      bn: 'স্থানীয় ইতিহাস সংরক্ষণাগার, বদরগঞ্জ',
      en: 'Local History Archives, Badarganj'
    },
    documentId: 'CM-008',
    confidence: 'oral-testimony',
    quote: {
      bn: '“২০০৬ সালে তৎকালীন কমিশনার মোঃ রুহুল আমিন ও গণ্যমান্য মুরুব্বিদের সর্বসম্মত প্রস্তাবে এই নাম চালু হয়।”',
      en: '"In 2006, the unanimous proposal by then-commissioner Md. Ruhul Amin and respected elders popularized this name."'
    }
  },
  {
    id: 'CIT-9',
    number: 9,
    authorOrOrg: {
      bn: 'বাংলাদেশ জাতীয় তথ্য বাতায়ন / বদরগঞ্জ উপজেলা পোর্টাল',
      en: 'Bangladesh National Portal / Badarganj Upazila Web Portal'
    },
    title: {
      bn: 'বদরগঞ্জ উপজেলার প্রশাসনিক সীমানা, মৌজা ও ভৌগোলিক তথ্যপঞ্জি',
      en: 'Administrative Boundaries, Mouza Listing, and Geography of Badarganj Upazila'
    },
    date: '2023-01-05',
    publisher: {
      bn: 'উপজেলা প্রশাসন, বদরগঞ্জ',
      en: 'Upazila Administration, Badarganj'
    },
    url: 'https://badarganj.rangpur.gov.bd',
    confidence: 'official-record'
  },
  {
    id: 'CIT-10',
    number: 10,
    authorOrOrg: {
      bn: 'ওপেনস্ট্রিটম্যাপ ও বৈশ্বিক ভৌগোলিক তথ্য ডাটাবেজ',
      en: 'OpenStreetMap & Global Geospatial Database Community'
    },
    title: {
      bn: 'Custom Mor Node #982341 (Road Junction at Baluavata)',
      en: 'Custom Mor Node #982341 (Road Junction at Baluavata)'
    },
    date: '2024-03-12',
    url: 'https://www.openstreetmap.org',
    confidence: 'survey-map'
  }
];

export const infoboxData: InfoboxData = {
  title: {
    bn: 'কাস্টম মোড়',
    en: 'Custom Mor'
  },
  nativeName: 'কাস্টম মোড়',
  type: {
    bn: 'চার রাস্তার সড়ক সংযোগস্থল ও গ্রামীণ বাণিজ্যিক মোড় (Road intersection)',
    en: 'Four-way road intersection & local commercial crossroads'
  },
  country: {
    bn: 'বাংলাদেশ',
    en: 'Bangladesh'
  },
  division: {
    bn: 'রংপুর বিভাগ',
    en: 'Rangpur Division'
  },
  district: {
    bn: 'রংপুর',
    en: 'Rangpur'
  },
  thana: {
    bn: 'বদরগঞ্জ',
    en: 'Badarganj'
  },
  mouza: {
    bn: 'বালুয়াভাটা',
    en: 'Baluavata'
  },
  namingYear: '২০০৬ (2006)',
  namingYearStatus: {
    bn: 'স্থানীয় বিবরণ ও প্রবীণদের সাক্ষ্য অনুসারে (দালিলিক তথ্যানুসন্ধান চলমান)',
    en: 'Documented local account & elder testimonies (archival corroboration ongoing)'
  },
  coordinates: {
    lat: 25.6738,
    lng: 89.0526,
    display: '25°40\'25.7"N 89°03\'09.4"E'
  },
  connectivity: [
    { bn: 'উত্তর: বদরগঞ্জ পৌর সদর ও রেলওয়ে স্টেশন রোড', en: 'North: Badarganj Town Centre & Railway Station Rd' },
    { bn: 'দক্ষিণ: বালুয়াভাটা দক্ষিণপাড়া ও কৃষি সংযোগ সড়ক', en: 'South: Baluavata South Para & Agricultural Feeder Rd' },
    { bn: 'পূর্ব: রংপুর আঞ্চলিক সংযোগ সড়ক ও শ্যামপুর লিঙ্ক', en: 'East: Rangpur Regional Bypass & Shyampur Link' },
    { bn: 'পশ্চিম: তারাগঞ্জ-বদরগঞ্জ পশ্চিম সংযোগ পথ', en: 'West: Taraganj-Badarganj Western Feeder Path' }
  ],
  notableFeatures: [
    { bn: 'গ্রামীণফোন ৪জি রিটেইলার ও সাদিয়া ভ্যারাইটি স্টোর', en: 'Grameenphone 4G Retailer & Sadia Variety Store' },
    { bn: 'বদরগঞ্জ পৌরসভা ও পল্লী বিদ্যুৎ নিবন্ধিত হোল্ডিং এলাকা', en: 'Badarganj Municipality & Palli Bidyut Registered Locality' },
    { bn: 'মাহিম ফ্যাশন, মিতু টেইলার্স ও কুটির শিল্প বিপণি', en: 'Mahim Fashion, Mitu Tailors & Wire Net enterprises' },
    { bn: 'কাস্টমস কর্মকর্তার ঐতিহাসিক বাসভবন সংলগ্ন মোড়', en: 'Proximity to historic Customs Officer residence' }
  ]
};

export const associatedPersons: AssociatedPerson[] = [
  {
    name: {
      bn: 'মোঃ রুহুল আমিন',
      en: 'Md. Ruhul Amin'
    },
    role: {
      bn: 'তৎকালীন স্থানীয় কমিশনার / জনপ্রতিনিধি',
      en: 'Then Local Ward Commissioner / Elected Representative'
    },
    description: {
      bn: '২০০৬ সালে মোড়টির প্রাতিষ্ঠানিক পরিচয় ও স্থানীয় আলোচনার সমন্বয়ে প্রধান ভূমিকা পালনকারী জনপ্রতিনিধি। তিনি মোড়ের নাম হিসেবে কাস্টম মোড় ব্যবহারের প্রস্তাবে সম্মতি ও সামাজিক সমর্থন প্রদান করেন।',
      en: 'Key community leader who coordinated civic discussions in 2006. He endorsed and helped formalize community acceptance of the designation Custom Mor.'
    }
  },
  {
    name: {
      bn: 'মোঃ লতিফ সরদার',
      en: 'Md. Latif Sardar'
    },
    role: {
      bn: 'স্থানীয় বিশিষ্ট সমাজকর্মী ও প্রবীণ অভিভাবক',
      en: 'Local Social Elder & Community Guardian'
    },
    description: {
      bn: 'মোড়ের চারপাশের স্থানীয় বাসিন্দাদের একত্র করে মোড়ের পরিচিতি নিশ্চিতকরণ এবং পরবর্তীতে সাইনবোর্ড স্থাপনের উদ্যোগে সক্রিয় ভূমিকা রাখেন।',
      en: 'Organized neighborhood residents to formalize the junction’s landmark status and supported the subsequent erection of the directional signboard.'
    }
  },
  {
    name: {
      bn: 'আকমল প্রফেসর',
      en: 'Akmal Professor'
    },
    role: {
      bn: 'শিক্ষাবিদ ও স্থানীয় বিশিষ্ট ব্যক্তিত্ব',
      en: 'Respected Educator & Senior Academic'
    },
    description: {
      bn: 'নামকরণের যৌক্তিকতা ও স্থানীয় স্মৃতিতে স্থানটির স্থায়ী মর্যাদা প্রতিষ্ঠায় পরামর্শ প্রদানকারী শ্রদ্ধাভাজন ব্যক্তিত্ব।',
      en: 'Senior educational figure who advised on the cultural identity and community consensus behind the historic naming.'
    }
  },
  {
    name: {
      bn: 'মোঃ গোলজার',
      en: 'Md. Golzar'
    },
    role: {
      bn: 'স্থানীয় প্রবীণ ব্যবসায়ী ও সমাজহিতৈষী',
      en: 'Local Merchant Elder & Civic Philanthropist'
    },
    description: {
      bn: 'মোড়ের সার্বিক উন্নয়ন ও বাণিজ্যিক কেন্দ্র হিসেবে এর পরিচিতি প্রতিষ্ঠায় পরামর্শক দলের অন্যতম সদস্য।',
      en: 'Veteran merchant elder who supported the commercial landmark identity of the intersection.'
    }
  },
  {
    name: {
      bn: 'মোঃ মোখলেস',
      en: 'Md. Mokhles'
    },
    role: {
      bn: 'স্থানীয় গণ্যমান্য মুরব্বি ও মধ্যস্থতাকারী',
      en: 'Respected Community Elder & Arbiter'
    },
    description: {
      bn: 'নামকরণ সম্পর্কিত স্থানীয় প্রবীণদের বৈঠকসমূহে নিয়মিত অংশগ্রহণকারী এবং সার্বজনীন সমর্থক।',
      en: 'Regular participant in elder counsels who championed neighborhood consensus for the landmark designation.'
    }
  },
  {
    name: {
      bn: 'মোঃ আলিম শাহ',
      en: 'Md. Alim Shah'
    },
    role: {
      bn: 'ঐতিহ্য সংরক্ষক ও স্থানীয় প্রবীণ বাসিন্দা',
      en: 'Local Heritage Chronicler & Elder Resident'
    },
    description: {
      bn: 'মোড়ের নামকরণের মৌখিক বিবরণ ও পরবর্তী প্রজন্মের মাঝে এর ইতিহাস সংরক্ষণে অবদান রাখা প্রবীণ মুরব্বি।',
      en: 'Senior elder who preserved oral testimonies of the junction\'s background across subsequent generations.'
    }
  }
];

export const articleSections: SectionContent[] = [
  {
    id: 'introduction',
    number: 1,
    title: {
      bn: 'ভূমিকা',
      en: 'Introduction'
    },
    paragraphs: [
      {
        text: {
          bn: 'কাস্টম মোড় (Custom Mor) বাংলাদেশের রংপুর বিভাগের রংপুর জেলার অন্তর্গত বদরগঞ্জ উপজেলার বালুয়াভাটা মৌজায় অবস্থিত একটি সুপরিচিত ও সক্রিয় চার রাস্তার সড়ক সংযোগস্থল। স্থানীয় ভৌগোলিক ও যোগাযোগের ক্ষেত্রে এটি একটি উল্লেখযোগ্য কেন্দ্রবিন্দু হিসেবে কাজ করে, যা বদরগঞ্জ পৌর সদর থেকে আশপাশের গ্রামীণ অঞ্চল ও সংযোগ সড়কের সঙ্গে যাতায়াত সহজতর করেছে।',
          en: 'Custom Mor (Bengali: কাস্টম মোড়) is a prominent four-way road intersection situated within Baluavata mouza, located in the Badarganj Upazila of Rangpur District, within the Rangpur Division of Bangladesh. Geographically and socially, the intersection serves as a vital transit node connecting Badarganj municipal centre with adjacent rural mouzas and regional feeder highways.'
        },
        citations: ['CIT-1', 'CIT-2', 'CIT-9'],
        claimConfidence: 'official-record'
      },
      {
        text: {
          bn: 'স্থানীয় ইতিহাস ও প্রত্যক্ষদর্শী বিবরণ অনুযায়ী, স্থানটি প্রায় ২০০৬ খ্রিস্টাব্দ থেকে স্থানীয় অধিবাসীদের মুখে "কাস্টম মোড়" নামে পরিচিত হতে শুরু করে। পরবর্তীতে বদরগঞ্জ পৌরসভার হোল্ডিং কর রসিদ, পল্লী বিদ্যুৎ সমিতির ইউটিলিটি বিল, টেলিকম সাইনবোর্ড (যেমন গ্রামীণফোন ৪জি রিটেইলার) এবং স্থানীয় ব্যবসা প্রতিষ্ঠানের ঠিকানায় এই নামের ধারাবাহিক ও প্রাতিষ্ঠানিক প্রয়োগ প্রমাণিত হয়েছে।',
          en: 'According to documented local accounts and oral testimonies, the junction began circulating under the name "Custom Mor" in approximately 2006. In subsequent years, the designation achieved institutional continuity across Badarganj Municipality tax receipts, Palli Bidyut utility bills, telecommunications marquees (such as Grameenphone 4G retailer), and commercial storefronts.'
        },
        citations: ['CIT-1', 'CIT-2', 'CIT-3', 'CIT-4', 'CIT-8'],
        claimConfidence: 'official-record'
      }
    ]
  },
  {
    id: 'naming',
    number: 2,
    title: {
      bn: 'নামকরণ',
      en: 'Naming'
    },
    paragraphs: [
      {
        text: {
          bn: 'স্থানীয় প্রবীণ বাসিন্দা ও মৌখিক সাক্ষ্য অনুসারে, ২০০৬ সালের দিকে এই মোড়টিকে একটি স্বতন্ত্র নামে চিহ্নিত করার প্রয়োজনীয়তা অনুভূত হয়। এর পূর্বে এটি বালুয়াভাটার সাধারণ সড়ক মোড় বা পাড়ার সংযোগস্থল হিসেবে পরিচিত ছিল। স্থানীয় আলোচনার প্রেক্ষিতে তৎকালীন বাসিন্দাগণ সম্মিলিতভাবে এটিকে "কাস্টম মোড়" নামকরণের প্রস্তাব করেন।',
          en: 'According to local accounts, a recognized need emerged around 2006 to assign a distinctive landmark identity to the crossroads, which had previously been referred to colloquially as a rural junction in Baluavata. Following civic deliberations, neighborhood residents collectively proposed the name "Custom Mor".'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      },
      {
        text: {
          bn: 'ইতিহাস চর্চার নিরপেক্ষ মানদণ্ড অনুযায়ী, কোন স্বাধীন প্রকাশিত সরকারি গেজেট ব্যতিরেকে এই নামকরণের সালকে চূড়ান্ত রাষ্ট্রীয় ডিক্রি হিসেবে গণ্য না করে সরেজমিনে সংগৃহীত একটি প্রামাণ্য ও সর্বজনস্বীকৃত স্থানীয় ঐতিহাসিক বিবরণ হিসেবে লিপিবদ্ধ করা হয়েছে।',
          en: 'Under academic editorial standards, in the absence of a contemporaneous official government gazette, the year 2006 is classified as a documented local historical account rather than a state-promulgated decree.'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      }
    ]
  },
  {
    id: 'naming-background',
    number: 3,
    title: {
      bn: 'নামকরণের প্রেক্ষাপট',
      en: 'Background of the Naming'
    },
    paragraphs: [
      {
        text: {
          bn: 'স্থানীয় অধিবাসীদের যৌথ স্মৃতিচারণ অনুযায়ী, ওই সময়ে বাংলাদেশ সরকারের শুল্ক ও আবগারি বিভাগের (তৎকালীন কাস্টমস) একজন সহকারী রাজস্ব কর্মকর্তা (Assistant Revenue Officer - ARO) ওই মোড় সংলগ্ন এলাকায় সপরিবারে বসবাস করতেন। তৎকালীন গ্রামীণ সমাজে সরকারি উচ্চপদস্থ কর্মকর্তার উপস্থিতি এলাকাটিকে বিশেষ মর্যাদা ও পরিচিতি প্রদান করে।',
          en: 'Documented local accounts recount that an Assistant Revenue Officer (ARO) of the Bangladesh Customs and Excise Department resided with his family adjacent to this intersection during that period. In the contemporary rural landscape, the residency of a prominent civil servant conferred notable social prestige and landmark visibility upon the crossroads.'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      },
      {
        text: {
          bn: 'এলাকাবাসীর দৈনন্দিন চলাচল, রিকশা-ভ্যান চালকদের দিকনির্দেশনা এবং ডাক যোগাযোগের সুবিধার্থে স্থানীয় অভিভাবক ও প্রবীণরা কাস্টমস কর্মকর্তার বসবাসের প্রাসঙ্গিকতাকে স্মারক হিসেবে গ্রহণ করে সংযোগস্থলটিকে "কাস্টম মোড়" নামে অভিহিত করার সামাজিক সিদ্ধান্ত গ্রহণ করেন।',
          en: 'To facilitate daily transit directions for rickshaw pullers, postal couriers, and visitors, community elders adopted the association with the Customs officer’s residence as a geographic reference point, establishing the name "Custom Mor" through informal consensus.'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      }
    ]
  },
  {
    id: 'signboard',
    number: 4,
    title: {
      bn: 'সাইনবোর্ড ও বাণিজ্যিক ফলকের ইতিহাস',
      en: 'Signboard & Commercial Marquee History'
    },
    paragraphs: [
      {
        text: {
          bn: 'স্থানীয় বিবরণ অনুসারে, নামকরণের প্রায় দুই বছর পর—আনুমানিক ২০০৮ খ্রিস্টাব্দে—চার রাস্তার উত্তর-পূর্ব কোণে একটি আনুষ্ঠানিক দিকনির্দেশক সাইনবোর্ড স্থাপন করা হয়েছিল। সাইনবোর্ডটিতে "কাস্টম মোড়, বালুয়াভাটা" স্পষ্ট হরফে উৎকীর্ণ ছিল। পরবর্তীতে তত্ত্বাবধায়ক সরকারের আমলে যখন বদরগঞ্জ উপজেলার প্রধান সড়ক সংস্কার ও সম্প্রসারণ প্রকল্প গৃহীত হয়, তখন সড়ক পার্শ্ববর্তী অবকাঠামো উচ্ছেদ প্রক্রিয়ায় উক্ত ফলকটি অপসারিত হয়।',
          en: 'Local testimonies indicate that approximately two years after the naming—around 2008—a public directional signboard was erected on the northeast corner of the junction bearing "Custom Mor, Baluavata". Subsequently, during caretaker-era road expansion projects across Badarganj Upazila, the original post was dismantled during roadside clearing.'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      },
      {
        text: {
          bn: 'প্রাথমিক দিকনির্দেশক ফলকটি অপসারিত হলেও মোড়ের নামটি অক্ষুণ্ণ থাকে স্থানীয় ব্যবসা প্রতিষ্ঠান ও করপোরেট সাইনবোর্ডের মাধ্যমে। উদাহরণস্বরূপ, সাদিয়া ভ্যারাইটি স্টোরের সম্মুখে স্থাপিত গ্রামীণফোন ৪জি রিটেইলারের অফিসিয়াল সাইনবোর্ড, মাহিম ফ্যাশনের বিপণি বোর্ড এবং মিতু টেইলার্স ও হুমায়ুন ওয়্যার নেটের ফলকে স্পষ্টভাবে "কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ" স্থায়ী ঠিকানা হিসেবে ব্যবহৃত হয়ে আসছে। ২০২১ সালের সরেজমিন আলোকচিত্রে এই সকল বাণিজ্যিক সাইনবোর্ডের বাস্তব অস্তিত্ব লিপিবদ্ধ রয়েছে।',
          en: 'Although the initial directional post was removed, the designation was preserved through commercial marquees and corporate retailer boards. Notably, the official Grameenphone 4G retailer signboard at Sadia Variety Store, Mahim Fashion’s marquee, and the storefront signs of Mitu Tailors and Humayun Wire Net consistently state "Custom Mor, Baluavata, Badarganj" as their registered trade address. Field photographic surveys from June 2021 physically corroborate these signboards in situ.'
        },
        citations: ['CIT-4', 'CIT-5', 'CIT-6'],
        claimConfidence: 'documented-local-account'
      }
    ]
  },
  {
    id: 'current-usage',
    number: 5,
    title: {
      bn: 'বর্তমান ব্যবহার ও প্রশাসনিক দালিলিক প্রমাণ',
      en: 'Current Usage & Administrative Presence'
    },
    paragraphs: [
      {
        text: {
          bn: 'বর্তমানে কাস্টম মোড় বদরগঞ্জ উপজেলার একটি সক্রিয় বাণিজ্যিক ও সামাজিক মিলনস্থলে রূপ নিয়েছে। সংযোগস্থলটিতে একাধিক চায়ের দোকান, মুদির দোকান, টেইলারিং প্রতিষ্ঠান, তারের জাল কারখানা এবং কৃষি উপকরণের বিপণি রয়েছে। স্থানীয় মানুষজন তাদের নাগরিক চিঠিপত্র ও পরিষেবায় এই নামটি প্রতিনিয়ত ব্যবহার করেন।',
          en: 'At present, Custom Mor functions as an active commercial hub and neighborhood meeting place in Badarganj. The junction hosts grocery stores, tea stalls, tailoring workshops, wire-net manufacturing crafts, and agricultural supply shops. Local residents routinely cite "Custom Mor" in civic communications.'
        },
        citations: ['CIT-3', 'CIT-4', 'CIT-5'],
        claimConfidence: 'documented-local-account'
      },
      {
        text: {
          bn: 'সবচেয়ে গুরুত্বপূর্ণ হলো, সরকারি ও আধা-সরকারি নথিতে কাস্টম মোড় সুস্পষ্ট প্রশাসনিক স্বীকৃতি লাভ করেছে। বদরগঞ্জ পৌরসভার ২০২৫–২০২৬ অর্থবৎসরের হোল্ডিং কর রসিদে (বিল নং ৪৭৯, করদাতা আইডি: ০২৭৮-০০) করদাতার ঠিকানায় আনুষ্ঠানিকভাবে "কাস্টম মোড়, উত্তর বালুয়াভাটা, বদরগঞ্জ" মুদ্রিত রয়েছে। তদ্রূপ, বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ডের রংপুর পল্লী বিদ্যুৎ সমিতি-২ কর্তৃক জানুয়ারি ২০২৬ মাসে ইস্যুকৃত আবাসিক বিদ্যুৎ বিলের গ্রাহক ঠিকানাতেও "কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ, রংপুর" প্রাতিষ্ঠানিকভাবে লিপিবদ্ধ। ফলে নামটি মৌখিক স্তর পেরিয়ে রাষ্ট্রীয় প্রশাসনিক ও ইউটিলিটি রেকর্ডে স্থান করে নিয়েছে।',
          en: 'Crucially, Custom Mor has attained explicit official and semi-governmental administrative recognition. Badarganj Municipality\'s official holding tax assessment bill for fiscal year 2025–2026 (Bill No: 479, Taxpayer ID: 0278-00) officially records the street and locality address as "Custom Mor, Uttar Baluavata, Badarganj". Concurrently, the January 2026 residential electricity bill issued by Rangpur Palli Bidyut Samiti-2 of the Bangladesh Rural Electrification Board documents "Custom Mor, Baluavata, Badarganj, Rangpur" in its subscriber database. The designation has thus transitioned into official administrative reality.'
        },
        citations: ['CIT-1', 'CIT-2'],
        claimConfidence: 'official-record'
      }
    ]
  },
  {
    id: 'location',
    number: 6,
    title: {
      bn: 'অবস্থান ও ভৌগোলিক তথ্য',
      en: 'Geographic Location & Connectivity'
    },
    paragraphs: [
      {
        text: {
          bn: 'ভৌগোলিকভাবে কাস্টম মোড় ২৫.৬৭৩৮° উত্তর অক্ষাংশ এবং ৮৯.০৫২৬° পূর্ব দ্রাঘিমাংশে অবস্থিত। এটি বাংলাদেশের উত্তর-পশ্চিমাঞ্চলের রংপুর জেলার বদরগঞ্জ উপজেলার বালুয়াভাটা মৌজার অভ্যন্তরীণ প্রধান সংযোগস্থল।',
          en: 'Geographically, Custom Mor is situated at coordinates approximately 25.6738° North latitude and 89.0526° East longitude. It represents the central four-way intersection of Baluavata mouza within Badarganj Upazila, Rangpur District, in northwestern Bangladesh.'
        },
        citations: ['CIT-7', 'CIT-10'],
        claimConfidence: 'survey-map'
      },
      {
        text: {
          bn: 'এই চার রাস্তার মোড় থেকে উত্তর দিকবর্তী রাস্তা বদরগঞ্জ পৌর শহরের প্রধান বাজার ও রেলওয়ে স্টেশনের দিকে চলে গেছে; দক্ষিণ দিকের রাস্তা বালুয়াভাটার দক্ষিণাঞ্চলীয় কৃষি খামার ও বসতির সাথে সংযুক্ত; পূর্বদিকের পথটি রংপুর আঞ্চলিক বাইপাসের সাথে মিলিত হয়েছে এবং পশ্চিমদিকের পথটি তারাগঞ্জ উপজেলার অভ্যন্তরীণ সংযোগ সৃষ্টি করেছে।',
          en: 'From this junction: the northern corridor extends toward Badarganj town centre, municipal markets, and Badarganj Railway Station; the southern lane serves agricultural settlements in southern Baluavata; the eastern branch merges with the regional bypass toward Rangpur; and the western feeder path facilitates rural transit toward Taraganj Upazila.'
        },
        citations: ['CIT-3', 'CIT-7', 'CIT-9'],
        claimConfidence: 'survey-map'
      }
    ]
  },
  {
    id: 'people',
    number: 7,
    title: {
      bn: 'নামকরণের সঙ্গে সংশ্লিষ্ট ব্যক্তিবর্গ',
      en: 'People Associated with the Naming'
    },
    paragraphs: [
      {
        text: {
          bn: '২০০৬ সালের নামকরণ প্রক্রিয়া এবং সামাজিক স্বীকৃতির পেছনে স্থানীয় প্রবীণ সমাজকর্মী, শিক্ষক এবং জনপ্রতিনিধিদের সক্রিয় ভূমিকা সংরক্ষিত রয়েছে। তৎকালীন নথিপত্র ও প্রত্যক্ষদর্শী বয়ানে নিম্নলিখিত ব্যক্তিবর্গ বিশেষভাবে স্মরণীয়:',
          en: 'The 2006 naming initiative and its community adoption were guided by respected local elders, educators, and civic figures. Historical accounts identify the following individuals as key figures in the process:'
        },
        citations: ['CIT-8'],
        claimConfidence: 'documented-local-account'
      }
    ]
  },
  {
    id: 'evidence',
    number: 8,
    title: {
      bn: 'প্রামাণ্য নথি ও আর্কাইভ',
      en: 'Documentary Evidence & Archival Scans'
    },
    paragraphs: [
      {
        text: {
          bn: 'কাস্টম মোড় তথ্যকোষে প্রতিটি ঐতিহাসিক ও প্রশাসনিক দাবির সমর্থনে দালিলিক প্রমাণাদি ও রসিদসমূহ ডিজিটালভাবে সংযুক্ত করা হয়েছে। নাগরিক গোপনীয়তা সুরক্ষা আইন ও নীতি অনুযায়ী ব্যক্তিগত পরিচয়পত্র নম্বর (NID), যোগাযোগের নম্বর এবং সংবেদনশীল স্বাক্ষরসমূহ কালো কালিতে আবৃত (Redacted) রাখা হয়েছে, যা ডিজিটাল প্রমাণ ভিউয়ারে যাচাইযোগ্য।',
          en: 'The encyclopedia attaches verified documentary scans and receipts in support of each historical and administrative assertion. In compliance with statutory data privacy standards, National ID numbers, telephone contact details, and personal signatures have been masked with redactions in the interactive document viewer.'
        },
        citations: ['CIT-1', 'CIT-2', 'CIT-7', 'CIT-8'],
        claimConfidence: 'official-record'
      }
    ]
  },
  {
    id: 'gallery',
    number: 9,
    title: {
      bn: 'ছবি ও চিত্রশালা',
      en: 'Archival Images & Visual Records'
    },
    paragraphs: [
      {
        text: {
          bn: 'কাস্টম মোড়ের ঐতিহাসিক বিবর্তন ও বর্তমান দৃশ্যপটের আলোকচিত্রসমূহ যথাযথ সোর্স মেটাডাটা ও উন্মুক্ত লাইসেন্সের আওতায় এই চিত্রশালায় সংরক্ষিত হয়েছে। এতে চার রাস্তার সংযোগস্থলের প্যানোরামা, গ্রামীণফোন ৪জি রিটেইলার ও সাদিয়া ভ্যারাইটি স্টোর, মাহিম ফ্যাশন এবং মিতু টেইলার্স ও হুমায়ুন ওয়্যার নেটের সাইনবোর্ড অন্তর্ভুক্ত রয়েছে।',
          en: 'Photographic records documenting the intersection’s physical topography and commercial storefronts are preserved in this gallery with verified source metadata. Visuals include the four-way crossroads panorama, the Grameenphone 4G retailer marquee at Sadia Variety Store, Mahim Fashion, and the Mitu Tailors / Humayun Wire Net marquees.'
        },
        citations: ['CIT-3', 'CIT-4', 'CIT-5', 'CIT-6'],
        claimConfidence: 'documented-local-account'
      }
    ]
  },
  {
    id: 'references',
    number: 10,
    title: {
      bn: 'তথ্যসূত্র ও পাদটীকা',
      en: 'References & Footnotes'
    },
    paragraphs: [
      {
        text: {
          bn: 'নিবন্ধে ব্যবহৃত প্রতিটি তথ্যের উৎস নিম্নে তালিকাভুক্ত করা হয়েছে। তথ্যসূত্রসমূহ যাচাইকরণ স্তর এবং নির্ভরযোগ্যতার ক্রম অনুসারে শ্রেণিবদ্ধ।',
          en: 'All citations utilized throughout the article are indexed below. Sources are stratified according to evidential strength and verification hierarchy.'
        }
      }
    ]
  },
  {
    id: 'see-also',
    number: 11,
    title: {
      bn: 'আরও দেখুন',
      en: 'See Also'
    },
    paragraphs: [
      {
        text: {
          bn: 'বালুয়াভাটা মৌজা • বদরগঞ্জ উপজেলা • বদরগঞ্জ পৌরসভা • রংপুর জেলার ঐতিহাসিক স্থানসমূহ • বাংলাদেশ শুল্ক ও আবগারি প্রশাসন • রংপুর আঞ্চলিক সড়ক নেটওয়ার্ক।',
          en: 'Baluavata Mouza • Badarganj Upazila • Badarganj Municipality • Historic Sites of Rangpur District • Bangladesh Customs & Revenue Administration • Regional Road Networks of Rangpur.'
        }
      }
    ]
  },
  {
    id: 'external-links',
    number: 12,
    title: {
      bn: 'বহিঃসংযোগ',
      en: 'External Links'
    },
    paragraphs: [
      {
        text: {
          bn: 'বদরগঞ্জ উপজেলা জাতীয় তথ্য বাতায়ন • ওপেনস্ট্রিটম্যাপে কাস্টম মোড় স্থানাঙ্ক • গুগল ম্যাপসে কাস্টম মোড় ভৌগোলিক উপাত্ত।',
          en: 'Badarganj Upazila National Web Portal • Custom Mor Coordinates on OpenStreetMap • Custom Mor Geographic Node on Google Maps.'
        },
        citations: ['CIT-9', 'CIT-10'],
        claimConfidence: 'survey-map'
      }
    ]
  }
];
