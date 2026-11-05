# Maxora Technology — Images & Visual Assets Documentation

This document inventories all visual assets, demo animations, shared SVG graphics, and designer requirements across the 10 SEO/AEO landing pages.

---

## Shared Assets (Created & Reusable)

| File | Status | Size / Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| `/public/images/landing/shared/process-5-steps.svg` | Generated (Active) | Lightweight SVG (<2 KB) | 5 numbered milestone steps connecting with gradient line | "Maxora 5-step transparent development process" | Clean vector graphic, dark/light compatible |
| `/public/images/landing/shared/trust-strip.svg` | Generated (Active) | Lightweight SVG (<2 KB) | 4 core promises: Fixed Price, Weekly Demos, Direct Developers, Launch Support | "Maxora client trust guarantees" | Reusable trust badge bar |
| `/public/images/landing/shared/whatsapp-contact.svg` | Generated (Active) | Lightweight SVG (<1 KB) | Generic green chat-bubble contact illustration (no official logo) | "Direct WhatsApp contact icon" | Clean, non-infringing chat illustration |
| `/public/images/landing/shared/team-photo.webp` | Placeholder | WebP 1200×800 (<150 KB) | Genuine Maxora team members in Punjab office | "Maxora Technology software developers in Patiala" | **TODO for Owner**: Supply high-resolution photo of real engineering team |

---

## Page-by-Page Visuals

### 1. `/website-development-company-in-patiala`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Mobile window showing 1-second load, WhatsApp ordering, and price tag | "Fast business website on mobile for Patiala shop owner" | Inline CSS component, zero layout shift |
| Interactive Demo | Generated (Active) | Framer Motion Component | Interactive comparison: Slow Old Template vs Fast Maxora Website | "Interactive speed and customer conversion comparison" | Located at `components/landing/demos/PatialaTransformationDemo.tsx` |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 OpenGraph social share card | "Website Development Company in Patiala - Maxora" | Dynamic edge generation at `app/[slug]/opengraph-image.tsx` |

### 2. `/website-development-company-in-ludhiana`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Industrial catalogue layout with Request for Quote (RFQ) button | "Industrial product catalogue on mobile for Ludhiana manufacturer" | Vector card in hero |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Ludhiana | "Website Development Company in Ludhiana - Maxora" | Dynamic edge generation |

### 3. `/website-development-company-in-chandigarh`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Clean clinic and consulting service cards with instant WhatsApp booking | "Modern consulting and clinic website for Chandigarh business" | Clean vector mock |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Chandigarh/Tricity | "Website Development Company in Chandigarh - Maxora" | Dynamic edge generation |

### 4. `/affordable-website-development-company-in-india`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | 3 transparent package tiers highlighting zero monthly fees | "Affordable business website packages with zero recurring fees" | Clean vector card |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Affordable India | "Affordable Website Development Company in India - Maxora" | Dynamic edge generation |

### 5. `/ecommerce-website-development-company-in-india`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Product card with instant UPI QR checkout and WhatsApp order alerts | "Online store with instant UPI checkout for Indian shoppers" | Clean responsive mock |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for eCommerce India | "eCommerce Website Development Company in India - Maxora" | Dynamic edge generation |

### 6. `/mobile-app-development-company-in-punjab`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Dual phone mockup showing Android & iOS native app screens | "Custom Android and iOS mobile app interface in Punjab" | Fast CSS mockup |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Punjab mobile apps | "Mobile App Development Company in Punjab - Maxora" | Dynamic edge generation |

### 7. `/custom-crm-software-for-small-business`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Visual lead pipeline board with one-click WhatsApp follow-ups | "Custom CRM lead pipeline dashboard for small business" | Responsive CSS UI |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Custom CRM | "Custom CRM Software for Small Business - Maxora" | Dynamic edge generation |

### 8. `/whatsapp-automation-and-chatbot-services-in-india`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Interactive WhatsApp chat bubble flow with instant catalogue buttons | "Automated WhatsApp business assistant taking customer inquiries" | Generic green chat UI |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for WhatsApp Automation | "WhatsApp Automation & Chatbot Services in India - Maxora" | Dynamic edge generation |

### 9. `/seo-and-ai-search-optimization-services-in-india`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Search result card + AI answer quoting business phone and address | "Google search result and AI assistant citing local business" | Clean preview card |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for SEO & AEO | "SEO & AI Search Optimization Services in India - Maxora" | Dynamic edge generation |

### 10. `/website-redesign-services-in-india`
| File / Component | Status | Format | What it shows | Alt text | Notes |
|---|---|---|---|---|---|
| Hero Visual | Generated (Active) | HTML/CSS Component | Split screen comparing 6-second slow old site vs 1-second modern site | "Website redesign before and after speed comparison" | Visual comparison mock |
| OG Card | Generated (Active) | Edge ImageResponse | Branded 1200×630 social card for Redesign Services | "Website Redesign Services in India - Maxora" | Dynamic edge generation |

---

## Summary of Assets

- **Total Landing Pages Configured**: 10 pages live.
- **Demos Built as Code**: Interactive Framer Motion comparison toggle component at `components/landing/demos/PatialaTransformationDemo.tsx`. Zero external heavy video or GIF bloat.
- **Social OG Images**: 100% dynamically generated at edge via `app/[slug]/opengraph-image.tsx` using brand Navy (`#050A15`), Electric Blue (`#056BFF`), and Cyan (`#00D5F2`).
- **TODO for Business Owner**:
  1. Real team photo for `/public/images/landing/shared/team-photo.webp`.
  2. Final confirmation of starting package prices in the data files if needed.
