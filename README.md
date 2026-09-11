# Tech Logistics LLC — Website Documentation & Deployment Guide

Static, production-ready website for **Tech Logistics LLC** (<https://techlogisticsllc.altrixcore.com/>). Designed for high-integrity Stripe payment verification and compliance review with zero external runtime dependencies.

---

## 1. How to Deploy as Static Files

Because this site is built entirely with standard HTML5, modern CSS, and vanilla JavaScript without any build steps or external dependencies, it can be deployed directly to any static web server (Nginx, Apache, Caddy, Cloudflare Pages, GitHub Pages, or Netlify):

1. **Upload all files** from this directory directly to the web server's document root (e.g. `/var/www/techlogisticsllc` on your Ubuntu VPS).
2. **Configure Web Server**:
   Ensure `index.html` is set as the default index file and point your 404 handler to `/404.html`.
3. **Configure SSL / HTTPS**:
   Enforce HTTPS via Let's Encrypt / Certbot (`sudo certbot --nginx -d techlogisticsllc.altrixcore.com`).

---

## 2. Fill-in Tokens Reference

Before public publishing or final marketing changes, replace the following tokens across the codebase with your real business figures:

| Token | File(s) | Description | Example Replacement |
|---|---|---|---|
| `40%` | `services.html`, `terms.html`, `faq.html` | Percentage of gross load revenue charged for dispatch | `7%` or `8%` |
| `30%` | `services.html`, `terms.html` | Flat weekly option rate (if offered) | `$250/week` or `N/A` |
| `{{None}}` | `services.html` | Minimum commitment / setup fee | `None` or `No Contract` |
| `{{BUSINESS_HOURS}}` | `contact.html` | Regular dispatch operating hours | `8:00 AM – 6:00 PM EST` |
| `{{TIMEZONE}}` | `contact.html` | Local operating timezone | `Eastern Time (ET)` |
| `{{RESPONSE_TIME}}` | `contact.html`, `faq.html` | Expected customer support turnaround | `2 hours` or `Same Business Day` |
| `{{REFUND_WINDOW_DAYS}}` | `refund-policy.html` | Window from charge date to file refund request | `30` |
| `{{REFUND_REVIEW_DAYS}}` | `refund-policy.html` | Business days required to process refund decisions | `3` to `5` |

---

## 3. Contact Form Endpoint Setup

The contact form in `contact.html` features client-side validation with inline error messaging, an interactive on-page success confirmation state, and an automated `mailto:` fallback.

To wire the form to an external backend service (e.g. **Formspree**, **Formkeep**, or **Getform**):
1. Open `script.js`.
2. Locate line 73:
   ```javascript
   const ENDPOINT_URL = ""; 
   ```
3. Insert your Formspree endpoint URL:
   ```javascript
   const ENDPOINT_URL = "https://formspree.io/f/your_form_id";
   ```
4. Save the file. Form submissions will now automatically post JSON payloads to your form provider and display the on-page confirmation state.
