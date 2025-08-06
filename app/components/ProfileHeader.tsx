import type { Story } from '~/schemas/story.schema';
import { Stories } from './Stories';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Button } from './ui/Button';

export function ProfileHeader({ highlights }: { highlights: Story[] }) {
  return (
    <div className="">
      <div className="grid grid-cols-[max-content_auto] gap-5 lg:gap-8 py-4 px-4">
        <Avatar className="w-20 h-20 lg:w-32 lg:h-32">
          <AvatarImage
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <div className="pt-2">
          <h2 className="mb-2 font-bold text-sm md:text-base">
            Gerrit Hillebrecht
          </h2>
          <div className="w-full grid items-center grid-cols-3 gap-x-4 lg:min-w-2xl md:w-fit">
            <div>
              <p className="font-bold lg:text-lg">264</p>
              <p className="text-xs lg:text-sm opacity-75">Posts</p>
            </div>
            <div>
              <p className="font-bold lg:text-lg">1.2k</p>
              <p className="text-xs lg:text-sm opacity-75">Followers</p>
            </div>
            <div>
              <p className="font-bold lg:text-lg">1.3k</p>
              <p className="text-xs lg:text-sm opacity-75">Following</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2 mb-2 lg:mb-0 mt-2 px-4">
        Frontend Developer
      </div>
      <div className="grid grid-cols-2 items-center gap-x-2 mb-2 lg:mb-0 px-4">
        <Button variant="secondary">Follow</Button>
        <Button variant="secondary">Message</Button>
      </div>
      <Stories className="py-4" stories={highlights} allSeen={true} />
    </div>
  );
}
