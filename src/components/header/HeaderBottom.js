import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderBottom = () => {
  const [sideBar, setSidebar] = useState(false);
  console.log(sideBar);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/*===================ListItems Start Here======================*/}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline:flex">Customer Services</li>
        <li className="headerHover hidden md:inline:flex">Gift Cards</li>
        <li className="headerHover hidden md:inline:flex">Registery</li>
        <li className="headerHover hidden md:inline:flex">Sell</li>
      </ul>
      {/*===================ListItems End Here========================*/}
      {/*===================SideNav Starts Here========================*/}
      {sideBar && (
        <div
          className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue 
        bg-opacity-50"
        >
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black">
              <div
                className="w-full bg-amazon_light text-white py-2 px-6 flex items-center 
              gap-4"
              >
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <sideNavContent
                title="Trending"
                one="Best Sellers"
                two="New Releases"
                three="Movers and Shakers"
              />
              <sideNavContent
                title="Digital Content and Devices"
                one="Echo & Alexa"
                two="Fire TV"
                three="Audible Audiobooks"
                four="Amazon Prime Video"
                five="Amazon Prime Music"
              />
              <sideNavContent
                title="Shop By Category"
                one="Mobiles,Computers"
                two="TV Appliances, Electronics"
                three="Men's Fashion"
                four="Women's Fashion"
                five="Home, Kitchen, Pets"
                six="Beauty, Health, Grocery"
              />
              <sideNavContent
                title="Trending"
                one="Best Sellers"
                two="New Releases"
                three="Movers and Shakers"
              />
            </div>
            <span
              onClick={() => setSidebar(false)}
              className="cursor-pointer absolute top-0 left-[80%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
      {/*===================SideNav End Here========================*/}
    </div>
  );
};

export default HeaderBottom;
