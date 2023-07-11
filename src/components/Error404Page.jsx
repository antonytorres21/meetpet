import React from "react";
import { Link } from "react-router-dom";
import Dogui from "../assets/dogui.png"

function Error404Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img  className="h-auto w-56 relative translate-y-7 translate-x-1"
        src={Dogui} alt="Dogui"/>
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error 404</h1>
        <p className="text-gray-600 text-lg mb-8">Page not found. Oops!</p>
        <Link to={"/"} className="bg-blue text-white py-2 px-4 rounded-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
