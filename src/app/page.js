import Ad from '@/components/ad/Ad'
import Banner from '@/components/banner/Banner'
import CountdownSlider from '@/components/countdownSlider/CountdownSlider'
import Product_Showcase from '@/components/product_showcase/Product_Showcase'
import Special from '@/components/special-category/Special-category'
import Top_Category from '@/components/top_category/Top_Category'

export default function page() {
  return (
    <>
      <Banner />
      <Top_Category />
      <Ad/>
      <Special />
      <Product_Showcase title={"Trending Items"} isSlide={true}/>
      <Product_Showcase title={"Featured Items"} isSlide={true} />
      {/* <CountdownSlider /> */}
    </>
  )
}
