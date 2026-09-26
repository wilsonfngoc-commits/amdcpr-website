#!/usr/bin/env python3
"""Lightweight HTTP server for Strapi webhook triggers."""
import http.server, json, subprocess, os, logging, sys

PORT = 8899
LOG = "/tmp/amdcpr-webhook.log"
logging.basicConfig(filename=LOG, level=logging.INFO,
    format="%(asctime)s %(message)s")

class WebhookHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(body)
            event = data.get("event", "")
            logging.info(f"Webhook: {event}")
            if "entry.publish" in event:
                logging.info("Post published — rebuilding...")
                subprocess.run(["/home/oc/projects/amdcpr-website/v2/deploy.sh"])
                logging.info("Rebuild done")
        except Exception as e:
            logging.error(f"Error: {e}")
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK")

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Webhook receiver running")

if __name__ == "__main__":
    server = http.server.HTTPServer(("0.0.0.0", PORT), WebhookHandler)
    logging.info(f"Webhook server started on port {PORT}")
    print(f"Webhook server on port {PORT}, log: {LOG}")
    server.serve_forever()
