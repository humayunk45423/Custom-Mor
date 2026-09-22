import { RevisionRecord } from '../types';

export const revisionHistory: RevisionRecord[] = [
  {
    id: 4,
    revisionCode: 'Rev 4 (Current)',
    timestamp: '2026-09-22 18:30:00 UTC',
    editor: 'H. Kabir (Chief Archivist)',
    role: 'Administrator / Senior Editor',
    summary: {
      bn: 'পূর্ণাঙ্গ ইংরেজি সংস্করণ সংযোজন, ক্যাডাস্ট্রাল মৌজা ম্যাপ এবং ক্লেইম-ভিত্তিক তথ্যসূত্র ব্যবস্থার হালনাগাদ।',
      en: 'Complete English translation integrated, cadastral survey map added, and claim-based citation architecture updated.'
    },
    changes: [
      {
        sectionId: 'location',
        type: 'modified',
        description: {
          bn: 'এলজিইডি ও ভূমি রেকর্ড অধিদপ্তরের ক্যাডাস্ট্রাল স্থানাঙ্ক সংযোজন।',
          en: 'LGED and cadastral survey geographic coordinates corroborated.'
        },
        diffContent: {
          original: 'স্থানাঙ্ক: যাচায়াধীন (To be verified)',
          modified: 'স্থানাঙ্ক: ২৫.৬৭৩৮° উত্তর, ৮৯.০৫২৬° পূর্ব (Baluavata, Badarganj)'
        }
      },
      {
        sectionId: 'editorial-neutrality',
        type: 'added',
        description: {
          bn: 'সম্পাদনা নীতি অনুসারে ২০০৬ সালের নামকরণের দাবিকে "স্থানীয় বিবরণ" হিসেবে সুস্পষ্টভাবে চিহ্নিতকরণ।',
          en: 'Attributed 2006 naming claim explicitly as a "Documented Local Account" per editorial guidelines.'
        },
        diffContent: {
          original: 'কাস্টম মোড়ের নামকরণ ২০০৬ সালে নিশ্চিতভাবে চূড়ান্ত হয়।',
          modified: 'স্থানীয় বাসিন্দাদের বিবরণ ও যৌথ স্মারকলিপি অনুযায়ী, ২০০৬ সালের দিকে এই মোড়টি "কাস্টম মোড়" নামে পরিচিত হতে শুরু করে।'
        }
      }
    ]
  },
  {
    id: 3,
    revisionCode: 'Rev 3',
    timestamp: '2025-02-11 14:15:20 UTC',
    editor: 'M. Rahman (Research Fellow)',
    role: 'Editorial Reviewer',
    summary: {
      bn: 'পৌরসভা/স্থানীয় সরকারের কর ও হোল্ডিং নিবন্ধন খতিয়ান উদ্ধৃতাংশ (CM-001) এবং গোপনীয়তা নীতিমালা অনুসারে এনআইডি ও স্বাক্ষর ব্ল্যাকআউট যুক্ত।',
      en: 'Local holding tax ledger extract (CM-001) added with privacy redaction overlays applied to NID numbers and signatures.'
    },
    changes: [
      {
        sectionId: 'evidence',
        type: 'added',
        description: {
          bn: 'নথি CM-001 (হোল্ডিং মূল্যায়ন দলিল) সংযোজিত।',
          en: 'Evidence item CM-001 (Holding tax assessment document) attached.'
        }
      }
    ]
  },
  {
    id: 2,
    revisionCode: 'Rev 2',
    timestamp: '2024-06-20 09:45:10 UTC',
    editor: 'T. Ahmed (Historian)',
    role: 'Contributing Editor',
    summary: {
      bn: '২০০৮ সালের পথ নির্দেশক সাইনবোর্ডের ইতিহাস ও তত্ত্বাবধায়ক সরকারের সড়ক সংস্কারের সময় অপসারণের বিবরণ যুক্ত।',
      en: 'Documented 2008 directional signboard installation and its subsequent removal during road widening under the caretaker regime.'
    },
    changes: [
      {
        sectionId: 'signboard',
        type: 'added',
        description: {
          bn: 'সাইনবোর্ডের তথ্য ও আর্কাইভ ফটো রেকর্ড (CM-002) নিবন্ধভুক্ত।',
          en: 'Signboard history and archival photograph record (CM-002) cataloged.'
        }
      }
    ]
  },
  {
    id: 1,
    revisionCode: 'Rev 1',
    timestamp: '2024-01-15 11:00:00 UTC',
    editor: 'Archival Team',
    role: 'Founding Contributor',
    summary: {
      bn: 'কাস্টম মোড় শীর্ষক প্রাথমিক নিবন্ধ ও মৌলিক তথ্যকোষ কাঠামোর সূচনা।',
      en: 'Initial publication of Custom Mor local encyclopedia article stub.'
    },
    changes: [
      {
        sectionId: 'initial',
        type: 'added',
        description: {
          bn: 'মৌলিক ভূমিকা, অবস্থান ও নামকরণের সাধারণ পরিচিতি প্রস্তুত।',
          en: 'Initial lead paragraph, geography, and preliminary naming background created.'
        }
      }
    ]
  }
];
