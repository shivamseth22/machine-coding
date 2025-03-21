"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const page = () => {
  const [tabs, setTabs] = useState([
    { name: "dummy Tab 1", component: <DummyTab1 /> },
    { name: "dummy Tab 2", component: <DummyTab2 /> },
  ]);
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Tabs</h1>
      <div className="flex flex-col space-x-2 items-center">
        <div className="flex space-x-2 bg-gray-300 m-2 p-2 rounded-md">
          {tabs.map((item, index) => (
            <div key={index} className="">
              <Button
                onClick={() => setIsActive(index)}
                className={`${
                  index == isActive
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-white"
                }`}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="border w-full min-h-48 p-4">
        {tabs[isActive].component}
      </div>
    </div>
  );
};

export default page;

const DummyTab1 = () => {
  return (
    <>
      <h1>Welcome to Tab 1</h1>
      <p>
        This is the first tab where you can find introductory information and
        insights about our platform. Explore more to discover the features we
        offer.
      </p>
    </>
  );
};

const DummyTab2 = () => {
  return (
    <>
      <h1>Welcome to Tab 2</h1>
      <p>
        In this tab, you'll find additional details and resources to help you
        make the most of our platform. Stay tuned for more updates and new
        features!
      </p>
    </>
  );
};
