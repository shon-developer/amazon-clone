import React from "react";
import Carousel from "../home/Carousel";
import ProductDisplay from "../home/ProductDisplay";

const Homepage = () => {
  return (
    <div className="w-full h-auto">
      <Carousel />
      <ProductDisplay />
    </div>
  );
};

export default Homepage;
