import Messages from './Messages';
import Notifications from './Notificatons';

export function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* <h1 className="text-xl font-bold">Instagram</h1> */}
        <img src="https://www.pngkey.com/png/full/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png" alt="Instagram Logo" className="h-8 -mb-0 mt-1" />
        <div className="text-xl flex items-center gap-x-0">
          <Notifications />
          <Messages />
        </div>
      </nav>
    </header>
  );
}
