import { useOutletContext, useParams } from 'react-router';
import type { Story } from '~/schemas/story.schema';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper/modules';
import { EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

export default function Stories() {
  const { stories } = useOutletContext<{ stories: Story[] }>();
  const params = useParams();

  if (!stories || stories.length === 0) {
    return <div>Loading...</div>;
  }

  if (!params.id) {
    return <div className="text-center text-neutral-50">No story selected</div>;
  }

  const startIndex = stories.findIndex(
    (story) => story.id === parseInt(params.id!)
  );

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      initialSlide={startIndex >= 0 ? startIndex : 0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-full w-full pagination-white"
    >
      {stories.map((story) => (
        <SwiperSlide key={story.id} className="relative">
          <div className="absolute inset-0 p-8 flex items-end z-10 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent">
            <div className="">
              <h2 className="text-neutral-50 text-xl">{story.title}</h2>
              <p className="text-neutral-200/70 text-sm">{story.content}</p>
            </div>
          </div>
          <Swiper
            modules={[Pagination, EffectCube, Keyboard]}
            effect="cube"
            spaceBetween={0}
            keyboard={{ enabled: true }}
            slidesPerView={1}
            nested={true}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {story.posts?.map((post) => (
              <SwiperSlide key={post.id}>
                <img
                  src={post.img_url || 'https://via.placeholder.com/150'}
                  alt={post.caption || 'Story Post'}
                  className="w-full h-full object-cover"
                  style={{
                    viewTransitionName: `post-image-${post.id || 1}`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
