import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump">
            <img
              src="/assets/imgs/logos/logo.png"
              className="mx-auto"
              alt="NetDance"
            />
            <h1 className="text-lg ml-10 font-semibold">NetDance</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
