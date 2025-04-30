import React from 'react'
import Cards from '../components/Cards';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Trending from '../components/Trending';
import Flash from '../components/FlashSale';
import Popular from '../components/PopularBrands';


function Home() {


  return (
    <div>
      <Slider />
      <Categories />
      <Cards />
      <Trending />
      <Flash />
      <Popular />
    </div>
  )
}

export default Home
