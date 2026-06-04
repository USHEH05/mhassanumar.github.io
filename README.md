# Muhammad Hassan Umar — Portfolio
## Setup & Maintenance Guide

---

## Initial Setup (First time only)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `mhassanumar.github.io` (this exact name makes GitHub Pages work automatically)
4. Set it to **Public**
5. **Do NOT** check "Add a README file" (we already have one)
6. Click **Create repository**

### Step 2 — Connect your local folder to GitHub

Open VS Code, open a terminal (`Ctrl + `` ` ``), and run these commands one by one:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/mhassanumar.github.io.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**, folder: **/ (root)**
6. Click **Save**

Your site will be live at: `https://YOUR-GITHUB-USERNAME.github.io` within 2–5 minutes.

---

## Adding Your Personal Photo

1. Save your photo as `profile.jpg` (a clean, professional headshot)
2. Place it at: `assets/img/profile.jpg`
3. Open `index.html`
4. Find this comment block:
   ```html
   <!-- Replace with: <img src="assets/img/profile.jpg" alt="Muhammad Hassan Umar" /> -->
   <div class="photo-placeholder-inner">
   ```
5. Replace the entire `<div class="photo-placeholder-inner">...</div>` block with:
   ```html
   <img src="assets/img/profile.jpg" alt="Muhammad Hassan Umar" />
   ```

---

## Adding Your CV

1. Save your CV as `hassan-cv.pdf`
2. Place it at: `assets/cv/hassan-cv.pdf`
3. The Download CV buttons throughout the site will work automatically — no code changes needed.

---

## Adding Images to a Project Page

1. Create a folder for your project inside `assets/projects/` if it doesn't exist  
   Example: `assets/projects/stellum/`
2. Add your images to that folder  
   Example: `assets/projects/stellum/autocad-layout.jpg`
3. Open the project's HTML file (e.g., `projects/stellum.html`)
4. Find the placeholder you want to replace:
   ```html
   <div class="asset-placeholder">
     <!-- To add: <img src="../assets/projects/stellum/autocad-layout.jpg" alt="..." /> -->
     <span class="mono">AutoCAD factory layout</span>
   </div>
   ```
5. Replace the entire `<div class="asset-placeholder">...</div>` with:
   ```html
   <div class="asset-placeholder">
     <img src="../assets/projects/stellum/autocad-layout.jpg" alt="Six-zone factory layout AutoCAD drawing" />
   </div>
   ```

---

## Adding a New Project Card (main page)

Open `index.html` and find this comment:

```html
<!-- ADD NEW PROJECT CARD HERE — copy the block below and fill in your details -->
```

Copy the block of one of the existing project cards (from `<article class="project-card">` to the closing `</article>`) and paste it directly below the comment. Then fill in:

- `card-tags`: pick the right domain tags (see tag reference below)
- `card-date`: the year or date range
- `card-title`: project name
- `card-org`: course/organisation
- `card-desc`: 2–3 sentence description
- `result-num` / `result-label`: your key results
- `tool-tag`: tools used
- `card-link href`: path to your new project page (e.g., `projects/my-new-project.html`)

**Domain tag reference:**
```
Manufacturing:   <span class="tag tag-manufacturing">Manufacturing</span>
Industry:        <span class="tag tag-industry">Industry</span>
Data:            <span class="tag tag-data">Data Engineering</span>
Design:          <span class="tag tag-design">Design</span>
Sustainability:  <span class="tag tag-sustainability">Sustainability</span>
Experimental:    <span class="tag tag-experimental">Experimental</span>
Aerodynamics:    <span class="tag tag-aero">Aerodynamics</span>
Computational:   <span class="tag tag-computational">Computational</span>
```

---

## Creating a New Project Case Study Page

1. Go to `projects/` folder
2. Copy `_template.html` and rename it to your project (e.g., `my-new-project.html`)
3. Open the file and fill in every section marked with ALL CAPS placeholder text
4. Add images following the "Adding Images" instructions above
5. Make sure the card on `index.html` links to this file

---

## Adding a Certification

Open `index.html`, find the Education section, and find this comment:

```html
<!-- ADD CERTIFICATIONS HERE when you have them -->
```

Below it, there's a commented-out template. Remove the `<!--` and `-->` comment tags and fill in:
- `edu-date`: the year earned
- `edu-degree`: certification name
- `edu-institution`: issuing organisation

---

## Pushing Updates to the Live Site

Every time you make changes, run these three commands in the VS Code terminal:


git add .
git commit -m "Brief description of what you changed"
git push


The site updates automatically within 1–2 minutes.

---

## Folder Structure Reference

```
/
├── index.html              ← Main page (single scrollable)
├── style.css               ← All styles
├── script.js               ← Nav + mobile drawer behaviour
├── README.md               ← This file
├── assets/
│   ├── cv/
│   │   └── hassan-cv.pdf   ← Your CV (add this)
│   ├── img/
│   │   └── profile.jpg     ← Your photo (add this)
│   └── projects/
│       ├── mercedes/       ← Project image folders
│       ├── stellum/
│       ├── wind-tunnel/
│       └── matlab-app/
└── projects/
    ├── _template.html      ← Copy this for new projects
    ├── mercedes.html
    ├── stellum.html
    ├── wind-tunnel.html
    └── matlab-app.html
```
