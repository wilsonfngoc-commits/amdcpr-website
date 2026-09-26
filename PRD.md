# PRD: AMDCpr.hk — Content Operations Pipeline

> **Brand:** AMDCpr (DoctorNow AMD / 老友宅醫 AMD 上門服務)
> **Domain:** dnacpr.hk
> **Stack:** Astro + Strapi → Cloudflare Pages
> **Framework:** BrandOps WF1 (SEO/GEO) + WF3 (Website) + ORCHESTRATOR G1 (Brand Profiles)
> **Methodology:** Content Silos + Competitor Analysis + Keyword Clustering + WhatsApp Shortcode Tracking
> **Date:** 2026-07-26
> **Version aligned:** ORCHESTRATOR v1.5, WF1 v1.1, WF3 v1.2, WF7 v1.1
> **Status:** ✅ Approved — 2026-07-27

---

## 1. Brand Profile (ORCHESTRATOR G1)

> **Note:** These keywords and silos are hypotheses. WF1 A1+A2 (Competitor Intel + Keyword Scan) will validate, expand, or reshape these based on DataForSEO data and competitor gap findings.
> 
> Reference: `_brandops-framework/ORCHESTRATOR.md` §G1 Brand Profiles
> Config file: `_shared/_brands/amdcpr/brand-config.json`

### Target Keywords (Hypotheses)

| Keyword | Type | Silo (proposed) | Priority |
|---------|------|-----------------|----------|
| AMD 香港 | Primary | AMD Law Changes | P0 |
| DNACPR | Primary | End-of-Life Decisions | P0 |
| 預設醫療指示 | Primary | AMD Law Changes | P0 |
| 在家離世 | Transactional | End-of-Life Decisions | P0 |
| 唔要插喉 | Colloquial | End-of-Life Decisions | P1 |
| 唔急救 | Colloquial | End-of-Life Decisions | P1 |
| 唔要搓 | Colloquial | End-of-Life Decisions | P1 |
| 放棄急救同意書 | Transactional | AMD Law Changes | P1 |
| 拒絕心肺復甦術 | Transactional | End-of-Life Decisions | P1 |

### Content Silo Hypotheses

| Silo | Description | Target Persona | YMAL Risk |
|------|-------------|---------------|-----------|
| AMD Law Changes | New Cap.577 law Jul 31, legal implications, how to sign AMD, forms | Patient/family considering AMD | Medium — legal advice framing, cite govt sources |
| HK Healthcare Planning | End-of-life planning, elderly care decisions, family medical decisions | Wealthy planners (Persona B) | Low — general planning |
| End-of-Life Decisions | DNACPR vs AMD, home death, palliative care, choosing treatment | Homebound patients (Persona A) | High — medical decisions, cite HA/HKAM guidelines |

### Contact & Stack

- WhatsApp: `+852 6332 4599` (shared DNH number)
- Email: `info@dnacpr.hk`
- Domain: `dnacpr.hk`
- CMS: Strapi 5.50.2 (self-hosted, port 1337)
- Site: Astro 5.x (static build)
- Deploy: Cloudflare Pages (preview + main)
- GA4: DoctorNow AMD (property 547128571, G-H6QSG5KYZ3)
- WhatsApp CTA: shortcode tracking + enhanced measurement fallback

---

## 2. WhatsApp Shortcode Registry (WF1 B1.6a)

**Per WF1 v1.1:** Assign shortcode during content brief (B1.6a), verify in GA4 post-publish (B8.4).

| Code | Location | EN Message | ZH Message |
|------|----------|-----------|------------|
| AMD-S01 | Floating WA button (global) | [AMD-S01] I want to learn about AMD | [AMD-S01] 我想了解預設醫療指示 |
| AMD-S02 | Nav bar Book Now | [AMD-S02] I want to book a home visit | [AMD-S02] 我想預約上門簽署AMD |
| AMD-S03 | Services page cards | [AMD-S03] I want to learn about AMD services | [AMD-S03] 我想了解AMD服務 |
| AMD-S04 | Homepage hero CTA | [AMD-S04] I want to learn about AMD | [AMD-S04] 我想了解預設醫療指示 |
| AMD-S05 | Pricing page | [AMD-S05] I want to know AMD pricing | [AMD-S05] 我想了解AMD收費 |
| AMD-S06 | FAQ page | [AMD-S06] I have a question about AMD | [AMD-S06] 我想查詢AMD問題 |
| AMD-S07 | Blog pages (generic) | [AMD-S07] I want to learn about this topic | [AMD-S07] 我想了解這個主題 |
| AMD-S08 | Contact page | [AMD-S08] I want to contact DoctorNow AMD | [AMD-S08] 我想聯絡老友宅醫AMD |
| AMD-S09 | How it works page | [AMD-S09] I want to learn the AMD process | [AMD-S09] 我想了解AMD流程 |
| AMD-S10 | About page | [AMD-S10] I want to know about DoctorNow AMD | [AMD-S10] 我想了解老友宅醫AMD |

**Tracking:** Shortcode prefix `[AMD-SXX]` in WA text (primary) + GA4 enhanced measurement outbound click key event (fallback). See WF3 v1.2 P5a for GA4 implementation pattern.

---

## 3. Pipeline Stages — Mapped to BrandOps Framework

### Phase G1: Brand Profile Setup (ORCHESTRATOR)

**Reference:** `ORCHESTRATOR.md` §G1

- [ ] brand-config.json created at `_shared/_brands/amdcpr/brand-config.json` ✅ done
- [ ] wa-codes.md created at `_shared/_brands/amdcpr/wa-codes.md` ✅ done
- [ ] GA4 property + enhanced measurement configured ✅ done
- [ ] Wilson approves PRD

### Phase WF1 A1: Competitor Intelligence

**Reference:** `WORKFLOW-1-SEO-GEO.md` §A1
**Methodology:** `ORCHESTRATOR.md` — Competitor Analysis — DataForSEO Workflow

- [ ] Run DataForSEO SERP for top 5 keywords (HK/en + HK/zh)
- [ ] Identify recurring SERP competitors (domains appearing ≥3 queries)
- [ ] Run DataForSEO Labs domain competitor analysis for dnacpr.hk
- [ ] Run keyword gap analysis for top 3 competitors
- [ ] Run backlink comparison (referring domains count)
- [ ] Output: `_shared/_brands/amdcpr/competitor-brief.md`
- [ ] Wilson reviews

### Phase WF1 A2: Keyword Opportunity Scan

**Reference:** `WORKFLOW-1-SEO-GEO.md` §A2

- [ ] Pull DataForSEO search volume for all keyword candidates (original + gaps from A1)
- [ ] Score by: intent × volume × difficulty
- [ ] Cluster keywords by topic (5-15 cluster keywords per primary)
- [ ] Route commercial/transactional keywords → WF7 (Landing Pages) — note: WF7 not mapped yet for amdcpr per Wilson
- [ ] Output: `_shared/_brands/amdcpr/keyword-research.json`
- [ ] Wilson reviews

### Phase WF1 A3: Content Calendar

**Reference:** `WORKFLOW-1-SEO-GEO.md` §A3

- [ ] Validate/revise silos based on A1+A2 findings
- [ ] Define pillar pages (one per silo = 3 pillars)
- [ ] Define cluster pages / blog posts (6-9 posts initial batch)
- [ ] Generate 4-week publishing calendar (2 posts/week)
- [ ] Map each piece to: keyword cluster, silo, persona, WA shortcode
- [ ] Output: `_shared/_brands/amdcpr/content-calendar.json`
- [ ] Wilson reviews

### Ledger Phase (new — gap found during test run)

**Note:** The SQLite content ledger isn't in WF1. Proposing via AgentGate as framework improvement after test run.

- [ ] Create `projects/amdcpr/data/ledger.db`
- [ ] Tables: content_items, whatsapp_tracking, seo_metrics
- [ ] Seed with content items from calendar, CRUD test passes

### Phase WF1 Track B: Blog Production (weekly loop)

**Reference:** `WORKFLOW-1-SEO-GEO.md` §Track B (B0-B10)

- [ ] **B1 Content Brief** — per content calendar item, assign shortcode
- [ ] **B2 Research & Draft** — write via blog-engine skill
- [ ] **B3 SEO Optimize** — keyword placement, meta, GEO checklist (B3.7)
- [ ] **B4 Internal Review** — anti-slop, HK terminology, answer capsule
- [ ] **B5 Brand Compliance** — no doctor names, MCHK rules
- [ ] **B6 Human Gate** — Wilson approves
- [ ] **B7 Publish** → detailed in WF3 P5a + P6
- [ ] **B8 Post-Publish** — verify GA4 event + WA shortcode (B8.4)
- [ ] **Content Ledger** update after publish

**Proposed batch — 11 items across 4 weeks:**
- Wk1: "AMD新法例7月生效" (pillar), "點樣同屋企人討論預設醫療指示"
- Wk2: "唔要插喉可以點做？", "DNACPR同AMD有咩分別？"
- Wk3: "放棄急救同意書係咩？", "在家離世需要咩準備？"
- Wk4: "認知障礙症患者可以簽AMD嗎？", "老友宅醫點樣幫你上門簽AMD？"
- +3 pillar pages seeded across the 4 weeks

### Phase WF3 P5a + P6: Technical SEO + Publish

**Reference:** `WORKFLOW-3-WEBSITE.md` §P5a (Astro) + §P6
**GA4 pattern:** WF3 v1.2 P5a — is:inline directive, sendBeacon fallback

- [ ] Unique `<title>` + `<meta description>` per page
- [ ] JSON-LD: MedicalBusiness (homepage), FAQPage (FAQs + posts), Article (blog)
- [ ] WhatsApp shortcode `data-wa-shortcode` attributes on all CTA links
- [ ] Canonical + hreflang + robots + sitemap verified
- [ ] Push content to Strapi → build → preview deploy → Wilson confirms → production deploy
- [ ] Submit sitemap to Google Search Console

### Phase WF1 Track C: Monitoring (always-on)

**Reference:** `WORKFLOW-1-SEO-GEO.md` §Track C

- [ ] GSC data pull → update seo_metrics table
- [ ] DataForSEO LLM mention check for dnacpr.hk
- [ ] WA shortcode inbound report
- [ ] Flag items below position 15 / with 0 impressions
- [ ] **MONTHLY:** Full monitor report
- [ ] **QUARTERLY:** Review with Wilson, feed back into WF1 A1/A2

---

## 4. Architecture Decisions

### ADR-001: Competitor Analysis Before Silos
- **Context:** Silos and keywords are hypotheses until validated by market data
- **Decision:** WF1 A1+A2 run before silos are finalised

### ADR-002: WhatsApp Shortcode Tracking
- **Context:** Need to identify which page/source drove the WA enquiry
- **Decision:** Shortcode prefix `[BRAND-SXX]` in text (primary) + GA4 enhanced measurement (fallback)

### ADR-003: SQLite Content Ledger
- **Context:** Pipeline state tracking — not yet in WF1
- **Decision:** Local SQLite, zero infra. Flag for AgentGate proposal to formalise in framework.

### ADR-004: Dual-Stack Publish
- **Context:** amdcpr is Astro; template must support WP brands (DNH, DN Apps)
- **Decision:** Content ops (WF1) is stack-agnostic. Only publish (WF3) branches: Astro vs WordPress.

### ADR-005: blog-engine Skill for Production
- **Context:** Consistent content quality across brands
- **Decision:** blog-engine for writing, chinese-humanizer for QA

---

## 5. Task Breakdown

### G1 (setup — done)
- G1.1: brand-config.json ✅ | G1.2: wa-codes.md ✅ | G1.3: GA4 property ✅

### WF1 A1 (4 tasks)
- A1.1: SERP competitor identification
- A1.2: Domain-level competitor analysis
- A1.3: Keyword gap + backlink comparison
- A1.4: Write competitor-brief.md

### WF1 A2 (2 tasks)
- A2.1: Search volume + intent scoring
- A2.2: Keyword clustering + keyword-research.json

### WF1 A3 (2 tasks)
- A3.1: Validate silos, pillar/cluster mapping
- A3.2: Blog calendar + content-calendar.json

### Ledger (1 task — gap item)
- Ledger.1: Initialize SQLite, seed, CRUD test

### WF1 Track B (12 tasks)
- B1-B.10: per-item through brief→draft→SEO→review→compliance→gate→publish
- B8.4: Post-publish GA4 + WA shortcode verification
- B12: Batch ledger update

### WF3 P5a + P6 (3 tasks)
- P5a.1: SEO fundamentals (titles, meta, schema, shortcodes)
- P6.1: Push to Strapi → build
- P6.2: Preview → production deploy

### WF1 Track C (ongoing)
- C1: First monitor report after 7 days

---

## 6. Validation

| Task | Test Command | Expected |
|------|-------------|---------|
| A1.4 | `cat _shared/_brands/amdcpr/competitor-brief.md` | ≥3 competitors identified |
| A2.2 | `python3 -c "import json; d=json.load(open('_shared/_brands/amdcpr/keyword-research.json')); print(len(d['keywords']))"` | ≥9 keywords with volume + intent |
| Ledger.1 | `sqlite3 projects/amdcpr/data/ledger.db '.tables'` | 3 tables |
| B8.4 | `node _shared/brandops/scripts/wa-track-test.cjs` | All 8 tests pass |
| P5a.1 | `grep -r 'data-wa-shortcode' src/` | Shortcodes on all CTA links |
| P6.2 | `curl -s https://dnacpr.hk/en/ \| grep 'AMD-S01'` | Shortcode in HTML |

**Max attempts per task: 3. Escalation after 2 consecutive failures.**

---

## 7. Framework Migration

This PRD is the test run for BrandOps on amdcpr. After completion:

1. Gaps found → submit AgentGate proposals (content ledger, bilingual blog workflow, HK humanizer integration)
2. WF1 refined with amdcpr learnings
3. Template ready for DNH (WordPress stack) and DN Apps (WordPress)
4. Per Wilson: WF2 (Ads) and WF7 (Landing Pages) not mapped for amdcpr — intentional
