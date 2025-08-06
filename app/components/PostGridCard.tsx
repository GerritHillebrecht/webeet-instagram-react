import { NavLink } from 'react-router';
import type { Post } from '~/schemas';

export function PostGridCard({ post }: { post: Post }) {
  return (
    <NavLink to={`/posts/${post.id}`}>
      <div className="relative w-full max-w-lg mx-auto overflow-hidden bg-white">
        <img
          style={{ viewTransitionName: `post-image-${post.id || 1}` }}
          src={post.img_url}
          alt={post.caption || 'Instagram post'}
          className="w-full h-auto aspect-[9/12] object-cover object-center"
        />
      </div>
    </NavLink>
  );
}
