import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="flex flex-col justify-center logo w-full h-full jump">
            <img
              src="/assets/imgs/logos/logo4.png"
              className="mx-auto"
              alt="NetDance"
            />
            <h1 className="text-lg font-semibol text-gray-500 text-center">
              Netdance
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
