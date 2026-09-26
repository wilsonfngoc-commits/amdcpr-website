# DoctorNow AMD — Cursor Build Instructions

> **Last updated:** 2026-07-14
> **Design system:** `DESIGN.md` — Terracotta/Moss Green/Warm Sand, Quicksand + Noto Sans TC
> **Content:** `content/` — pillar pages, strategy brief, keyword research
> **Specs:** `specs/` — page-by-page specs (FAQ, About, How It Works, Services, Contact)

---

## Project Overview

Build a complete multi-page Cantonese-first website for DoctorNow AMD — a Hong Kong mobile advance medical directive (AMD) signing service. Doctors visit homes to help terminally ill patients and families sign AMD documents.

### Core Positioning

> **我唔想急救，唔想插喉，唔想俾機器吊住條命。**
> 預設醫療指示（AMD）幫你寫低最後意願，上門簽妥，30分鐘搞掂。

The "我唔想急救" emotional hook is the primary differentiator. All competitors use cold legal language (預設醫療指示, advance directive). We lead with the human feeling — the fear of being kept alive by machines — then bridge to AMD as the solution.

### Brand One-Liner
上門簽署預設醫療指示的醫生 — The doctor who comes to your home to sign your AMD.

---

## Files Provided

| File | What it is |
|------|------------|
| `reference/homepage.html` | Your exact design anchor. Match this style exactly. |
| `DESIGN.md` | Full design system spec (colors, fonts, components, banned patterns) |
| `content/pillar-what-is-amd.md` | ✅ Written — "什麼是AMD" explainer page content |
| `content/pillar-amd-vs-dnacpr.md` | ✅ Written — AMD vs DNACPR comparison page content |
| `content/CONTENT-STRATEGY-BRIEF.md` | Full strategy doc with keyword map, competitor analysis |
| `specs/01-faq.md` | FAQ page spec |
| `specs/02-about.md` | About page spec |
| `specs/03-how-it-works.md` | How It Works page spec |
| `specs/04-services.md` | Services & Pricing page spec |
| `specs/05-contact.md` | Contact page spec |

---

## What to Build

Generate **8 HTML files** in `html/` directory:

### P0 — Must build, highest priority

1. `html/homepage.html` — Homepage with 4-lane router + new hero (see below)
2. `html/what-is-amd.html` — 「什麼是預設醫療指示？」pillar page (content in `content/pillar-what-is-amd.md`)
3. `html/amd-vs-dnacpr.html` — 「AMD vs DNACPR」comparison page (content in `content/pillar-amd-vs-dnacpr.md`)

### P1 — Build after P0

4. `html/how-it-works.html` — Process page (specs/03-how-it-works.md)
5. `html/services.html` — Pricing & packages (specs/04-services.md)
6. `html/faq.html` — FAQ with accordion (specs/01-faq.md)
7. `html/about.html` — About page (specs/02-about.md)
8. `html/contact.html` — Contact page (specs/05-contact.md)

---

## Homepage Hero (Updated)

Replace the current hero with this:

```
┌──────────────────────────────────────────────────────────┐
│  我唔想急救，唔想插喉，                                  │
│  唔想俾機器吊住條命。                                    │
│                                                          │
│  預設醫療指示（AMD）幫你寫低最後意願，                    │
│  上門簽妥，30分鐘搞掂。                                  │
│                                                          │
│  [ 了解多啲 ]  [ 立即預約 」                              │
│                                                          │
│  ─── 老友宅醫 DoctorNow Home ───                          │
│  10,000+ 次上門診症 · 香港註冊醫生 · 度身訂做             │
└──────────────────────────────────────────────────────────┘
```

**Hero layout (left-aligned split, per DESIGN.md):**
- Left 2/3: text content as above
- Right 1/3: organic-shape image (border-radius: 60% 40% / 60% 30%), no stock old people photos
- Background: soft blur circles in warm-sand tones
- Subtitle: "由擁有10,000+次上門經驗嘅老友宅醫團隊提供"

### 4-Lane Router (directly below hero)

The 4-lane cards routing visitors by who they are (from the spec):

```
LANE 1: 我是末期病人/家屬     → 醫生上門簽署、在家離世
LANE 2: 我想預早規劃          → AMD vs DNACPR、費用
LANE 3: 我是社福機構           → 批量簽署、免費講座
LANE 4: 我是律師               → 轉介合作
```

Design: 32px rounded, warm-sand bg, hover: translateY(-8px) + white bg, asymmetric sizing (Lane 1 slightly larger).

---

## Trust & Honesty Section (New — Critical Differentiator)

**Add a section on the homepage (or FAQ) titled:**

```
如果我喺屋企突然心跳停咗，
救護員係咪唔會幫我做CPR？
```

**Answer box (calm, honest tone):**
「AMD 唔會阻止救護員做CPR。因為救護員冇辦法喺現場判斷你係咪符合 AMD 嘅三個指定情況。要令救護員唔做CPR，你需要一份由兩位醫生簽署嘅 DNACPR 文件。

AMD 係你嘅意願聲明——當醫生診斷你符合條件時，佢會生效。我哋建議同時了解 DNACPR，咁先做到全面保障。

我哋可以幫你安排兩樣文件，確保無論喺屋企定醫院，你嘅意願都受到尊重。」

**Design:** Warm-sand card with terracotta left border, maybe toggle/expandable. This builds massive trust by being honest about limitations.

---

## Content Pages (Language & Tone)

### Cantonese Voice
- Headlines: Colloquial Cantonese (e.g., 唔想, 搞掂, 吊住條命)
- Body text: Standard written Chinese (繁體中文), friendly but not sloppy
- CTA buttons: Action-focused, warm (e.g., 了解多啲, 立即預約, WhatsApp 我哋)
- English summary at bottom of pillar pages for bilingual users

### For each pillar page (what-is-amd, amd-vs-dnacpr):
- Convert the Markdown in `content/` into styled HTML
- Break content into scannable sections with H2 headers
- Add visual elements where possible (tables styled as cards, comparison charts)
- End with a CTA section linking to WhatsApp

### FAQ Page
- Minimum 10 questions (from spec + the honesty question about CPR above)
- Accordion interaction with spring animation
- Active state: 2px left border in terracotta
- Only one question open at a time

---

## Critical Rules

### Design Consistency
- ALL pages share the **exact same nav, footer, and floating WhatsApp CTA** from the homepage
- Only `<main>` content changes between pages
- Use the same Tailwind config (colors, fonts, border-radius) from the homepage reference

### Tech Stack
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`)
- **No build tools** — standalone HTML files only
- **No frameworks** (React, Vue, etc.)
- **No JavaScript libraries** beyond Tailwind + Material Icons
- Keep all CSS in `<style>` block or Tailwind classes
- Google Fonts: Quicksand + Noto Sans TC + Material Symbols Outlined

### SEO
- Each page: proper `<title>`, `<meta description>`, `lang="zh-HK"`
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Hreflang for bilingual content where applicable

### Banned (from DESIGN.md)
- ❌ Pure black (#000) — use #4A4036
- ❌ Pure white backgrounds — use #FAF6F2
- ❌ Stock photos of elderly people
- ❌ Clinical medical blues/whites
- ❌ Heavy drop shadows — use blur layers
- ❌ Emojis in UI — use Material Symbols icons
- ❌ Centered hero — always left-aligned or split
- ❌ Equal card grids — always asymmetric (8+4 splits)
- ❌ AI marketing clichés: "seamless", "revolutionary", "next-gen", "elevate"
- ❌ Urgency language — no countdowns, "act now", "limited time"
- ❌ Harsh 1px borders — use tonal surface layering

## Important Notes
- The reference homepage uses the Sage Green palette. The **correct palette is now Terracotta/Moss Green/Warm Sand** — use DESIGN.md colors.
- The reference homepage hero text may still say the old slogan. **Replace with the new hero above.**
- Generate fresh .html files — do not modify the reference files.

## Output Format
All files go into `html/`. Make them open-in-browser ready.
