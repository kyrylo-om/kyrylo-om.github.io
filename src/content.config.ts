import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const videogames = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/games" }),
  schema: z.object({
    title: z.string()
  }),
});

const music = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/music" }),
  schema: z.object({
    title: z.string()
  }),
});

export const collections = { videogames, music };