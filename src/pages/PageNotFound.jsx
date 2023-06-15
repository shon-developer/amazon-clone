import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-9xl text-red-600">404</h1>
      <h2 className="text-5xl text-gray-900">Oops! Page Not Found</h2>
      <Link
        to="/homepage"
        className="text-2xl border-none outline-none bg-gray-900 py-1 px-4 my-8"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
