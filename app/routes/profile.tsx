import { NavLink, Outlet } from 'react-router';
import { Table, TvMinimalPlay, ContactRound } from 'lucide-react';

export default function ProfileLayout() {
  const activeLinkStyle = {
    borderBottom: '2px solid black',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div className="flex justify-center items-center border-b mb-4">
        <NavLink
          to="/profile/posts/grid"
          className="flex-1 text-center p-4"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          <Table className="inline-block" />
        </NavLink>
        <NavLink
          to="/profile/reels/grid"
          className="flex-1 text-center p-4"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          <TvMinimalPlay className="inline-block" />
        </NavLink>
        <NavLink
          to="/profile/tagged/grid"
          className="flex-1 text-center p-4"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          <ContactRound className="inline-block" />
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
