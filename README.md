# LDD Navigator

A resource for professionals working with people who have learning difficulties and disabilities in the justice system.

**Live site:** [lddnavigator.pages.dev](https://lddnavigator.pages.dev)

## About

LDD Navigator helps identify behaviours that may indicate a learning difficulty, understand what might be causing them, and find practical strategies to help. Originally developed in 2013 for prison staff and professionals working with offenders who have learning difficulties and disabilities.

This is a recreation of the original website from archived design documents, released under a Creative Commons Attribution (CC BY) license.

### Features

- **Behaviour profiles** - Identify behaviours like "always late" or "can't follow instructions" and understand potential causes
- **Difficulty information** - Learn about conditions including dyslexia, autism, ADHD, and dyspraxia
- **Practical strategies** - Find actionable approaches like colour-coded calendars, visual supports, and clear directions
- **Search functionality** - Search across all difficulties, behaviours, and strategies
- **Responsive design** - Works on desktop and mobile devices

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 - Styling
- [Lucide](https://lucide.dev/) - Icons
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

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
│   ├── Header.astro
│   ├── Footer.astro
│   ├── HeroSection.astro
│   └── ...
├── data/            # Content data files
│   ├── behaviours.ts
│   ├── difficulties.ts
│   └── strategies.ts
├── layouts/         # Page layouts
│   └── Layout.astro
├── pages/           # Route pages
│   ├── index.astro
│   ├── about.astro
│   ├── search.astro
│   ├── behaviours/
│   ├── difficulties/
│   └── strategies/
└── styles/          # Global styles
    └── global.css
```

## Content

The site content is stored in TypeScript files in `src/data/`:

- **behaviours.ts** - Observable behaviours that may indicate learning difficulties
- **difficulties.ts** - Information about specific conditions (dyslexia, autism, ADHD, dyspraxia)
- **strategies.ts** - Practical strategies and accommodations

Each entry includes descriptions, related items, and cross-references.

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
