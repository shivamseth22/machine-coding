"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export const page = () => {
  const [data, setData] = useState([
    { title: "Item 1", value: "I am Item 1" },
    { title: "Item 2", value: "I am Item 2" },
    { title: "Item 3", value: "I am Item 3" },
    { title: "Item 4", value: "I am Item 4" },
  ]);

  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

  const handleItemClick = (index: number) => {
    setIsOpen((prev) => {
      console.log(prev);
      return prev.map((item, idx) => (idx == index ? !item : item));
    });
  };
  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Accordian</h1>
      <div className="flex flex-col ">
        {data.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(index)}>
            <h1 className="flex justify-between items-center cursor-pointer">
              <span>{item.title}</span>
              {isOpen[index] ? <ChevronUp /> : <ChevronDown />}
            </h1>
            <div>{isOpen[index] && item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
