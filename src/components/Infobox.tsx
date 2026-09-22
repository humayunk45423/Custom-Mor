import React, { useState } from 'react';
import { InfoboxData, Language } from '../types';
import { MapPin, Navigation, ExternalLink, Compass, Camera } from 'lucide-react';

interface Props {
  data: InfoboxData;
  lang: Language;
  onOpenMap: () => void;
  onOpenEvidence?: (evidenceId: string) => void;
}

export const Infobox: React.FC<Props> = ({ data, lang, onOpenMap, onOpenEvidence }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'layout'>('photo');

  return (
    <aside className="encyclopedia-infobox" aria-label="Infobox">
      <div className="infobox-header">
        <h2 className="infobox-title">{data.title[lang]}</h2>
        <div className="infobox-subtitle">
          {lang === 'bn' ? 'কাস্টম মোড় (Custom Mor)' : 'Custom Mor (কাস্টম মোড়)'}
        </div>
      </div>

      {/* Visual Crossroads Media Box in Infobox */}
      <div className="infobox-image-box">
        {/* Toggle Controls */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-surface)' }}>
          <button
            type="button"
            onClick={() => setViewMode('photo')}
            style={{
              flex: 1,
              padding: '0.35rem 0.5rem',
              fontSize: '0.72rem',
              fontWeight: viewMode === 'photo' ? 700 : 500,
              background: viewMode === 'photo' ? 'var(--bg-card)' : 'transparent',
              color: viewMode === 'photo' ? 'var(--text-accent)' : 'var(--text-muted)',
              border: 'none',
              borderBottom: viewMode === 'photo' ? '2px solid var(--text-accent)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
          >
            <Camera size={12} />
            {lang === 'bn' ? 'আলোকচিত্র (Photo)' : 'Photograph'}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('layout')}
            style={{
              flex: 1,
              padding: '0.35rem 0.5rem',
              fontSize: '0.72rem',
              fontWeight: viewMode === 'layout' ? 700 : 500,
              background: viewMode === 'layout' ? 'var(--bg-card)' : 'transparent',
              color: viewMode === 'layout' ? 'var(--text-accent)' : 'var(--text-muted)',
              border: 'none',
              borderBottom: viewMode === 'layout' ? '2px solid var(--text-accent)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
          >
            <Navigation size={12} />
            {lang === 'bn' ? 'রোড ম্যাপ (Layout)' : 'Road Layout'}
          </button>
        </div>

        {viewMode === 'photo' ? (
          <div
            style={{ position: 'relative', cursor: onOpenEvidence ? 'pointer' : 'default' }}
            onClick={() => onOpenEvidence && onOpenEvidence('CM-003')}
            title={lang === 'bn' ? 'কাস্টম মোড়ের প্যানোরামা বড় করে দেখুন' : 'Click to inspect full resolution'}
          >
            <img
              src="/images/cm-photo-custom-mor-crossroads-panorama-2021.jpg"
              alt="Custom Mor Crossroads 2021"
              style={{
                width: '100%',
                height: '185px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '0 0 2px 2px'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '6px',
                right: '6px',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                fontSize: '0.68rem',
                padding: '0.15rem 0.4rem',
                borderRadius: '2px',
                backdropFilter: 'blur(3px)'
              }}
            >
              ২০২১ • কাস্টম মোড়
            </div>
          </div>
        ) : (
          <svg
            viewBox="0 0 320 200"
            style={{ width: '100%', height: '185px', background: '#1e293b', borderRadius: '0 0 2px 2px' }}
          >
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#1e293b" />
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Roads: North-South & East-West */}
            <rect x="135" y="10" width="50" height="180" fill="#475569" rx="2" />
            <rect x="10" y="75" width="300" height="50" fill="#475569" rx="2" />

            {/* Road markings */}
            <line x1="160" y1="15" x2="160" y2="75" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="160" y1="125" x2="160" y2="185" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="15" y1="100" x2="135" y2="100" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="185" y1="100" x2="305" y2="100" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="6,4" />

            {/* Junction Centre Pin */}
            <circle cx="160" cy="100" r="14" fill="#991b1b" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="160" cy="100" r="5" fill="#fef08a" />

            {/* Compass / Directions Labels */}
            <text x="160" y="28" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
              {lang === 'bn' ? 'উত্তর: বদরগঞ্জ পৌর সদর' : 'N: Badarganj Town'}
            </text>
            <text x="160" y="178" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
              {lang === 'bn' ? 'দক্ষিণ: বালুয়াভাটা দক্ষিণ' : 'S: Baluavata South'}
            </text>
            <text x="295" y="94" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="end">
              {lang === 'bn' ? 'পূর্ব: রংপুর' : 'E: Rangpur'}
            </text>
            <text x="25" y="94" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="start">
              {lang === 'bn' ? 'পশ্চিম: তারাগঞ্জ' : 'W: Taraganj'}
            </text>

            {/* Badge indicator */}
            <rect x="110" y="108" width="100" height="18" fill="rgba(15,23,42,0.85)" rx="3" />
            <text x="160" y="121" fill="#f8fafc" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              কাস্টম মোড় (2006)
            </text>
          </svg>
        )}

        <div className="infobox-caption">
          {viewMode === 'photo'
            ? (lang === 'bn'
                ? 'কাস্টম মোড় চার রাস্তার সংযোগস্থল ও গ্রামীণ বাজার কেন্দ্র (২০২১)'
                : 'Custom Mor four-way intersection & commercial market center (2021)')
            : (lang === 'bn' 
                ? 'বালুয়াভাটা মৌজার চার রাস্তার সংযোগস্থল বিন্যাস ও ট্রানজিট অক্ষ' 
                : 'Schematic road layout & transit axes at Baluavata mouza')}
        </div>
      </div>

      {/* Data Table */}
      <table className="infobox-table">
        <tbody>
          <tr>
            <th scope="row">{lang === 'bn' ? 'ধরন' : 'Type'}</th>
            <td>{data.type[lang]}</td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'দেশ' : 'Country'}</th>
            <td>{data.country[lang]}</td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'বিভাগ' : 'Division'}</th>
            <td>{data.division[lang]}</td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'জেলা' : 'District'}</th>
            <td>{data.district[lang]}</td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'উপজেলা/থানা' : 'Upazila/Thana'}</th>
            <td>{data.thana[lang]}</td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'মৌজা' : 'Mouza'}</th>
            <td>{data.mouza[lang]}</td>
          </tr>

          {/* Section: Historical Classification */}
          <tr>
            <td colSpan={2} className="infobox-section-head">
              {lang === 'bn' ? 'ঐতিহাসিক নামকরণ বিবরণ' : 'Historical Designation'}
            </td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'নামকরণ বছর' : 'Naming Year'}</th>
            <td>
              <strong>{data.namingYear}</strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {data.namingYearStatus[lang]}
              </div>
            </td>
          </tr>

          {/* Section: Geographical Location */}
          <tr>
            <td colSpan={2} className="infobox-section-head">
              {lang === 'bn' ? 'ভৌগোলিক স্থানাঙ্ক' : 'Geographic Data'}
            </td>
          </tr>
          <tr>
            <th scope="row">{lang === 'bn' ? 'স্থানাঙ্ক' : 'Coordinates'}</th>
            <td>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Compass size={14} color="var(--text-accent)" />
                <span style={{ fontSize: '0.82rem', fontFamily: 'monospace' }}>
                  {data.coordinates.display}
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenMap}
                style={{
                  marginTop: '0.4rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-accent)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontWeight: 600
                }}
              >
                <MapPin size={12} />
                {lang === 'bn' ? 'মানচিত্রে অবস্থান দেখুন' : 'View on Interactive Map'}
              </button>
            </td>
          </tr>

          {/* Section: Connectivity */}
          <tr>
            <td colSpan={2} className="infobox-section-head">
              {lang === 'bn' ? 'চারমুখী সড়ক যোগাযোগ' : 'Road Connectivity'}
            </td>
          </tr>
          {data.connectivity.map((conn, idx) => (
            <tr key={idx}>
              <td colSpan={2} style={{ fontSize: '0.78rem' }}>
                <Navigation size={11} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle', color: 'var(--text-accent)' }} />
                {conn[lang]}
              </td>
            </tr>
          ))}

          {/* Section: Notable Landmarks */}
          <tr>
            <td colSpan={2} className="infobox-section-head">
              {lang === 'bn' ? 'প্রধান বৈশিষ্ট্য' : 'Key Landmark Features'}
            </td>
          </tr>
          {data.notableFeatures.map((feat, idx) => (
            <tr key={idx}>
              <td colSpan={2} style={{ fontSize: '0.78rem' }}>
                • {feat[lang]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* External Map Links */}
      <div style={{ padding: '0.65rem 0.85rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=25.6738,89.0526"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
        >
          Google Maps <ExternalLink size={11} />
        </a>
        <a
          href="https://www.openstreetmap.org/#map=17/25.6738/89.0526"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
        >
          OpenStreetMap <ExternalLink size={11} />
        </a>
      </div>
    </aside>
  );
};
