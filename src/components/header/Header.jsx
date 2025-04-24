import React from "react";
import TopHeader from "./sub-categories/TopHeader";
import BottomHeader from "./sub-categories/BottomHeader";
import Category from "./sub-categories/Category";

export default function Header() {
  return (
    <>
    <div className="hidden sm:block">
      <TopHeader />
    </div>
      <BottomHeader />
      {/* <Category /> */}
    </>
  );
}
