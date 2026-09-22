import React, { useState, useEffect } from 'react';
import { SectionContent, Language } from '../types';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  sections: SectionContent[];
  lang: Language;
}

export const TableOfContents: React.FC<Props> = ({ sections, lang }) => {
  const [activeId, setActiveId] = useState<string>('introduction');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="toc-sidebar" aria-label="Table of contents">
      <div className="toc-title">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <List size={14} />
          {lang === 'bn' ? 'সূচিপত্র' : 'Contents'}
        </span>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          aria-label={collapsed ? 'Expand contents' : 'Collapse contents'}
        >
          {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>
      </div>

      {!collapsed && (
        <ul className="toc-list">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className={`toc-item ${activeId === sec.id ? 'active' : ''}`}
            >
              <a href={`#${sec.id}`}>
                <span style={{ color: 'var(--text-muted)', marginRight: '0.35rem' }}>
                  {sec.number}.
                </span>
                {sec.title[lang]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
