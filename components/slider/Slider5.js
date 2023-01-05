import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation]);

const Slider5 = () => {
  return (
    <>
      qkwjqkwjqwk
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 18800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        className="custom-class w-full h-screen"
      >
        <SwiperSlide className="h-full">
          kamskjasjak
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/imgs/backgrounds/bg2.jpeg"
            alt="netdan"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            src="/assets/imgs/backgrounds/bg2.jpeg"
            alt="netdan"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider5;
