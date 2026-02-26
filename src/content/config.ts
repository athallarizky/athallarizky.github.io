import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  // Type-safe frontmatter schema
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Export collections
export const collections = { blog };
