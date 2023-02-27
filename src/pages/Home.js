import React from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full -mt-14 xl:-mt-36 py-10"></div>
      <Products />
    </div>
  );
};

export default Home;
