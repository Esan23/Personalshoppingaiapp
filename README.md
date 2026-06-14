# Shortlist — Landing Page

Front-end marketing landing page for **Shortlist**, an AI shopping-decision app
that turns an overwhelming field of options into three confident, reasoned
choices. Built to the Shortlist Landing Page PRD and Brand Design System.

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS 3.4** (custom brand tokens, class-based dark mode)
- **Framer Motion** (hero animation, scroll reveals)
- **Heroicons**
- Fonts: **Inter** (UI/body) + **DM Serif Display** (headlines)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build

```bash
npm run build    # type-checks, then outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy to Netlify

Config lives in `netlify.toml` (build = `npm run build`, publish = `dist`).

**Option A — Netlify CLI (continuous, recommended):**

```bash
npm install -g netlify-cli
netlify login                 # opens browser to authorize
netlify deploy                # draft deploy (preview URL)
netlify deploy --prod         # publish to your live URL
```

On first run the CLI asks to create/link a site — choose "Create & configure a
new site," pick your team, and accept the detected build settings.

**Option B — Drag & drop (fastest one-off):**

```bash
npm run build
```

Then drag the generated `dist/` folder onto <https://app.netlify.com/drop>.

**Option C — Git-based (auto-deploy on push):** push this folder to a Git repo,
then in Netlify: *Add new site → Import an existing project*. The settings in
`netlify.toml` are picked up automatically.

## Notes

- All aggregate/performance figures (user counts, ratings, prices, testimonials)
  are **illustrative placeholders** and labeled as such in the UI — replace with
  verified data before a real launch (PRD §10).
- Choice-overload statistics (Baymard, Meta, Columbia) are real, sourced
  *category* research — framed as context, never as Shortlist's own results.
- The sign-up modal is front-end only; wire its submit handler in
  `src/components/SignUpModal.tsx` to a real auth provider / email service.
- The demo-video poster uses a branded in-app mockup
  (`src/components/AppMockup.tsx`) — swap for a captioned MP4/WebM at launch.
```
