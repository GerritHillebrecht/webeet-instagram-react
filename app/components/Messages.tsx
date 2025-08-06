import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { ScrollArea } from '@/components/ui/ScrollArea';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/Sheet';
import { ArrowLeft, Camera, Search, Send } from 'lucide-react';

interface Message {
  id: number;
  user: string;
  avatar: string;
  preview: string;
  time: string;
  isRead: boolean;
  verified?: boolean;
  hasStory?: boolean;
  isGroup?: boolean;
  participants?: string[];
}

interface Story {
  id: number;
  user: string;
  avatar: string;
  isOwn?: boolean;
}

const mockStories: Story[] = [
  {
    id: 1,
    user: 'Your Note',
    avatar: '/user-note.png',
    isOwn: true,
  },
  {
    id: 2,
    user: 'Sarah',
    avatar: '/woman-blonde.png',
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    user: 'Alex Johnson',
    avatar: '/man-professional.png',
    preview: 'Liked a message',
    time: '1h',
    isRead: false,
  },
  {
    id: 2,
    user: 'Mike Chen',
    avatar: '/asian-man.png',
    preview: 'Shared a reel from travelblogger...',
    time: '4h',
    isRead: true,
  },
  {
    id: 3,
    user: 'David Wilson',
    avatar: '/young-man-casual.png',
    preview: 'Shared a reel from foodie.adventures...',
    time: '10h',
    isRead: true,
  },
  {
    id: 4,
    user: 'Emma Rodriguez',
    avatar: '/woman-curly-hair.png',
    preview: 'Shared a reel from fitness.motivation...',
    time: '2d',
    isRead: true,
  },
  {
    id: 5,
    user: 'Sophie Martinez',
    avatar: '/woman-young-brunette.png',
    preview: '👍 👍 👍',
    time: '3d',
    isRead: true,
  },
  {
    id: 6,
    user: 'James Thompson',
    avatar: '/man-with-detailed-beard.png',
    preview: 'Seen Friday',
    time: '',
    isRead: true,
  },
  {
    id: 7,
    user: 'James Thompson, Emma Rodriguez',
    avatar: '/woman-curly-hair.png',
    preview: 'Emma shared a reel from techreviews...',
    time: '6d',
    isRead: true,
    isGroup: true,
    participants: ['James Thompson', 'Emma Rodriguez'],
  },
  {
    id: 8,
    user: 'Ryan Mitchell | Content Creator',
    avatar: '/content-creator-verified.png',
    preview: 'Sent a message',
    time: '6d',
    isRead: true,
    verified: true,
    hasStory: true,
  },
];

export default function Messages() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Send className="rotate-12" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <SheetTitle className="text-xl font-semibold">
                gerrithillebrecht
              </SheetTitle>
            </div>
            {/* <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit3 className="h-4 w-4" />
            </Button> */}
          </SheetHeader>

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4 pb-20">
              {/* Meta AI Search */}
              <div className="relative">
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-full">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Search className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-600 text-sm">
                    Ask Meta AI or Search
                  </span>
                </div>
              </div>

              {/* Stories */}
              <div className="flex gap-4 py-2">
                {mockStories.map((story) => (
                  <div
                    key={story.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`relative ${story.isOwn ? '' : 'p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'}`}
                    >
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={story.avatar || '/placeholder.svg'} />
                        <AvatarFallback>{story.user[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-gray-600 text-center max-w-[70px] truncate">
                      {story.user}
                    </span>
                  </div>
                ))}
              </div>

              {/* Messages Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Messages</h3>
                <Button variant="ghost" className="text-blue-500 text-sm">
                  Requests
                </Button>
              </div>

              {/* Messages List */}
              <div className="space-y-1">
                {mockMessages.map((message) => (
                  <MessageItem key={message.id} message={message} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MessageItem({ message }: { message: Message }) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
      <div className="relative">
        <div
          className={`${message.hasStory ? 'p-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full' : ''}`}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={message.avatar || '/placeholder.svg'} />
            <AvatarFallback>{message.user[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <p
                className={`text-sm truncate ${!message.isRead ? 'font-semibold' : 'font-medium'}`}
              >
                {message.user}
                {message.verified && (
                  <span className="text-blue-500 ml-1">✓</span>
                )}
              </p>
            </div>
            <p
              className={`text-sm text-gray-600 truncate ${!message.isRead ? 'font-medium' : ''}`}
            >
              {message.preview}
              {message.time && <span className="ml-1">· {message.time}</span>}
            </p>
          </div>

          <div className="flex items-center gap-2 ml-3">
            {!message.isRead && (
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            )}
            <Camera className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
