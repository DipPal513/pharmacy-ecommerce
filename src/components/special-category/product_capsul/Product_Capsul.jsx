import React from "react";
import Mini_Product_Card from "./mini-product-card/Mini_Product_Card";

export default function Product_Capsul({ title = "On Sale" }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 ">
      <div className="border-b-1 border-gray-200">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
      </div>
      <div className="flex mt-5 items-center gap-5 flex-col">
        <Mini_Product_Card />
        <Mini_Product_Card />
        <Mini_Product_Card />
      </div>
    </div>
  );
}
