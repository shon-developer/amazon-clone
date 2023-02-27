import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

<div>
  <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">Trending</h3>
  <ul className="flex flex-col items-start justify-center cursor-pointer gap-4 px-6 py-2 hover:bg-zinc-200">
    <li>Best Sellers</li>
    <li>New Releases</li>
    <li>Movers and Shakers</li>
  </ul>
</div>;
const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div>
      <h3 className="text-lg font-titleFont font-semibold mt-6 mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 hover:bg-zinc-200">
          {one} <KeyboardArrowRightIcon />
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 hover:bg-zinc-200">
          {two} <KeyboardArrowRightIcon />
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 hover:bg-zinc-200">
          {three} <KeyboardArrowRightIcon />
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
