import React from "react";

function  AnchorTag() {
  return (
    <div className="flex items-center justify-between w-full gap-[20px]">
      <ul className="flex text-black gap-[40px] items-center">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="ml-auto">
        <button className="bg-[rgb(6,187,204)] text-white py-[30px] px-[45px] mt-[-10px] mb-[-5px] mr-[-17px] ">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default AnchorTag;
