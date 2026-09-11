#!/usr/bin/env bash
for p in "" "services.html" "about.html" "contact.html" "terms.html" "refund-policy.html" "privacy.html" "disclaimer.html" "faq.html" "404.html" "styles.css" "script.js" "robots.txt" "sitemap.xml" "favicon.svg"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: techlogisticsllc.altrixcore.com" "http://127.0.0.1/$p")
  echo "[$code] /$p"
done
