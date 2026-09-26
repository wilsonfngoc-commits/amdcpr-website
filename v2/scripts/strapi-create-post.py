#!/usr/bin/env python3
"""Create or update a post in the Strapi SQLite database."""
import sqlite3, json, sys, uuid
from datetime import datetime

DB = "/home/oc/projects/amdcpr-website/v2/cms/.tmp/data.db"

def create_post(title: str, slug: str, content: str, excerpt: str = "", category: str = "", publish: bool = False):
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    
    # Check if slug exists
    c.execute("SELECT id FROM posts WHERE slug = ?", (slug,))
    existing = c.fetchone()
    
    doc_id = str(uuid.uuid4())
    now = datetime.now().isoformat()
    published_at = now if publish else None
    
    if existing:
        # Update existing
        c.execute("""
            UPDATE posts SET title=?, content=?, excerpt=?, category=?, published_at=?, updated_at=?
            WHERE slug=?
        """, (title, content, excerpt, category, published_at, now, slug))
        action = "updated"
        post_id = existing[0]
    else:
        # Insert new
        c.execute("""
            INSERT INTO posts (document_id, title, slug, content, excerpt, category, published_at, created_at, updated_at, created_by_id, updated_by_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1)
        """, (doc_id, title, slug, content, excerpt, category, published_at, now, now))
        action = "created"
        post_id = c.lastrowid
    
    conn.commit()
    conn.close()
    return {"action": action, "id": post_id, "slug": slug, "published": publish}

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--title", required=True)
    parser.add_argument("--slug", required=True)
    parser.add_argument("--content", default="")
    parser.add_argument("--excerpt", default="")
    parser.add_argument("--category", default="")
    parser.add_argument("--publish", action="store_true")
    args = parser.parse_args()
    
    result = create_post(args.title, args.slug, args.content, args.excerpt, args.category, args.publish)
    print(json.dumps(result))
