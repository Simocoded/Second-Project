import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="flex justify-between items-center p-4   border-t border-gray-200">
        <div className="flex items-center">
        <h1 className="text-blue-400 font-bold text-3xl lg:pl-5">EasyFlex</h1>
        </div>

        <Link to="/wallet">
        <div className="mx-4 font-semibold text-2xl">Connect Wallet </div>
        </Link>
        <div className="lg:flex gap-4 hidden ">
          <img src="icon1.png" alt="Icon 1" className="w-6 h-6" />
          <img src="icon2.png" alt="Icon 2" className="w-6 h-6" />
          <img src="icon3.png" alt="Icon 3" className="w-6 h-6" />
          <img src="icon4.png" alt="Icon 4" className="w-6 h-6" />
        </div>
      </footer>
    </div>
  );
}

// Export the Footer component
export default Footer;
