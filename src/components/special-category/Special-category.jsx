import React from "react";
import Product_Capsul from "./product_capsul/Product_Capsul";

export default function Special() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-2">
        <Product_Capsul title="On Sale"/>
        <Product_Capsul title="Featured"/>
        <Product_Capsul title="On Sale"/>
      </div>
    </div>
  );
}
