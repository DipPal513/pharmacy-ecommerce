import React from "react";

export default function Ad() {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-xl gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-2 ">
        <div className="relative">
          <img
            src="https://live.themewild.com/medion/assets/img/banner/mini-banner-1.jpg"className="w-full h-full"
            alt="banner image"
          />
          <div className="content absolute z-10 top-10 left-10">
            <div className="rounded-full w-fit px-4 py-1 text-white bg-blue-400 capitalize">
                <p>sanitizer</p>
            </div>
            <h3 className="mt-4 text-2xl capitalize font-semibold">hand sanitizer <br />collection</h3>
            <button className="mt-2 uppercase font-lg font-semibold underline hover:text-[var(--main-color)] transition-all duration-200 cursor-pointer">shop now</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://live.themewild.com/medion/assets/img/banner/mini-banner-1.jpg"className="w-full h-full"
            alt="banner image"
          />
          <div className="content absolute z-10 top-10 left-10">
            <div className="rounded-full w-fit px-4 py-1 text-white bg-blue-400 capitalize">
                <p>sanitizer</p>
            </div>
            <h3 className="mt-4 text-2xl capitalize font-semibold">hand sanitizer <br />collection</h3>
            <button className="mt-2 uppercase font-lg font-semibold underline hover:text-[var(--main-color)] transition-all duration-200 cursor-pointer">shop now</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://live.themewild.com/medion/assets/img/banner/mini-banner-1.jpg"className="w-full h-full"
            alt="banner image"
          />
          <div className="content absolute z-10 top-10 left-10">
            <div className="rounded-full w-fit px-4 py-1 text-white bg-blue-400 capitalize">
                <p>sanitizer</p>
            </div>
            <h3 className="mt-4 text-2xl capitalize font-semibold">hand sanitizer <br />collection</h3>
            <button className="mt-2 uppercase font-lg font-semibold underline hover:text-[var(--main-color)] transition-all duration-200 cursor-pointer">shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
