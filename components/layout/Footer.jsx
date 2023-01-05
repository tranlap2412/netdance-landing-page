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
          <div className="flex flex-col lg:!flex-row mb-8 -mx-3 text-center lg:text-left">
            <div className="px-3 mb-8 lg:mb-0 lg:!w-8/12">
              <div className="flex flex-col gap-5 lg:flex-row ">
                <Link href="/">
                  <a className="w-40 mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                    <img
                      className=" pb-5"
                      src="/assets/imgs/logos/logo4.png"
                      alt="NetDance"
                    />
                  </a>
                </Link>
                <div className="lg:w-12/12 px-3 mb-8 lg:mb-0">
                  <p className="max-w-lg mx-auto text-start lg:max-w-full mb-2 lg:mx-0 lg:text-2xl leading-relaxed">
                    <strong className="text-gray-500">
                      BITDANCE Technology and Entertainment Co., Ltd
                    </strong>
                  </p>
                  <p className="max-w-lg mx-auto text-start lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                    <strong className="text-gray-500">Company</strong> :
                    BITDANCE Technology and Entertainment Co., Ltd
                  </p>
                  <p className="max-w-lg mx-auto text-start lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                    <strong className="text-gray-500">Address</strong> : No. 4,
                    Lot 16, Hung Phu, Ward 10, District 8, Ho Chi Minh City,
                    Vietnam.
                  </p>
                  <p className="max-w-lg mx-auto text-start lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                    <strong className="text-gray-500">Transaction point</strong>{" "}
                    : 391 Su Van Hanh, Ward 12, District 10, Ho Chi Minh City.
                  </p>
                  <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                    <div className="flex gap-5 pt-4">
                      <Link href="/">
                        <a className="w-40 mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                          <img
                            className=" pb-5"
                            src="/assets/imgs/icons/appstore.svg"
                            alt="NetDance"
                          />
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="w-40 mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                          <img
                            className="pb-5"
                            src="/assets/imgs/icons/ggplay.svg"
                            alt="NetDance"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                      <a
                        className="inline-block px-2"
                        href="https://facebook.com"
                      >
                        <img
                          className="w-8 md:w-12"
                          src="/assets/imgs/icons/facebook-blue.svg"
                          alt="NetDance"
                        />
                      </a>
                      <a
                        className="inline-block px-2"
                        href="https://twitter.com"
                      >
                        <img
                          className="w-8 md:w-10"
                          src="/assets/imgs/icons/twitter-blue.svg"
                          alt="NetDance"
                        />
                      </a>
                      <a
                        className="inline-block px-2"
                        href="https://www.instagram.com"
                      >
                        <img
                          className="w-8 md:w-10"
                          src="/assets/imgs/icons/instagram-blue.svg"
                          alt="NetDance"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="flex flex-col md:flex-row justify-between gap-2">
                    <span className="max-w-lg flex-1 mx-auto lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                      <strong className="text-gray-500">
                        Legal representative :
                      </strong>{" "}
                      NHUT PHAM.
                    </span>

                    <span className="max-w-md mx-auto flex-1 text-start lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                      <strong className="text-gray-500">Position :</strong>{" "}
                      Director
                    </span>
                  </p>
                  <p className="flex flex-col md:flex-row justify-between gap-2">
                    <span className="max-w-lg flex-1 mx-auto lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                      <strong className="text-gray-500">Phone :</strong>{" "}
                      0972236969.
                    </span>

                    <span className="max-w-md mx-auto flex-1  text-start lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                      <strong className="text-gray-500">E-mail :</strong>{" "}
                      Nhutpham@netdacne.asia
                    </span>
                  </p>
                </div>
                {/* <div className="lg:w-5/12 px-3">
                  <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Contacts
                  </p>
                  <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                    <strong>Phone :</strong> 0972236969.
                  </p>
                  <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:text-md text-blueGray-400 leading-relaxed">
                    <strong>E-mail :</strong> Nhutpham@netdacne.asia -
                    Nhutpm7777@gmail.com.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="px-3 mb-6 lg:mb-0 lg:!w-4/12">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <img
                    className="w-full"
                    // src="/assets/imgs/logos/logo4.png"
                    src="/assets/imgs/illustrations/web.svg"
                    alt="NetDance"
                  />
                </a>
              </Link>
            </div>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-3">
            <p className="text-sm text-blueGray-400">
              Copyright © 2022-2023 Netdance Company S.L. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
