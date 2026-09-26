# AMDCpr (dnacpr.hk) — Blog Engine Pattern Decisions

> Business-specific pattern decisions for the blog-engine pipeline.
> Each entry is a durable rule for future posts. Append-only — date every entry.

---

## AMD-D01 — Blog post markdown conventions (2026-08-04)

**Context:** First blog published via pipeline (〈簽咗舊版 AMD 表格仲有效嗎？〉, post_id=12). Two template-integration issues surfaced during publish.

**Rules for all dnacpr.hk blog posts:**
- **No H1 in markdown content** — the `[slug].astro` template renders `<h1>{displayTitle}</h1>` from the CMS title. Content must start at `##` (H2). Duplicate title symptom = markdown has a `#` line.
- **EN title via `title_en`** — template now uses `displayTitle` (zh → `post.title`, en → `post.title_en`). Always provide `title_en`/`excerpt_en`/`content_en`; without them EN pages fall back to Chinese.
- **Excerpt rule:** first paragraph >40 chars after the first H2 (used for meta description).
- **Publish path:** Strapi SQLite (`cms/.tmp/data.db`, table `posts`) — INSERT with `published_at` set → `npm run build` → `deploy-preview.sh` → verify at hash URL → `deploy.sh` to prod.
- **SEO floor:** ≥80/100 on the blog-engine Step 10 scoring before publish; FAQ section (≥4 Q&A) required for FAQPage schema.

---

## AMD-D02 — FAQ page update conventions (2026-08-04)

**Context:** FAQ page updated with 3 new entries + grandfathering enhancement sourced from CUHK Bioethics synopsis.

**Rules:**
- FAQ answers render with `set:html` — inline HTML (links, bold) is allowed and renders properly.
- Legal/link citations use brand styling: `color: #708D81` + `text-decoration: underline` + `text-underline-offset: 3px` (moss green = brand primary).
- FAQ content is zh + en dual — both `faqList` arrays must stay in sync (same count, same order).
- Prefer official primary sources for legal answers (elegislation.gov.hk, HA, HKAM, CUHK Bioethics); add source link inline.

---

## Decision Log (reverse-chronological)

| Date | Decision | Ref |
|------|----------|-----|
| 2026-08-04 | Blog markdown: no H1, provide EN fields, Strapi SQLite publish, SEO ≥80 | AMD-D01 |
| 2026-08-04 | FAQ: set:html rendering, brand-styled legal links, zh/en in sync, official sources | AMD-D02 |
