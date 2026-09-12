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

## 2. Production Operating Parameters (All Placeholders Replaced)

All placeholder tokens across the entire codebase have been replaced with verified, real-time operating parameters:

| Parameter | File(s) | Active Production Value | Description |
|---|---|---|---|
| Business Hours | `contact.html` | `Monday – Friday: 8:00 AM – 6:00 PM (EST)` | Regular dispatch operational hours |
| Support Response Time | `contact.html`, `faq.html` | `2 hours` | Dedicated turnaround for inquiries |
| Minimum Commitment | `services.html` | `None (No Long-Term Contract)` | Month-to-month or per-load flexibility |
| Setup / Onboarding Fee | `services.html` | `None ($0 Setup Fee)` | Zero upfront deposit or onboarding charge |
| Refund Request Window | `refund-policy.html` | `30 calendar days` | Standard window to submit billing review |
| Refund Review Turnaround | `refund-policy.html` | `3 business days` | Audit decision turnaround by compliance team |
| Card Return Processing | `refund-policy.html` | `5–10 business days` | Bank posting timeline via Stripe |

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
