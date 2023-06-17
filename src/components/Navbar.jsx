import React from "react";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  console.log(showList);

  return (
    <div className="w-full h-20 sticky-top-0 z-50 bg-blue-500">
      <div className="w-full py-6 flex justify-center items-center gap-4">
        <h1 className="text-3xl text-white-600 font-roboto px-14">
          Mr. <span className="text-green-700">Shopper</span>
        </h1>
        <div className="h-10 rounded-md flex flex-grow items-center relative bg-gray-400 text-black">
          <span onClick={() => setShowList(!showList)} className="px-1">
            All{""}
            <span>
              <ArrowDropDown />
            </span>
          </span>
          {showList && (
            <div className="absolute top-10 w-56 h-80 overflow-y-scroll left-0">
              <ul>
                <li>All department</li>
                <li>All department</li>
                <li>All department</li>
                <li>All department</li>
              </ul>
            </div>
          )}
          <input
            className="h-full flex flex-grow border-none outline-none px-2 text-black"
            type="text"
          />
          <span className="w-12 bg-green-600 h-full flex items-center justify-center rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex items-center justify-center gap-10 ml-10 text-gray-300">
          <NavLink to="/homepage">Home</NavLink>
          <NavLink to="/categories">Category</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </div>

        <span className="px-6">
          <LocalMallIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
