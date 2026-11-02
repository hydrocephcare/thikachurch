# Project: KenyaAdverts web agency site (brand file: constants.ts)

## Deployment & SEO
- The live site (www.kenyaadverts.co.ke) is served by Vercel from this repo, not by Lovable hosting. Server-level behavior (redirects, headers, SPA rewrites) lives in `vercel.json` and only takes effect on the next Vercel deploy.
- The SPA serves HTTP 200 with a noindex "not found" page for every unknown URL (see `rewrites`). Therefore any removed or renamed public URL MUST get a `"permanent": true` redirect in `vercel.json`, otherwise Google flags it as Soft 404 / Page with redirect. Never add broad patterns that could shadow live blog slugs.
