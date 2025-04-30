import React from 'react'
import CateImage1 from '../assets/dove-cover.png'
import CateImage2 from '../assets/great_value-cover.png'
import CateImage3 from '../assets/nature_valley-cover.png'
import CateImage4 from '../assets/oxi_clean-cover.png'
import CateImage5 from '../assets/pampers-cover.png'
import CateImage6 from '../assets/suave-cover.png'

import OfferBanners1 from '../assets/collected_from_garden-cover.jpg'
import OfferBanners2 from '../assets/seasonal_fruits-cover.jpg'
import OfferBanners3 from '../assets/special_offer_on_seafood-cover.jpg'


function Popular() {

    const PopularData = [
        {
            Image: CateImage1,
            text: "Dove",
        },
        {
            Image: CateImage2,
            text: "Great Value",
        },
        {
            Image: CateImage3,
            text: "Natural Valley",
        },
        {
            Image: CateImage4,
            text: "Oxi Clean",
        },
        {
            Image: CateImage5,
            text: "Pampers",
        },
        {
            Image: CateImage6,
            text: "Suave",
        },
    ]
    
    const BrandsData = [
        {
            Icon: "fa-solid fa-heart",
            title: "Quality & Savings",
            text: "Comprehensive quality control and affordable prices",
        },

        {
            Icon: "fa-solid fa-truck-fast",
            title: "Fast Delivery",
            text: "Comprehensive quality control and affordable prices",
        },

        {
            Icon: "fa-solid fa-money-check-dollar",
            title: "Secure Payment",
            text: "Comprehensive quality control and affordable prices",
        },

        {
            Icon: "fa-brands fa-usps",
            title: "Professional Service",
            text: "Comprehensive quality control and affordable prices",
        }
    ]

  return (
    <div>
        <h1 className='font-bold text-4xl ml-4 py-6 mb-6'>Popular Brands</h1>
        <div className='flex justify-evenly flex-wrap gap-1 border-b border-gray-100' >
            {/* Map Method for Popular Items */}
            {PopularData.map((item, index) => (
                <div className='w-[15%] bg-white flex flex-col items-center justify-between border rounded-md p-2 transition-all duration-300 transform hover:shadow-lg hover:scale-105 group'>
                <img src={item.Image} alt="food" className='w-[40%] py-4 transition-all duration-300 transform group-hover:rotate-6' />
                <p className='py-2'>{item.text}</p>
            </div>
            ))}
            
        </div>
        {/* Map method for Brands Data */}
        <div className='flex justify-evenly items-center p-6  pt-10 my-12 border-t-2'>
            {BrandsData.map((item, index) => (
                <div className='flex justify-between w-1/4 p-4'>
                <i class={`${item.Icon} text-green-500 mt-[5px] mr-2`}></i>
                <div>
                    <h2 className='font-semibold'>{item.title}</h2>
                    <p>{item.text}</p>
                </div>
                </div>
            ) )}
        </div>
    </div>
  )
}



export default Popular;