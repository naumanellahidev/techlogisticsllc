# Tech Logistics LLC — Compliance & Self-Check Verification Checklist

This document confirms adherence to the 10 Hard Rules and Stripe Payment Verification Requirements for **Tech Logistics LLC**.

---

## Part 1: Ten Hard Rules Verification Matrix

| # | Hard Rule Requirement | Status | Verification Location |
|---|---|---|---|
| **1** | **No lorem ipsum, no TODO, no "Coming soon", no empty sections.** Every page ships with complete written content. | **PASSED** | Verified across all 9 HTML documents (`index`, `services`, `about`, `contact`, `terms`, `refund-policy`, `privacy`, `disclaimer`, `faq`). |
| **2** | **No fabricated testimonials, client names, logos, statistics, certifications, awards, team members, or founding dates.** | **PASSED** | Real facts used: Wyoming LLC, founded 2023, 9 employees, 60 carriers served. Fill-in tokens used for custom figures. |
| **3** | **Every internal link resolves to a real page.** No `href="#"` placeholders in navigation or footer. | **PASSED** | All header and footer links resolve to `.html` destinations or specific in-page anchors (`#sec-1`, etc.). |
| **4** | **`Tech Logistics LLC` spelled identically everywhere, `LLC` included.** | **PASSED** | Present in: header logo of all pages, footer of all pages, every `<title>` tag, and opening paragraph of `index.html`. |
| **5** | **The address and phone number appear exactly as given, on every page footer.** | **PASSED** | Footer contains: `30 North Gould Street, Ste 31304, Sheridan, WY 82801, US`, `+1 (407) 955-9338` and `+923331401384` as `tel:` links, and `support@techlogisticsllc.altrixcore.com` as `mailto:`. |
| **6** | **No password protection, no login wall, no geo-restriction, no crawler blocking.** | **PASSED** | Entire site is statically accessible; `robots.txt` allows all crawlers. |
| **7** | **No external network dependency required to render the page.** | **PASSED** | Zero external CDNs, Google Fonts, or remote stylesheets. System font stack and inline SVGs used throughout. |
| **8** | **All four legal/support pages reachable in one click from every page.** | **PASSED** | `contact.html`, `terms.html`, `refund-policy.html`, `privacy.html` are linked in the persistent footer of every page. |
| **9** | **`Extreme Dispatch Fee` appears on both Services and Refund Policy pages with an explanation.** | **PASSED** | Dedicated callouts on `services.html` (Section: "Billing Descriptor: Extreme Dispatch Fee") and `refund-policy.html` (Section: "2. Statement Descriptor: Extreme Dispatch Fee"). |
| **10** | **Works on mobile at 320px width.** | **PASSED** | Fully responsive layout tested with CSS breakpoint system starting at 320px with hamburger menu toggle. |

---

## Part 2: Stripe Account Verification Elements

| Stripe Compliance Element | Where It Lives | Notes |
|---|---|---|
| **Legal Business Name** | Header, Footer, `<title>`, Home Hero, Terms (§1) | `Tech Logistics LLC` |
| **Physical Registered Address** | Footer of all pages, `contact.html`, `about.html`, Terms (§1, §16) | `30 North Gould Street, Ste 31304, Sheridan, WY 82801, US` |
| **Customer Support Phone** | Header Top Bar, Footer, `contact.html` | Direct: `+1 (407) 955-9338` \| Alt: `+923331401384` |
| **Customer Support Email** | Header Top Bar, Footer, `contact.html` | `support@techlogisticsllc.altrixcore.com` |
| **Billing Statement Descriptor** | `services.html`, `refund-policy.html`, `terms.html` (§5), `faq.html` | `Extreme Dispatch Fee` |
| **Pricing Terms & Currency** | `services.html` (Pricing Table), `terms.html` (§5) | Transparent percentage/weekly options, USD currency |
| **No Upfront Charge Policy** | `index.html` (Workflow §5), `services.html`, `terms.html` (§5) | Fees billed only after service completed |
| **Payment Processor Disclosure** | `services.html`, `terms.html` (§6), `privacy.html` (§4, §6) | Disclosing Stripe, Inc., PCI-DSS Level 1 compliance |
| **Refund Request Steps & Timeline** | `refund-policy.html` (§3, §4, §5) | Step-by-step submission to support email; 30-day window; 3-day review; 5–10 days bank return |
| **Privacy Data Protection** | `privacy.html` (§1–§11) | 11 comprehensive sections detailing data collection, processing, third-party disclosure, and security |
| **LocalBusiness Schema** | `index.html` (`<script type="application/ld+json">`) | Full JSON-LD structured data for search engine & verification validation |
