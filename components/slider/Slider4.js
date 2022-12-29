import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Banner1 from "../../public/assets/gif/banner1.gif";
import Banner2 from "../../public/assets/gif/banner2.gif";
import Banner3 from "../../public/assets/gif/banner3.gif";
import Banner4 from "../../public/assets/gif/banner4.gif";

SwiperCore.use([Navigation]);

const Slider4 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        className="custom-class"
      >
        <SwiperSlide>
          <Image
            className="rounded"
            src={Banner2}
            alt="netdan"
            fill
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src={Banner3}
            alt="netdan"
            fill
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src={Banner1}
            alt="netdan"
            fill
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src={Banner4}
            alt="netdan"
            fill
            sizes="100vw"
          />
        </SwiperSlide>
      </Swiper>

      <div
        id="carausel-2-columns-1-arrows"
        className="flex align-center justify-center"
      >
        <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M7.712 4.819A1.5 1.5 0 0110 6.095v2.973c.104-.131.234-.248.389-.344l6.323-3.905A1.5 1.5 0 0119 6.095v7.81a1.5 1.5 0 01-2.288 1.277l-6.323-3.905a1.505 1.505 0 01-.389-.344v2.973a1.5 1.5 0 01-2.288 1.276l-6.323-3.905a1.5 1.5 0 010-2.553L7.712 4.82z" />
          </svg>
        </span>
        <span className="text-blue-500 flex slick-arrow custom_next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 002.288 1.276l6.323-3.905a1.5 1.5 0 000-2.553L12.288 4.82A1.5 1.5 0 0010 6.095v2.973a1.506 1.506 0 00-.389-.344L3.288 4.82z" />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Slider4;
