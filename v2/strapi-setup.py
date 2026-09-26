#!/usr/bin/env python3
"""Complete Strapi setup: create project, admin, content type, API token."""
import subprocess, json, urllib.request, urllib.error, time, os, sys

BASE = "http://localhost:1337"
CMS_DIR = "/home/oc/projects/amdcpr-website/v2/cms"
ENV_FILE = "/home/oc/projects/amdcpr-website/v2/.env"

def log(msg):
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)

def api(method, path, data=None, token=None):
    headers = {"Content-Type": "application/json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(f"{BASE}{path}", data=body, headers=headers, method=method)
    try:
        resp = urllib.request.urlopen(req)
        return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        return {"_error": e.code, "_body": e.read().decode()}

# 1. Create Strapi project
log("Creating Strapi project...")
result = subprocess.run(
    ["npx", "create-strapi-app@latest", "cms", "--quickstart", "--skip-cloud", "--no-run"],
    cwd="/home/oc/projects/amdcpr-website/v2", capture_output=True, text=True, timeout=120)
log(f"  {result.stdout.strip().split(chr(10))[-5:-1] or 'Done'}")

# 2. Start Strapi in background
log("Starting Strapi...")
proc = subprocess.Popen(
    ["npm", "run", "develop"],
    cwd=CMS_DIR, stdout=open("/tmp/strapi-cron.log", "w"), stderr=subprocess.STDOUT)

# 3. Wait for server ready
log("Waiting for Strapi to be ready...")
for i in range(60):
    try:
        r = api("GET", "/_health")
        if r.get("status") == "ok" or "_error" not in r:
            log(f"  Strapi ready after {(i+1)*2}s")
            break
    except:
        pass
    time.sleep(2)
else:
    log("  ERROR: Strapi didn't start in time")
    sys.exit(1)

# 4. Register admin
log("Registering admin...")
r = api("POST", "/admin/register-admin", {
    "email": "wilson@dnacpr.hk",
    "firstname": "Wilson",
    "lastname": "Admin",
    "password": "AmdAdmin2026!"
})
token = r.get("data", {}).get("token", "")
if token:
    log(f"  Admin created: wilson@dnacpr.hk / AmdAdmin2026!")
else:
    log(f"  ERROR: {r.get('_body', r)}")
    sys.exit(1)

# 5. Create Post content type
log("Creating Post content type...")
r = api("POST", "/admin/content-type-builder/content-types", {
    "contentType": {
        "displayName": "Post",
        "singularName": "post",
        "pluralName": "posts",
        "kind": "collectionType",
        "draftAndPublish": True,
        "attributes": {
            "title": {"type": "string", "required": True, "maxLength": 200},
            "slug": {"type": "uid", "targetField": "title"},
            "excerpt": {"type": "text", "maxLength": 500},
            "content": {"type": "richtext"},
            "category": {"type": "string"}
        }
    }
}, token=token)
if "_error" in r:
    log(f"  ERROR ({r['_error']}): {r['_body'][:200]}")
else:
    log(f"  Content type 'Post' created: {r.get('data', {}).get('displayName', 'OK')}")

# 6. Create API token
log("Creating API token...")
r = api("POST", "/admin/api-tokens", {
    "name": "Astro Blog",
    "description": "Used by Astro to fetch blog posts",
    "type": "full-access",
    "lifespan": None
}, token=token)
key = r.get("data", {}).get("accessKey", "")
if key:
    log(f"  API Token created: {key[:30]}...")
    with open(ENV_FILE, "a") as f:
        f.write(f"\n# Strapi CMS\nSTRAPI_URL=http://localhost:1337\nSTRAPI_API_TOKEN={key}\n")
    log(f"  Saved to .env")
else:
    log(f"  ERROR: {r.get('_body', r)[:200]}")

log("\n=== Setup complete ===")
log(f"Admin: wilson@dnacpr.hk / AmdAdmin2026!")
log(f"Strapi: http://localhost:1337/admin")
