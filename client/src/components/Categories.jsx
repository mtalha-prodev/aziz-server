import React from 'react'
import CateImage1 from '../assets/food-thumb.png'
import CateImage2 from '../assets/fruits_&_vegetables-thumb.png'
import CateImage3 from '../assets/fresh_vegetables-thumb.png'
import CateImage4 from '../assets/fresh_fruits-thumb.png'
import CateImage5 from '../assets/nuts_&_dry_fruits-thumb.png'
import CateImage6 from '../assets/meat_&_fish-thumb.png'

import OfferBanners1 from '../assets/collected_from_garden-cover.jpg'
import OfferBanners2 from '../assets/seasonal_fruits-cover.jpg'
import OfferBanners3 from '../assets/special_offer_on_seafood-cover.jpg'


function Categories() {

    const CategoriesData = [
        {
            Image: CateImage1,
            text: "Food",
        },
        {
            Image: CateImage2,
            text: "Fruits & Vegetables",
        },
        {
            Image: CateImage3,
            text: "Fresh Vegetables",
        },
        {
            Image: CateImage4,
            text: "Fresh Fruits",
        },
        {
            Image: CateImage5,
            text: "Nuts & Dry Fruits",
        },
        {
            Image: CateImage6,
            text: "Meat & Fish",
        },
    ]

    const BannerData = [
        {
         BanImg: OfferBanners1,
        },
        {
         BanImg: OfferBanners2,
        },
        {
         BanImg: OfferBanners3,
        },
    ]

  return (
    <div>
        <h1 className='font-bold text-4xl ml-4 py-6 mb-6'>Browse by Categories</h1>
        <div className='flex justify-evenly flex-wrap gap-1'>
            {CategoriesData.map((item, index) => (  
                <div className='w-[15%] bg-gray-100 flex flex-col items-center rounded-md p-2 transition-all duration-300 transform hover:shadow-lg hover:scale-105 group'>
                <img src={item.Image} alt="food" className='w-[40%] py-4 transition-all duration-300 transform group-hover:rotate-6' />
                <p className='py-2'>{item.text}</p>
            </div>
            ))}
            
        </div>
        <div className='flex justify-evenly items-center p-6 my-10'>
            {BannerData.map((item, index) => (
                <img src={item.BanImg} alt="offers beauty" className='rounded-xl w-[32%]'/>
            ))}
        </div>
    </div>
  )
}



export default Categories