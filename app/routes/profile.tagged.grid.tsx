import { useLoaderData } from 'react-router';
import { PostGridCard } from '~/components/PostGridCard';
import { postsSchema, type Post } from '~/schemas/post.schema';
import { api } from '~/services/api';

export async function loader() {
  try {
    const response = await api.get('/posts');
    return postsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load posts:', error);
    throw new Response('Could not load posts.', { status: 500 });
  }
}

export default function PostsGrid() {
  const posts = useLoaderData() as Post[];

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <PostGridCard key={post.id} post={post} />
      ))}
    </div>
  );
}
