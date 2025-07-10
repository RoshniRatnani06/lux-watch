"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  const initialTime = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const d = Math.floor(timeLeft / (24 * 60 * 60));
  const h = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const m = Math.floor((timeLeft % (60 * 60)) / 60);
  const s = timeLeft % 60;

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex py-2 px-0 justify-between items-center w-full">
        {/* Days */}
        <div className="flex px-2 flex-col items-center">
          <div className="text-gray-900 text-center font-normal text-lg leading-5">
            {d}
          </div>
          <div className="text-gray-900 text-center uppercase font-semibold text-xs leading-4">
            DAY
          </div>
        </div>

        {/* Hours */}
        <div className="flex px-2 flex-col items-center">
          <div className="text-gray-900 text-center font-normal text-lg leading-5">
            {h}
          </div>
          <div className="text-gray-900 text-center uppercase font-semibold text-xs leading-4">
            HR
          </div>
        </div>

        {/* Minutes */}
        <div className="flex px-2 flex-col items-center">
          <div className="text-gray-900 text-center font-normal text-lg leading-5">
            {m}
          </div>
          <div className="text-gray-900 text-center uppercase font-semibold text-xs leading-4">
            MIN
          </div>
        </div>

        {/* Seconds */}
        <div className="flex px-2 flex-col items-center">
          <div className="text-gray-900 text-center font-normal text-lg leading-5">
            {s}
          </div>
          <div className="text-gray-900 text-center uppercase font-semibold text-xs leading-4">
            SEC
          </div>
        </div>
      </div>
    </div>
  );
};
