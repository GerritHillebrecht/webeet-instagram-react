import { z } from 'zod';
import { postSchema } from './post.schema';

export const storySchema = z.object({
  id: z.number(),
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  user_id: z.number(),
  is_highlight: z.number().min(0).max(1).optional(),
  created_at: z.string(),
  posts: z.array(postSchema).optional(),
});

export const storiesSchema = z.array(storySchema);

export type Story = z.infer<typeof storySchema>;
