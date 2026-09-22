import React from 'react';
import { Language } from '../types';
import { X, BookCheck, ShieldCheck, Scale, Lock, RefreshCw } from 'lucide-react';

interface Props {
  lang: Language;
  onClose: () => void;
  onOpenCorrection: () => void;
}

export const EditorialPolicyModal: React.FC<Props> = ({ lang, onClose, onOpenCorrection }) => {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: '850px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookCheck size={20} color="var(--text-accent)" />
            <h3 className="modal-title">
              {lang === 'bn' ? 'সম্পাদনা নীতি ও তথ্য যাচাই মানদণ্ড' : 'Editorial Policy & Verification Standards'}
            </h3>
          </div>
          <button type="button" className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Policy Overview */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Scale size={16} color="var(--text-brand)" />
              {lang === 'bn' ? '১. তথ্যের নিরপেক্ষতা ও ঐতিহাসিক দাবির শ্রেণিবিন্যাস' : '1. Neutrality & Evidentiary Stratification'}
            </h4>
            <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {lang === 'bn'
                ? 'কাস্টম মোড় তথ্যকোষে কোনো মৌখিক দাবিকে সরকারি বা অবিসংবাদিত তথ্য হিসেবে উপস্থাপন করা হয় না। প্রতিটি বক্তব্যকে তার প্রামাণিক শক্তির ভিত্তিতে শ্রেণিবদ্ধ করা হয় (যথা: সরকারি রেকর্ড, প্রামাণ্য স্থানীয় বিবরণ, মৌখিক ইতিহাস বা জরিপ মানচিত্র)।'
                : 'In the Custom Mor Encyclopedia, oral accounts are never labeled as official indisputable decrees without documentary substantiation. Assertions are transparently categorized by evidentiary strength: Official Record, Documented Local Account, Oral Testimony, or Cadastral Survey.'}
            </p>
          </div>

          {/* Source Hierarchy */}
          <div style={{ marginBottom: '1.25rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--text-accent)" />
              {lang === 'bn' ? '২. তথ্যসূত্রের নির্ভরযোগ্যতার স্তরক্রম (Source Hierarchy)' : '2. Hierarchy of Historical Sources'}
            </h4>
            <ol style={{ fontSize: '0.84rem', lineHeight: '1.7', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li><strong>{lang === 'bn' ? 'সরকারি গেজেট ও রাজস্ব খতিয়ান' : 'Government Gazettes & Revenue Ledgers'}</strong></li>
              <li><strong>{lang === 'bn' ? 'স্বীকৃত সংবাদমাধ্যমের প্রতিবেদন' : 'Reputable Published Journalism'}</strong></li>
              <li><strong>{lang === 'bn' ? 'প্রতিষ্ঠানিক প্রকাশনা ও একাডেমিক গ্রন্থ' : 'Official Institutional Publications & Academic Texts'}</strong></li>
              <li><strong>{lang === 'bn' ? 'আর্কাইভকৃত সমকালীন দলিল ও মানচিত্র' : 'Archived Contemporary Documents & Cadastral Maps'}</strong></li>
              <li><strong>{lang === 'bn' ? 'স্থানীয় প্রবীণ ও প্রত্যক্ষদর্শীদের সাক্ষ্য' : 'Eyewitness Depositions & Elder Local Accounts'}</strong></li>
            </ol>
          </div>

          {/* Privacy & Redaction Standards */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Lock size={16} color="var(--text-brand)" />
              {lang === 'bn' ? '৩. নাগরিক গোপনীয়তা ও ব্ল্যাকআউট (Redaction) নীতি' : '3. Privacy Protection & Statutory Redactions'}
            </h4>
            <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {lang === 'bn'
                ? 'আইনগত ও ব্যক্তিগত নিরাপত্তা রক্ষার্থে জাতীয় পরিচয়পত্র (NID), ব্যক্তিগত মুঠোফোন নম্বর, ব্যাংক বা অর্থনৈতিক তথ্য এবং ব্যক্তির স্বাক্ষরসমূহ সর্বদাই ডিজিটাল ব্ল্যাকআউট দিয়ে আবৃত করে প্রকাশ করা হয়। কেবলমাত্র ভৌগোলিক স্থান বা ঠিকানার প্রাসঙ্গিক অংশ দৃশ্যমান রাখা হয়।'
                : 'To respect statutory data protection laws, National ID numbers, personal mobile numbers, financial records, and personal signatures are systematically redacted with black masks prior to publication. Only minimal excerpts substantiating the place name are exhibited.'}
            </p>
          </div>

          {/* Correction Process */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <RefreshCw size={16} color="var(--text-accent)" />
              {lang === 'bn' ? '৪. তথ্যের সংশোধন ও নতুন প্রমাণের আহ্বান' : '4. Public Corrections & Evidence Submissions'}
            </h4>
            <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {lang === 'bn'
                ? 'যদি কোনো গবেষক, স্থানীয় নাগরিক বা পরিবারের নিকট কাস্টম মোড়ের ইতিহাস সংক্রান্ত নতুন দালিলিক প্রমাণাদি থাকে, তবে তারা অবাধে সংশোধন ও পর্যালোচনার আবেদন করতে পারেন।'
                : 'Researchers, community elders, or citizens possessing archival evidence or desiring factual amendments are invited to submit peer-review correction requests.'}
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <button
              type="button"
              className="btn-icon"
              style={{ background: 'var(--bg-accent-subtle)', color: 'var(--text-accent)', borderColor: 'var(--border-accent)', fontWeight: 600 }}
              onClick={() => {
                onClose();
                onOpenCorrection();
              }}
            >
              <RefreshCw size={14} />
              <span>{lang === 'bn' ? 'তথ্য সংশোধনের অনুরোধ জানান' : 'Submit a Factual Correction'}</span>
            </button>
            <button type="button" className="btn-icon" onClick={onClose}>
              {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
