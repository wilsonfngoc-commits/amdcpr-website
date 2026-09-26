#!/bin/bash
# Deploy to preview branch — dnacpr.hk stays untouched
# Review at https://<hash>.amdcpr-6lf.pages.dev

export PATH="/home/oc/.nvm/versions/node/v24.14.1/bin:$PATH"
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then export CLOUDFLARE_API_TOKEN="$(cat /home/oc/.amdcpr-cf-token)"; fi

cd /home/oc/projects/amdcpr-website/v2

echo "[$(date)] Building..." >> /tmp/amdcpr-deploy.log
npm run build >> /tmp/amdcpr-deploy.log 2>&1

echo "[$(date)] Deploying to preview branch..." >> /tmp/amdcpr-deploy.log
npx wrangler pages deploy dist/ --project-name=amdcpr --branch=preview >> /tmp/amdcpr-deploy.log 2>&1

echo "[$(date)] Deploying to staging project (amdcpr-staging, production branch)..." >> /tmp/amdcpr-deploy.log
npx wrangler pages deploy dist/ --project-name=amdcpr-staging --branch=main >> /tmp/amdcpr-deploy.log 2>&1

echo "[$(date)] Preview deploy done. Check last URL in log for preview link." >> /tmp/amdcpr-deploy.log
