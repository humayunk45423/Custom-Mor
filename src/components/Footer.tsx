import React from 'react';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenEditorialPolicy: () => void;
  onOpenCorrection: () => void;
  onLangChange: (lang: Language) => void;
}

export const Footer: React.FC<Props> = ({
  lang,
  onOpenEditorialPolicy,
  onOpenCorrection,
  onLangChange
}) => {
  return (
    <footer className="encyclopedia-footer" role="contentinfo">
      <div className="container">
        {/* Independent Project Disclaimer Box per Section 1 & 38 */}
        <div className="disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-brand)', marginBottom: '0.25rem' }}>
            <ShieldCheck size={16} />
            <span>
              {lang === 'bn'
                ? 'স্বতন্ত্র স্থানীয় ইতিহাস প্রকল্প সম্পর্কিত ঘোষণা (Independent Project Notice)'
                : 'Independent Local History Encyclopedia Notice'}
            </span>
          </div>
          <p style={{ margin: 0 }}>
            {lang === 'bn'
              ? 'এই ওয়েবসাইটটি একটি সম্পূর্ণ স্বতন্ত্র স্থানীয় ইতিহাস সংরক্ষণ ও প্রামাণ্য তথ্যকোষ। এটি উইকিপিডিয়া (Wikipedia) কিংবা উইকিমিডিয়া ফাউন্ডেশনের (Wikimedia Foundation) কোনো অংশ বা সহযোগী প্ল্যাটফর্ম নয়। তথ্যকোষের যাবতীয় লোগো, তথ্যকাঠামো, সম্পাদনা মানদণ্ড ও বিষয়বস্তু স্বতন্ত্রভাবে পরিচালিত।'
              : 'This website is an independent local-history encyclopedia and documentary archive. It is not affiliated with, sponsored by, or part of Wikipedia or the Wikimedia Foundation. All branding, editorial standards, and curated archives are independently administered.'}
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          {/* Col 1: Project Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div className="brand-seal" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                ক
              </div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {lang === 'bn' ? 'কাস্টম মোড় তথ্যকোষ' : 'Custom Mor Encyclopedia'}
              </strong>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {lang === 'bn'
                ? 'রংপুরের বদরগঞ্জের বালুয়াভাটা মৌজায় অবস্থিত কাস্টম মোড়ের ইতিহাস, নামকরণ, সামাজিক প্রেক্ষাপট, সাইনবোর্ড এবং প্রামাণ্য দলিলের উন্মুক্ত ডিজিটাল আর্কাইভ।'
                : 'Open digital archive documenting the history, naming, civic context, signboards, and corroborated archival evidence of Custom Mor in Baluavata, Badarganj, Rangpur.'}
            </p>
          </div>

          {/* Col 2: Canonical Articles */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'bn' ? 'ভাষা সংস্করণ' : 'Language Editions'}
            </h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#bn"
                  onClick={(e) => {
                    e.preventDefault();
                    onLangChange('bn');
                  }}
                  style={{ fontWeight: lang === 'bn' ? 700 : 400 }}
                >
                  বাংলা সংস্করণ (/bn/custom-mor)
                </a>
              </li>
              <li>
                <a
                  href="#en"
                  onClick={(e) => {
                    e.preventDefault();
                    onLangChange('en');
                  }}
                  style={{ fontWeight: lang === 'en' ? 700 : 400 }}
                >
                  English Edition (/en/custom-mor)
                </a>
              </li>
              <li>
                <a href="#evidence" onClick={(e) => { e.preventDefault(); }}>
                  {lang === 'bn' ? 'প্রামাণ্য নথি সম্ভার' : 'Documentary Evidence (/evidence)'}
                </a>
              </li>
              <li>
                <a href="#history" onClick={(e) => { e.preventDefault(); }}>
                  {lang === 'bn' ? 'সংস্করণ ইতিহাস' : 'Revision History (/history)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Editorial Standards */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'bn' ? 'নীতি ও মানদণ্ড' : 'Standards & Policy'}
            </h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#editorial-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenEditorialPolicy();
                  }}
                >
                  {lang === 'bn' ? 'সম্পাদকীয় নীতি' : 'Editorial Policy'}
                </a>
              </li>
              <li>
                <a
                  href="#correction"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenCorrection();
                  }}
                >
                  {lang === 'bn' ? 'তথ্য সংশোধনের আবেদন' : 'Submit Correction'}
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenEditorialPolicy();
                  }}
                >
                  {lang === 'bn' ? 'গোপনীয়তা ও ব্ল্যাকআউট নীতি' : 'Privacy & Redaction'}
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                  {lang === 'bn' ? 'এক্সএমএল সাইটম্যাপ' : 'XML Sitemap'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Context */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'bn' ? 'প্রশাসনিক ভৌগোলিক তথ্য' : 'Geographic Jurisdiction'}
            </h4>
            <div style={{ fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              <div><strong>{lang === 'bn' ? 'মৌজা: ' : 'Mouza: '}</strong>বালুয়াভাটা (Baluavata)</div>
              <div><strong>{lang === 'bn' ? 'থানা: ' : 'Thana: '}</strong>বদরগঞ্জ (Badarganj)</div>
              <div><strong>{lang === 'bn' ? 'জেলা: ' : 'District: '}</strong>রংপুর (Rangpur)</div>
              <div><strong>{lang === 'bn' ? 'দেশ: ' : 'Country: '}</strong>বাংলাদেশ (Bangladesh)</div>
              <div style={{ marginTop: '0.4rem', color: 'var(--text-muted)' }}>
                GPS: 25.6738° N, 89.0526° E
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Custom Mor Encyclopedia Project. Content available under open educational & local archival citation standards.
          </div>
          <div>
            {lang === 'bn' ? 'সর্বশেষ হালনাগাদ: ২২ সেপ্টেম্বর ২০২৬' : 'Last Updated: September 22, 2026 (Rev 4)'}
          </div>
        </div>
      </div>
    </footer>
  );
};
