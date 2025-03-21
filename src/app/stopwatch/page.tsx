"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  let handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prev) => {
          let { hour, minute, second } = prev;

          second++;
          if (second >= 60) {
            second = 0;
            minute++;
          }
          if (minute >= 60) {
            minute = 0;
            hour++;
          }

          return { hour, minute, second };
        });
      }, 1000);

      return () => clearInterval(interval);
    }else{
        setTime({
            hour: 0,
            minute: 0,
            second: 0,
          })
    }
  }, [isRunning]);


  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Stopwatch</h1>
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-2 items-center p-2 border px-4">
          <div>
            <span>HH </span> {" : "}
            <span>MM </span> {" : "}
            <span>SS </span>
          </div>{" "}
          <div>
            <span>{time.hour}</span> {" : "}
            <span>{time.minute}</span> {" : "}
            <span>{time.second}</span>
          </div>
        </div>

        <Button
          onClick={handleStart}
          className=" active:scale-90 transition-all"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
};

export default page;
