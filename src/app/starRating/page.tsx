"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleClick = (index:number) => {
    setStars((prev) => prev.map((_, i) => (i <=index ? true : false)));

    if (stars[index]) {
      setStars((prev) => prev.map((_, i) => (i < index ? true : false)));
    }
  };

  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Star Rating</h1>
      <div className="flex space-x-2 items-center">
        {stars.map((item, index) => (
          <Star
            key={index}
            onClick={() => handleClick(index)}
            fill={item ? "red" : "white"}
            color={item ? "red" : "black"}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
