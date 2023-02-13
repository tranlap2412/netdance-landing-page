import CounterUp from "../components/elements/Counterup";
import TextEffect from "../components/elements/TextEffect";
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
import Slider2 from "../components/slider/Slider2";
import Slider4 from "../components/slider/Slider4";
import PriceIcon from "../public/assets/imgs/icons/priceIcon.svg";
import Link from "next/link";
import Slider5 from "../components/slider/Slider5";

function Home() {
  return (
    <>
      <Layout>
        <section
          className="sm:pb-2 md:pb-20 min-h-screen bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/bg2.jpeg')",
          }}
        >
          <div className="hidden md:block absolute top-0 left-0 mt-44">
            <img
              className="h-56 lg:h-64 xl:h-80 jump"
              src="/assets/imgs/illustrations/at_the_park.svg"
              alt="Netdance"
            />
          </div>
          <div className="hidden md:block absolute top-0 right-0 mt-44">
            <img
              className="h-56 lg:h-64 xl:h-80 jump"
              src="/assets/imgs/illustrations/delivered.svg"
              alt="Netdance"
            />
          </div>
          <div className="container mx-auto px-4 mt-10">
            <div className="pt-12 text-center">
              <div className="max-w-2xl mx-auto mb-5">
                <h2 className="text-3xl text-white lg:text-5xl lg:leading-normal mb-1 font-bold font-heading wow animate__animated animate__fadeIn">
                  <span className="text-blue-500">Netdance</span> platform
                  Integrate all parameters from other platforms <br />
                </h2>
                <p className="text-white mt-3 leading-relaxed wow animate__animated animate__fadeIn">
                  See more <strong className="text-blue-500">NetDance</strong>{" "}
                  cart with commitment <br />
                  <span className="typewrite d-inline text-blue-500">
                    Best price, Eclusive combo
                    <TextEffect text1=", Comprehensive consulting package" />
                  </span>
                </p>
                <a className="btn-primary mt-10 px-11 py-5 cursor-pointer wow animate__animated animate__fadeIn hover-right-5">
                  Hot Promotions Summary
                </a>
                <a className="btn-accent cursor-pointer py-4 mt-10 px-8 flex items-center justify-center w-64 mx-auto wow animate__animated animate__fadeIn hover-up-5">
                  <img
                    className="w-5 mr-4"
                    src="/assets/imgs/icons/shopping.svg"
                  />
                  <span className="text-white">Buy now</span>
                </a>
              </div>
              <div>
                {/* <a className="btn-primary cursor-pointer py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-left-5">
                 
                </a> */}
                {/* <a className="btn-primary px-10 py-5 cursor-pointer wow animate__animated animate__fadeIn hover-right-5">
                  Hot Promotions Summary
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className="relative max-w-7xl mt-16 md:mt-8 mb-8 mx-auto">
            <img
              src="/assets/imgs/elements/pattern.png"
              alt="NetDance"
              // className="jumpV"
            />
            <div
              className="absolute border-[#8deaff] !border-8 rounded-md"
              style={{ top: "12%", left: "10%", width: "80%", height: "76%" }}
            >
              <img
                className="jump rounded wow animate__animated animate__fadeIn"
                src="/assets/imgs/placeholders/dashboard.png"
                alt="NetDance"
              />
              <Slider4 />
            </div>
          </div> */}
          <div className="container mx-auto px-4 mx-auto mt-10">
            <div className="flex flex-wrap justify-between pt-8 pb-16">
              <div
                className="hover-down-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading text-white">
                    +{" "}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading text-white count">
                    <CounterUp count={200} time={4} />
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Partners / personnel
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading text-white">
                    +{" "}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading text-white count">
                    <CounterUp count={3} time={2} />
                  </span>
                  <span className="sm:text-2xl font-bold font-heading text-white">
                    {" "}
                    k
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Salary FAN Follow
                  </p>
                </div>
              </div>
              <div
                className="hover-down-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading text-white">
                    +{" "}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading text-white count">
                    <CounterUp count={5} time={2} />
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    List of products
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".8s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading text-white">
                    +{" "}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading text-white count">
                    <CounterUp count={100} time={4} />
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Number of customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="translate-y-[-50%]">
          <div className="">
            <div className="flex w-full items-start justify-around hiddenScrollBar container rounded-lg bg-blueGray-100 py-5 md:py-10 px-0 overflow-scroll">
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img11.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Debt 15|30 days
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img2.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Best price in the market
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img3.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Exclusive Combo
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img4.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Free netdance ecosystem
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img5.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Installment 0%
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img10.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Franchise registration
                </p>
              </div>
              <div className="flex flex-col items-center justify-start ml-1 md:ml-0 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                <img
                  className="rounded-full w-10 md:w-14"
                  src="/assets/imgs/logos/img7.jpg"
                />
                <p className="text-xs mt-1 font-medium break-words w-20 md:w-28 line-clamp-2 text-center">
                  Guarantee
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-12 -mt-5 overflow-x-hidden" id="key-features">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="w-full">
                <div
                  className="wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="mb-6">
                    <h2
                      className="text-4xl mt-1 md:mt-5 font-bold font-heading "
                      data-wow-delay=".3s"
                    >
                      NetDance Features
                    </h2>
                  </div>
                  <Slider5 />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-12 bg-blueGray-50" id="how-we-work">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <p className="text-blue-500  text-center">
                    {" "}
                    Netdance's exclusive products, services and distribution
                  </p>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mb-6 text-center">
              <div
                className="relative w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div class="p-8 hover-show-content shadow rounded h-128 text-white flex flex-col items-start justify-center h-full">
                  <div className="mt-4">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Creative Principles
                    </h3>
                    <p className="text-left text-sm leading-relaxed">
                      Discipline, Responsibility, Enthusiasm, Esffort to improve
                      capacity
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Mechanism of Contract
                    </h3>
                    <p className="text-left text-sm leading-relaxed">
                      Cooperation and Responsibility
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Creative Steps
                    </h3>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      1. Editing leading music tastes.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      2. Strategizing matrix module playlist combo products.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      3. Deploying division of core tasks by parts: sound,
                      image, content, voice singing, mixing, recording and media
                      sponsorship alliance PR team.
                    </p>
                  </div>
                </div>
                <div className="p-12 bg-white shadow rounded h-128">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    1
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/podcast.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">Music</h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    From global young talents - creative mission and dedication
                    with passion to the audience - creative colors and creative
                    determination regardless of life.
                  </p>
                </div>
              </div>
              <div
                className="relative w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div class="p-8 hover-show-content shadow rounded h-128 text-white flex flex-col items-start justify-center h-full">
                  <div className="mt-4">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Speculative / Short-Selling Portfolio
                    </h3>
                    <p className="text-left text-sm leading-relaxed">
                      NetDance with a market leading trend portfolio - with
                      sharing of investment insights analysis for individuals
                      and organizations who want to join the partnership.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Investment Process
                    </h3>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      1. Valuing each project.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      2. To cancel the contract of guaranteeing investment
                      benefits or join the same project.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      3. List of projects to be implemented.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      4. See project demo.
                    </p>
                    <p className="mt-2 text-left text-sm leading-relaxed">
                      5. Send application information for approval to
                      participate.
                    </p>
                  </div>
                </div>
                <div className="p-12 bg-white shadow rounded h-128">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Investment
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    A call to accompany and expand netdance portfolio
                    nationwide.
                  </p>
                </div>
              </div>
              <div className="relative w-full lg:w-1/3 px-3 mb-6  wow animate__animated animate__fadeIn">
                <div class="p-8 hover-show-content shadow rounded h-128 text-white flex flex-col items-start justify-center h-full">
                  <div className="mt-4">
                    <h3 className="text-left mb-1 font-bold font-heading text-xl">
                      Exclusive distribution model
                    </h3>
                    <p className="text-left mt-2  text-sm leading-relaxed">
                      1. Provide an ecosystem of equipment and solutions for
                      businesses: Laptop equipment, macbook, server,
                      infrastructure, etc. software, switchboard system, camera
                      system, etc.
                    </p>
                    <p className="text-left mt-2 text-sm leading-relaxed">
                      2. Exclusive distribution of OEM netdance account designs
                      to participate in project investment with netdance and
                      participate in and the netdance creative community, etc.,
                      open gifts.
                    </p>
                  </div>
                </div>
                <div
                  className="p-12 bg-white shadow rounded h-128"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Exclusive distribution model
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Provide quotes at wholesale prices for individuals and
                    organizations using netdance extension services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
          id="key-features"
        >
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <h2
                className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span className="text-blue-500">Netdance's</span> outstanding
                products
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Netdance aims to become the leading import and export center for
                technology products and entertainment content in Vietnam.
              </p>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog1.png"
                      alt="NetDance"
                    />
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg> */}
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Business Solutions
                  </h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    #1 Viettel Electronic Invoice Service Price List | November
                    2021 – Super Promotion 20%.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden ">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog2.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Electronics</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    Redmi K60 series launched: Snapdragon 8 Gen 2 for Pro
                    series, with wireless charging for the first time.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog3.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Tramcar</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    Road ~1600km and Electric motorbike.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog4.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Computers</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    #CES23: High-end monitors are expected to debut at the
                    consumer electronics fair.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog1.png"
                      alt="NetDance"
                    />
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg> */}
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Business Solutions
                  </h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    #1 Viettel Electronic Invoice Service Price List | November
                    2021 – Super Promotion 20%.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden ">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog2.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Electronics</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    Redmi K60 series launched: Snapdragon 8 Gen 2 for Pro
                    series, with wireless charging for the first time.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog3.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Tramcar</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    Road ~1600km and Electric motorbike.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2  h-80 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white h-full text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto max-h-36 mb-4 overflow-hidden">
                    {/* <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg> */}
                    <img
                      className="rounded w-full h-36  object-cover"
                      src="/assets/imgs/elements/blog4.jpeg"
                      alt="NetDance"
                    />
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Computers</h3>
                  <p className="text-sm text-blueGray-400 line-clamp-3 overflow-ellipsis">
                    #CES23: High-end monitors are expected to debut at the
                    consumer electronics fair.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href="">
                <a
                  href=""
                  className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Show more
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left ">
                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                  <h2
                    className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <span className="text-blue-500">
                      Why should you choose Netdance?
                    </span>
                  </h2>
                  <img
                    className="h-36 mx-auto my-4 jumpV mb-4"
                    src="/assets/imgs/illustrations/faqs.svg"
                    alt="NetDance"
                  />
                  <div
                    className="text-xs customMarker md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <li>Professional management team</li>
                    <li>Netdance directory tree platform</li>
                    <li>Support talent development</li>
                    <li>Modern working style</li>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 flex flex-wrap">
                <div className="relative w-full">
                  <div
                    className="carausel-2-columns slick-carausel"
                    id="carausel-2-columns-1"
                  >
                    <Slider1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="container mx-auto px-4 mx-auto">
            <div className="text-center mb-16">
              <h2
                className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Start saving time today and</span>
                <span className="text-blue-500"> choose </span>
                <span>your best plan</span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              >
                Best for freelance developers who need to save their time
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/startup.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Startup
                  </h3>
                  <span className="text-4xl text-blue-500 font-bold font-heading">
                    $45.99
                  </span>
                  <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-blueGray-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>3 Emails</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>1 Datebases</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>10 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/agency.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Agency
                  </h3>
                  <span className="text-4xl font-bold font-heading">
                    $65.99
                  </span>
                  <p className="mt-2 mb-8">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>6 Emails</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>4 Datebases</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>35 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-400 hover:border-blue-400 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".6s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/enterprise.svg"
                    alt="NetDance"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Enterprise
                  </h3>
                  <span className="text-4xl text-blue-500 font-bold font-heading">
                    $85.99
                  </span>
                  <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-blueGray-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>12 Emails</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>8 Datebases</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="py-20 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
        >
          <div className="container mx-auto px-4 mx-auto">
            <div className="relative py-20 px-4 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                  <span>Register quickly or you won't make it in time</span>
                  {/* <span className="text-blue-500"> Our Newsletter </span> */}
                  {/* <span>and get the Coupon code.</span> */}
                </h2>
                <p
                  className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  The best music for audiences and fans to enjoy - from the
                  people who make the most of efforts The best music for
                  audiences and f
                </p>
                <div
                  className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  {/* <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                    <svg
                      className="h-6 w-6 my-auto text-blueGray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <button
                    className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button> */}
                  <div className="flex flex-col w-full  px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded ">
                    <input
                      className="w-full border-b border-sky-500 mb-2 pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="w-full border-b border-sky-500 mb-2 pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="w-full border-b border-sky-500 mb-2 pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Last Name"
                    />
                    <input
                      className="w-full border-b border-sky-500 mb-2 pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Phone Number"
                    />
                    <input
                      className="w-full border-b border-sky-500 mb-2 pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Address"
                    />
                    <button
                      className="w-full border-b border-sky-500 mb-2 md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded mb-8"
                      type="submit"
                    >
                      Sign Up
                    </button>
                    <p className="text-xs text-blueGray-400 font-semibold">
                      Or contact via zalo
                    </p>
                    <button
                      className="w-full border-b border-sky-500 mb-2 md:w-auto py-4 mt-2 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded mb-8"
                      type="submit"
                    >
                      <a href="#"> Zalo</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-100 mx-auto relative container max-w-5xl ">
            <img
              className="w-full absolute top-0 left-0 pb-5"
              src="/assets/imgs/backgrounds/line.png"
              alt="NetDance"
            />
            <img
              className="w-full absolute bottom-0 left-0 pb-5"
              src="/assets/imgs/backgrounds/line.png"
              alt="NetDance"
            />
            <div className="py-5 pb-8 w-full flex items-center justify-between gap-5">
              <div>
                <p className="lg:text-3xl text-gray-600 leading-relaxed font-bold">
                  Welcome a member of Netdance
                </p>
                <p className="lg:text-md text-gray-500 leading-relaxed">
                  Profession chooses people, people choose netdance.
                  <br /> Check out netdance's products now.
                </p>
              </div>
              <div className="">
                <Link href="/">
                  <button
                    className="w-full border-b border-sky-500 mb-2 md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded mb-8"
                    type="submit"
                  >
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
