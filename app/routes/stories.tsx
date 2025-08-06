import { ChevronLeft } from 'lucide-react';
import { Outlet, useLoaderData, useNavigate } from 'react-router';
import { storiesSchema, type Story } from '~/schemas/story.schema';
import { api } from '~/services/api';

export async function loader() {
  const stories = await api.get('/stories');
  const parsedStories = storiesSchema.parse(stories.data);

  return parsedStories ?? [];
}

export default function Stories() {
  const stories = useLoaderData() as Story[];
  const navigate = useNavigate();

  if (!stories || stories.length === 0) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black w-full h-full z-[1000]">
      <div className="absolute inset-x-4 top-4 z-10">
        <ChevronLeft onClick={handleBackClick} className="text-white" />
      </div>
      <Outlet context={{ stories }} />
    </div>
  );
}
