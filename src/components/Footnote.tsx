import React, { useState } from 'react';
import { Citation, Language } from '../types';

interface Props {
  citation: Citation;
  lang: Language;
  onCitationClick: (citationId: string) => void;
}

export const Footnote: React.FC<Props> = ({ citation, lang, onCitationClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCitationClick(citation.id);
  };

  return (
    <span
      className="footnote-container"
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={`#ref-${citation.id}`}
        className="footnote-ref"
        onClick={handleClick}
        aria-label={`Citation ${citation.number}`}
      >
        [{citation.number}]
      </a>

      {showTooltip && (
        <span
          className="footnote-popover"
          style={{
            position: 'absolute',
            bottom: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-md)',
            padding: '0.6rem 0.8rem',
            width: '240px',
            fontSize: '0.78rem',
            lineHeight: '1.4',
            zIndex: 150,
            color: 'var(--text-primary)',
            pointerEvents: 'none',
            display: 'block'
          }}
        >
          <strong style={{ display: 'block', color: 'var(--text-accent)' }}>
            [{citation.number}] {citation.authorOrOrg[lang]}
          </strong>
          <span style={{ fontStyle: 'italic', display: 'block', marginTop: '0.2rem' }}>
            {citation.title[lang]} ({citation.date})
          </span>
          {citation.quote && (
            <span style={{ display: 'block', marginTop: '0.3rem', color: 'var(--text-muted)' }}>
              {citation.quote[lang]}
            </span>
          )}
        </span>
      )}
    </span>
  );
};
