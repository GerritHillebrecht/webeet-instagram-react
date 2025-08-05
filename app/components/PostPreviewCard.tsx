import type { Post } from '~/schemas';

export function PostPreviewCard({ post }: { post: Post }) {
  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden bg-white">
      <img
        src={post.img_url}
        alt={post.caption || 'Instagram post'}
        className="w-full h-auto aspect-[9/12] object-cover object-center"
      />
    </div>
  );
}
