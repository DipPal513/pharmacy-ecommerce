import React from "react";

export default function Top_Category() {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-xl gap-4 grid sm:grid-cols-4 md:grid-cols-6 mx-auto px-2 ">
        {[1, 1, 1, 1, 1, 1].map((element, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-b-full flex gap-7 flex-col py-5 items-center border-2 rounded-t-full text-center border-gray-100 hover:border-[var(--main-color)] transition-all duration-200 cursor-pointer"
          >
            <div className="bg-[#ffffff] rounded-full p-6">
              <img
                src="https://live.themewild.com/medion/assets/img/icon/medicine.svg"
                className="text-white w-24 transform transition-transform duration-300 hover:scale-125"
                alt="image"
              />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl">Medicine</h2>
              <p className="text-gra-600">30 Items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
