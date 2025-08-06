import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/Card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Flag,
  UserMinus,
  Copy,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

interface InstagramCardProps {
  // User information
  username?: string;
  userAvatar?: string;
  userAvatarFallback?: string;
  isVerified?: boolean;

  // Post content
  id?: number;
  imageUrl?: string;
  imageAlt?: string;
  caption?: string;

  // Engagement - initial values instead of current state
  initialLikesCount?: number;
  commentsCount?: number;
  initialIsLiked?: boolean;
  initialIsBookmarked?: boolean;

  // Metadata
  timeAgo?: string;
  location?: string;

  // Optional callbacks for external handling
  onLikeChange?: (isLiked: boolean, newCount: number) => void;
  onBookmarkChange?: (isBookmarked: boolean) => void;
  onComment?: () => void;
  onShare?: () => void;
  onFollow?: () => void;
}

export default function PostCard({
  username = 'username',
  userAvatar,
  userAvatarFallback,
  isVerified = false,
  imageUrl = 'https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Instagram post',
  id,
  caption = 'Dies ist ein Beispiel-Post...',
  initialLikesCount = 0,
  commentsCount = 0,
  initialIsLiked = false,
  initialIsBookmarked = false,
  timeAgo = 'Vor 1 Stunde',
  location,
  onLikeChange,
  onBookmarkChange,
  onComment,
  onShare,
  onFollow,
}: InstagramCardProps) {
  const avatarFallback = userAvatarFallback || username.charAt(0).toUpperCase();

  // Internal state management
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);

  // Internal handlers
  const handleLike = () => {
    const newIsLiked = !isLiked;
    const newCount = newIsLiked ? likesCount + 1 : likesCount - 1;
    setIsLiked(newIsLiked);
    setLikesCount(newCount);
    onLikeChange?.(newIsLiked, newCount);
  };

  const handleBookmark = () => {
    const newIsBookmarked = !isBookmarked;
    setIsBookmarked(newIsBookmarked);
    onBookmarkChange?.(newIsBookmarked);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-none gap-1 py-0">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={
                userAvatar ||
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={`@${username}`}
            />
            <AvatarFallback className="text-xs">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <NavLink
                to={`/${username}`}
                className="text-sm font-semibold hover:opacity-70 transition-opacity"
              >
                {username}
              </NavLink>
              {isVerified && (
                <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              )}
            </div>
            {location && (
              <span className="text-xs text-muted-foreground">{location}</span>
            )}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <MoreHorizontal className="w-5 h-5" />
              <span className="sr-only">Mehr Optionen</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onFollow}>
              <UserMinus className="w-4 h-4 mr-2" />
              Folgen
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              Link kopieren
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Flag className="w-4 h-4 mr-2" />
              Melden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* Image Content */}
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={imageUrl || '/placeholder.svg'}
            alt={imageAlt}
            style={{ viewTransitionName: `post-image-${id || 1}` }}
            className="object-cover absolute inset-0 w-full h-full"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-start px-3 py-2 gap-2">
        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={handleLike}>
              <Heart
                className={`${isLiked ? 'fill-red-500 text-red-500' : ''}`}
              />
              <span className="sr-only">Gefällt mir</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={onComment}>
              <MessageCircle />
              <span className="sr-only">Kommentieren</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={onShare}>
              <Send />
              <span className="sr-only">Teilen</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 p-0"
            onClick={handleBookmark}
          >
            <Bookmark
              className={`w-6 h-6 ${isBookmarked ? 'fill-current' : ''}`}
            />
            <span className="sr-only">Speichern</span>
          </Button>
        </div>

        {/* Likes Count */}
        {likesCount > 0 && (
          <div className="text-sm font-semibold">
            {likesCount.toLocaleString('de-DE')} Gefällt mir-Angaben
          </div>
        )}

        {/* Caption */}
        <div className="text-sm">
          <NavLink to={`/${username}`} className="font-semibold mr-2">
            {username}
          </NavLink>
          <span className="break-words">
            {caption.length > 100 ? (
              <>
                {caption.substring(0, 100)}...{' '}
                <button className="text-muted-foreground">mehr</button>
              </>
            ) : (
              caption
            )}
          </span>
        </div>

        {/* Comments Count */}
        {commentsCount > 0 && (
          <button
            className="text-sm text-muted-foreground hover:opacity-70 transition-opacity"
            onClick={onComment}
          >
            Alle {commentsCount} Kommentare ansehen
          </button>
        )}

        {/* Time */}
        <div className="text-xs text-muted-foreground uppercase">{timeAgo}</div>
      </CardFooter>
    </Card>
  );
}
