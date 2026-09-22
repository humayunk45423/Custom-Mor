# Custom Mor Encyclopedia — Complete Website Specification

## 1. Project Goal

Build a bilingual (Bangla + English) encyclopedia-style website documenting **Custom Mor (কাস্টম মোড়)** and its local history, including:

- Historical background
- Naming history
- People involved in the naming
- Location and administrative information
- Historical photographs
- Scanned documentary evidence
- Citations and source notes
- Google Maps location
- Bangla and English versions
- Search-engine-friendly structure
- Responsive desktop/mobile design
- Fast loading and accessible UX

### Important branding requirement

The website may use a **familiar encyclopedia-style information architecture**, including article pages, references, footnotes, tables, infoboxes, revision/history sections, and bilingual navigation.

However, it must **not falsely present itself as Wikipedia or imply affiliation with Wikimedia/Wikipedia**. Use an original site name, logo, favicon, colors, and footer. Do not copy Wikipedia's trademarks or distinctive branding verbatim.

Suggested project names:

- Custom Mor Encyclopedia
- Local History Encyclopedia
- Baluavata Local Encyclopedia
- কাস্টম মোড় ইতিহাস

---

# 2. Core Article

## Bangla title

**কাস্টম মোড়**

## English title

**Custom Mor**

## Article subject

A four-way intersection locally known as Custom Mor in:

- District: Rangpur
- Thana/Police Station: Badarganj
- Mouza: Baluavata
- Country: Bangladesh

All historical claims must be presented according to their available evidence. Personal/local testimony should be clearly identified as such unless supported by an independent published source.

---

# 3. Suggested Article Structure

## Bangla

1. ভূমিকা
2. নামকরণ
3. নামকরণের প্রেক্ষাপট
4. সাইনবোর্ড
5. বর্তমান ব্যবহার
6. অবস্থান
7. নামকরণের সঙ্গে সংশ্লিষ্ট ব্যক্তিবর্গ
8. প্রামাণ্য নথি
9. ছবি
10. তথ্যসূত্র
11. আরও দেখুন
12. বহিঃসংযোগ

## English

1. Introduction
2. Naming
3. Background of the Naming
4. Signboard
5. Current Usage
6. Location
7. People Associated with the Naming
8. Documentary Evidence
9. Images
10. References
11. See also
12. External links

---

# 4. Infobox

Create an encyclopedia-style infobox.

Example:

| Field | Information |
|---|---|
| Name | কাস্টম মোড় |
| English name | Custom Mor |
| Type | Road intersection |
| Location | Baluavata, Badarganj, Rangpur, Bangladesh |
| District | Rangpur |
| Thana | Badarganj |
| Mouza | Baluavata |
| Naming year | 2006 |
| Coordinates | To be verified |
| Map | Interactive map |

Do not label a claim as officially established unless an authoritative source establishes it.

---

# 5. Historical Information

The article should record the currently supplied local history as a documented local account.

### Naming in 2006

According to local accounts, the intersection began being known as **Custom Mor** in approximately 2006.

People identified in the local account as being involved in discussions/proposals include:

- মোঃ রুহুল আমিন — then local commissioner
- মোঃ লতিফ সরদার
- আকমল প্রফেসর
- মোঃ গোলজার
- মোঃ মোখলেস
- মোঃ আলিম শাহ
- Other local elders and respected residents

The account also states that a Bangladesh Customs Assistant Revenue Officer lived in the area and that local residents proposed naming the intersection Custom Mor.

### Required editorial treatment

Do not write:

> "It is an established fact that..."

unless documentary evidence supports it.

Prefer:

> "According to local accounts..."

or:

> "Local residents' accounts state that..."

Each important historical statement should have a citation.

---

# 6. Signboard History

Local accounts state that a signboard identifying the intersection as Custom Mor was installed around 2008.

According to the account, road expansion during the caretaker-government period resulted in roadside structures being demolished/altered and the signboard being removed. The signboard was reportedly not reinstalled.

This section should include:

- Photograph of the old signboard, if available
- Approximate date
- Source of the information
- Photograph metadata if known
- Archive/source ID

Avoid claiming an exact date unless evidence supports the date.

---

# 7. Present-Day Usage

Document current usage of the name through independent evidence where available.

Potential evidence:

- Government/local tax documents
- Official address documents
- Institutional documents
- Utility/address records
- Maps
- Local publications
- Photographs of current signage
- Independent local news coverage

Private identity documents should normally **not be publicly uploaded in full**. Redact:

- National ID number
- Personal identification numbers
- Date of birth
- Phone numbers
- Signatures
- Financial information
- Other unnecessary personal data

Use only the minimum evidence necessary to establish the place name.

---

# 8. Evidence / Document Viewer

Create a dedicated evidence section.

Each document should have:

- Document title
- Date
- Issuing authority
- Document type
- Short description
- Source/custodian
- Verification status
- High-resolution image
- Thumbnail
- Zoom viewer
- Optional redacted version
- Citation ID

Example:

```text
Evidence ID: CM-001
Title: Local tax/address document
Date: YYYY-MM-DD
Issuing authority: [Authority]
Relevant text: "কাস্টম মোড়"
Verification: Original document inspected
Privacy: Personal information redacted
```

### Image viewer requirements

- Zoom
- Pan
- Fullscreen
- Mobile pinch-to-zoom
- Original-resolution access
- Image caption
- Source information
- Alt text
- File hash/integrity information if useful

Do not alter documentary images except for clearly documented redaction/cropping.

---

# 9. Citation System

Build a proper footnote system.

Example:

> Custom Mor is locally known by that name.<sup>[1]</sup>

References:

```text
[1] Local historical account, source holder, date, document/photo ID.
```

Each source should have:

- Author/organization
- Title
- Date
- Publisher/issuing body
- URL, if publicly available
- Access date
- Archive URL, if applicable
- Document ID
- Page number for PDFs/documents
- Quoted relevant passage only when necessary

### Source hierarchy

Prefer:

1. Government records
2. Reputable newspapers
3. Official institutional publications
4. Books/academic publications
5. Archived contemporary documents
6. Independent local publications
7. Maps
8. First-hand/local testimony

Google Maps should primarily support location/current labeling; it should not be treated as proof of the historical 2006 naming by itself.

---

# 10. Bilingual Architecture

Use separate language URLs.

Recommended:

```text
/bn/custom-mor
/en/custom-mor
```

Each page should have:

- Language switcher
- `hreflang`
- Canonical URL
- Translated title
- Translated metadata
- Equivalent-content relationship

Example:

```html
<link rel="alternate" hreflang="bn" href="https://example.com/bn/custom-mor">
<link rel="alternate" hreflang="en" href="https://example.com/en/custom-mor">
<link rel="alternate" hreflang="x-default" href="https://example.com/en/custom-mor">
```

Do not machine-translate historical evidence blindly. Preserve names, dates, titles and quotations accurately.

---

# 11. Wikipedia-Like Information Architecture

The site can use an encyclopedia-style interface with:

- Article title
- Lead paragraph
- Table of contents
- Infobox
- Inline citations
- References
- Footnotes
- Image gallery
- Evidence viewer
- Categories
- Related articles
- Revision history
- Discussion/talk page
- Edit history
- Permanent article URL
- Print version
- Download/print PDF
- Mobile navigation
- Search
- Language switcher

But the website must use its **own branding and identity**, not pretend to be Wikipedia.

---

# 12. Revision History

Every article should maintain:

- Version number
- Date/time
- Editor
- Summary of changes
- Previous version
- Diff viewer
- Restore capability
- Source/evidence changes

Example:

```text
Revision 1 — Initial publication
Revision 2 — Added 2008 signboard information
Revision 3 — Added documentary evidence
Revision 4 — Added English translation
```

For sensitive historical claims, retain the previous version rather than silently overwriting it.

---

# 13. Editorial Transparency

Add a page:

## Editorial policy

Explain:

- How sources are evaluated
- How corrections are handled
- How disputed claims are represented
- How personal information is protected
- How documentary evidence is authenticated
- How edits are reviewed
- How conflicts of interest are disclosed

If the article is based substantially on local/family testimony, clearly identify that limitation.

---

# 14. Search Engine Optimization

Use legitimate, durable SEO rather than attempting to manipulate rankings.

## Technical SEO

Implement:

- Server-side rendering or statically generated pages
- Clean URLs
- HTTPS
- Canonical URLs
- XML sitemap
- robots.txt
- Proper HTTP status codes
- 404/410 handling
- Breadcrumb structured data
- Organization structured data
- Article/WebPage structured data
- Image metadata
- Open Graph
- Twitter/X card metadata
- `hreflang`
- Fast Core Web Vitals
- Responsive design
- Accessible HTML
- Semantic headings
- Internal linking
- Descriptive anchor text
- Optimized image formats
- Lazy loading below the fold
- Compression
- CDN/cache
- Minimal JavaScript
- No unnecessary third-party scripts

## Structured data

Use Schema.org where appropriate:

- `Article`
- `WebPage`
- `Place`
- `ImageObject`
- `BreadcrumbList`
- `Organization`

Do not add structured data that makes unsupported claims.

---

# 15. SEO Content Strategy

Create useful supporting pages rather than keyword-stuffing.

Potential pages:

- Custom Mor
- কাস্টম মোড়
- History of Custom Mor
- কাস্টম মোড়ের ইতিহাস
- Baluavata
- Badarganj
- Rangpur
- Local history
- Historical photographs
- Documentary evidence
- Local landmarks

Each page must provide genuinely useful information.

Avoid:

- Keyword stuffing
- Hidden text
- Cloaking
- Doorway pages
- Fake backlinks
- Automated spam pages
- Misleading redirects
- Duplicate pages created only for ranking
- Fake reviews
- Artificial engagement

No legitimate SEO system can guarantee a permanent #1 ranking. Search engines control their ranking algorithms.

---

# 16. Google Search Integration

Set up:

- Google Search Console
- Sitemap submission
- URL inspection
- Indexing monitoring
- Search appearance monitoring
- Core Web Vitals monitoring

Also consider:

- Bing Webmaster Tools
- Google Analytics or privacy-friendly analytics
- Server logs

Do not claim that search-engine submission guarantees ranking.

---

# 17. Google Maps

Include an embedded or linked map where permitted.

Store:

- Place name
- Coordinates
- Map URL
- Date checked
- Screenshot/archive if necessary

The map should be clearly labeled as a mapping source, not as historical proof.

---

# 18. Image Gallery

Create a gallery containing:

### Historical images

- Old signboard
- Old road/intersection photographs
- Historical documents
- Historical maps

### Current images

- Current intersection
- Four roads
- Nearby landmarks
- Current map/location

Every image should have:

- Caption
- Date
- Photographer/source
- Copyright/license information
- Alt text
- Evidence/source ID

---

# 19. Privacy and Legal Safety

Do not publish personal documents in unredacted form.

Before uploading:

- Remove NID numbers
- Remove personal phone numbers
- Remove signatures
- Remove financial details
- Remove unrelated personal information
- Keep only the portion proving the relevant address/name

Obtain permission before publishing private photographs/documents when appropriate.

Do not publish accusations about individuals as fact without strong evidence.

For disputed local naming claims, present competing claims neutrally and identify their sources.

---

# 20. Recommended Technology Stack

## Frontend

Recommended:

- Next.js
- TypeScript
- React
- Tailwind CSS
- Accessible semantic HTML

## Backend

Possible:

- Next.js server functions
- PostgreSQL
- Prisma or Drizzle ORM

## CMS

Possible options:

- Custom admin panel
- Strapi
- Directus
- Sanity
- Payload CMS

For a small encyclopedia, a lightweight custom CMS is sufficient.

## Storage

Use object storage for:

- Images
- PDFs
- Documentary scans

Example:

- Cloudflare R2
- Amazon S3
- Supabase Storage

## Search

Start with PostgreSQL full-text search.

For a larger archive:

- Meilisearch
- Typesense
- Elasticsearch/OpenSearch

---

# 21. Performance

Target:

- Excellent Core Web Vitals
- Mobile-first
- Fast first load
- Optimized images
- WebP/AVIF
- Responsive image sizes
- Static generation where possible
- CDN caching
- Minimal client-side JavaScript

Do not sacrifice accessibility or usability solely for visual effects.

---

# 22. Accessibility

Target WCAG 2.2 AA principles.

Implement:

- Keyboard navigation
- Visible focus states
- Proper heading hierarchy
- Alt text
- Sufficient contrast
- Screen-reader-friendly labels
- Accessible forms
- Accessible modal/image viewer
- Reduced-motion support
- Language attributes for Bangla and English

---

# 23. Design Direction

Create a premium encyclopedia/documentary aesthetic.

Suggested visual characteristics:

- Clean typography
- White/light background
- Dark text
- Subtle borders
- Neutral accent color
- Clear citation styling
- Professional infobox
- Academic/documentary appearance
- Responsive layout
- Minimal animation
- Excellent readability

Do not copy Wikipedia's exact CSS, logo, typography, icons, or branding.

---

# 24. Article URL Examples

```text
https://example.com/bn/custom-mor
https://example.com/en/custom-mor
```

Evidence:

```text
https://example.com/bn/evidence/CM-001
```

Images:

```text
https://example.com/bn/media/custom-mor-signboard
```

Revision:

```text
https://example.com/bn/custom-mor/history
```

---

# 25. Admin Panel

Admin should support:

- Create article
- Edit article
- Draft/publish workflow
- Add citations
- Upload evidence
- Redact documents
- Add images
- Add translations
- Revision history
- Diff viewer
- Contributor accounts
- Role-based permissions
- Review/approval
- Revert changes
- Audit log

Suggested roles:

- Administrator
- Editor
- Reviewer
- Contributor
- Viewer

---

# 26. Article Data Model

Example:

```json
{
  "slug": "custom-mor",
  "title_bn": "কাস্টম মোড়",
  "title_en": "Custom Mor",
  "type": "place",
  "location": {
    "country": "Bangladesh",
    "division": "Rangpur",
    "district": "Rangpur",
    "thana": "Badarganj",
    "mouza": "Baluavata"
  },
  "established_name_year": 2006,
  "coordinates": {
    "lat": null,
    "lng": null
  },
  "claims": [],
  "references": [],
  "media": [],
  "revisions": []
}
```

---

# 27. Claim-Based Citation Architecture

For important historical statements, store citations at the claim level.

Example:

```json
{
  "claim": "The intersection became known locally as Custom Mor around 2006.",
  "language": "en",
  "confidence": "local-account",
  "sources": ["CM-001", "CM-002"],
  "notes": "Requires independent published corroboration for stronger historical attribution."
}
```

This allows the site to distinguish:

- Documented fact
- Official record
- Published report
- Local account
- Oral history
- Unverified claim

---

# 28. Search Features

Search should support:

- Bangla
- English
- Bengali spelling variations
- Transliteration
- Exact phrase
- Article title
- Evidence ID
- People names
- Locations

Example searches:

```text
কাস্টম মোড়
কাস্টম মোড়
Custom Mor
Custom Mor Badarganj
Baluavata Custom Mor
```

Use Unicode normalization and Bangla-aware search.

---

# 29. Sitemap

Generate:

```text
/sitemap.xml
/sitemap-bn.xml
/sitemap-en.xml
/sitemap-images.xml
```

Include only canonical, indexable URLs.

---

# 30. Robots.txt

Example:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Do not block important article content from legitimate search crawlers.

---

# 31. Metadata Example

Bangla:

```html
<title>কাস্টম মোড় — ইতিহাস, অবস্থান ও তথ্য</title>
<meta
  name="description"
  content="রংপুরের বদরগঞ্জের বালুয়াভাটা মৌজায় অবস্থিত কাস্টম মোড়ের ইতিহাস, নামকরণ, অবস্থান, ছবি ও প্রামাণ্য নথি।"
/>
```

English:

```html
<title>Custom Mor — History, Location and Documentary Evidence</title>
<meta
  name="description"
  content="Historical and documentary information about Custom Mor in Baluavata, Badarganj, Rangpur, Bangladesh."
/>
```

---

# 32. Open Graph

Implement:

```text
og:title
og:description
og:url
og:type
og:image
og:locale
```

Use separate metadata for Bangla and English pages.

---

# 33. Security

Implement:

- HTTPS
- Secure cookies
- CSRF protection
- Authentication
- Authorization
- Rate limiting
- Input validation
- File type validation
- Malware scanning for uploads
- Content Security Policy
- Secure headers
- Audit logs
- Database backups
- Versioned media
- Private admin routes

Never expose private source documents through predictable public URLs unless intentionally published.

---

# 34. Deployment

Recommended:

- GitHub
- Vercel or Cloudflare Pages for frontend
- Managed PostgreSQL
- Object storage for evidence
- CDN
- Automated deployment
- Preview deployments
- Environment variables for secrets

---

# 35. Backup Strategy

Maintain:

- Daily database backup
- Versioned document storage
- Image backups
- Off-site backup
- Exportable article data
- Exportable citation database

Important historical documents should never exist in only one storage location.

---

# 36. Verification Workflow

Before publishing a historical claim:

```text
Claim
 ↓
Source collected
 ↓
Source digitized
 ↓
Personal information redacted
 ↓
Source metadata recorded
 ↓
Editor reviews
 ↓
Citation attached
 ↓
Article published
 ↓
Revision recorded
```

---

# 37. Suggested Homepage

## Bangla

**স্থানীয় ইতিহাসের একটি উন্মুক্ত তথ্যভান্ডার**

Search bar:

> কাস্টম মোড়, বালুয়াভাটা, বদরগঞ্জ...

Sections:

- Featured article
- Historical documents
- Historical photographs
- Recent updates
- Places
- People
- Sources
- English version

## English

**An open archive of local history**

Search:

> Search places, people, documents...

Sections:

- Featured article
- Historical documents
- Historical photographs
- Recent updates
- Places
- People
- Sources
- বাংলা সংস্করণ

---

# 38. Footer

Include:

- About
- Editorial policy
- Sources
- Privacy policy
- Terms
- Contact
- Correction request
- Copyright
- Last updated
- Independent project disclaimer

Example:

> This website is an independent local-history encyclopedia and is not affiliated with Wikipedia or the Wikimedia Foundation.

---

# 39. Important SEO Reality

The system should be designed for excellent search visibility, but **no technology can guarantee permanent #1 Google ranking**.

The long-term strategy should be:

```text
High-quality original documentation
+
Reliable citations
+
Clear entity information
+
Strong technical SEO
+
Fast performance
+
Accessible content
+
Bilingual pages
+
Legitimate backlinks
+
Consistent updates
+
Search-engine compliance
```

Do not use black-hat SEO or deceptive techniques.

---

# 40. Final Deliverable

Build a production-ready bilingual local-history encyclopedia with:

- Original encyclopedia branding
- Bangla + English
- Wikipedia-inspired information architecture
- Article pages
- Infoboxes
- Footnotes
- References
- Documentary evidence viewer
- Historical image archive
- Google Maps integration
- Revision history
- Search
- Admin panel
- Evidence verification workflow
- Privacy/redaction workflow
- Responsive design
- Accessibility
- Structured data
- Technical SEO
- XML sitemaps
- `hreflang`
- Open Graph
- Search Console readiness
- Fast performance
- Secure deployment
- Backups
- Independent-project disclosure

The first article should be:

**কাস্টম মোড় / Custom Mor**

Location:

**Baluavata, Badarganj, Rangpur, Bangladesh**

Historical naming year currently recorded as:

**2006 — based on local account; documentary corroboration should be added where available.**
