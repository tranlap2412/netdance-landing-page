import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider1 = () => {
  return (
    <div className="mt-2">
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          330: {
            width: 330,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Real estate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Vehicle
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Mobile phone
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F4000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Sport equipment
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F13000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Employment
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F8000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Requisite
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-12 h-12 md:h-36 md:w-36  rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center text-blueGray-900">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider1;
