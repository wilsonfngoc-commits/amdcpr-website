# DoctorNow AMD — Unified Content Strategy Brief

> Generated 2026-07-14 | Synthesis of 12 sources: 3 guideline PDFs, 5 YT transcripts, 7 research summaries, NotebookLM deep research, DataForSEO keyword data, brand/design system
> **Next:** → Step 2 (keyword research update) → Step 3 (website content drafting)

---

## 1. Executive Summary

### What We're Building
DoctorNow AMD is Hong Kong's mobile advance medical directive service — doctors visit homes to help terminally ill patients and families sign AMD documents. The website serves four distinct audiences via a four-lane highway homepage.

### Brand Positioning
**"上門簽署預設醫療指示的醫生"** — The doctor who comes to your home to sign your AMD.
Sub-brand under "老友宅醫 DoctorNow Home" (endorsed). Warm, human-first, never clinical.

### Competitive Moat
Nobody else leads with mobile AMD signing. Key competitors include clinic-based (Heal Medical, 栢家醫療中心), DIY-app-only (AWEsum Care), info-portal (advancedirective.hk, HKAMD Online), and funeral-integrated (毋忘愛, fiveblessings.hk). The home visit is our primary differentiator.

**DoctorNow Home (老友宅醫)** is the parent brand, not a competitor. DoctorNow AMD operates under this umbrella with full endorsement from DNH's 10,000+ home visit track record.

### Design Palette (from DESIGN.md)
- **Primary:** Moss Green #708D81
- **Accent:** Terracotta #B2675E
- **Background:** Warm Sand #F5EBE0 / #FAF6F2
- **Type:** Quicksand (EN) + Noto Sans TC (ZH)
- **Style:** Mobile-first, asymmetric grids, generous whitespace, soft blur layers

---

## 2. Legal Requirements Summary

### AMD Requirements (Cap. 577 — Effective 31 Jul 2026)
| Requirement | Detail | Source |
|-------------|--------|--------|
| Mental capacity | Maker must be capable at time of signing | HKAM BPG, Cap.577 |
| Voluntariness | Free will, no external pressure | HKAM BPG |
| Writing | AMD must be in writing | Cap.577 |
| Two witnesses | One must be HK registered medical practitioner (RMP); second must be adult | HKAM BPG, Dr. Chan lecture |
| No conflict of interest | Witnesses must not benefit from maker's estate | HKAM BPG |
| Informed decision | Must follow in-depth discussion with family + healthcare professionals | HA Guidelines |
| Revocation | "Cautious making, easy revoking" — can revoke anytime while capable | All sources |

### Three Qualifying Health Conditions
1. **Terminal illness** (末期疾病) — irreversible, imminent death
2. **Persistent vegetative state / irreversible coma** (持續植物人狀況/不可逆轉昏迷)
3. **Other advanced irreversible life-limiting conditions** (其他晚期不可逆轉生存受限疾病)
   — e.g. advanced dementia, end-stage organ failure

### Forms
| Form | Purpose | Source |
|------|---------|--------|
| Form 1 (Full AMD) | Refuse any/all LST | Health Bureau CH/EN |
| Form 2 (CPR-only) | Refuse CPR only | Health Bureau CH/EN |

### AMD vs DNACPR vs EPA
| Dimension | AMD | DNACPR | EPA |
|-----------|-----|--------|-----|
| Who makes? | Individual (maker) | Doctor (RMP, after consensus) | Individual (donor) |
| Scope | Refuse LST | Refuse CPR only | Delegate financial/affairs authority |
| Active when? | Loses capacity + meets health criteria | During cardiac arrest | When donor becomes incapacitated |
| Legal basis | Cap. 577 | Clinical order + Cap. 577 | Separate statutes |

### Key Source: Dr. Chan CPD Lecture (1:08)
- Professional medical CPD lecture on AMD Ordinance
- Covers: legislative background, clinical application, healthcare worker responsibilities
- Auto-generated Cantonese captions — useful for clinical depth but needs cleanup

---

## 3. Practical Process (AMD Signing Journey)

### The 5-Step Process from Enquiry to Signed Document

1. **WhatsApp 諮詢** (10-15 min)
   - Family contacts via WhatsApp or website form
   - Doctor explains AMD, confirms eligibility, answers initial questions
   - Schedule home visit

2. **Home Visit — Mental Capacity Assessment**
   - Doctor visits patient's home
   - Assesses mental capacity (per HKAM BPG criteria)
   - Explains each LST option and what it means to refuse

3. **Informed Decision + Witnessing**
   - Patient confirms decisions in presence of two witnesses
   - One witness must be the RMP (DoctorNow Home doctor)
   - Second witness: adult, no conflict of interest (family member or nurse)
   - Both witnesses sign the AMD form

4. **Document Filing**
   - Signed AMD given to patient/family
   - Copy filed with patient's medical records
   - Optional: registration with HKAMD electronic system

5. **Revocation Right**
   - Patient can revoke at any time while mentally capable
   - Ideally tear the original document (visual metaphor from YT videos)
   - Verbal revocation valid in presence of witness

### Key Sources: Big Silver form walkthrough (48min), Alongside AMD攻略 (8min), 安心來安心去 LST (22min)

---

## 4. Common Patient/Family Questions

### From FAQ Spec, YT Videos, and Research Summaries

| Question | Answer Summary | Content Type |
|----------|---------------|-------------|
| 什麼是AMD？ | Written directive refusing specific LST when mentally incapable | Pillar page |
| 誰需要簽署？ | Anyone 18+ with mental capacity who wants to control end-of-life care | FAQ + Quiz tool |
| 醫生會上門嗎？ | Yes — that's our differentiating feature | Landing page hero |
| 香港有法律效力嗎？ | Yes — Cap. 577 effective Jul 2026 (new law) | FAQ + Legal page |
| 收費多少？ | Transparent pricing — packages from $X (AMD Basic) to combo | Pricing page |
| 與遺囑有什麼分別？ | AMD = medical decisions; Will = asset distribution; EPA = financial affairs | Comparison page |
| 簽署後可以改嗎？ | Yes — can revoke anytime while capable | FAQ |
| 需要多久？ | From WhatsApp contact to signed document: typically 3-7 days | How It Works page |
| 末期病醫唔醫自己決定？ | AMD lets you decide which LST to refuse — you choose | Pillar page |
| 認知障礙症人士點訂立？ | Must have capacity at time of signing — early planning critical | Blog post |
| 外地訂立有冇效？ | HK law recognizes AMD signed overseas meeting Cap.577 criteria | Blog post |
| 什麼是維持生命治療？ | CPR, ventilation, dialysis, tube feeding, ICU — explained simply | LST explainer page |
| 平安三寶係咩？ | AMD + EPA + Will — the three legal instruments for end-of-life planning | Blog + Comparison |

---

## 5. Content Architecture — Full Sitemap & Page Specs

### Homepage (Router Model)
Four lanes + universal blog/FAQ/About/Contact:
```
HOMEPAGE
├── Lane 1: 我是末期病人/家屬 → Persona A (Homebound Patient)
├── Lane 2: 我想預早規劃 → Persona B (Wealthy Planner)
├── Lane 3: 我是社福機構 → Persona C (NGO)
├── Lane 4: 我是律師 → Persona D (Referring Lawyer)
└── Universal: Blog / FAQ / About / Contact
```

### Page Inventory (46 pages across 7 keyword clusters)

| Priority | Page | Type | Keywords | Audience |
|----------|------|------|----------|----------|
| **P0** | Homepage | Router | 預設醫療指示, AMD 上門 | All |
| **P0** | How It Works | Lane | 流程, how it works | A, B |
| **P0** | FAQ | Utility | 常見問題 | All |
| **P0** | Pricing | Conversion | 收費, cost, price | B |
| **P0** | What is AMD | Pillar (EN/ZH) | 什麼是AMD, what is AMD | All (Info) |
| **P0** | AMD vs DNACPR vs Will | Pillar | amd vs, 分別 | B (Eval) |
| **P1** | AMD Form Guide | Pillar | 表格填寫, form guide | A, B |
| **P1** | Cap.577 Explainer | Pillar | 法例, ordinance | All |
| **P1** | DNACPR Service | Lane 2 | dnacpr, 不作心肺復甦術 | A, B |
| **P1** | AMD + EPA Bundle | Lane 2 | amd epa 組合 | B |
| **P1** | NGO Partnership | Lane 3 | 社福機構, bulk pricing | C |
| **P1** | For Lawyers | Lane 4 | 律師轉介 | D |
| **P1** | About Us | Trust | 關於我們 | All |
| **P1** | Contact | Utility | 聯絡 | All |
| **P2** | Blog: AMD Cost Guide | Cluster | 費用, cost | B |
| **P2** | Blog: End-of-Life Care HK | Cluster | 晚期照顧 | A |
| **P2** | Blog: AMD Legal Guide | Cluster | 法律, legal | B |
| **P2** | Blog: Family Guide | Cluster | 家屬, family | A |
| **P2** | Blog: AMD + Cancer/Renal/Heart/Dementia/Stroke | Cluster (5 posts) | disease-specific | A |
| **P2** | Blog: AMD Witness Guide | Cluster | 見證人, witness | B |
| **P2** | Blog: AMD Signing Process | Cluster | 簽署, signing | B |
| **P2** | Blog: Peace of Mind Trio | Cluster | 平安三寶/平安三寶 | B |
| **P3** | Blog: Palliative Care HK | Cluster | 紓緩治療 | A |
| **P3** | Blog: Preparing for End of Life | Cluster | 準備, preparation | A |
| **P3** | Blog: AMD vs EPA | Cluster | amd vs epa | B |
| **P3** | Blog: AMD vs Will | Cluster | amd vs will | B |

### Content Funnel Coverage
| Funnel Stage | Pages | Conversion Goal |
|-------------|-------|----------------|
| **TOFU — Awareness** | "What is AMD", "Cap.577 explainer", "LST explainer", Blog cluster posts | Educate, rank, establish authority |
| **MOFU — Evaluation** | AMD vs DNACPR vs Will, Cost Guide, Form Guide, FAQ | Answer objections, build trust |
| **BOFU — Decision** | Pricing, How It Works, Contact, WhatsApp CTA | Convert → WhatsApp enquiry |

---

## 6. Keyword Strategy (DataForSEO + NotebookLM)

### Top Opportunity Keywords (HK, EN + ZH)

| Keyword | Monthly SV | Competition | Intent | Priority |
|---------|-----------|-------------|--------|----------|
| advance medical directive | 720 | LOW (0.06) | Informational | ⭐ P0 |
| DNACPR | 720 | LOW (0) | Informational | ⭐ P0 |
| advance medical directive hong kong | 50 | LOW (0.07) | Informational | ⭐ P1 |
| 預設醫療指示 | — (estimated high) | — | Informational | ⭐ P0 |
| advance medical directive form | 30 | LOW (0.09) | Transactional | P1 |
| 平安三寶 費用 | — | — | Commercial | P1 |
| advance medical directive ordinance | 30 | LOW (0.03) | Transactional | P1 |

### AI Search Volume
| Keyword | AI SV/mo | Trend |
|---------|---------|-------|
| advance medical directive | 8 | Stable (5-8) |
| DNACPR | 8 | Growing (2→8, +49% YoY) |
| 預設醫療指示 | <1 | Minimal — opportunity! |

**Key Insight:** "DNACPR" has 720 Google searches + 8 AI searches/mo in HK with strong yearly growth. Both "advance medical directive" and "DNACPR" have very low competition scores (0-0.06), meaning they're under-targeted by existing sites.

### Long-Tail Opportunities (DataForSEO Related + NotebookLM)
- "不急救紙申請" — colloquial Cantonese, low competition
- "平安三寶費用" — high commercial intent
- "在家離世流程" — emotional, high conversion
- "醫生上門簽署預設醫療指示" — exact match for DoctorNow AMD service
- "AMD form Hong Kong PDF" — transactional
- "advance directive vs living will" — comparison intent
- "預設醫療指示 費用 2026" — time-sensitive (new law effect)

### Search Intent Breakdown
| Intent | % of Keywords | Content Strategy |
|--------|--------------|------------------|
| Informational | ~60% | Pillar pages, blog posts, guides |
| Commercial | ~25% | Comparison pages, cost guides |
| Transactional | ~10% | Pricing, CTA-driven service pages |
| Navigational | ~5% | About, Contact pages |

---

## 7. Content Gaps & Opportunities

### Identified Gaps (from NotebookLM cross-source analysis)
1. ❌ **No central HK AMD educational hub** — hkamd.online is basic, walkalongside is referral-focused
2. ❌ **No interactive form walkthrough** — all current sources are static PDFs
3. ❌ **No "Is AMD right for my situation?" decision tool** — this is a high-value interactive
4. ❌ **No comparison tool** — AMD vs EPA vs Will vs Living Will
5. ❌ **No interactive witnessing/process explanation** — visual step-by-step
6. ❌ **No translated/simplified Cap.577 explainer** for laypeople in simple Cantonese
7. ❌ **No Hong Kong-specific DNACPR explainer** in simple Cantonese
8. ❌ **No animated explainer of the witnessing process**
9. ❌ **No infographic on the timeline of when AMD takes effect**
10. ❌ **No decision-tree for "Is AMD right for you?"** (audience targeting)

### Opportunities for DoctorNow AMD
1. ✅ **Pillar page: "什麼是AMD？"** — legal, purpose, who needs it — single best SEO page
2. ✅ **Pillar page: "AMD表格填寫指南"** — form walkthrough with visuals
3. ✅ **Pillar page: "CPR、DNACPR 與 AMD"** — how they interact
4. ✅ **Pillar page: "AMD vs EPA vs 遺囑"** — comparison guide (high SEO + MOFU value)
5. ✅ **Pillar page: "Cap.577 懶人包"** — simplified law explainer for laypeople
6. ✅ **Interactive: "Which AMD path is right for you?"** decision flowchart
7. ✅ **Interactive: Pricing calculator** based on package + location selection

---

## 8. Visual Asset Specs

### Priority Visuals to Create

| Asset | Format | Reference Source | Status |
|-------|--------|-----------------|--------|
| AMD decision flowchart — "Which path is right for you?" | SVG infographic | HKAM BPG decision trees | 🔴 Not created |
| Form 1 structure diagram — Parts 1-3 visual breakdown | SVG | Big Silver walkthrough, CUHK ACPE | 🔴 Not created |
| AMD vs EPA vs Will comparison chart | SVG table | NotebookLM analysis | 🔴 Not created |
| Witness requirement infographic — Who signs what | SVG | Cap.577 | 🔴 Not created |
| Timeline of when AMD takes effect | SVG | Dr. Chan lecture | 🔴 Not created |
| The 3 health conditions illustrated visually | SVG/PNG | HA Guidelines | 🔴 Not created |
| AMD signing process — step-by-step journey | SVG | How It Works spec | 🔴 Not created |
| LST types explained (CPR, ventilator, dialysis, tube feeding) | SVG/PNG | 安心來安心去 video | 🔴 Not created |
| Contact page illustrations | SVG | DESIGN.md reference | 🔴 Not created |

### Existing Visuals
| Asset | Format | Notes |
|-------|--------|-------|
| amdcpr-infographic.png | PNG (4.7MB) | From NotebookLM — comprehensive overview |
| amdcpr-slide-deck.pptx | PPTX (13MB) | From NotebookLM — editable presentation |
| Homepage screenshot | PNG | From Stitch export |
| Visual direction 3 options | PNG + HTML | From Phase 2 design exploration |

### Design System Tokens (from amdcpr.DESIGN.md)
- **Colors:** Moss Green #708D81, Terracotta #B2675E, Warm Sand #F5EBE0/FAF6F2, Text #4A4036
- **Fonts:** Quicksand (EN) + Noto Sans TC (ZH)
- **Roundness:** Border-radius 60% 40% / 60% 30% for organic shapes
- **Layout:** Mobile-first, asymmetric (8+4 column splits), py-24 section gaps

---

## 9. Brand Voice & Tone Guide

### Core One-Liner
> **上門簽署預設醫療指示的醫生** — The doctor who comes to your home to sign your AMD.

### Brand Promise
> 你不用出門。我們來。 — You don't come to us. We come to you.

### Three-Word Brand
上門。專業。安心。 — Mobile. Professional. Peace of mind.

### Tone by Persona
| Persona | Tone | Language |
|---------|------|----------|
| Homebound Patient (A) | Warm, simple Cantonese, emotionally supportive | ZH-Cantonese |
| Wealthy Planner (B) | Professional, transparent, informative | Bilingual (EN/ZH) |
| NGO Partner (C) | Formal, efficient, compliance-focused | ZH + EN |
| Referring Lawyer (D) | Clinical, direct, legally precise | EN + ZH |

### Banned Words
- ❌ Pure black (#000) — use #4A4036
- ❌ Clinical/cold language — "You are dying" → "We help you prepare"
- ❌ Legal jargon without plain-Cantonese explanation
- ❌ Fear-based messaging — focus on empowerment and peace of mind

---

## 10. Content Creation Priority Matrix

| Priority | Page | SEO Value | Conversion Value | Effort | Notes |
|----------|------|-----------|----------------|--------|-------|
| **P0** | What is AMD (ZH+EN) | ⭐⭐⭐ | ⭐⭐ | Medium | Single most important SEO page |
| **P0** | AMD vs DNACPR vs Will | ⭐⭐⭐ | ⭐⭐⭐ | Medium | High intent comparison page |
| **P0** | How It Works | ⭐⭐ | ⭐⭐⭐ | Medium | Service explainer |
| **P0** | Pricing | ⭐⭐ | ⭐⭐⭐⭐ | Low | Transparent cards |
| **P0** | FAQ | ⭐⭐ | ⭐⭐ | Low | 8-12 questions |
| **P1** | AMD Form Guide | ⭐⭐⭐ | ⭐⭐⭐ | High | Detailed walkthrough |
| **P1** | Cap.577 Explainer | ⭐⭐⭐ | ⭐⭐ | Medium | Simplified law for laypeople |
| **P1** | DNACPR Service | ⭐⭐⭐ | ⭐⭐⭐ | Medium | Keyword volume 720/mo |
| **P1** | AMD + EPA Bundle | ⭐⭐ | ⭐⭐⭐ | Medium | Revenue driver |
| **P1** | Cost Guide | ⭐⭐⭐ | ⭐⭐⭐ | Medium | High conversion intent |
| **P2** | Disease-specific blogs (5) | ⭐⭐⭐ | ⭐⭐ | Medium | Long-tail coverage |
| **P2** | Peace of Mind Trio | ⭐⭐⭐ | ⭐⭐⭐ | Medium | 平安三寶 commercial intent |
| **P3** | Witness Guide | ⭐⭐ | ⭐⭐ | Low | Supporting content |
| **P3** | Signing Process | ⭐⭐ | ⭐⭐ | Low | Supporting content |

---

## 11. Source Inventory (for NotebookLM Reference)

### PDF Sources (3 guideline docs + 2 extra)
| Source | Type | Size | Key Content |
|--------|------|------|-------------|
| HA AMD Guidelines 2025 | Official | 100K text | Hospital AMD procedures |
| HA DNACPR Guidelines | Official | 104K text | DNACPR clinical protocols |
| HKAM AMD BPG 2025 | Professional | 172K text | Best practice guidelines for doctors |
| MCHK Telemedicine Guidelines | Professional | 14K text | Remote consultation rules |
| MCHK Telemedicine QnA | Professional | 216K | Telemedicine FAQ |

### YouTube Transcripts (5 videos)
| Video | Duration | Words | Quality | Key Topics |
|-------|----------|-------|---------|------------|
| Dr. Chan AMD Ordinance Lecture | 1:08:09 | 39,500 | Auto Yue | Full legislative + clinical depth |
| Dr.Jess AMD Explainer | 5:40 | — | In NotebookLM | Legal overview |
| Big Silver Form Walkthrough | 48:02 | — | In NotebookLM | Form structure, 3 health scenarios |
| 安心來安心去 LST Explainer | 22:01 | 852 | Auto Yue | Types of LST explained |
| Alongside AMD攻略 | 8:03 | 122 | Manual Yue-HK | Practical AMD guide |

### Research Summaries (7 files)
| File | Size | Content |
|------|------|---------|
| amd-legal-framework-20260613.md | 28K | Full legal framework |
| amd-service-landscape-20260613.md | 24K | Service provider landscape |
| dnacpr-hong-kong-20260613.md | 32K | DNACPR in HK context |
| functional-assessment-implementation.md | 48K | Clinical implementation |
| mental-capacity-assessment-20260613.md | 36K | Capacity assessment protocols |
| patient-family-decision-making-20260613.md | 20K | Decision-making patterns |
| amd-telemedicine-innovation-ref.md | 8K | Telemedicine reference |

### Brand & Strategy Documents
| File | Purpose |
|------|---------|
| amdcpr.DESIGN.md | Full design system |
| brand-voice-messaging.md | Brand identity, tone, messaging |
| sitemap.md | 46-page sitemap, all clusters mapped |
| website-angle-of-attack.md | Positioning, architecture, personas |
| audience-personas.md | 4 personas + journey maps |
| PRD.md | Project brief |
| CONTENT-STRATEGY-BRIEF.md | **← This document** |

---

## 12. Next Steps

After this brief is approved:

### Step 2 — Update Keyword Research
- Feed NotebookLM findings back into `keyword-research.md` with real search data
- Finalize keyword → page assignments for all 46 pages
- Optimize for the 20 highest-opportunity keywords

### Step 3 — Draft Website Content
- Pillar pages (P0 priority): What is AMD (ZH+EN), AMD vs DNACPR vs Will, How It Works
- Comparison pages: AMD vs EPA vs Will, 平安三寶 cost comparison
- FAQ and service pages
- Blog cluster posts (disease-specific, legal guides)
- All content bilingual (ZH-Cantonese as primary, EN as secondary where specified)

### Step 3b — Design & Develop Visual Assets
- Decision flowchart SVG
- Comparison chart SVG
- Form structure diagrams
- Process illustrations
- Contact page graphics

### Step 4 — WordPress Build (via emcp-tools MCP)
- Phase 4 per STATUS.md — remaining pages on Elementor
- Apply brand system (global colors, typography)
- Build each page per specs with proper SEO

### Step 5 — Stage & Deploy
- Via wp-wpcli-and-ops
- QA all 46 pages across EN/ZH
- Verify Elementor responsive rendering
