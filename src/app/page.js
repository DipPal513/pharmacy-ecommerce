import Ad from '@/components/ad/Ad'
import Banner from '@/components/banner/Banner'
import Product_Showcase from '@/components/product_showcase/Product_Showcase'
import Top_Category from '@/components/top_category/Top_Category'
import React from 'react'

export default function page() {
  return (
    <>
      <Banner />
      <Top_Category />
      <Ad/>
      <Product_Showcase title={"Trending Items"} />
      <Product_Showcase title={"Featured Items"} />
    </>
  )
}
