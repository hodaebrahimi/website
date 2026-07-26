# hodaebrahimi.github.io/website

Personal portfolio site for Hoda Ebrahimi — PhD student in Computing Science at the University of Alberta.

Live at: https://hodaebrahimi.github.io/website/

## Stack

Plain HTML/CSS/JS, no build step or dependencies.

- `index.html` — page structure (sidebar + content sections)
- `styles.css` — styling
- `script.js` — all page content lives in the `profile` object at the top of this file; it renders every section (skills, education, research, projects, teaching, work experience, awards, etc.) into the DOM on load
- `profile.jpg` — profile photo shown in the sidebar

## Editing content

All text content is data-driven from the `profile` object in `script.js`. To update anything (a new project, a new award, changed dates), edit the relevant array/field there — the HTML only provides empty containers (`<div id="...">`) that `script.js` fills in.

## Running locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Hosted via GitHub Pages, serving directly from the `master` branch. Pushing to `master` triggers an automatic rebuild of the live site.
