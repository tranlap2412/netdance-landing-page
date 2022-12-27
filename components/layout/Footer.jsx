import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="container mx-auto px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className=" lg:w-3/12 px-3 mb-6 lg:mb-0">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <img
                    className="h-42"
                    src="/assets/imgs/logos/logo4.jpg"
                    alt="NetDance"
                  />
                </a>
              </Link>
            </div>
            <div className=" lg:w-5/12 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto text-center lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg  leading-relaxed">
                <strong>About US</strong>
              </p>
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-md text-blueGray-400 leading-relaxed">
                <strong>Company</strong> : BITDANCE Technology and Entertainment
                Co., Ltd
              </p>
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-md text-blueGray-400 leading-relaxed">
                <strong>Address</strong> : No. 4, Lot 16, Hung Phu, Ward 10,
                District 8, Ho Chi Minh City, Vietnam.
              </p>
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-md text-blueGray-400 leading-relaxed">
                <strong>Transaction point</strong> :391/51/2 Su Van Hanh, Ward
                12, District 10, Ho Chi Minh City.
              </p>
            </div>
            <div className="lg:w-4/12 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Contacts
              </p>
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-md text-blueGray-400 leading-relaxed">
                <strong>Phone :</strong> 0972236969.
              </p>
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-md text-blueGray-400 leading-relaxed">
                <strong>E-mail :</strong> Nhutpham@netdacne.asia -
                Nhutpm7777@gmail.com.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              &copy; 2022. All rights.{" "}
              {/* <a
                className="text-blue-400"
                // href="https://alithemes.com"
                target="_blank"
              >
                Netdance.com
              </a> */}
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a className="inline-block w-64 px-2" href="https://facebook.com">
                <img
                  src="/assets/imgs/icons/facebook-blue.svg"
                  alt="NetDance"
                />
              </a>
              <a className="inline-block w-64 px-2" href="https://twitter.com">
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="NetDance" />
              </a>
              <a
                className="inline-block w-64 px-2"
                href="https://www.instagram.com"
              >
                <img
                  src="/assets/imgs/icons/instagram-blue.svg"
                  alt="NetDance"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
