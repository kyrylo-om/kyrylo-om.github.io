import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/games" }),
  schema: ({image}) => z.object({
    title: z.string(),
    thumbnail: image(),
    url: z.string(),
    order: z.int()
  }),
});

const music = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/music" }),
  schema: ({image}) => z.object({
    title: z.string(),
    audio: z.string(),
    thumbnail: image(),
    date: z.coerce.date(),
  }),
});

export const collections = { games, music };