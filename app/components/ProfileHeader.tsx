import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Button } from './ui/Button';

export function ProfileHeader() {
  return (
    <div className="px-4">
      <div className="grid grid-cols-[max-content_auto] gap-5 lg:gap-8 py-4">
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
      <div className="flex items-center gap-x-2 mb-2 lg:mb-0 mt-2">
        Frontend Developer
      </div>
      <div className="grid grid-cols-2 items-center gap-x-2 mb-2 lg:mb-0">
        <Button >Follow</Button>
        <Button>Message</Button>
      </div>
      <div className="flex items-center flex-row my-4">
        <div className="flex items-center justify-center flex-col gap-1">
          <Avatar className="w-16 h-16">
            <AvatarImage
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=1766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <p className="text-center text-sm">Real Estate</p>
        </div>
      </div>
    </div>
  );
}
