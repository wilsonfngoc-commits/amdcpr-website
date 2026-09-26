# Internal Linking Plan: doctornowhome.com → dnacpr.hk

**Status:** DRAFT — approved 2026-08-04 by Wilson, pending execution
**Owner:** CTO (coding-cto)
**Created:** 2026-08-04
**Goal:** Push authority from doctornowhome.com (936 backlinks / 709 referring domains, 5 yrs old) into dnacpr.hk (5 backlinks / 1 referring domain, days old) to accelerate ranking for 預設醫療指示 / AMD terms.

## Context (verified 2026-08-04)

- dnacpr.hk: first seen in backlink index 2026-08-01, only 1 referring domain = doctornowhome.com itself
- GSC (Jun 1 – Aug 4): 1 click, 21 impressions, avg pos 23.9; only 3 queries (dnacpr 中文, dnacpr中文, 上門醫生)
- doctornowhome.com ranks #6 for 預設醫療指示 上門 (blog: 預設醫療指示同遺囑、不急救紙有乜分別)
- dnacpr.hk NOT in top 10 for: 預設醫療指示, 預設醫療指示 上門, AMD 預設醫療指示 簽署
- ⚠️ "AMD 香港" keyword is polluted by AMD the chip company — avoid

## Link Map

Priority 1 (highest authority + relevance):

| Source (doctornowhome.com) | Target (dnacpr.hk) | Anchor |
|---|---|---|
| /amd/ (預設醫療指示(AMD)7.31 生效) — already links to /zh/ once | /zh/ (keep), ADD /zh/how-it-works/, /zh/pricing/ | 上門簽署預設醫療指示 |
| Blog: 預設醫療指示同遺囑、不急救紙有乜分別 (ranks #6) | /zh/, /zh/amd-vs-dnacpr/, /zh/what-is-amd/ | 預設醫療指示 上門簽署服務 |
| Service: 社會創新及創業-預設醫療指示資助計劃 | /zh/how-it-works/ | AMD 申請流程 |

Priority 2 (contextual end-of-life content):

| Source (doctornowhome.com) | Target (dnacpr.hk) | Anchor |
|---|---|---|
| Blog: 在家離世的常見問題 | /zh/faq/ | 預設醫療指示 FAQ |
| Blog: 末期患者選擇在家離世…醫生跟進之分別 | /zh/what-is-amd/ | AMD 在家簽署 |
| Blog: 晚期病人離世地點選擇流程全解 | /zh/ | 預設醫療指示 |
| Blog: 是否只有醫生才有權限證實病人已經死亡 | /zh/what-is-amd/ | 預設醫療指示 |

## Rules

- 1-2 contextual links per source page max; never link same target twice in one article
- Vary anchors — no exact-match repetition (no anchor spam)
- Links must be inline within relevant paragraphs, not footer/nav
- Priority 1 first; verify each with curl after adding

## Execution Steps

1. WP login/access for doctornowhome.com (wp-cli or admin)
2. Edit each source page in priority order, insert links per map
3. After each edit: curl rendered page + grep for new href + anchor text (never trust DB meta alone)
4. Check for Elementor element cache / page cache issues (see Elementor Element-Cache lesson — purge `_elementor_element_cache` or disable TTL if edits don't render)
5. Verify no broken URLs: all targets are live dnacpr.hk pages (38 URLs in /tmp/dnacpr_urls.txt or sitemap-index.xml)

## Verification

- After execution: dnacpr.hk referring domains should grow beyond 1 (check via DataForSEO backlinks summary)
- Re-check SERP for 預設醫療指示 上門 within 2-4 weeks
