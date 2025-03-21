"use client";
import React, { useEffect, useState } from "react";

const TraficLight = () => {
  const colors = [
    {
      color: "red",
      time: 1000,
      index: 0,
    },
    {
      color: "orange",
      time: 2000,
      index: 1,
    },
    {
      color: "green",
      time: 3000,
      index: 2,
    },
  ];
  const [currentFlow, setCurrentFlow] = useState({
    color: "red",
    time: 1000,
    index: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlow((prev) => {
        console.log(prev);
        const prevIndex = prev.index;
        const nextIndex = (prevIndex + 1) % 3;
        return {
          color: colors[nextIndex].color,
          time: colors[nextIndex].time,
          index: colors[nextIndex].index,
        };
      });
    }, currentFlow.time);
    return () => clearInterval(interval);
  }, [currentFlow]);
  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Trafic Light</h1>

      <div className="w-24  flex flex-col justify-around items-center mx-auto border border-black bg-black p-2 space-y-2">
        <span
          className={`w-20 h-20 rounded-full bg-red-600 border ${
            currentFlow.color !== "red" && "opacity-50"
          } border-black flex justify-center items-center`}
        >
          Stop
        </span>
        <span
          className={`w-20 h-20 rounded-full bg-orange-300 border   ${
            currentFlow.color !== "orange" && "opacity-50"
          }  border-orange-300 flex justify-center items-center`}
        >
          Go Slow
        </span>
        <span
          className={`w-20 h-20 rounded-full bg-green-300 border   ${
            currentFlow.color !== "green" && "opacity-50"
          }  border-green-300 flex justify-center items-center`}
        >
          Go
        </span>
      </div>
    </div>
  );
};

export default TraficLight;
