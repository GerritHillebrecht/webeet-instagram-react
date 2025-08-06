import { useLoaderData } from 'react-router';
import { Stories } from '~/components/Stories';
import PostCard from '~/components/PostCard';
import { postsSchema, type Post } from '~/schemas';
import { storiesSchema, type Story } from '~/schemas/story.schema';
import { api } from '~/services/api';
import { getRelativeTime } from '~/lib/utils';

export async function loader() {
  try {
    const stories = await api.get('/stories');
    const parsedStories = storiesSchema.parse(stories.data);

    const posts = await api.get('/posts');
    const parsedPosts = postsSchema.parse(posts.data);
    return { parsedStories, parsedPosts };
  } catch (error) {
    console.error('Failed to load stories:', error);
    throw new Response('Could not load stories.', { status: 500 });
  }
}

export default function Home() {
  const { parsedStories: stories, parsedPosts: posts } = useLoaderData() as {
    parsedStories: Story[];
    parsedPosts: Post[];
  };

  if (!stories || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-20">
      <Stories
        stories={stories}
        highlightClassName="w-20 h-20"
        className="gap-x-4"
      />
      <div className="grid auto-rows-auto gap-y-6 mt-6">
        {posts?.map((post, index) => (
          <PostCard
            imageUrl={post.img_url}
            caption={post.caption ?? ''}
            timeAgo={getRelativeTime(post.created_at)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
