#!/bin/bash
# Simple HTTP server that listens for Strapi webhooks and triggers a rebuild
# Runs on port 8899 (should not conflict with anything)

PORT=8899
SECRET="***"

while true; do
  REQUEST=$(nc -l -p $PORT -q 1 -v 2>/dev/null)
  if echo "$REQUEST" | head -1 | grep -q "POST"; then
    # Read the body
    BODY=$(echo "$REQUEST" | sed -n '/^\r$/,$ p' | tail -n +2)
    
    # Check if it's a Strapi webhook (entry.publish event)
    if echo "$BODY" | grep -q "entry.publish"; then
      echo "[$(date)] Strapi webhook received — rebuilding..." >> /tmp/amdcpr-webhook.log
      /home/oc/projects/amdcpr-website/v2/deploy.sh >> /tmp/amdcpr-webhook.log 2>&1
      echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nOK" | nc -q 0 -l -p $PORT -v 2>/dev/null &
    else
      echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nignored" | nc -q 0 -l -p $PORT -v 2>/dev/null &
    fi
  fi
  sleep 1
done
