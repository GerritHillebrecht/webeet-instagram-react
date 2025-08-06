import type { Story as StoryType } from '~/schemas/story.schema';
import { Story } from './Story';
import { cn } from '~/lib/utils';

export function Stories({
  stories = Array.from({ length: 10 }),
  className,
  highlightClassName,
  allSeen = false,
}: {
  stories?: StoryType[];
  className?: string;
  highlightClassName?: string;
  allSeen?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex items-center flex-row gap-x-6 overflow-x-auto px-4 scrollbar-hide',
        className
      )}
    >
      {stories.map((story, index) => (
        <Story
          className={highlightClassName}
          key={story?.id ?? index}
          story={story}
          isUnseen={!allSeen}
        />
      ))}
    </div>
  );
}
