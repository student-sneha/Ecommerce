import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.trendy} className="w-30 mb-5 " />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-567-789</li>
            <li>conact@gmail.com</li>
        </ul>
      </div>
  </div>
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2025@ Trendylo.com - All Right Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
