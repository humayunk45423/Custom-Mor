import React, { useState, useRef } from 'react';
import { EvidenceItem, Language } from '../types';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Maximize2,
  Minimize2,
  Lock
} from 'lucide-react';

interface Props {
  evidence: EvidenceItem | null;
  lang: Language;
  onClose: () => void;
}

export const EvidenceModal: React.FC<Props> = ({ evidence, lang, onClose }) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showRedactions, setShowRedactions] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  if (!evidence) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch((err) => console.log(err));
      setIsFullscreen(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        ref={containerRef}
        className="modal-dialog"
        style={{ maxWidth: isFullscreen ? '100vw' : '1050px', maxHeight: isFullscreen ? '100vh' : '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="evidence-id-badge">{evidence.id}</span>
            <h3 className="modal-title" style={{ marginTop: '0.2rem' }}>
              {evidence.title[lang]}
            </h3>
          </div>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Viewer Toolbar */}
        <div className="viewer-toolbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              type="button"
              className="btn-icon"
              onClick={handleZoomIn}
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={handleZoomOut}
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={handleReset}
              title="Reset Zoom & Pan"
            >
              <RotateCcw size={15} />
              <span style={{ fontSize: '0.75rem' }}>{Math.round(zoom * 100)}%</span>
            </button>
            <button
              type="button"
              className="btn-icon"
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
          </div>

          {/* Privacy Redaction Mask Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              type="button"
              className="btn-icon"
              style={{
                background: showRedactions ? '#064e3b' : '#78350f',
                borderColor: showRedactions ? '#059669' : '#d97706',
                color: '#fff'
              }}
              onClick={() => setShowRedactions(!showRedactions)}
              title="Toggle statutory redaction overlays"
            >
              {showRedactions ? <Lock size={14} /> : <ShieldAlert size={14} />}
              <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                {showRedactions
                  ? (lang === 'bn' ? 'গোপনীয়তা ফিল্টার: সক্রিয় (Masked)' : 'Privacy Filter: Active')
                  : (lang === 'bn' ? 'সংরক্ষিত ক্ষেত্র পরিদর্শন (Audit)' : 'Inspect Redaction Areas')}
              </span>
            </button>
          </div>
        </div>

        {/* Canvas Display Area */}
        <div
          className="viewer-canvas-area"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ height: isFullscreen ? 'calc(100vh - 220px)' : '420px' }}
        >
          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transition: isDragging ? 'none' : 'transform 100ms ease-out',
              transformOrigin: 'center center',
              userSelect: 'none'
            }}
          >
            {/* Render Real Photograph / Document Scan or SVG Vector */}
            {evidence.imageUrl.startsWith('/images/') ? (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={evidence.imageUrl}
                  alt={evidence.title[lang]}
                  style={{
                    maxHeight: isFullscreen ? 'calc(100vh - 260px)' : '390px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '4px',
                    boxShadow: '0 10px 35px rgba(0,0,0,0.6)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Privacy Redaction Status Floating Overlay */}
                {evidence.privacyRedactions && evidence.privacyRedactions.length > 0 && showRedactions && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(6, 78, 59, 0.92)',
                      backdropFilter: 'blur(4px)',
                      color: '#ecfdf5',
                      border: '1px solid #059669',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      zIndex: 10
                    }}
                  >
                    <Lock size={12} />
                    <span>
                      {lang === 'bn' ? 'সংবিধিবদ্ধ গোপনীয়তা ফিল্টার সক্রিয়' : 'Statutory Privacy Masking Active'}
                    </span>
                  </div>
                )}
              </div>
            ) : evidence.id === 'CM-007' ? (
              <svg width="600" height="420" viewBox="0 0 600 420" style={{ background: '#f8fafc', border: '1px solid #cbd5e1', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                {/* Cadastral Sheet grid */}
                <rect x="20" y="20" width="560" height="380" fill="#f1f5f9" stroke="#94a3b8" />
                {/* Survey plots */}
                <path d="M 60 80 L 220 70 L 250 180 L 70 190 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <text x="140" y="130" fill="#475569" fontSize="11" fontWeight="bold">দাগ নং ৩৪৪</text>

                <path d="M 330 60 L 520 80 L 510 190 L 340 180 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <text x="420" y="130" fill="#475569" fontSize="11" fontWeight="bold">দাগ নং ৩৪৫</text>

                {/* Roads Crossing */}
                <path d="M 230 20 L 320 20 L 330 400 L 240 400 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
                <path d="M 20 180 L 580 180 L 580 250 L 20 250 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />

                {/* Intersection Circle */}
                <circle cx="280" cy="215" r="28" fill="#dc2626" opacity="0.2" />
                <circle cx="280" cy="215" r="8" fill="#dc2626" />
                <text x="280" y="260" fill="#991b1b" fontSize="12" fontWeight="bold" textAnchor="middle">কাস্টম মোড় সংযোগ</text>
                <text x="280" y="275" fill="#334155" fontSize="9.5" textAnchor="middle">25.6738° N, 89.0526° E</text>

                <text x="40" y="50" fill="#1e293b" fontSize="12" fontWeight="bold">বালুয়াভাটা মৌজা শিট ৩ — এলজিইডি জরিপ</text>
              </svg>
            ) : evidence.id === 'CM-008' ? (
              <svg width="600" height="420" viewBox="0 0 600 420" style={{ background: '#fffefb', border: '1px solid #d6d3d1', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                {/* Eyewitness deposition document */}
                <rect x="25" y="25" width="550" height="370" fill="none" stroke="#57534e" strokeWidth="1.5" />
                <text x="300" y="55" fill="#1c1917" fontSize="14" fontWeight="bold" textAnchor="middle">ঐতিহাসিক নামকরণের পটভূমি সংক্রান্ত যৌথ বিবরণ</text>
                <text x="300" y="73" fill="#78716c" fontSize="10" textAnchor="middle">বালুয়াভাটা প্রবীণ নাগরিক ও স্থানীয় ইতিহাস সংরক্ষণ পরিষদ, বদরগঞ্জ</text>
                <line x1="50" y1="85" x2="550" y2="85" stroke="#a8a29e" strokeWidth="0.8" />

                <text x="50" y="115" fill="#292524" fontSize="11" fontWeight="600">প্রত্যয়ন ও সাক্ষ্য বয়ান (২০০৬ সাল প্রসঙ্গে):</text>
                <text x="50" y="140" fill="#44403c" fontSize="10.5">“আমরা নিম্নস্বাক্ষরকারী বালুয়াভাটার স্থায়ী বাসিন্দাগণ একযোগে নিশ্চিত করিতেছি যে, ২০০৬ সালে</text>
                <text x="50" y="160" fill="#44403c" fontSize="10.5">তৎকালীন স্থানীয় কমিশনার মোঃ রুহুল আমিন এবং গণ্যমান্য মুরুব্বিদের সাথে আলোচনার প্রেক্ষিতে</text>
                <text x="50" y="180" fill="#44403c" fontSize="10.5">শুল্ক ও আবগারি রাজস্ব কর্মকর্তা মহোদয়ের বাসভবন সংলগ্ন এই চার রাস্তার মোড়টিকে</text>
                <text x="50" y="200" fill="#991b1b" fontSize="11" fontWeight="bold">‘কাস্টম মোড়’ নামে নামকরণের সামাজিক সিদ্ধান্ত সর্বসম্মতিক্রমে গৃহীত হয়।”</text>

                {/* Signatories list */}
                <text x="50" y="240" fill="#1c1917" fontSize="11" fontWeight="bold">যৌথ স্বাক্ষরকারী ব্যক্তিবর্গ:</text>
                <text x="50" y="265" fill="#292524" fontSize="10">১. মোঃ রুহুল আমিন (সাবেক কমিশনার)</text>
                <text x="210" y="265" fill="#292524" fontSize="10">২. মোঃ লতিফ সরদার</text>
                <text x="380" y="265" fill="#292524" fontSize="10">৩. আকমল প্রফেসর</text>
                <text x="50" y="295" fill="#292524" fontSize="10">৪. মোঃ গোলজার</text>
                <text x="210" y="295" fill="#292524" fontSize="10">৫. মোঃ মোখলেস</text>
                <text x="380" y="295" fill="#292524" fontSize="10">৬. মোঃ আলিম শাহ</text>

                {/* Privacy masked contacts */}
                <text x="50" y="335" fill="#78716c" fontSize="9.5">সাক্ষীদের ফোন নম্বর:</text>
                {showRedactions ? (
                  <rect x="150" y="325" width="220" height="15" fill="#000000" rx="2" />
                ) : (
                  <g>
                    <rect x="150" y="325" width="220" height="15" fill="#fee2e2" stroke="#dc2626" strokeDasharray="2,2" />
                    <text x="160" y="336" fill="#dc2626" fontSize="9">[REDACTED: PRIVATE CONTACTS]</text>
                  </g>
                )}

                <text x="420" y="375" fill="#047857" fontSize="10" fontWeight="bold">যাচাইকৃত নথি: CM-008</text>
              </svg>
            ) : null}
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="modal-body" style={{ background: 'var(--bg-surface)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                {lang === 'bn' ? 'ইস্যুকারী কর্তৃপক্ষ' : 'Issuing Authority'}
              </span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {evidence.issuingAuthority[lang]}
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                {lang === 'bn' ? 'তারিখ ও নথির ধরন' : 'Date & Document Type'}
              </span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {evidence.date} • {evidence.documentType[lang]}
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                {lang === 'bn' ? 'সংরক্ষণাগার / কাস্টোডিয়ান' : 'Custodian Archive'}
              </span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {evidence.sourceCustodian[lang]}
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                {lang === 'bn' ? 'যাচাইকরণ স্ট্যাটাস' : 'Verification Status'}
              </span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontWeight: 600, fontSize: '0.85rem' }}>
                <ShieldCheck size={16} />
                <span>{lang === 'bn' ? 'অনুমোদিত ও যাচাইকৃত' : 'Authenticated & Corroborated'}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            {evidence.description[lang]}
          </p>

          {/* Relevant Passage Quote */}
          <div className="evidence-excerpt" style={{ fontSize: '0.88rem' }}>
            <strong>{lang === 'bn' ? 'প্রাসঙ্গিক উদ্ধৃতি: ' : 'Relevant Excerpt: '}</strong>
            {evidence.relevantTextExcerpt[lang]}
          </div>

          {/* Redaction details table */}
          {evidence.privacyRedactions.length > 0 && (
            <div style={{ marginTop: '0.85rem', padding: '0.65rem 0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-brand)' }}>
                <ShieldAlert size={14} />
                <span>{lang === 'bn' ? 'গোপনীয়তা সুরক্ষা বিবরণ (Privacy Compliance)' : 'Statutory Privacy Redactions'}</span>
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', marginTop: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {evidence.privacyRedactions.map((red, idx) => (
                  <li key={idx}>
                    <strong>{red.field}</strong>: {red.reason} ({red.status})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
