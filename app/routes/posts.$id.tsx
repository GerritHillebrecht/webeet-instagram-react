import { useLoaderData } from 'react-router';
import PostCard from '~/components/PostCard';
import { getRelativeTime } from '~/lib/utils';
import { postSchema, type Post } from '~/schemas';
import { api } from '~/services/api';

export async function loader({ params }: { params: { id: string } }) {
  try {
    const response = await api.get(`/posts/${params.id}`);
    return postSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load posts:', error);
    throw new Response('Could not load posts.', { status: 500 });
  }
}

export default function PostsGrid() {
  const post = useLoaderData() as Post;

  if (!post) {
    return <div>Loading...</div>;
  }

  const timeAgo = getRelativeTime(post.created_at);

  return (
    <div className="grid gap-1">
      <PostCard
        caption={post.caption ?? 'No Caption'}
        imageUrl={post.img_url}
        timeAgo={timeAgo}
      />
    </div>
  );
}
