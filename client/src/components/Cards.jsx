import React from 'react'
import ImgFooter from "../assets/theme-footer-logo.png";
import Icons from "./Icons";
import CardImg1 from "../assets/overnight_diapers_size_6-cover.png";
import CardImg2 from "../assets/red_tomato-cover.png";
import CardImg3 from "../assets/cauliflower-cover.png";
import CardImg4 from "../assets/beef_meat-cover.png";
import CardImg5 from "../assets/chicken_breast_tenderloins-cover.png";
import LastBanner from "../assets/buy_fresh_&_organic_sea_food-preview.jpg";


function Cards() {
    const Card = [
        {
          Image: CardImg1,
        
          title: "Overnight Diapers Size 6",
        
          text: "Packet",
       
          price: "$33.250",
        
          disprice: "35.000",
        },

        {
          Image: CardImg2,
        
          title: "Red Tomato",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },

        {
          Image: CardImg3,
        
          title: "Cauliflower",
        
          text: "Piece",
       
          price: "$45.250",
        
          disprice: "50.000",
        },
        
        {
          Image: CardImg4,
        
          title: "Red Meat",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },
        
        {
          Image: CardImg5,
        
          title: "Chicken",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },
        
        {
          Image: CardImg2,
        
          title: "Red Tomato",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },

        {
          Image: CardImg1,
        
          title: "Overnight Diapers Size 6",
        
          text: "Packet",
       
          price: "$33.250",
        
          disprice: "35.000",
        },
        
        {
          Image: CardImg4,
        
          title: "Red Meat",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },

        {
          Image: CardImg5,
        
          title: "Chicken",
        
          text: "Kilogram",
       
          price: "$33.250",
        
          disprice: "35.000",
        },

        {
          Image: CardImg3,
        
          title: "Cauliflower",
        
          text: "Piece",
       
          price: "$45.250",
        
          disprice: "50.000",
        },
        
      ];

      return (
        <>
          <h1 className='font-bold text-4xl mt-10 ml-4 p-3'>Most Popular</h1>
          <div className='flex flex-wrap'>
            <CardsItems text={Card} />           
          </div>
          <div className='my-10'>
            <img src={LastBanner} alt="banner" className='rounded-[40px] w-full p-5'/>
          </div>
        </>
      );
    }
    
    const CardsItems = ({ text }) => {
      
      return (
        <div className='flex justify-around flex-wrap'>
          {text.map((item) => {
            return (
              <>
        <div className='flex justify-between items-center w-ful p-2'>

              <div className='bg-white border-solid border-2 border-gray-300 rounded-lg p-2'>
                <img src={item.Image} alt="overnight_diapers_size_6-cover" className='rounded' />
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                  <p className='text-lg font-bold text-green-500'>{item.price} <span className='line-through text-gray-500'>{item.disprice}</span> </p>
                  </div>
        </div>
              </>
            );
          })}
        </div>
        
      );
    };
    

export default Cards;

