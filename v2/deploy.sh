#!/bin/bash
export PATH="/home/oc/.nvm/versions/node/v24.14.1/bin:$PATH"
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then export CLOUDFLARE_API_TOKEN="$(cat /home/oc/.amdcpr-cf-token)"; fi

cd /home/oc/projects/amdcpr-website/v2

echo "[$(date)] Building..." >> /tmp/amdcpr-deploy.log
if ! npm run build >> /tmp/amdcpr-deploy.log 2>&1; then
  echo "[$(date)] ❌ BUILD FAILED — deploy aborted" >> /tmp/amdcpr-deploy.log
  exit 1
fi

echo "[$(date)] Deploying to Cloudflare Pages..." >> /tmp/amdcpr-deploy.log
if ! npx wrangler pages deploy dist/ --project-name=amdcpr --branch=main >> /tmp/amdcpr-deploy.log 2>&1; then
  echo "[$(date)] ❌ DEPLOY FAILED (wrangler error)" >> /tmp/amdcpr-deploy.log
  exit 1
fi

# --- Post-deploy smoke check (added 2026-08-02) ---
echo "[$(date)] Smoke-checking https://dnacpr.hk ..." >> /tmp/amdcpr-deploy.log
sleep 10
HTTP_CODE=$(curl -s -m 20 -o /tmp/amdcpr-smoke.html -w "%{http_code}" -L https://dnacpr.hk 2>/dev/null)
if [ "$HTTP_CODE" != "200" ]; then
  echo "[$(date)] ❌ SMOKE CHECK FAILED — HTTP $HTTP_CODE (expected 200)" >> /tmp/amdcpr-deploy.log
  exit 1
fi

# Content marker check — catch "deployed but empty/broken page" cases
if ! grep -q "預設醫療指示" /tmp/amdcpr-smoke.html 2>/dev/null; then
  echo "[$(date)] ⚠️ SMOKE CHECK: HTTP 200 but content marker (預設醫療指示) NOT FOUND — page may be broken" >> /tmp/amdcpr-deploy.log
  exit 1
fi

echo "[$(date)] ✅ DEPLOY OK — dnacpr.hk HTTP 200 + content marker verified" >> /tmp/amdcpr-deploy.log
echo "[$(date)] Done" >> /tmp/amdcpr-deploy.log
