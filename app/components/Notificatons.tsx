import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { ArrowLeft, Heart, MessageCircle, UserPlus, Users } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/Sheet';

interface Notification {
  id: number;
  user: string;
  avatar: string;
  action: string;
  time: string;
  type:
    | 'thread'
    | 'channel_invite'
    | 'comment_like'
    | 'reply'
    | 'follow'
    | 'poll';
  hasPreview: boolean;
  previewImage?: string;
  verified?: boolean;
  showFollowButton?: boolean;
}

const mockNotifications = {
  followerRequests: {
    count: 131,
    users: ['_mohitbuilds', 'and 130 others'],
  },
  today: [
    {
      id: 1,
      user: 'itsmahluna',
      avatar: '/woman-profile.png',
      action: 'posted a thread you might like.',
      time: '1h',
      type: 'thread',
      hasPreview: false,
    },
  ] as Notification[],
  yesterday: [
    {
      id: 2,
      user: 'shai.hq',
      avatar: '/man-profile.png',
      action:
        'armankashanishow and 8 other creators invited you to their channels.',
      time: '1d',
      type: 'channel_invite',
      hasPreview: false,
    },
  ] as Notification[],
  lastWeek: [
    {
      id: 3,
      user: 'orty19',
      avatar: '/young-man-contemplative.png',
      action:
        'metana_nima and birdieappdev liked your comment: Dude, make it horizontally scrollable, wtf is this',
      time: '1d',
      type: 'comment_like',
      hasPreview: true,
      previewImage: '/code-screenshot.png',
    },
    {
      id: 4,
      user: 'alessandraambrosio',
      avatar: '/woman-model.png',
      action: 'posted a thread you might like: Paradise: found. 🏝️🥥🍌',
      time: '3d',
      type: 'thread',
      hasPreview: true,
      previewImage: '/beach-paradise.png',
      verified: true,
    },
    {
      id: 5,
      user: 'aitrendz.xyz',
      avatar: '/tech-profile.png',
      action:
        "replied to your comment on aitrendz.xyz's post: Done. Please see DMs.",
      time: '6d',
      type: 'reply',
      hasPreview: true,
      previewImage: '/ai-technology-concept.png',
      verified: true,
    },
  ] as Notification[],
  following: [
    {
      id: 6,
      user: 'pica_pan',
      avatar: '/generic-cartoon-character.png',
      action: 'started following you.',
      time: '1w',
      type: 'follow',
      hasPreview: false,
      showFollowButton: true,
    },
  ] as Notification[],
  lastMonth: [
    {
      id: 7,
      user: 'tech_wizzdom',
      avatar: '/tech-expert-diverse.png',
      action: 'Latest poll results from',
      time: '1w',
      type: 'poll',
      hasPreview: true,
      previewImage: '/poll-results.png',
      verified: true,
    },
  ] as Notification[],
};

export default function InstagramNotificationsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Heart className="h-4 w-4" />
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
          </SheetHeader>

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6 pb-20">
              {/* Follower Requests */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/multiple-users.png" />
                      <AvatarFallback>
                        <Users className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      <UserPlus className="h-3 w-3" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Follow Requests</p>
                    <p className="text-sm text-gray-600">
                      {mockNotifications.followerRequests.users.join(' and ')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  <ArrowLeft className="h-4 w-4 rotate-180 text-gray-400" />
                </div>
              </div>

              {/* Today */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Today</h3>
                {mockNotifications.today.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>

              {/* Yesterday */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Yesterday</h3>
                {mockNotifications.yesterday.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>

              {/* Last 7 Days */}
              <div>
                <h3 className="font-semibold text-lg mb-3">This Week</h3>
                {mockNotifications.lastWeek.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>

              {/* Following */}
              <div>
                {mockNotifications.following.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <NotificationItem notification={notification} />
                    {notification.showFollowButton && (
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        Following
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Last 30 Days */}
              <div>
                <h3 className="font-semibold text-lg mb-3">This Month</h3>
                {mockNotifications.lastMonth.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NotificationItem({ notification }: { notification: Notification }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="relative">
        <Avatar className="h-10 w-10">
          <AvatarImage src={notification.avatar || '/placeholder.svg'} />
          <AvatarFallback>{notification.user[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        {notification.type === 'thread' && (
          <div className="absolute -bottom-1 -right-1 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center">
            <MessageCircle className="h-3 w-3" />
          </div>
        )}
        {notification.type === 'comment_like' && (
          <div className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
            <Heart className="h-3 w-3 fill-current" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-semibold">
                {notification.user}
                {notification.verified && (
                  <span className="text-blue-500 ml-1">✓</span>
                )}
              </span>{' '}
              <span className="text-gray-700">{notification.action}</span>{' '}
              <span className="text-gray-500">{notification.time}</span>
            </p>

            {notification.type === 'reply' && (
              <div className="flex items-center gap-2 mt-2">
                <Heart className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Reply</span>
              </div>
            )}
          </div>

          {notification.hasPreview && (
            <div className="ml-3 flex-shrink-0">
              <img
                src={notification.previewImage || '/placeholder.svg'}
                alt="Preview"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
