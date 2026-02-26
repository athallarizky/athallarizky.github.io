# Athallari Zky | Tech Blog

A modern, high-performance Astro tech blog optimized for GitHub Pages deployment.

## 🚀 Features

- **Astro 4** — Latest static site generation
- **TypeScript** — Full type safety
- **Dark Mode** — Toggle with localStorage persistence
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards
- **RSS Feed** — Auto-generated from content collections
- **Sitemap** — Automatic sitemap generation
- **Syntax Highlighting** — Shiki-powered code blocks
- **Copy-to-Clipboard** — For all code blocks
- **Responsive** — Mobile-first design
- **Fast** — Zero JavaScript by default

## 📁 Project Structure

```
athallarizky.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
├── public/                 # Static assets
│   ├── favicon.svg
│   └── rss.xsl            # RSS stylesheet
├── src/
│   ├── components/        # Reusable components
│   │   ├── CodeBlock.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── SEO.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   ├── blog/          # Blog posts (Markdown/MDX)
│   │   │   └── first-post.md
│   │   └── config.ts      # Content collections schema
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro
│   │   ├── rss.xml.js     # RSS feed endpoint
│   │   └── blog/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs       # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to see the site.

## ✍️ Creating Content

### Blog Posts

Create a new file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2024-02-27
category: 'Technology'
tags: ['astro', 'webdev']
featured: false
draft: false
---

Your content here...
```

### Frontmatter Reference

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `title` | string | Yes | - | Post title |
| `description` | string | Yes | - | SEO description |
| `pubDate` | Date | Yes | - | Publish date |
| `updatedDate` | Date | No | - | Last updated date |
| `heroImage` | string | No | - | Cover image path |
| `category` | string | No | "General" | Post category |
| `tags` | string[] | No | [] | Post tags |
| `draft` | boolean | No | false | Exclude from build |
| `featured` | boolean | No | false | Show in featured section |

## 🚢 GitHub Pages Deployment

### Root Deployment (`username.github.io`)

This is the default configuration. Edit `astro.config.mjs`:

```javascript
const IS_ROOT_DEPLOYMENT = true; // ✅ Already set

export default defineConfig({
  site: 'https://athallarizky.github.io/',
  base: '', // Empty for root deployment
  // ... rest of config
});
```

### Project Deployment (`username.github.io/blog`)

Edit `astro.config.mjs`:

```javascript
const IS_ROOT_DEPLOYMENT = false; // Change to false

export default defineConfig({
  site: 'https://athallarizky.github.io/',
  base: '/blog', // Add your subdirectory
  // ... rest of config
});
```

### Initial Setup

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Configure GitHub Pages**

   - Go to **Settings** > **Pages**
   - Set **Source** to **GitHub Actions**
   - Save

3. **Verify Deployment**

   - Go to **Actions** tab
   - Watch the workflow run
   - Site will be live at `https://athallarizky.github.io/`

## 🌐 Custom Domain (Optional)

### Setup

1. **Add CNAME file**

```bash
echo "blog.yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

2. **Configure DNS**

   Add a CNAME record pointing to `athallarizky.github.io`:

   ```
   Type: CNAME
   Name: blog
   Value: athallarizky.github.io
   ```

3. **Update GitHub Pages**

   - Go to **Settings** > **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS**

## 🔧 Configuration

### Astro Config

Key settings in `astro.config.mjs`:

- **Sitemap**: Auto-generated via `@astrojs/sitemap`
- **Markdown**: Shiki syntax highlighting with GitHub Dark theme
- **Tailwind**: Integrated for utility classes (optional)
- **Build Output**: Static files in `./dist`

### Theme Customization

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-bg: #0a0a0a;
  --color-accent: #22d3ee;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 📊 Performance

This blog is optimized for:

- **Lighthouse Score**: 95-100 across all metrics
- **Core Web Vitals**: Pass all thresholds
- **Bundle Size**: Minimal JavaScript
- **First Paint**: Optimized CSS delivery
- **Accessibility**: Semantic HTML, ARIA labels

## 📝 License

MIT © Athallari Zky

## 🤝 Contributing

This is a personal blog, but feel free to use this as a template for your own!
