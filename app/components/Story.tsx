import { cn } from '~/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import type { Story } from '~/schemas/story.schema';
import { Link } from 'react-router';

interface HighlightProps {
  story: Story;
  className?: string;
  isUnseen?: boolean;
}

const DEFAULT_STORY_IMAGE =
  'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const DEFAULT_STORY_TITLE = 'Highlight';

export function Story({ story, className, isUnseen = true }: HighlightProps) {
  const src = story?.posts?.[0]?.img_url || DEFAULT_STORY_IMAGE;
  return (
    <Link
      to={`/stories/${story.id}`}
      className="flex items-center justify-center flex-col gap-1"
    >
      <div
        className={cn(
          'rounded-full p-1 bg-gray-400/40',
          isUnseen &&
            'bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500'
        )}
      >
        <div className="p-1 bg-background rounded-full flex items-center justify-center">
          <Avatar className={cn('w-14 h-14', className)}>
            <AvatarImage
              className="object-cover object-center"
              src={src}
              alt={story?.title || DEFAULT_STORY_TITLE}
            />
            <AvatarFallback>Story</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <p className="text-center text-sm line-clamp-1">
        {story?.title || DEFAULT_STORY_TITLE}
      </p>
    </Link>
  );
}
