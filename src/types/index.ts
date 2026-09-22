export type Language = 'bn' | 'en';

export type ClaimConfidence = 
  | 'official-record' 
  | 'documented-local-account' 
  | 'oral-testimony' 
  | 'survey-map'
  | 'unverified';

export interface Citation {
  id: string; // e.g. "CIT-1"
  number: number;
  evidenceId?: string; // e.g. "CM-001"
  authorOrOrg: {
    bn: string;
    en: string;
  };
  title: {
    bn: string;
    en: string;
  };
  date: string;
  publisher?: {
    bn: string;
    en: string;
  };
  url?: string;
  accessDate?: string;
  documentId?: string;
  page?: string;
  quote?: {
    bn: string;
    en: string;
  };
  confidence: ClaimConfidence;
}

export interface Claim {
  id: string;
  text: {
    bn: string;
    en: string;
  };
  confidence: ClaimConfidence;
  sources: string[]; // citation IDs
  editorialNote?: {
    bn: string;
    en: string;
  };
}

export interface AssociatedPerson {
  name: {
    bn: string;
    en: string;
  };
  role: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
}

export interface EvidenceItem {
  id: string; // e.g. "CM-001"
  title: {
    bn: string;
    en: string;
  };
  date: string;
  issuingAuthority: {
    bn: string;
    en: string;
  };
  documentType: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  sourceCustodian: {
    bn: string;
    en: string;
  };
  verificationStatus: 'authenticated' | 'pending' | 'under-review';
  verificationNotes: {
    bn: string;
    en: string;
  };
  relevantTextExcerpt: {
    bn: string;
    en: string;
  };
  privacyRedactions: {
    field: string;
    status: 'redacted' | 'partially-visible';
    reason: string;
  }[];
  imageType: 'document' | 'photograph' | 'map';
  imageUrl: string;
  thumbnailUrl: string;
  citationId: string;
}

export interface RevisionRecord {
  id: number;
  revisionCode: string; // "Rev 1", "Rev 2", etc.
  timestamp: string;
  editor: string;
  role: string;
  summary: {
    bn: string;
    en: string;
  };
  changes: {
    sectionId: string;
    type: 'added' | 'modified' | 'redacted';
    description: {
      bn: string;
      en: string;
    };
    diffContent?: {
      original?: string;
      modified: string;
    };
  }[];
}

export interface SectionContent {
  id: string;
  number: number;
  title: {
    bn: string;
    en: string;
  };
  paragraphs: {
    text: {
      bn: string;
      en: string;
    };
    citations?: string[]; // Citation IDs
    claimConfidence?: ClaimConfidence;
  }[];
  subsections?: {
    id: string;
    title: {
      bn: string;
      en: string;
    };
    paragraphs: {
      text: {
        bn: string;
        en: string;
      };
      citations?: string[];
      claimConfidence?: ClaimConfidence;
    }[];
  }[];
}

export interface InfoboxData {
  title: {
    bn: string;
    en: string;
  };
  nativeName: string;
  type: {
    bn: string;
    en: string;
  };
  country: {
    bn: string;
    en: string;
  };
  division: {
    bn: string;
    en: string;
  };
  district: {
    bn: string;
    en: string;
  };
  thana: {
    bn: string;
    en: string;
  };
  mouza: {
    bn: string;
    en: string;
  };
  namingYear: string;
  namingYearStatus: {
    bn: string;
    en: string;
  };
  coordinates: {
    lat: number;
    lng: number;
    display: string;
  };
  connectivity: {
    bn: string;
    en: string;
  }[];
  notableFeatures: {
    bn: string;
    en: string;
  }[];
}
