# LDD Navigator

A resource for professionals working with people who have learning difficulties and disabilities in the justice system.

**Live site:** [lddnavigator.pages.dev](https://lddnavigator.pages.dev)

## About

LDD Navigator helps identify behaviours that may indicate a learning difficulty, understand what might be causing them, and find practical strategies to help. Originally developed in 2013 for prison staff and professionals working with offenders who have learning difficulties and disabilities.

This is a recreation of the original website from archived design documents, released under a Creative Commons Attribution (CC BY) license.

## Current Status

✅ **Complete** - The site is fully functional and deployed.

### Implemented Features

#### Core Content
- **Behaviour profiles** - 9 behaviours with descriptions, related difficulties, and strategies
- **Difficulty information** - 4 conditions: dyslexia, autism, ADHD, and dyspraxia
- **Practical strategies** - 10 strategies with how-to guides and related resources
- **Interactive home page** - Behaviour navigator that shows related difficulties and strategies
- **Did You Know tips** - Rotating accessibility tips with prev/next navigation

#### Search & Navigation
- **Full-text search** - Search across all difficulties, behaviours, and strategies
- **URL query support** - Direct links to search results (e.g., `/search?q=reading`)
- **Breadcrumb navigation** - Clear navigation path on all pages
- **Responsive design** - Works on desktop, tablet, and mobile

#### Accessibility Features (WCAG Compliance)
- **Font size controls** - +/- buttons to adjust text size (100% to 200%)
- **Persistent preferences** - Font size saved in localStorage
- **Text-to-speech (TTS)** - Built-in screen reader using Web Speech API
  - Click any content block to read it aloud
  - Play button to read entire page
  - Pause, skip, and stop controls
  - Visual highlighting of currently reading section
  - Hover highlighting shows clickable blocks when TTS is active
- **Reflow support** - Content reflows properly up to 400% zoom (WCAG 1.4.10)
- **Keyboard navigation** - Escape key closes TTS panel

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 - Styling
- [Lucide](https://lucide.dev/) - Icons
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting
- Web Speech API - Text-to-speech functionality

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

### Deployment

The site is deployed to Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist --project-name=lddnavigator
```

## Project Structure

```
src/
├── components/       # Reusable Astro components
│   ├── Header.astro        # Site header with nav, search, font controls
│   ├── Footer.astro        # Site footer with links
│   ├── HeroSection.astro   # Home page hero with 3-column layout
│   ├── TextToSpeech.astro  # TTS accessibility component
│   ├── PageHeader.astro    # Page title and breadcrumbs
│   ├── ContentSection.astro
│   └── NavigationSidebar.astro
├── data/            # Content data files
│   ├── behaviours.ts
│   ├── difficulties.ts
│   └── strategies.ts
├── layouts/         # Page layouts
│   └── Layout.astro
├── pages/           # Route pages
│   ├── index.astro       # Home page with behaviour navigator
│   ├── about.astro       # About page with recreation info
│   ├── search.astro      # Search page
│   ├── resources.astro   # Resources page
│   ├── behaviours/       # Behaviour listing and detail pages
│   ├── difficulties/     # Difficulty listing and detail pages
│   └── strategies/       # Strategy listing and detail pages
└── styles/          # Global styles
    └── global.css        # Theme colors, font size classes, base styles
```

## Content

The site content is stored in TypeScript files in `src/data/`:

- **behaviours.ts** - Observable behaviours that may indicate learning difficulties
- **difficulties.ts** - Information about specific conditions (dyslexia, autism, ADHD, dyspraxia)
- **strategies.ts** - Practical strategies and accommodations

Each entry includes descriptions, related items, and cross-references.

### Content Statistics

| Type | Count |
| :--- | :---- |
| Behaviours | 9 |
| Difficulties | 4 |
| Strategies | 10 |
| Did You Know tips | 10 |

## Accessibility

This site was built with accessibility as a core requirement, given its target audience of professionals working with people who have learning difficulties.

### WCAG 2.1 Compliance

- **1.4.4 Resize Text** - Text can be resized up to 200% using built-in controls
- **1.4.10 Reflow** - Content reflows at 400% zoom without horizontal scrolling
- **1.4.12 Text Spacing** - Supports user text spacing adjustments
- **2.1.1 Keyboard** - All functionality available via keyboard
- **2.4.1 Bypass Blocks** - Skip navigation and clear heading structure

### Text-to-Speech

The built-in TTS feature uses the browser's Web Speech API:
- No external services required
- Works offline once page is loaded
- Automatically hidden if browser doesn't support speech synthesis

## License

The content is available under a **Creative Commons Attribution (CC BY)** license.

You are free to:
- **Share** - copy and redistribute the material in any medium or format
- **Adapt** - remix, transform, and build upon the material for any purpose, even commercially

As long as you give appropriate credit to the original LDD Navigator project.

## Credits

### Original Project

The original LDD Navigator was developed in partnership with:
- Dyslexia Action
- National Autistic Society

### Recreation

This recreation was created by [Dominik Lukeš](https://dominiklukes.net) in 2025 using [Claude Code](https://claude.ai/code) from original design documents and content from the 2013 LDD Navigator project.

## Changelog

### February 2025
- Initial recreation from 2013 design documents
- Implemented all core content pages
- Added search functionality
- Added font size controls for accessibility
- Added text-to-speech with visual highlighting
- Deployed to Cloudflare Pages
