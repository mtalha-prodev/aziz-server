import React from "react";
import ImgFooter from "../assets/theme-footer-logo.png";
import Icons from "./Icons";

function Footer() {
  const support = [
    {
      title: "Support",
      
    },

    {
      text: "FAQ",
    },
    {
      text: "Return & Exchange",
    },
    {
      text: "Delivery",
    },
    {
      text: "Contact us",
    },
  ];
  const legal = [
    {
      title: "Legal",
    },
    {
      text: "About Us",
    },
    {
      text: "Cookie Policy",
    },
    {
      text: "Terms & Conditions",
    },
    {
      text: "Privacy Policy",
    },
  ];
  const contact = [
    {
      title: "Contact",
    },
    {
      icon: "fa-solid fa-location-dot",
      text: "House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216",
    },
    {
      text: "info@inilabs.net",
      icon: "fa-solid fa-envelope"
    },
    {
      text: "+8801333384628",
      icon: "fa-solid fa-phone"
    },
  ];
  
  

  return (
    <div className="bg-slate-900 py-6 ">
      <div className="flex justify-between px-2 border-b pb-5 border-slate-700">
        <div className="w-1/4">
          <img src={ImgFooter} alt="" srcset="" className=" w-28 mb-3" />
          <p className="text-white font-medium text-sm">
            Subscribe to our newsletter
          </p>
          <div className="flex p-[2px] rounded-full bg-white pl-3 justify-between my-3">
            <input
              className="outline-none bg-transparent border-none text-sm p-[2px] text-black"
              type="text"
              placeholder="User email address"
            />
            <button className="bg-green-500 p-2 px-3 rounded-full text-white font-normal text-sm">
              Subscribe
            </button>
          </div>
          <div className="flex ">
            <Icons icon="fa-brands fa-facebook" />
            <Icons icon="fa-brands fa-instagram" />
            <Icons icon="fa-brands fa-x-twitter" />
            <Icons icon="fa-brands fa-youtube" />
          </div>
        </div>
        <div className="w-3/4  flex justify-around">
          <NavItems text={support} /> 
          <NavItems text={legal} />
          <NavItems text={contact} />
        </div>
      </div>
      <p className="selft-center text-center text-white text-base my-3" >© StoreKing by Zaeem Shakeel 2025, All Rights Reserved</p>
    </div>
  );
}

const NavItems = ({ text }) => {
  return (
    <div>
      {text.map((item) => {
        return (
          <>
            <h3 className="text-white font-medium text-lg">{item.title}</h3>
            <div className="flex items-center " >
            <i class={`${item.icon} text-white mr-1`}></i>
            <p className="text-white cursor-pointer hover:text-green-500  my-2">
              {item.text}
            </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Footer;
