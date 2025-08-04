import { z } from 'zod';

// First, we declare a zod schema
export const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

export const postsSchema = z.array(postSchema);

// Then, we infer the TypeScript type from the Zod schema.
export type Post = z.infer<typeof postSchema>;
