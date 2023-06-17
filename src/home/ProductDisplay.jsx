import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const ProductDisplay = () => {
  const data = useLoaderData();
  const productData = data.data;
  //console.log(productData);
  return (
    <div className="w-[100vw] h-auto">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 p-6">
        {productData.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white h-auto border-[1px] py-6 z-30 shadow-lg rounded-md hover:shadow-xl 
              cursor-pointer relaive flex flex-col gap-4"
            >
              <div className="w-full h-auto flex items-center justify-center">
                <img
                  className="w-56 h-64 object-contain"
                  src={item.image}
                  alt="ProductImg"
                />
              </div>
              <div className="px-4 flex justify-between">
                <h2 className="text-lg text-slate-800 font-poppins font-semibold">
                  {item.title}
                </h2>
                <p>${item.price}</p>
              </div>
              <div className="px-4 text-gray-600 font-poppins">
                <p>{item.description.substring(0, 80)}...</p>
              </div>
              <div className="text-yellow-500 px-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
              </div>
              <button
                className="mt-4 w-full flex justify-center text-lg font-semibold font-poppins bg-gray-300
               text-gray-500 py-2 px-2"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
