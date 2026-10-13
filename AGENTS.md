# Repository Rules & Architecture Guidelines

## Folder Structure: Services Directory
- **Physical Directory**: Strictly `app/Services` (with an uppercase `S`).
- **No lowercase `app/services` directory exists on disk.** Do not attempt to rename, create, or look for an `app/services` physical folder.
- **Service Pages Location**: All service pages and components reside in `app/Services/` (e.g., `app/Services/web-development/page.tsx`, `app/Services/ai-automation/page.tsx`, etc.).
- **URL Handling**: All internal links, metadata, sitemaps, and schemas directly use `/Services` and `/Services/*`. No redirection or rewrites required.
