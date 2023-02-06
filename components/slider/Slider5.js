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
            slidesPerView: 7,
          },
        }}
        autoplay={{
          delay: 3000,
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
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Real estate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Real estate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Vehicle
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F2000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Vehicle
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Mobile phone
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Mobile phone
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F4000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Sport equipment
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F4000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Sport equipment Sport equipment Sport equipment
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F13000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Employment
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F13000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Employment
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F8000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Requisite
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F8000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Requisite
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
          <div className="flex flex-col mt-4 justify-center items-center cursor-pointer hover:text-blue-500 text-blueGray-900">
            <img
              className="md:h-24 rounded-md"
              src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F3000.png&w=256&q=95"
            />
            <p className="mt-2 text-xs sm:text-base break-words text-center line-clamp-2">
              Fashion plate
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        id="carausel-2-columns-1-arrows"
        className="flex items-center justify-center"
      >
        <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 5 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </span>
        <span className="text-blue-500 flex slick-arrow custom_next">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            // viewBox="0 0 24 24"
            viewBox="10 7 20 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Slider1;
