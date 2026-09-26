#!/usr/bin/env python3
"""Insert 4 new ACP blog posts (what-is-acp, acp-singapore, acp-uk, acp-nireland)
into the Strapi SQLite DB with resolved cross-links + WhatsApp CTA endings.
ZH + EN in single rows (content / content_en pattern used by [slug].astro)."""
import sqlite3, json, uuid, re, sys, datetime

DB = "/home/oc/projects/amdcpr-website/v2/cms/.tmp/data.db"
DRAFTS = "/home/oc/projects/amdcpr/drafts/"

def load(path):
    with open(path, encoding="utf-8") as f:
        return f.read()

def strip_header(md):
    """Remove the frontmatter-ish header lines (Status/Date/Sites/Type/Source) above first ## ."""
    lines = md.split("\n")
    out = []
    started = False
    for ln in lines:
        if ln.startswith("## "):
            started = True
        if started:
            out.append(ln)
    return "\n".join(out).strip()

def fix_links(md, lang, slug):
    """Resolve (#) placeholder links to real URLs (own-language)."""
    base = f"https://dnacpr.hk/{lang}"
    blog = f"{base}/blog"
    subs = {
        "[AMD vs DNACPR 有什麼分別？](#)": f"[AMD vs DNACPR 有什麼分別？]({base}/amd-vs-dnacpr/)",
        "[AMD vs DNACPR — what's the difference?](#)": f"[AMD vs DNACPR — what's the difference?]({base}/amd-vs-dnacpr/)",
        "[《維持生命治療的預作決定條例》FAQ](#)": f"[《維持生命治療的預作決定條例》FAQ]({base}/faq/)",
        "[ADLTO FAQ](#)": f"[ADLTO FAQ]({base}/faq/)",
        "[預設醫療指示 vs 不作心肺復甦：有什麼分別？](#)": f"[預設醫療指示 vs 不作心肺復甦：有什麼分別？]({base}/amd-vs-dnacpr/)",
        "[簽署流程詳解](#)": f"[簽署流程詳解]({base}/what-is-amd/)",
        "[新加坡篇](#)": f"[新加坡篇]({blog}/acp-singapore/)",
        "[英國篇](#)": f"[英國篇]({blog}/acp-uk/)",
        "[北愛爾蘭篇](#)": f"[北愛爾蘭篇]({blog}/acp-nireland/)",
        "[How Singapore does it](#)": f"[How Singapore does it]({blog}/acp-singapore/)",
        "[How the UK does it](#)": f"[How the UK does it]({blog}/acp-uk/)",
        "[How Northern Ireland does it](#)": f"[How Northern Ireland does it]({blog}/acp-nireland/)",
    }
    for k, v in subs.items():
        md = md.replace(k, v)
    # leftover bare (#) links -> drop the markdown link syntax, keep text
    md = re.sub(r"\[([^\]]+)\]\(#\)", r"\1", md)
    return md

# --- per-post CTA endings (match existing site pattern) ---
CTA_ZH = ("\n\n---\n\n*想了解多啲關於預設照顧計劃同 AMD？即時WhatsApp我哋查詢，"
          "老友宅醫團隊樂意為你詳細解釋。*\n\n[了解更多 AMD 詳細內容 →](/zh/what-is-amd)\n"
          "[WhatsApp 查詢上門簽署](https://wa.me/85263324599?text=我想了解AMD服務)")
CTA_EN = ("\n\n---\n\n*Want to learn more about advance care planning and AMD? "
          "WhatsApp us now — the DoctorNow team is happy to explain.*\n\n"
          "[Learn more about AMD →](/en/what-is-amd)\n"
          "[WhatsApp to enquire about in-home signing](https://wa.me/85263324599?text=我想了解AMD服務)")

POSTS = [
    {
        "slug": "what-is-acp",
        "category": "ACP 知識",
        "excerpt_zh": "ACP 唔係一份文件，而係一場對話——同家人、同醫護傾清楚你將來想接受點樣嘅治療。AMD 係「簽」，ACP 係「傾」。",
        "excerpt_en": "ACP is not a document — it's a conversation about the care you would want if you lost capacity. AMD is \"signing\"; ACP is \"talking\".",
        "zh": "acp-what-is-zh-2026-08-23.md",
        "en": "acp-what-is-en-2026-08-23.md",
    },
    {
        "slug": "acp-singapore",
        "category": "ACP 國際比較",
        "excerpt_zh": "新加坡早香港近 30 年推行預設醫療指示（AMD）立法，再以全國性 ACP 計劃補足法例空白。香港可以從中學到什麼？",
        "excerpt_en": "Singapore legislated AMD nearly 30 years before Hong Kong, then built a national ACP programme to fill the legal gaps. What can Hong Kong learn?",
        "zh": "country-series-01-singapore-zh-2026-08-23.md",
        "en": "country-series-01-singapore-en-2026-08-23.md",
    },
    {
        "slug": "acp-uk",
        "category": "ACP 國際比較",
        "excerpt_zh": "英國自 1980 年代發展預設照顧計劃（ACP），40 年經驗證明「法例框架 + 基層醫療 + 關懷社區」三條腿走路。",
        "excerpt_en": "The UK has developed Advance Care Planning since the 1980s — 40 years of experience built on legislation, primary care, and compassionate communities.",
        "zh": "country-series-02-uk-zh-2026-08-23.md",
        "en": "country-series-02-uk-en-2026-08-23.md",
    },
    {
        "slug": "acp-nireland",
        "category": "ACP 國際比較",
        "excerpt_zh": "北愛爾蘭 2022 年推出「預設照顧及人生計劃」，刻意不叫 ACP——因為用詞會窒礙公眾參與。語言點樣改變生死規劃？",
        "excerpt_en": "Northern Ireland renamed ACP \"Advance Care and Life Planning\" in 2022 — because the term itself discouraged participation. How does language change planning?",
        "zh": "country-series-03-nireland-zh-2026-08-23.md",
        "en": "country-series-03-nireland-en-2026-08-23.md",
    },
]

def build(lang, draft_fn, slug):
    md = strip_header(load(DRAFTS + draft_fn))
    md = fix_links(md, lang, slug)
    if lang == "zh":
        md = md + CTA_ZH
    else:
        md = md + CTA_EN
    return md

def main():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()
    for p in POSTS:
        # skip if already exists
        cur.execute("SELECT id FROM posts WHERE slug=?", (p["slug"],))
        if cur.fetchone():
            print(f"SKIP {p['slug']} (exists)")
            continue
        title_zh = strip_header(load(DRAFTS + p["zh"])).split("\n")[0].lstrip("# ").strip()
        title_en = strip_header(load(DRAFTS + p["en"])).split("\n")[0].lstrip("# ").strip()
        content_zh = build("zh", p["zh"], p["slug"])
        content_en = build("en", p["en"], p["slug"])
        cur.execute(
            "INSERT INTO posts (document_id, title, slug, excerpt, content, category, created_at, updated_at, published_at, title_en, excerpt_en, content_en) "
            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
            (uuid.uuid4().hex, title_zh, p["slug"], p["excerpt_zh"], content_zh, p["category"],
             now, now, now, title_en, p["excerpt_en"], content_en),
        )
        print(f"INSERTED {p['slug']} | ZH: {title_zh[:40]} | EN: {title_en[:40]}")
    conn.commit()
    conn.close()
    print("DONE")

if __name__ == "__main__":
    main()
