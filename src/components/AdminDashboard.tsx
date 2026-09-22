import React, { useState } from 'react';
import { Language, EvidenceItem } from '../types';
import {
  X,
  Shield,
  FileEdit,
  UploadCloud,
  CheckCircle,
  Lock,
  PlusCircle,
  Clock,
  UserCheck
} from 'lucide-react';

interface Props {
  lang: Language;
  evidenceList: EvidenceItem[];
  onClose: () => void;
  onAddNewEvidence: (item: EvidenceItem) => void;
}

export const AdminDashboard: React.FC<Props> = ({
  lang,
  evidenceList,
  onClose,
  onAddNewEvidence
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'evidence' | 'audit' | 'roles'>('editor');
  const [role, setRole] = useState<'Administrator' | 'Editor' | 'Reviewer'>('Administrator');
  const [publishSuccess, setPublishSuccess] = useState<string | null>(null);

  // New Evidence Form State
  const [newDocId, setNewDocId] = useState('CM-005');
  const [newTitleBn, setNewTitleBn] = useState('');
  const [newTitleEn, setNewTitleEn] = useState('');
  const [newDate, setNewDate] = useState('2026-09-22');
  const [newAuthorityBn, setNewAuthorityBn] = useState('');
  const [newAuthorityEn, setNewAuthorityEn] = useState('');
  const [newExcerptBn, setNewExcerptBn] = useState('');
  const [newExcerptEn, setNewExcerptEn] = useState('');

  const handleCreateEvidence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleBn || !newTitleEn) return;

    const item: EvidenceItem = {
      id: newDocId,
      title: { bn: newTitleBn, en: newTitleEn },
      date: newDate,
      issuingAuthority: { bn: newAuthorityBn, en: newAuthorityEn },
      documentType: { bn: 'সংযোজিত ঐতিহাসিক রেকর্ড', en: 'Appended Historical Record' },
      description: {
        bn: 'সম্পাদকীয় যাচাইকরণের মাধ্যমে নবসংযোজিত প্রামাণ্য নথিপত্র।',
        en: 'Newly appended documentary evidence authenticated through editorial review.'
      },
      sourceCustodian: { bn: 'বদরগঞ্জ লোকাল হিস্ট্রি আর্কাইভ', en: 'Badarganj Local History Archives' },
      verificationStatus: 'authenticated',
      verificationNotes: {
        bn: 'অ্যাডমিন প্যানেল কর্তৃক সিলমোহর ও সত্যতা যাচাই নিশ্চিতকৃত।',
        en: 'Stamps and physical integrity corroborated via Admin review.'
      },
      relevantTextExcerpt: { bn: newExcerptBn, en: newExcerptEn },
      privacyRedactions: [
        { field: 'Personal IDs', status: 'redacted', reason: 'Automatic statutory privacy compliance' }
      ],
      imageType: 'document',
      imageUrl: 'cm-001-tax-holding.svg',
      thumbnailUrl: 'cm-001-thumb.svg',
      citationId: 'CIT-7'
    };

    onAddNewEvidence(item);
    setPublishSuccess(`Evidence item ${newDocId} successfully attached to article!`);
    setTimeout(() => setPublishSuccess(null), 4000);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: '980px', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Shield size={22} color="var(--text-accent)" />
            <div>
              <h3 className="modal-title">
                {lang === 'bn' ? 'তথ্যকোষ প্রশাসনিক ব্যবস্থাপনা প্যানেল' : 'Encyclopedia Editorial Administration Panel'}
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {lang === 'bn' ? 'তথ্য যাচাই, প্রমাণ সংযুক্তি ও অডিট নিয়ন্ত্রণ' : 'Verification Workflow, Evidence Redaction & Audit Ledger'}
              </div>
            </div>
          </div>
          <button type="button" className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Role & Tab Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 1.25rem', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <button
              type="button"
              className={`nav-tab ${activeTab === 'editor' ? 'active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              <FileEdit size={14} />
              <span>{lang === 'bn' ? 'ক্লেইম ও খসড়া সম্পাদক' : 'Claim & Article Editor'}</span>
            </button>
            <button
              type="button"
              className={`nav-tab ${activeTab === 'evidence' ? 'active' : ''}`}
              onClick={() => setActiveTab('evidence')}
            >
              <UploadCloud size={14} />
              <span>{lang === 'bn' ? 'প্রমাণ সংযুক্তি ও ব্ল্যাকআউট' : 'Evidence & Redaction'}</span>
            </button>
            <button
              type="button"
              className={`nav-tab ${activeTab === 'audit' ? 'active' : ''}`}
              onClick={() => setActiveTab('audit')}
            >
              <Clock size={14} />
              <span>{lang === 'bn' ? 'অডিট লগ' : 'Audit Trail'}</span>
            </button>
            <button
              type="button"
              className={`nav-tab ${activeTab === 'roles' ? 'active' : ''}`}
              onClick={() => setActiveTab('roles')}
            >
              <UserCheck size={14} />
              <span>{lang === 'bn' ? 'অনুমতি ও ভূমিকা' : 'Roles & Permissions'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>{lang === 'bn' ? 'সক্রিয় ভূমিকা: ' : 'Active Role: '}</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              style={{
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                fontSize: '0.8rem'
              }}
            >
              <option value="Administrator">Administrator (পূর্ণ নিয়ন্ত্রণ)</option>
              <option value="Editor">Editor (সম্পাদনা ও তথ্যসূত্র)</option>
              <option value="Reviewer">Reviewer (প্রমাণ যাচাইকরণ)</option>
            </select>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          {publishSuccess && (
            <div style={{ padding: '0.75rem', background: '#dcfce7', border: '1px solid #86efac', color: '#166534', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <CheckCircle size={16} />
              <span>{publishSuccess}</span>
            </div>
          )}

          {/* TAB 1: Claim & Article Editor */}
          {activeTab === 'editor' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {lang === 'bn' ? 'ক্লেইম-ভিত্তিক তথ্যসূত্র ও সম্পাদকীয় সংশোধন' : 'Claim-Level Citation Architecture'}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {lang === 'bn'
                  ? 'প্রতিটি ঐতিহাসিক বাক্যের সাথে প্রমাণ সংযুক্ত করুন এবং দাবির প্রামাণ্য স্তর (Confidence Level) নির্ধারণ করুন।'
                  : 'Link archival sources directly to individual claims and assign evidentiary confidence levels.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ padding: '0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.85rem' }}>Claim #1: "কাস্টম মোড়ের নামকরণ ২০০৬ সালে শুরু হয়"</strong>
                    <span className="claim-badge badge-local">Documented Local Account</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    সংযুক্ত তথ্যসূত্র: CIT-4 (বালুয়াভাটা প্রবীণ স্মারকলিপি) • যাচাইকারী: Editorial Board
                  </div>
                </div>

                <div style={{ padding: '0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.85rem' }}>Claim #2: "পৌরসভা খতিয়ান ও হোল্ডিং নথিতে কাস্টম মোড় লিপিবদ্ধ"</strong>
                    <span className="claim-badge badge-official">Official Record</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    সংযুক্ত তথ্যসূত্র: CIT-1, CM-001 • যাচাইকারী: Revenue Assessor Verified
                  </div>
                </div>

                <div style={{ padding: '0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.85rem' }}>Claim #3: "চার রাস্তার সংযোগস্থল ও ক্যাডাস্ট্রাল দাগ"</strong>
                    <span className="claim-badge badge-survey">Cadastral Survey</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    সংযুক্ত তথ্যসূত্র: CIT-3, CM-003 • স্থানাঙ্ক: 25.6738° N, 89.0526° E
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Evidence Upload & Redaction */}
          {activeTab === 'evidence' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {lang === 'bn' ? 'নতুন প্রামাণ্য নথি সংযোজন ও ব্ল্যাকআউট (মোট বিদ্যমান: ' + evidenceList.length + 'টি)' : 'Attach New Evidence & Apply Redaction (Cataloged: ' + evidenceList.length + ' items)'}
              </h4>

              <form onSubmit={handleCreateEvidence} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Evidence ID
                  </label>
                  <input
                    type="text"
                    value={newDocId}
                    onChange={(e) => setNewDocId(e.target.value)}
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Date (YYYY-MM-DD)
                  </label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    নথির শিরোনাম (বাংলা) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitleBn}
                    onChange={(e) => setNewTitleBn(e.target.value)}
                    placeholder="যেমন: বদরগঞ্জ ট্রেড লাইসেন্স নিবন্ধন পাতা"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Document Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitleEn}
                    onChange={(e) => setNewTitleEn(e.target.value)}
                    placeholder="e.g. Badarganj Municipal Trade License Extract"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    ইস্যুকারী কর্তৃপক্ষ (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={newAuthorityBn}
                    onChange={(e) => setNewAuthorityBn(e.target.value)}
                    placeholder="উপজেলা প্রশাসন / পৌরসভা"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Issuing Authority (English)
                  </label>
                  <input
                    type="text"
                    value={newAuthorityEn}
                    onChange={(e) => setNewAuthorityEn(e.target.value)}
                    placeholder="Upazila Administration / Municipality"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    প্রাসঙ্গিক উদ্ধৃতি (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={newExcerptBn}
                    onChange={(e) => setNewExcerptBn(e.target.value)}
                    placeholder="“ঠিকানা: কাস্টম মোড়, বালুয়াভাটা...”"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Relevant Excerpt (English)
                  </label>
                  <input
                    type="text"
                    value={newExcerptEn}
                    onChange={(e) => setNewExcerptEn(e.target.value)}
                    placeholder="“Address: Custom Mor, Baluavata...”"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    className="btn-icon"
                    style={{ background: 'var(--text-accent)', color: '#fff', border: 'none', fontWeight: 600 }}
                  >
                    <PlusCircle size={14} />
                    <span>{lang === 'bn' ? 'নথি যাচাইপূর্বক সংযুক্ত করুন' : 'Authenticate & Append Evidence'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Audit Trail */}
          {activeTab === 'audit' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {lang === 'bn' ? 'নিরাপত্তা ও সম্পাদকীয় অডিট লগ' : 'Security & Editorial Audit Trail'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                <div style={{ padding: '0.6rem 0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #059669' }}>
                  [2026-09-22 18:30:00 UTC] <strong>H. Kabir (Chief Archivist)</strong>: Promoted Revision 4 with English translation & Cadastral GPS coordinates.
                </div>
                <div style={{ padding: '0.6rem 0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #059669' }}>
                  [2025-02-11 14:15:20 UTC] <strong>M. Rahman (Research Fellow)</strong>: Verified physical ledger stamp for CM-001; applied black mask redaction on NID fields.
                </div>
                <div style={{ padding: '0.6rem 0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #2563eb' }}>
                  [2024-06-20 09:45:10 UTC] <strong>T. Ahmed (Historian)</strong>: Attached 2008 directional signboard photograph archive (CM-002).
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Roles & Permissions */}
          {activeTab === 'roles' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {lang === 'bn' ? 'ভূমিকাভিত্তিক অনুমতি ম্যাট্রিক্স' : 'Role-Based Access Control (RBAC)'}
              </h4>
              <table className="infobox-table" style={{ background: 'var(--bg-card)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-hover)' }}>
                    <th style={{ padding: '0.5rem' }}>Role</th>
                    <th style={{ padding: '0.5rem' }}>Article Edit</th>
                    <th style={{ padding: '0.5rem' }}>Evidence Upload</th>
                    <th style={{ padding: '0.5rem' }}>Redaction Tool</th>
                    <th style={{ padding: '0.5rem' }}>Publish Approval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Administrator</strong></td>
                    <td><CheckCircle size={14} color="#059669" /> Yes</td>
                    <td><CheckCircle size={14} color="#059669" /> Yes</td>
                    <td><CheckCircle size={14} color="#059669" /> Full</td>
                    <td><CheckCircle size={14} color="#059669" /> Unrestricted</td>
                  </tr>
                  <tr>
                    <td><strong>Editor</strong></td>
                    <td><CheckCircle size={14} color="#059669" /> Yes</td>
                    <td><CheckCircle size={14} color="#059669" /> Yes</td>
                    <td><CheckCircle size={14} color="#059669" /> Yes</td>
                    <td><Lock size={14} color="#991b1b" /> Requires Review</td>
                  </tr>
                  <tr>
                    <td><strong>Reviewer</strong></td>
                    <td><Lock size={14} color="#991b1b" /> Draft review</td>
                    <td><Lock size={14} color="#991b1b" /> View only</td>
                    <td><CheckCircle size={14} color="#059669" /> Audit only</td>
                    <td><CheckCircle size={14} color="#059669" /> Can Approve</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
