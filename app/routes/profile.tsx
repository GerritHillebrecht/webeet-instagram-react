import { NavLink, Outlet, useLoaderData } from 'react-router';
import { Table, TvMinimalPlay, ContactRound } from 'lucide-react';
import { ProfileHeader } from '~/components/ProfileHeader';
import { api } from '~/services/api';
import { storiesSchema, type Story } from '~/schemas/story.schema';

export async function loader() {
  try {
    const response = await api.get('/highlights/1');
    return storiesSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load reels:', error);
    throw new Response('Could not load reels.', { status: 500 });
  }
}

export default function ProfileLayout() {
  const highlights = useLoaderData() as Story[]; // Adjust type as needed

  const activeLinkStyle = {
    borderBottom: '2px solid black',
    fontWeight: 'bold',
  };

  return (
    <div>
      <ProfileHeader highlights={highlights} />
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
