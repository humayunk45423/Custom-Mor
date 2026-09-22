import React from 'react';
import { ClaimConfidence, Language } from '../types';
import { ShieldCheck, BookOpen, MessageSquare, MapPin, AlertCircle } from 'lucide-react';

interface Props {
  confidence: ClaimConfidence;
  lang: Language;
}

export const ClaimBadge: React.FC<Props> = ({ confidence, lang }) => {
  const getBadgeConfig = () => {
    switch (confidence) {
      case 'official-record':
        return {
          icon: <ShieldCheck size={13} />,
          className: 'badge-official',
          label: lang === 'bn' ? 'সরকারি নথি' : 'Official Record',
          tooltip: lang === 'bn' ? 'গেজেট, পৌর খতিয়ান বা সরকারি রেকর্ডে যাচাইকৃত' : 'Corroborated by official government / municipal record'
        };
      case 'documented-local-account':
        return {
          icon: <BookOpen size={13} />,
          className: 'badge-local',
          label: lang === 'bn' ? 'প্রামাণ্য স্থানীয় বিবরণ' : 'Local Account',
          tooltip: lang === 'bn' ? 'ঐতিহাসিক নথিপত্র ও স্থানীয় বয়ানে সমর্থিত বিবরণ' : 'Supported by local documentary and community consensus'
        };
      case 'oral-testimony':
        return {
          icon: <MessageSquare size={13} />,
          className: 'badge-oral',
          label: lang === 'bn' ? 'মৌখিক ইতিহাস' : 'Oral Testimony',
          tooltip: lang === 'bn' ? 'স্থানীয় প্রবীণদের প্রত্যক্ষদর্শী সাক্ষ্যভিত্তিক বিবরণ' : 'Based on elder memories & eyewitness depositions'
        };
      case 'survey-map':
        return {
          icon: <MapPin size={13} />,
          className: 'badge-survey',
          label: lang === 'bn' ? 'জরিপ মানচিত্র' : 'Cadastral Survey',
          tooltip: lang === 'bn' ? 'ভূমি রেকর্ড ও এলজিইডি জরিপ মানচিত্রে চিহ্নিত' : 'Demarcated on cadastral and LGED survey maps'
        };
      default:
        return {
          icon: <AlertCircle size={13} />,
          className: 'badge-oral',
          label: lang === 'bn' ? 'যাচাইাধীন' : 'Under Review',
          tooltip: lang === 'bn' ? 'তথ্যের সত্যতা অনুসন্ধান চলমান' : 'Evidentiary research ongoing'
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <span
      className={`claim-badge ${config.className}`}
      title={config.tooltip}
      aria-label={config.tooltip}
    >
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};
