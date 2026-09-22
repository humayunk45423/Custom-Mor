import React, { useState, useEffect } from 'react';
import { Language, EvidenceItem } from './types';
import {
  articleSections,
  infoboxData,
  associatedPersons,
  citationsList
} from './data/article-data';
import { evidenceList as initialEvidenceList } from './data/evidence-data';
import { revisionHistory } from './data/revisions-data';

import { Navbar } from './components/Navbar';
import { TableOfContents } from './components/TableOfContents';
import { Infobox } from './components/Infobox';
import { ClaimBadge } from './components/ClaimBadge';
import { Footnote } from './components/Footnote';
import { EvidenceModal } from './components/EvidenceModal';
import { MapViewer } from './components/MapViewer';
import { RevisionHistory } from './components/RevisionHistory';
import { EditorialPolicyModal } from './components/EditorialPolicyModal';
import { CorrectionModal } from './components/CorrectionModal';
import { SearchModal } from './components/SearchModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';

import {
  Calendar,
  MapPin,
  ShieldCheck,
  FileText,
  Clock,
  Eye,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('bn');
  const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('light');
  const [activeTab, setActiveTab] = useState<'article' | 'talk' | 'history' | 'evidence'>('article');

  // Evidence List state (can be appended via Admin Panel)
  const [evidenceList, setEvidenceList] = useState<EvidenceItem[]>(initialEvidenceList);

  // Modals state
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [showEditorialPolicy, setShowEditorialPolicy] = useState<boolean>(false);
  const [showCorrection, setShowCorrection] = useState<boolean>(false);

  // Highlighted citation state
  const [highlightedCitation, setHighlightedCitation] = useState<string | null>(null);

  // Handle Language & Theme Effect
  useEffect(() => {
    document.body.className = lang === 'bn' ? 'lang-bn' : 'lang-en';
    document.documentElement.lang = lang;

    // Update document title dynamically
    if (lang === 'bn') {
      document.title = 'কাস্টম মোড় — ইতিহাস, অবস্থান ও তথ্যভান্ডার | Custom Mor Encyclopedia';
    } else {
      document.title = 'Custom Mor — History, Location & Documentary Archive | Local Encyclopedia';
    }
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Keyboard shortcut Ctrl + K for Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleThemeToggle = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'sepia';
      return 'light';
    });
  };

  const handleCitationClick = (citationId: string) => {
    const refElement = document.getElementById(`ref-${citationId}`);
    if (refElement) {
      refElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedCitation(citationId);
      setTimeout(() => setHighlightedCitation(null), 3000);
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    setActiveTab('article');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="encyclopedia-root">
      {/* Masthead Header */}
      <Navbar
        lang={lang}
        theme={theme}
        activeTab={activeTab}
        onLangChange={setLang}
        onThemeToggle={handleThemeToggle}
        onTabChange={setActiveTab}
        onOpenSearch={() => setShowSearch(true)}
        onOpenAdmin={() => setShowAdmin(true)}
        onOpenEditorialPolicy={() => setShowEditorialPolicy(true)}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="container">
        {/* TAB 1: Core Article */}
        {activeTab === 'article' && (
          <div className="encyclopedia-layout">
            {/* Left Column: Table of Contents */}
            <aside>
              <TableOfContents sections={articleSections} lang={lang} />
            </aside>

            {/* Middle Column: Article Body */}
            <article className="article-container" role="main">
              {/* Header Title Area */}
              <header className="article-header">
                <h1 className="article-title serif-bn">
                  {lang === 'bn' ? 'কাস্টম মোড়' : 'Custom Mor'}
                </h1>
                <div className="article-meta-bar">
                  <span className="article-meta-item">
                    <MapPin size={13} color="var(--text-accent)" />
                    {lang === 'bn' ? 'বালুয়াভাটা, বদরগঞ্জ, রংপুর' : 'Baluavata, Badarganj, Rangpur'}
                  </span>
                  <span className="article-meta-item">
                    <Calendar size={13} color="var(--text-accent)" />
                    {lang === 'bn' ? 'নামকরণ: ২০০৬ (স্থানীয় বিবরণ)' : 'Naming: 2006 (Local Account)'}
                  </span>
                  <span className="article-meta-item">
                    <Clock size={13} color="var(--text-accent)" />
                    {lang === 'bn' ? 'সংস্করণ ৪ (২০২৬)' : 'Revision 4 (2026)'}
                  </span>
                  <span className="article-meta-item">
                    <ShieldCheck size={13} color="#059669" />
                    {lang === 'bn' ? 'সম্পাদকীয় নিরীক্ষিত' : 'Peer-Reviewed'}
                  </span>
                </div>
              </header>

              {/* Sections Rendered Sequentially per Specification Structure */}
              {articleSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="article-section">
                  <h2 className="section-heading">
                    <div className="section-heading-text">
                      <span className="section-number">{sec.number}.</span>
                      <span>{sec.title[lang]}</span>
                    </div>
                  </h2>

                  {/* Section Paragraphs */}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="section-paragraph">
                      {p.text[lang]}

                      {/* Claim Badge */}
                      {p.claimConfidence && (
                        <ClaimBadge confidence={p.claimConfidence} lang={lang} />
                      )}

                      {/* Inline Citations */}
                      {p.citations &&
                        p.citations.map((cId) => {
                          const citation = citationsList.find((c) => c.id === cId);
                          if (!citation) return null;
                          return (
                            <Footnote
                              key={cId}
                              citation={citation}
                              lang={lang}
                              onCitationClick={handleCitationClick}
                            />
                          );
                        })}
                    </p>
                  ))}

                  {/* Section 7: Associated People Grid */}
                  {sec.id === 'people' && (
                    <div className="persons-grid">
                      {associatedPersons.map((person, idx) => (
                        <div key={idx} className="person-card">
                          <h3 className="person-name">{person.name[lang]}</h3>
                          <div className="person-role">{person.role[lang]}</div>
                          <p className="person-desc">{person.description[lang]}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section 8: Documentary Evidence Cards */}
                  {sec.id === 'evidence' && (
                    <div className="evidence-grid">
                      {evidenceList.map((ev) => (
                        <div key={ev.id} className="evidence-card">
                          <div
                            className="evidence-preview-wrapper"
                            onClick={() => setSelectedEvidence(ev)}
                            role="button"
                            tabIndex={0}
                            title="Click to open interactive document viewer"
                          >
                            {/* Render real image or fallback depiction */}
                            {ev.imageUrl.startsWith('/images/') ? (
                              <img
                                src={ev.imageUrl}
                                alt={ev.title[lang]}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                              />
                            ) : (
                              <svg width="100%" height="100%" viewBox="0 0 300 180">
                                <rect width="100%" height="100%" fill="#1e293b" />
                                <rect x="20" y="20" width="260" height="140" fill="#334155" rx="3" />
                                <line x1="40" y1="45" x2="160" y2="45" stroke="#94a3b8" strokeWidth="3" />
                                <line x1="40" y1="65" x2="240" y2="65" stroke="#64748b" strokeWidth="2" />
                                <line x1="40" y1="85" x2="220" y2="85" stroke="#64748b" strokeWidth="2" />
                                <rect x="40" y="105" width="100" height="15" fill="#fef08a" rx="2" />
                                <circle cx="230" cy="115" r="18" fill="#065f46" opacity="0.3" />
                              </svg>
                            )}
                            <div className="preview-overlay">
                              <Eye size={18} />
                              <span>{lang === 'bn' ? 'নথি ভিউয়ার খুলুন' : 'Open Document Viewer'}</span>
                            </div>
                          </div>

                          <div className="evidence-body">
                            <span className="evidence-id-badge">{ev.id}</span>
                            <h3 className="evidence-title">{ev.title[lang]}</h3>
                            <div className="evidence-meta">
                              {ev.date} • {ev.documentType[lang]}
                            </div>
                            <div className="evidence-excerpt">
                              {ev.relevantTextExcerpt[lang]}
                            </div>
                            <div className="evidence-actions">
                              <button
                                type="button"
                                className="btn-icon"
                                style={{ width: '100%', justifyContent: 'center' }}
                                onClick={() => setSelectedEvidence(ev)}
                              >
                                <Eye size={14} />
                                <span>{lang === 'bn' ? 'জুম ও ব্ল্যাকআউট পরিদর্শন' : 'Inspect & Redactions'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section 9: Photographic Gallery Cards */}
                  {sec.id === 'gallery' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                      {/* Photo 1: Crossroads Panorama */}
                      <div className="evidence-card">
                        <div
                          className="evidence-preview-wrapper"
                          onClick={() => {
                            const item = evidenceList.find((e) => e.id === 'CM-003');
                            if (item) setSelectedEvidence(item);
                          }}
                        >
                          <img
                            src="/images/cm-photo-custom-mor-crossroads-panorama-2021.jpg"
                            alt="Custom Mor Crossroads 2021"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div className="preview-overlay">
                            <Eye size={18} />
                            <span>{lang === 'bn' ? 'প্যানোরামা বড় করে দেখুন' : 'View Full Panorama'}</span>
                          </div>
                        </div>
                        <div style={{ padding: '0.85rem' }}>
                          <span className="evidence-id-badge">CM-003</span>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '0.2rem' }}>
                            {lang === 'bn' ? 'চার রাস্তার সংযোগস্থল ও গ্রামীণ কেন্দ্রবিন্দু (২০২১)' : 'Four-Way Crossroads & Gathering Point (2021)'}
                          </strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                            {lang === 'bn' ? 'তারিখ: ১১ জুন ২০২১ • স্থান: কাস্টম মোড়, বালুয়াভাটা' : 'Date: 11 June 2021 • Custom Mor, Baluavata'}
                          </div>
                        </div>
                      </div>

                      {/* Photo 2: Grameenphone 4G & Sadia Variety Store */}
                      <div className="evidence-card">
                        <div
                          className="evidence-preview-wrapper"
                          onClick={() => {
                            const item = evidenceList.find((e) => e.id === 'CM-004');
                            if (item) setSelectedEvidence(item);
                          }}
                        >
                          <img
                            src="/images/cm-photo-signage-sadia-variety-grameenphone-2021.jpg"
                            alt="Grameenphone Signboard"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div className="preview-overlay">
                            <Eye size={18} />
                            <span>{lang === 'bn' ? 'সাইনবোর্ড ও দেওয়াল লিখন দেখুন' : 'View Signage Details'}</span>
                          </div>
                        </div>
                        <div style={{ padding: '0.85rem' }}>
                          <span className="evidence-id-badge">CM-004</span>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '0.2rem' }}>
                            {lang === 'bn' ? 'গ্রামীণফোন ৪জি রিটেইলার ও দেওয়াল লিখন' : 'Grameenphone 4G Retailer & Facade Mural'}
                          </strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                            {lang === 'bn' ? 'ঠিকানা: কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ' : 'Address: Custom Mor, Baluavata, Badarganj'}
                          </div>
                        </div>
                      </div>

                      {/* Photo 3: Mahim Fashion */}
                      <div className="evidence-card">
                        <div
                          className="evidence-preview-wrapper"
                          onClick={() => {
                            const item = evidenceList.find((e) => e.id === 'CM-005');
                            if (item) setSelectedEvidence(item);
                          }}
                        >
                          <img
                            src="/images/cm-photo-signage-mahim-fashion-2021.jpg"
                            alt="Mahim Fashion Signboard"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div className="preview-overlay">
                            <Eye size={18} />
                            <span>{lang === 'bn' ? 'বাণিজ্যিক ফলক দেখুন' : 'View Storefront Marquee'}</span>
                          </div>
                        </div>
                        <div style={{ padding: '0.85rem' }}>
                          <span className="evidence-id-badge">CM-005</span>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '0.2rem' }}>
                            {lang === 'bn' ? 'মাহিম ফ্যাশন বাণিজ্যিক সাইনবোর্ড' : 'Mahim Fashion Commercial Signboard'}
                          </strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                            {lang === 'bn' ? 'পোশাক বিপণি ফলকে কাস্টম মোড় ঠিকানা উৎকীর্ণ' : 'Apparel store marquee with Custom Mor trade address'}
                          </div>
                        </div>
                      </div>

                      {/* Photo 4: Mitu Tailors & Wire Net */}
                      <div className="evidence-card">
                        <div
                          className="evidence-preview-wrapper"
                          onClick={() => {
                            const item = evidenceList.find((e) => e.id === 'CM-006');
                            if (item) setSelectedEvidence(item);
                          }}
                        >
                          <img
                            src="/images/cm-photo-signage-mitu-tailors-wirenet-2021.jpg"
                            alt="Mitu Tailors & Wire Net Signboard"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div className="preview-overlay">
                            <Eye size={18} />
                            <span>{lang === 'bn' ? 'কুটির শিল্প ফলক দেখুন' : 'View Craft Marquees'}</span>
                          </div>
                        </div>
                        <div style={{ padding: '0.85rem' }}>
                          <span className="evidence-id-badge">CM-006</span>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginTop: '0.2rem' }}>
                            {lang === 'bn' ? 'মিতু টেইলার্স ও হুমায়ুন ওয়্যার নেট সাইনবোর্ড' : 'Mitu Tailors & Wire Net Enterprise Signboards'}
                          </strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                            {lang === 'bn' ? 'ক্ষুদ্র কুটির শিল্পে ব্যবহৃত স্থায়ী ঠিকানা' : 'Permanent trade location of small craft workshops'}
                          </div>
                        </div>
                      </div>

                      {/* Map Node */}
                      <div className="evidence-card">
                        <div
                          className="evidence-preview-wrapper"
                          onClick={() => setShowMap(true)}
                        >
                          <svg width="100%" height="100%" viewBox="0 0 300 180">
                            <rect width="100%" height="100%" fill="#0f172a" />
                            <line x1="150" y1="10" x2="150" y2="170" stroke="#475569" strokeWidth="24" />
                            <line x1="20" y1="90" x2="280" y2="90" stroke="#475569" strokeWidth="24" />
                            <circle cx="150" cy="90" r="14" fill="#991b1b" stroke="#ffffff" strokeWidth="2" />
                            <text x="150" y="94" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">GPS</text>
                          </svg>
                          <div className="preview-overlay">
                            <MapPin size={18} />
                            <span>{lang === 'bn' ? 'মানচিত্র খুলুন' : 'Open Location Map'}</span>
                          </div>
                        </div>
                        <div style={{ padding: '0.85rem' }}>
                          <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                            {lang === 'bn' ? 'ভৌগোলিক স্থানাঙ্ক ও সংযোগ মানচিত্র' : 'Geographical Coordinates & Map'}
                          </strong>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                            25.6738° N, 89.0526° E • Baluavata, Badarganj
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 10: Footnotes & References Indexed List */}
                  {sec.id === 'references' && (
                    <ol className="references-list">
                      {citationsList.map((cit) => (
                        <li
                          key={cit.id}
                          id={`ref-${cit.id}`}
                          className={`reference-item ${
                            highlightedCitation === cit.id ? 'highlighted' : ''
                          }`}
                        >
                          <span className="ref-author">{cit.authorOrOrg[lang]}</span>.{' '}
                          <span className="ref-title">“{cit.title[lang]}”</span>{' '}
                          <span>({cit.date})</span>.{' '}
                          {cit.publisher && <span>{cit.publisher[lang]}. </span>}
                          {cit.page && <span>{cit.page}. </span>}
                          {cit.quote && (
                            <span className="ref-excerpt">{cit.quote[lang]}</span>
                          )}
                          {cit.url && (
                            <a
                              href={cit.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginLeft: '0.4rem', color: 'var(--text-accent)' }}
                            >
                              [Web] <ExternalLink size={11} />
                            </a>
                          )}
                          {cit.evidenceId && (
                            <button
                              type="button"
                              onClick={() => {
                                const ev = evidenceList.find((e) => e.id === cit.evidenceId);
                                if (ev) setSelectedEvidence(ev);
                              }}
                              style={{ background: 'transparent', border: 'none', color: 'var(--text-brand)', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600, marginLeft: '0.5rem' }}
                            >
                              [নথি দেখুন / View Scan: {cit.evidenceId}]
                            </button>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </section>
              ))}
            </article>

            {/* Right Column: Editorial Infobox */}
            <aside>
              <Infobox
                data={infoboxData}
                lang={lang}
                onOpenMap={() => setShowMap(true)}
                onOpenEvidence={(evId) => {
                  const ev = evidenceList.find((e) => e.id === evId);
                  if (ev) setSelectedEvidence(ev);
                }}
              />
            </aside>
          </div>
        )}

        {/* TAB 2: Talk / Discussion Page */}
        {activeTab === 'talk' && (
          <div style={{ maxWidth: '850px', margin: '2rem auto 4rem auto' }}>
            <div className="section-heading">
              <div className="section-heading-text">
                <MessageSquare size={22} color="var(--text-accent)" />
                <span className="serif-bn">
                  {lang === 'bn' ? 'আলোচনা পাতা: কাস্টম মোড়' : 'Talk: Custom Mor'}
                </span>
              </div>
            </div>
            <p className="section-paragraph">
              {lang === 'bn'
                ? 'এই আলোচনা পাতাটিতে নিবন্ধের ঐতিহাসিক তথ্য, সূত্র এবং নিরপেক্ষতা সংক্রান্ত সম্পাদকীয় সংলাপ লিপিবদ্ধ রয়েছে।'
                : 'This discussion page archives editorial deliberations regarding source authentication, neutral point of view, and naming corroboration.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {lang === 'bn' ? '২০০৬ সালের নামকরণের দাবি ও সম্পাদকীয় নিরপেক্ষতা' : 'NPOV Classification of the 2006 Naming Account'}
                </h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  {lang === 'bn' ? 'শুরু করেছেন: সম্পাদকীয় বোর্ড • ১৮ জানুয়ারি ২০২৪' : 'Initiated by: Editorial Board • January 18, 2024'}
                </div>
                <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  {lang === 'bn'
                    ? 'যেহেতু ২০০৬ সালের নামকরণের কোনো সরকারি গেজেট এখনও পাওয়া যায়নি, তাই সম্পাদনা নীতি ৩.১ অনুসারে এটিকে সরাসরি "অবিসংবাদিত সত্য" হিসেবে উপস্থাপন না করে "স্থানীয় বাসিন্দাদের বিবরণ ও মৌখিক সাক্ষ্য" হিসেবে নথিভুক্ত করার সিদ্ধান্ত বহাল রয়েছে।'
                    : 'As no governmental gazette exists from 2006 for the colloquial naming, the editorial committee affirms that the claim must remain classified under "Documented Local Account" rather than undisputed state decree.'}
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {lang === 'bn' ? 'তত্ত্বাবধায়ক আমলে সাইনবোর্ড অপসারণের তথ্য প্রমাণ' : 'Signboard Removal Documentation (Caretaker Road Widening)'}
                </h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  {lang === 'bn' ? 'শুরু করেছেন: টি. আহমেদ (ঐতিহাসিক) • ২২ জুন ২০২৪' : 'Initiated by: T. Ahmed • June 22, 2024'}
                </div>
                <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  {lang === 'bn'
                    ? '২০০৮ সালের আলোকচিত্রে সাইনবোর্ডের অস্তিত্ব প্রমাণিত হয়েছে (নথি CM-002)। পরবর্তীতে সড়ক প্রশস্তকরণের সময় এটি উচ্ছেদ হওয়া সত্ত্বেও স্থানীয় জনসাধারণের মুখে নামটি অপরিবর্তিত থাকে এবং পরবর্তীতে হোল্ডিং ট্যাক্স নথিতে স্থান পায়।'
                    : 'Archival photograph CM-002 conclusively attests to the signboard. Although dismantled during road widening, the name was conserved through commercial signage and holding registers.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Revision History & Visual Diff Viewer */}
        {activeTab === 'history' && (
          <div style={{ maxWidth: '900px', margin: '2rem auto 4rem auto' }}>
            <RevisionHistory revisions={revisionHistory} lang={lang} />
          </div>
        )}

        {/* TAB 4: Dedicated Documentary Evidence Gallery */}
        {activeTab === 'evidence' && (
          <div style={{ maxWidth: '1000px', margin: '2rem auto 4rem auto' }}>
            <div className="section-heading">
              <div className="section-heading-text">
                <FileText size={22} color="var(--text-accent)" />
                <span className="serif-bn">
                  {lang === 'bn' ? 'প্রামাণ্য নথি ও দলিল সংগ্রহশালা' : 'Documentary Evidence Archive'}
                </span>
              </div>
              <button
                type="button"
                className="btn-icon"
                onClick={() => setShowAdmin(true)}
              >
                {lang === 'bn' ? '+ নতুন প্রমাণ সংযোজন' : '+ Append Evidence'}
              </button>
            </div>
            <p className="section-paragraph">
              {lang === 'bn'
                ? 'কাস্টম মোড়ের ইতিহাস ও ভৌগোলিক পরিচিতির সমর্থনে সংগৃহীত প্রতিটি নথির উচ্চ-রেজোলিউশন স্ক্যান, মেটাডাটা ও আইনি ব্ল্যাকআউট (Redaction) স্তর নিম্নে প্রদর্শিত হলো।'
                : 'All documentary records substantiating Custom Mor are cataloged below with high-resolution inspection tools, custodial metadata, and statutory redaction masks.'}
            </p>

            <div className="evidence-grid" style={{ marginTop: '1.5rem' }}>
              {evidenceList.map((ev) => (
                <div key={ev.id} className="evidence-card">
                  <div
                    className="evidence-preview-wrapper"
                    onClick={() => setSelectedEvidence(ev)}
                  >
                    {/* Render real image or fallback depiction */}
                    {ev.imageUrl.startsWith('/images/') ? (
                      <img
                        src={ev.imageUrl}
                        alt={ev.title[lang]}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <svg width="100%" height="100%" viewBox="0 0 300 180">
                        <rect width="100%" height="100%" fill="#1e293b" />
                        <rect x="25" y="25" width="250" height="130" fill="#334155" rx="3" />
                        <line x1="45" y1="50" x2="160" y2="50" stroke="#94a3b8" strokeWidth="3" />
                        <line x1="45" y1="70" x2="230" y2="70" stroke="#64748b" strokeWidth="2" />
                        <circle cx="210" cy="110" r="16" fill="#065f46" opacity="0.4" />
                      </svg>
                    )}
                    <div className="preview-overlay">
                      <Eye size={18} />
                      <span>{lang === 'bn' ? 'নথি ভিউয়ার খুলুন' : 'Open Viewer'}</span>
                    </div>
                  </div>
                  <div className="evidence-body">
                    <span className="evidence-id-badge">{ev.id}</span>
                    <h3 className="evidence-title">{ev.title[lang]}</h3>
                    <div className="evidence-meta">
                      {ev.date} • {ev.issuingAuthority[lang]}
                    </div>
                    <div className="evidence-excerpt">
                      {ev.relevantTextExcerpt[lang]}
                    </div>
                    <div className="evidence-actions">
                      <button
                        type="button"
                        className="btn-icon"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setSelectedEvidence(ev)}
                      >
                        <Eye size={14} />
                        <span>{lang === 'bn' ? 'জুম ও ব্ল্যাকআউট পরিদর্শন' : 'Inspect Document'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Interactive Documentary Evidence Modal */}
      {selectedEvidence && (
        <EvidenceModal
          evidence={selectedEvidence}
          lang={lang}
          onClose={() => setSelectedEvidence(null)}
        />
      )}

      {/* Interactive Map Modal */}
      {showMap && (
        <MapViewer lang={lang} onClose={() => setShowMap(false)} />
      )}

      {/* Bilingual Search Modal */}
      {showSearch && (
        <SearchModal
          lang={lang}
          sections={articleSections}
          evidenceList={evidenceList}
          persons={associatedPersons}
          onClose={() => setShowSearch(false)}
          onNavigateToSection={handleNavigateToSection}
          onSelectEvidence={(ev) => setSelectedEvidence(ev)}
        />
      )}

      {/* Editorial Policy Modal */}
      {showEditorialPolicy && (
        <EditorialPolicyModal
          lang={lang}
          onClose={() => setShowEditorialPolicy(false)}
          onOpenCorrection={() => setShowCorrection(true)}
        />
      )}

      {/* Correction & Evidence Submission Modal */}
      {showCorrection && (
        <CorrectionModal lang={lang} onClose={() => setShowCorrection(false)} />
      )}

      {/* Admin Panel Modal */}
      {showAdmin && (
        <AdminDashboard
          lang={lang}
          evidenceList={evidenceList}
          onClose={() => setShowAdmin(false)}
          onAddNewEvidence={(item) => setEvidenceList((prev) => [item, ...prev])}
        />
      )}

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenEditorialPolicy={() => setShowEditorialPolicy(true)}
        onOpenCorrection={() => setShowCorrection(true)}
        onLangChange={setLang}
      />
    </div>
  );
};
export default App;
