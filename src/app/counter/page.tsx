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

  console.log(time);
  let handleStart = () => {
    if( (time.hour > 0 || time.minute > 0 || time.second >0)){
      setIsRunning((prev) => !prev);
    }else{
      alert("set counter first")
    }

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    console.log(name);
    setTime((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isRunning && (time.hour > 0 || time.minute > 0 || time.second > 0)) {
      const interval = setInterval(() => {
        setTime((prev) => {
          let { hour, minute, second } = prev;

          if (second > 0) {
            second--;
          } else {
            if (minute > 0) {
              minute--;
              second = 59;
            } else if (hour > 0) {
              hour--;
              minute = 59;
              second = 59;
            }
          }

          return { hour, minute, second };
        });
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setTime({ hour: 0, minute: 0, second: 0 });
    }
  }, [isRunning ]);


  return (
    <div className="flex flex-col items-center p-2 sm:h-4 md:p-8 ">
      <h1 className="text-2xl p-2">Counter</h1>
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-2 items-center p-2 border px-4">
          <label htmlFor="Hour">Hour</label>
          <Input
            type="number"
            id="Hour"
            name="hour"
            value={time.hour}
            min={0}
            max={24}
            onChange={handleInputChange}
          />
          <label htmlFor="Minute">Minute</label>
          <Input
            type="number"
            id="Minute"
            name="minute"
            value={time.minute}
            min={0}
            max={60}
            onChange={handleInputChange}
          />
          <label htmlFor="Second">Second</label>
          <Input
            type="number"
            id="Second"
            name="second"
            value={time.second}
            min={0}
            max={60}
            onChange={handleInputChange}
          />
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
