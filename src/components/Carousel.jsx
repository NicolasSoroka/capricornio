import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const Carousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      loop: true,
      autoplay: { delay: 3000 },
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            margin: auto;
            padding: 0;
            height: 15px;
            width: 15px;
            color: #adaaaa;
          }
          .swiper-pagination-bullet{
            background-color: rgb(148,163,184)
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false">
      <swiper-slide class="w-full h-[200px] bg-red-200 flex justify-center items-center">Slide 1</swiper-slide>
      <swiper-slide class="w-full h-[200px] bg-blue-200 flex justify-center items-center">Slide 2</swiper-slide>
      <swiper-slide class="w-full h-[200px] bg-green-200 flex justify-center items-center">Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default Carousel;
