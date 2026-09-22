import React, { useState } from 'react';
import { RevisionRecord, Language } from '../types';
import { History, GitCommit, ArrowRight, FileDiff } from 'lucide-react';

interface Props {
  revisions: RevisionRecord[];
  lang: Language;
}

export const RevisionHistory: React.FC<Props> = ({ revisions, lang }) => {
  const [selectedRevA, setSelectedRevA] = useState<number>(1);
  const [selectedRevB, setSelectedRevB] = useState<number>(4);
  const [showDiff, setShowDiff] = useState<boolean>(true);

  const revA = revisions.find((r) => r.id === selectedRevA) || revisions[0];
  const revB = revisions.find((r) => r.id === selectedRevB) || revisions[revisions.length - 1];

  return (
    <section className="article-section" id="revision-history">
      <div className="section-heading">
        <div className="section-heading-text">
          <History size={20} color="var(--text-accent)" />
          <span>{lang === 'bn' ? 'সম্পাদনা ও সংস্করণ ইতিহাস (Revision History)' : 'Revision & Audit History'}</span>
        </div>
        <button
          type="button"
          className="btn-icon"
          onClick={() => setShowDiff(!showDiff)}
          style={{ fontSize: '0.8rem' }}
        >
          <FileDiff size={14} />
          <span>{showDiff ? (lang === 'bn' ? 'ডিফ দৃশ্যপট লুকান' : 'Hide Diff') : (lang === 'bn' ? 'ডিফ তুলনা দেখুন' : 'Compare Diffs')}</span>
        </button>
      </div>

      <p className="section-paragraph">
        {lang === 'bn'
          ? 'কাস্টম মোড় তথ্যকোষে প্রতিটি ঐতিহাসিক তথ্যের সংযোজন, পরিবর্তন ও প্রামাণ্য নথির অন্তর্ভুক্তি অপরিবর্তনীয় অডিট ট্রেইলে সংরক্ষিত থাকে।'
          : 'Every historical amendment, evidence addition, and editorial adjustment in the Custom Mor Encyclopedia is preserved in an immutable audit ledger.'}
      </p>

      {/* Revision Comparison Bar */}
      {showDiff && (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                {lang === 'bn' ? 'তুলনা করুন: ' : 'Compare: '}
              </span>
              <select
                value={selectedRevA}
                onChange={(e) => setSelectedRevA(Number(e.target.value))}
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.35rem 0.6rem',
                  fontSize: '0.82rem'
                }}
              >
                {revisions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.revisionCode} ({r.timestamp.split(' ')[0]})
                  </option>
                ))}
              </select>

              <ArrowRight size={16} color="var(--text-muted)" />

              <select
                value={selectedRevB}
                onChange={(e) => setSelectedRevB(Number(e.target.value))}
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.35rem 0.6rem',
                  fontSize: '0.82rem'
                }}
              >
                {revisions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.revisionCode} ({r.timestamp.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {lang === 'bn' ? 'স্বয়ংক্রিয় লাইন ভিত্তিক পরিবর্তন' : 'Automated Semantic Diff Viewer'}
            </div>
          </div>

          {/* Visual Diff Box */}
          <div className="diff-container">
            <div style={{ padding: '0.5rem 0.75rem', background: 'var(--bg-hover)', borderBottom: '1px solid var(--border-light)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              DIFF: {revA.revisionCode} → {revB.revisionCode}
            </div>

            {/* Simulated Diff Lines */}
            <div className="diff-line deletion">
              <span>-</span>
              <span>
                {lang === 'bn'
                  ? 'কাস্টম মোড়ের নামকরণ ২০০৬ সালে নিশ্চিতভাবে চূড়ান্ত হয়। স্থানাঙ্ক: যাচায়াধীন।'
                  : 'Custom Mor naming was officially decreed as an undisputed fact in 2006. Coordinates: To be verified.'}
              </span>
            </div>
            <div className="diff-line addition">
              <span>+</span>
              <span>
                {lang === 'bn'
                  ? 'স্থানীয় বাসিন্দাদের বিবরণ ও যৌথ স্মারকলিপি অনুযায়ী, ২০০৬ সালের দিকে এই মোড়টি "কাস্টম মোড়" নামে পরিচিত হতে শুরু করে। স্থানাঙ্ক: ২৫.৬৭৩৮° উত্তর, ৮৯.০৫২৬° পূর্ব।'
                  : 'According to documented local accounts and joint memorandums, the junction began circulating as "Custom Mor" circa 2006. Coordinates: 25.6738° N, 89.0526° E.'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Revision Timeline List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {revisions.map((rev) => (
          <div
            key={rev.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GitCommit size={16} color="var(--text-accent)" />
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {rev.revisionCode}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  ({rev.timestamp})
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-accent)', background: 'var(--bg-surface)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)' }}>
                {rev.editor} • {rev.role}
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              {rev.summary[lang]}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
              {rev.changes.map((ch, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.72rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.15rem 0.5rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  {ch.type === 'added' ? '+ ' : '~ '}
                  {ch.description[lang]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
