import Ad from '@/components/ad/Ad'
import Banner from '@/components/banner/Banner'
import Mini_Product_Card from '@/components/special-category/product_capsul/mini-product-card/Mini_Product_Card'
import Product_Showcase from '@/components/product_showcase/Product_Showcase'
import Top_Category from '@/components/top_category/Top_Category'
import React from 'react'
import Special from '@/components/special-category/Special-category'

export default function page() {
  return (
    <>
      <Banner />
      <Top_Category />
      <Ad/>
      <Special />
      <Product_Showcase title={"Trending Items"} />
      <Product_Showcase title={"Featured Items"} />
    </>
  )
}
