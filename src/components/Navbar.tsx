import React from 'react';
import { Language } from '../types';
import {
  Search,
  Globe,
  Sun,
  Moon,
  BookOpen,
  FileText,
  History,
  Printer,
  Shield,
  MessageSquare
} from 'lucide-react';

interface Props {
  lang: Language;
  theme: 'light' | 'dark' | 'sepia';
  activeTab: 'article' | 'talk' | 'history' | 'evidence';
  onLangChange: (lang: Language) => void;
  onThemeToggle: () => void;
  onTabChange: (tab: 'article' | 'talk' | 'history' | 'evidence') => void;
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
  onOpenEditorialPolicy: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<Props> = ({
  lang,
  theme,
  activeTab,
  onLangChange,
  onThemeToggle,
  onTabChange,
  onOpenSearch,
  onOpenAdmin,
  onOpenEditorialPolicy,
  onPrint
}) => {
  return (
    <header className="encyclopedia-header" role="banner">
      {/* Top Banner Notice */}
      <div className="notice-banner">
        <div className="container notice-content">
          <span>
            {lang === 'bn'
              ? 'একটি উন্মুক্ত স্থানীয় ইতিহাস গবেষণা ও প্রামাণ্য তথ্যভান্ডার • সংস্করণ ৪ (২০২৬)'
              : 'An Independent Local History Research & Documentary Archive • Rev 4 (2026)'}
          </span>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={onOpenEditorialPolicy}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-accent)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}
            >
              {lang === 'bn' ? 'সম্পাদকীয় নীতি' : 'Editorial Policy'}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenAdmin}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-accent)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
            >
              <Shield size={12} />
              {lang === 'bn' ? 'অ্যাডমিন প্যানেল' : 'Admin'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="container header-top">
        {/* Brand */}
        <div
          className="brand-section"
          onClick={() => onTabChange('article')}
          role="button"
          tabIndex={0}
        >
          <div className="brand-seal" aria-hidden="true">
            ক
          </div>
          <div className="brand-info">
            <span className="brand-title">
              {lang === 'bn' ? 'কাস্টম মোড় তথ্যকোষ' : 'Custom Mor Encyclopedia'}
            </span>
            <span className="brand-subtitle">
              {lang === 'bn'
                ? 'বালুয়াভাটা, বদরগঞ্জ, রংপুর • স্থানীয় ইতিহাস সংগ্রহশালা'
                : 'Baluavata, Badarganj, Rangpur • Local History Archive'}
            </span>
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="search-box" onClick={onOpenSearch} style={{ cursor: 'pointer' }}>
          <Search size={15} color="var(--text-muted)" />
          <input
            type="text"
            readOnly
            placeholder={
              lang === 'bn'
                ? 'অনুসন্ধান করুন (Ctrl + K)...'
                : 'Search encyclopedia...'
            }
          />
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Language Switcher */}
          <button
            type="button"
            className="btn-icon lang-switch-btn"
            onClick={() => onLangChange(lang === 'bn' ? 'en' : 'bn')}
            aria-label="Toggle language"
            title="Switch Language (বাংলা / English)"
          >
            <Globe size={15} />
            <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            className="btn-icon"
            onClick={onThemeToggle}
            aria-label="Toggle visual theme"
            title={`Current theme: ${theme}. Click to switch theme`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Print Button */}
          <button
            type="button"
            className="btn-icon"
            onClick={onPrint}
            title={lang === 'bn' ? 'মুদ্রণ বা পিডিএফ রপ্তানি' : 'Print / Export PDF'}
          >
            <Printer size={15} />
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="container header-tabs">
        <div className="nav-tabs-group" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'article'}
            className={`nav-tab ${activeTab === 'article' ? 'active' : ''}`}
            onClick={() => onTabChange('article')}
          >
            <BookOpen size={14} />
            <span>{lang === 'bn' ? 'নিবন্ধ (Article)' : 'Article'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'talk'}
            className={`nav-tab ${activeTab === 'talk' ? 'active' : ''}`}
            onClick={() => onTabChange('talk')}
          >
            <MessageSquare size={14} />
            <span>{lang === 'bn' ? 'আলোচনা (Talk)' : 'Discussion'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'history'}
            className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => onTabChange('history')}
          >
            <History size={14} />
            <span>{lang === 'bn' ? 'ইতিহাস ও সংস্করণ (History)' : 'Revision Log'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'evidence'}
            className={`nav-tab ${activeTab === 'evidence' ? 'active' : ''}`}
            onClick={() => onTabChange('evidence')}
          >
            <FileText size={14} />
            <span>{lang === 'bn' ? 'প্রামাণ্য নথি সংগ্রহ (Evidence)' : 'Document Archive'}</span>
          </button>
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {lang === 'bn' ? 'স্থানাঙ্ক: ২৫°৪০\'২৫" উ. ৮৯°০৩\'০৯" পূ.' : 'Coordinates: 25.6738° N, 89.0526° E'}
        </div>
      </div>
    </header>
  );
};
