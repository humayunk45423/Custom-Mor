import React, { useState } from 'react';
import { Language } from '../types';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface Props {
  lang: Language;
  onClose: () => void;
}

export const CorrectionModal: React.FC<Props> = ({ lang, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [section, setSection] = useState('naming');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !details) return;
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: '650px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">
            {lang === 'bn' ? 'তথ্য সংশোধনের অনুরোধ ও প্রমাণ দাখিল' : 'Submit Factual Correction & Evidence'}
          </h3>
          <button type="button" className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {lang === 'bn' ? 'আপনার আবেদনটি গৃহীত হয়েছে' : 'Submission Received for Review'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                {lang === 'bn'
                  ? 'সম্পাদকীয় প্যানেল আপনার প্রস্তাবিত তথ্য এবং দাখিলকৃত নথিপত্র যাচাই শেষে পরবর্তী সংস্করণে প্রয়োজনীয় পদক্ষেপ গ্রহণ করবে।'
                  : 'The editorial board will examine your submitted citations against our verification standards and incorporate necessary amendments.'}
              </p>
              <button
                type="button"
                className="btn-icon"
                style={{ background: 'var(--bg-accent-subtle)', color: 'var(--text-accent)' }}
                onClick={onClose}
              >
                {lang === 'bn' ? 'ঠিক আছে' : 'Done'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  gap: '0.5rem'
                }}
              >
                <ShieldAlert size={16} color="var(--text-brand)" style={{ flexShrink: 0 }} />
                <span>
                  {lang === 'bn'
                    ? 'অনুগ্রহ করে ব্যক্তিগত সংবেদনশীল তথ্য (যেমন অপ্রয়োজনীয় জাতীয় পরিচয়পত্র নম্বর বা ব্যাংক হিসাব) বাদ দিয়ে কেবল ঐতিহাসিক প্রমাণাদি যুক্ত করুন।'
                    : 'Please exclude sensitive private details (such as unnecessary NID numbers or bank records) and submit only relevant historical proof.'}
                </span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                  {lang === 'bn' ? 'আপনার পূর্ণ নাম *' : 'Your Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'bn' ? 'যেমন: ড. রফিকুল ইসলাম' : 'e.g. Dr. Rafiqul Islam'}
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                  {lang === 'bn' ? 'যোগাযোগের ইমেইল / ফোন *' : 'Contact Email or Phone *'}
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@example.com"
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                  {lang === 'bn' ? 'সংশ্লিষ্ট অনুচ্ছেদ' : 'Relevant Section'}
                </label>
                <select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                >
                  <option value="naming">{lang === 'bn' ? '২. নামকরণ (২০০৬)' : '2. Naming (2006)'}</option>
                  <option value="background">{lang === 'bn' ? '৩. নামকরণের প্রেক্ষাপট' : '3. Naming Background'}</option>
                  <option value="signboard">{lang === 'bn' ? '৪. সাইনবোর্ড (২০০৮)' : '4. Signboard (2008)'}</option>
                  <option value="location">{lang === 'bn' ? '৬. ভৌগোলিক অবস্থান ও মানচিত্র' : '6. Geographic Location'}</option>
                  <option value="people">{lang === 'bn' ? '৭. সংশ্লিষ্ট ব্যক্তিবর্গ' : '7. Associated Persons'}</option>
                  <option value="evidence">{lang === 'bn' ? '৮. প্রামাণ্য নথি' : '8. Documentary Evidence'}</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                  {lang === 'bn' ? 'সংশোধনের বিবরণ ও প্রামাণ্য তথ্যের বিবরণ *' : 'Correction Details & Evidence Citation *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={lang === 'bn' ? 'প্রস্তাবিত সংশোধনী, সূত্র এবং ঐতিহাসিক প্রমাণের সারসংক্ষেপ লিখুন...' : 'State the proposed correction, citations, and archival proof...'}
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn-icon" onClick={onClose}>
                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="btn-icon"
                  style={{ background: 'var(--text-accent)', color: '#fff', border: 'none', fontWeight: 600 }}
                >
                  <Send size={14} />
                  <span>{lang === 'bn' ? 'দাখিল করুন' : 'Submit Review'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
