# Personal portfolio — `utkarshtyagi23.github.io`

Astro + Tailwind CSS, deployed to GitHub Pages on every push to `main`.

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → ./dist
npm run preview      # preview the production build locally
```

## What lives where

```
src/
├── components/   # Nav, Hero, ProjectCard, Projects, Newsletter, Footer
├── data/
│   ├── projects.json   # ← swap projects + video links here
│   └── site.json       # ← name, tagline, links (LinkedIn / GitHub / Substack)
├── layouts/Layout.astro
├── pages/index.astro
└── styles/global.css
public/
├── videos/       # ← drop project demo MP4s here
└── posters/      # ← optional first-frame thumbnails
.github/workflows/deploy.yml   # GitHub Pages deploy
```

## Adding or swapping a project

A project entry in `src/data/projects.json` looks like this:

```json
{
  "slug": "my-new-project",
  "title": "My New Project",
  "tagline": "One-line hook",
  "description": "A paragraph or two.",
  "tags": ["Tag1", "Tag2"],
  "highlight": false,
  "video": {
    "type": "mp4",
    "src": "/videos/my-new-project.mp4",
    "poster": "/posters/my-new-project.jpg"
  },
  "links": {
    "github": "https://github.com/UtkarshTyagi23/MyRepo",
    "demo": null
  }
}
```

- `video` is **optional** — set it to `null` to render a styled gradient
  header with the project's initials instead of a video. The card still shows
  the title, tagline, description, tags, and links.
- `highlight: true` pulls the project to the top as a full-width "featured"
  card with a glow border. Use sparingly — one or two at most.
- `links.github` and `links.demo` are both optional. Leave either as `null` to
  hide the corresponding button.

### Adding a video to a project that doesn't have one

1. **Drop the MP4** into `public/videos/` — e.g. `vehicle-insurance.mp4`.
2. **(Optional)** drop a poster JPG into `public/posters/` with the same base
   name. If skipped, the browser uses the first frame.
3. **Edit `src/data/projects.json`** — change the entry's `video: null` to:
   ```json
   "video": {
     "type": "mp4",
     "src": "/videos/vehicle-insurance.mp4",
     "poster": "/posters/vehicle-insurance.jpg"
   }
   ```
4. Commit + push. The GitHub Action rebuilds and redeploys automatically.

### Using a YouTube video instead of an MP4

```json
"video": {
  "type": "youtube",
  "src": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

The component accepts both full watch URLs and embed URLs.

## Updating personal info

Edit `src/data/site.json` — name, tagline, about copy, and the LinkedIn /
GitHub / Substack URLs are all there.

## Deploying

The `.github/workflows/deploy.yml` workflow is wired up to GitHub Pages. The
**only one-time setup** in the GitHub repo settings:

> **Settings → Pages → Build and deployment → Source: GitHub Actions**

Every subsequent `git push` to `main` triggers a rebuild and redeploy.

## Notes

- Tailwind v4 via `@tailwindcss/vite` (no separate `tailwind.config.js` needed
  — theme tokens live in `src/styles/global.css` under the `@theme` block).
- Substack subscription is embedded via the official iframe.
- Site is dark by default. Restyle by editing the color tokens in
  `src/styles/global.css`.
