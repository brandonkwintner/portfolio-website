import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const icons = [
  'fab fa-html5',
  'fab fa-css3',
  'fab fa-js-square',
  'fab fa-react',
  'fab fa-node',
  'fas fa-database',
  'fab fa-java',
  'fab fa-python',
  'fab fa-atlassian',
];

const IconList: React.FC = () => {
  return (
    <div className="d-flex flex-row flex-wrap">
      <Swiper
        spaceBetween={30}
        speed={2500}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
      >
        {icons.map((icon) => (
          <SwiperSlide key={icon}>
            <div className="moving-icon">
              <i className={icon} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconList;
