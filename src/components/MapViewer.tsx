import React from 'react';
import { Language } from '../types';
import { X, ExternalLink, MapPin, Info } from 'lucide-react';

interface Props {
  lang: Language;
  onClose: () => void;
}

export const MapViewer: React.FC<Props> = ({ lang, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: '960px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} color="var(--text-accent)" />
            <h3 className="modal-title">
              {lang === 'bn' ? 'কাস্টম মোড় — ভৌগোলিক মানচিত্র ও সড়ক বিন্যাস' : 'Custom Mor — Geographic Map & Road Layout'}
            </h3>
          </div>
          <button type="button" className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Notice Box per Section 17 */}
          <div
            style={{
              padding: '0.65rem 0.9rem',
              background: 'var(--bg-accent-subtle)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}
          >
            <Info size={16} color="var(--text-accent)" style={{ flexShrink: 0 }} />
            <span>
              {lang === 'bn'
                ? 'সম্পাদকীয় দ্রষ্টব্য: আধুনিক ডিজিটাল মানচিত্র শুধুমাত্র বর্তমান অবস্থান ও সড়ক সংযোগ নির্দেশ করে; ২০০৬ সালের ঐতিহাসিক নামকরণের প্রামাণ্য ভিত্তি হিসেবে নথিপত্র ও স্থানীয় বয়ান প্রযোজ্য।'
                : 'Editorial Note: Modern digital maps substantiate current geolocation and road topology; the historical 2006 designation relies upon documentary records and corroborated accounts.'}
            </span>
          </div>

          {/* Interactive OpenStreetMap Embed Frame with Fallback / High-Res Vector Overlay */}
          <div
            style={{
              height: '380px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              position: 'relative',
              background: '#e5e7eb'
            }}
          >
            <iframe
              title="Custom Mor OpenStreetMap Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=89.0426%2C25.6638%2C89.0626%2C25.6838&amp;layer=mapnik&amp;marker=25.6738%2C89.0526"
            />
            {/* Custom Location Overlay Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-light)',
                maxWidth: '280px',
                fontSize: '0.82rem'
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-brand)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={14} />
                <span>কাস্টম মোড় (Custom Mor)</span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                বালুয়াভাটা, বদরগঞ্জ, রংপুর • 25.6738° N, 89.0526° E
              </div>
            </div>
          </div>

          {/* 4-way Intersection Road Details Grid */}
          <div style={{ marginTop: '1.25rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              {lang === 'bn' ? 'চারমুখী সড়ক যোগাযোগ বিবরণ' : 'Four-Way Junction Topology'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-accent)' }}>
                  {lang === 'bn' ? 'উত্তর দিক (North)' : 'North Corridor'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {lang === 'bn' ? 'বদরগঞ্জ পৌর সদর, প্রধান বাজার ও রেলওয়ে স্টেশন' : 'Badarganj Town Centre, Bazaar & Railway Station'}
                </div>
              </div>

              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-accent)' }}>
                  {lang === 'bn' ? 'দক্ষিণ দিক (South)' : 'South Corridor'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {lang === 'bn' ? 'বালুয়াভাটা দক্ষিণ পাড়া, কৃষি খামার ও অভ্যন্তরীণ মৌজা' : 'Baluavata South Para, Agro-farms & Inner Mouza'}
                </div>
              </div>

              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-accent)' }}>
                  {lang === 'bn' ? 'পূর্ব দিক (East)' : 'East Corridor'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {lang === 'bn' ? 'রংপুর আঞ্চলিক মহাসড়ক সংযোগ ও শ্যামপুর সড়ক' : 'Rangpur Regional Highway Bypass & Shyampur Road'}
                </div>
              </div>

              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-accent)' }}>
                  {lang === 'bn' ? 'পশ্চিম দিক (West)' : 'West Corridor'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {lang === 'bn' ? 'তারাগঞ্জ-বদরগঞ্জ গ্রামীণ সংযোগ পথ' : 'Taraganj-Badarganj Feeder Road'}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=25.6738,89.0526"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ background: 'var(--bg-accent-subtle)', color: 'var(--text-accent)', borderColor: 'var(--border-accent)', textDecoration: 'none' }}
            >
              <ExternalLink size={14} />
              <span>{lang === 'bn' ? 'গুগল ম্যাপসে খুলুন' : 'Open in Google Maps'}</span>
            </a>
            <a
              href="https://www.openstreetmap.org/?mlat=25.6738&mlon=89.0526#map=17/25.6738/89.0526"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ textDecoration: 'none' }}
            >
              <ExternalLink size={14} />
              <span>{lang === 'bn' ? 'ওপেনস্ট্রিটম্যাপে খুলুন' : 'Open in OpenStreetMap'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
