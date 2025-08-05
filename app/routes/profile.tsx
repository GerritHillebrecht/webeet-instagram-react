import { NavLink, Outlet } from 'react-router';
import { Table, TvMinimalPlay, ContactRound } from 'lucide-react';
import { ProfileHeader } from '~/components/ProfileHeader';

export default function ProfileLayout() {
  const activeLinkStyle = {
    borderBottom: '2px solid black',
    fontWeight: 'bold',
  };

  return (
    <div>
      <ProfileHeader />
      <div className="flex justify-center items-center mb-1 pb-3">
        <div className="flex-1 text-center">
          <NavLink
            to="/profile/posts/grid"
            className="py-3 px-6"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            <Table className="inline-block" />
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink
            to="/profile/reels/grid"
            className="py-4 px-6"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            <TvMinimalPlay className="inline-block" />
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink
            to="/profile/tagged/grid"
            className="py-4 px-6"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            <ContactRound className="inline-block" />
          </NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
