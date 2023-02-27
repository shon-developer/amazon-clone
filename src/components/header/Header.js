import React from "react";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../../assets/index";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="max-width-container text-white px-4 py-3 flex items-center gap-4 w-full bg-amazon_blue">
        {/*image*/}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/*deliver*/}
        <div
          className="px-2 -h[80%] hidden mdl:inline-flex items-center border border-transparent
         hover:border-white cursor-pointer duration-100"
        >
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to np
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Oman
            </span>
          </p>
        </div>
        {/*Search*/}
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer 
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center 
            justify-center rounded-tl-md rounded-b1-md"
          >
            All <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 bg-white overflow-y-scroll 
              overflow-x-hidden bg-white-border-[1px] border-amazon_blue
               text-black p-2 flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li key={item._id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow 
          hover:bg-[#F3A847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md 
          rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>
        {/*Signin*/}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light flex-col">
            Hello, sign in
          </p>
          <p classNames="text-sm font-semibold mt-1 text-whiteText hidden:inline-flex">
            Account & Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        {/*Orders*/}
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold text-whiteText">& Orders</p>
        </div>
        {/*Cart*/}
        <div
          className="text-sm font-semibold text-whiteText px-2 -h[80%] flex flex-col items-center border border-transparent
        hover:border-white cursor-pointer duration-100 relative"
        >
          <ShoppingCartIcon />
          <p className="text-xs font-semilbold mt-1 text-whiteText">
            Cart
            <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#F3A847] rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
