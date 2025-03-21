"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [toggleLike, setToggleLike] = useState(false);
  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Like Button</h1>
      <div className="flex space-x-2 items-center">
        <Heart
          onClick={() => setToggleLike((prev) => !prev)}
          size={100}
          className="cursor-pointer"
          fill={toggleLike ? "red" : "white"}
          color={toggleLike ? "red" : "black"}
        />
      </div>
    </div>
  );
};

export default page;
