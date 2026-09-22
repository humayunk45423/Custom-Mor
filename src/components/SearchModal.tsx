import React, { useState, useMemo } from 'react';
import { Language, SectionContent, EvidenceItem, AssociatedPerson } from '../types';
import { X, Search, FileText, User, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
  sections: SectionContent[];
  evidenceList: EvidenceItem[];
  persons: AssociatedPerson[];
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onSelectEvidence: (evidence: EvidenceItem) => void;
}

// Bengali Unicode normalizer
const normalizeQuery = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Normalize Bengali variants (e.g., nukta variations: ড়/র, য়/য)
    .replace(/ড়/g, 'ড়')
    .replace(/ঢ়/g, 'ঢ়')
    .replace(/য়/g, 'য়');
};

export const SearchModal: React.FC<Props> = ({
  lang,
  sections,
  evidenceList,
  persons,
  onClose,
  onNavigateToSection,
  onSelectEvidence
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query || query.trim().length < 2) return null;

    const norm = normalizeQuery(query);

    // 1. Match Sections
    const matchedSections = sections.filter((sec) => {
      const bnTitle = normalizeQuery(sec.title.bn);
      const enTitle = normalizeQuery(sec.title.en);
      const bodyBn = normalizeQuery(sec.paragraphs.map((p) => p.text.bn).join(' '));
      const bodyEn = normalizeQuery(sec.paragraphs.map((p) => p.text.en).join(' '));
      return (
        bnTitle.includes(norm) ||
        enTitle.includes(norm) ||
        bodyBn.includes(norm) ||
        bodyEn.includes(norm)
      );
    });

    // 2. Match Evidence
    const matchedEvidence = evidenceList.filter((ev) => {
      const idMatch = normalizeQuery(ev.id).includes(norm);
      const titleBn = normalizeQuery(ev.title.bn);
      const titleEn = normalizeQuery(ev.title.en);
      const descBn = normalizeQuery(ev.description.bn);
      return idMatch || titleBn.includes(norm) || titleEn.includes(norm) || descBn.includes(norm);
    });

    // 3. Match Persons
    const matchedPersons = persons.filter((p) => {
      const nameBn = normalizeQuery(p.name.bn);
      const nameEn = normalizeQuery(p.name.en);
      const roleBn = normalizeQuery(p.role.bn);
      return nameBn.includes(norm) || nameEn.includes(norm) || roleBn.includes(norm);
    });

    return {
      sections: matchedSections,
      evidence: matchedEvidence,
      persons: matchedPersons
    };
  }, [query, sections, evidenceList, persons]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: '720px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-light)', gap: '0.75rem', background: 'var(--bg-surface)' }}>
          <Search size={20} color="var(--text-accent)" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'bn'
                ? 'কাস্টম মোড়, বালুয়াভাটা, রুহুল আমিন, CM-001 ইত্যাদি খুঁজুন...'
                : 'Search Custom Mor, Baluavata, Ruhul Amin, CM-001...'
            }
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              color: 'var(--text-primary)'
            }}
          />
          <button type="button" className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '60vh' }}>
          {!query && (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
              <div style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                {lang === 'bn' ? 'বাংলা ও ইংরেজি উভয় ভাষায় অনুসন্ধান সমর্থনযোগ্য।' : 'Supports bilingual Bengali and English search with phonetic tolerance.'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['কাস্টম মোড়', 'Custom Mor', 'CM-001', 'রুহুল আমিন', 'বালুয়াভাটা', 'বদরগঞ্জ'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.2rem 0.65rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults && (
            <div>
              {searchResults.sections.length === 0 &&
                searchResults.evidence.length === 0 &&
                searchResults.persons.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
                    {lang === 'bn' ? 'কোন ফলাফল পাওয়া যায়নি।' : 'No matching results found.'}
                  </div>
                )}

              {/* Sections Results */}
              {searchResults.sections.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {lang === 'bn' ? 'নিবন্ধ অনুচ্ছেদ' : 'Article Sections'} ({searchResults.sections.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {searchResults.sections.map((sec) => (
                      <div
                        key={sec.id}
                        onClick={() => {
                          onNavigateToSection(sec.id);
                          onClose();
                        }}
                        style={{
                          padding: '0.6rem 0.85rem',
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FileText size={15} color="var(--text-accent)" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {sec.number}. {sec.title[lang]}
                          </span>
                        </div>
                        <ArrowRight size={14} color="var(--text-muted)" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evidence Results */}
              {searchResults.evidence.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {lang === 'bn' ? 'প্রামাণ্য নথি ও দলিল' : 'Documentary Evidence'} ({searchResults.evidence.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {searchResults.evidence.map((ev) => (
                      <div
                        key={ev.id}
                        onClick={() => {
                          onSelectEvidence(ev);
                          onClose();
                        }}
                        style={{
                          padding: '0.6rem 0.85rem',
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className="evidence-id-badge">{ev.id}</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {ev.title[lang]}
                          </span>
                        </div>
                        <ShieldCheck size={16} color="#059669" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* People Results */}
              {searchResults.persons.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {lang === 'bn' ? 'সংশ্লিষ্ট ব্যক্তিবর্গ' : 'Associated Persons'} ({searchResults.persons.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {searchResults.persons.map((p, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          onNavigateToSection('people');
                          onClose();
                        }}
                        style={{
                          padding: '0.6rem 0.85rem',
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <User size={15} color="var(--text-brand)" />
                          <div>
                            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                              {p.name[lang]}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                              ({p.role[lang]})
                            </span>
                          </div>
                        </div>
                        <ArrowRight size={14} color="var(--text-muted)" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
