import {
  CircleUserRound,
  House,
  Search,
  SquarePlus,
  TvMinimalPlay
} from 'lucide-react';
import { Link } from 'react-router';

export function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-t-gray-100 ">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Link
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <House className="inline-block" />
        </Link>
        <div className="inline-flex flex-col items-center justify-center px-5">
          <Search className="inline-block" />
        </div>
        <Link
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <SquarePlus className="inline-block" />
        </Link>
        <Link
          to="/"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <TvMinimalPlay className="inline-block" />
        </Link>
        <Link
          to="/profile"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <CircleUserRound className="inline-block" />
        </Link>
      </div>
    </footer>
  );
}
