#!/usr/bin/env python3
"""Read published posts from Strapi SQLite database."""
import sqlite3, json, sys

DB = "/home/oc/projects/amdcpr-website/v2/cms/.tmp/data.db"

try:
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        "SELECT id, document_id, title, slug, excerpt, content, "
        "title_en, excerpt_en, content_en, category, published_at, created_at "
        "FROM posts WHERE published_at IS NOT NULL "
        "ORDER BY published_at DESC"
    ).fetchall()
    conn.close()

    result = []
    for r in rows:
        result.append({
            "id": r["id"],
            "documentId": r["document_id"],
            "title": r["title"],
            "slug": r["slug"] or "",
            "excerpt": r["excerpt"] or "",
            "content": r["content"] or "",
            "title_en": r["title_en"] or "",
            "excerpt_en": r["excerpt_en"] or "",
            "content_en": r["content_en"] or "",
            "category": r["category"] or "",
            "publishedAt": str(r["published_at"]),
            "createdAt": str(r["created_at"]),
        })
    print(json.dumps(result))
except Exception as e:
    print(json.dumps([]))
    sys.stderr.write(f"Strapi DB error: {e}\n")
