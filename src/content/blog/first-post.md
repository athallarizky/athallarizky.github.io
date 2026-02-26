---
title: 'Welcome to My Tech Blog'
description: 'Hello World! This is the first post on my new Astro-powered tech blog built for GitHub Pages.'
pubDate: 2024-02-27
category: 'Announcement'
tags: ['astro', 'web development', 'github-pages']
featured: true
draft: false
---

## Welcome!

Hello World! This is the first post on my new tech blog. I've built this using [Astro](https://astro.build) — a modern static site generator optimized for performance.

## Why Astro?

I chose Astro for several reasons:

1. **Zero JavaScript by default** — Content is rendered to static HTML
2. **Island Architecture** — Interactive components only where needed
3. **Content Collections** — Type-safe content management
4. **Great DX** — Built with TypeScript and modern tooling

## Features

This blog includes:

- Dark mode (with toggle)
- Syntax highlighting for code blocks
- Copy-to-clipboard for code
- RSS feed
- Sitemap
- SEO optimization
- Fast page loads

### Code Example

Here's how easy it is to create a new post:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

## What's Next?

I'll be writing about:

- Frontend development
- DevOps and infrastructure
- Best practices I've learned
- Tools and workflows

Stay tuned!

---

*Built with Astro 4, TypeScript, and Tailwind CSS.*
