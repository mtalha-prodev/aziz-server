import React from "react";
import Cards from "../components/Cards";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Flash from "../components/FlashSale";
import Popular from "../components/PopularBrands";
import { useSelector } from "react-redux";

function Home() {
  const count = useSelector((state) => state.counter);
  console.log(count, "counndafkjkdajfkadjfka");
  return (
    <div>
      <Slider />
      <Categories />
      <Cards />
      <Trending />
      <Flash />
      <Popular />
    </div>
  );
}

export default Home;
