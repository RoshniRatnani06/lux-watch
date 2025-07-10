"use client";

import Image from "next/image";
import { CountdownTimer } from "./CoundownTimer";
import { ArrowRight } from "lucide-react";

interface CompetitionCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ticketsLeft?: number;
  specialOffer?: string;
  variant?: "default" | "special";
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  price,
  days,
  hours,
  minutes,
  seconds,
  ticketsLeft,
  specialOffer,
  variant = "default",
}) => {
  return (
    <div className="flex flex-col items-start flex-1 relative lg:max-w-full">
      {/* Image Container */}
      <div className="flex flex-col items-start w-full">
        <div className="relative w-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={560}
            height={300}
            className="h-[300px] w-full object-cover"
          />
          {specialOffer && (
            <div className="absolute top-5 right-5 text-black py-2 px-3 rounded-full bg-white font-semibold text-sm font-sans lg:top-4 lg:right-4 lg:py-1.5 lg:px-2.5 lg:text-xs">
              {specialOffer}
            </div>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-start flex-1 w-full rounded-b-md shadow-lg relative bg-white p-4">
        {/* Timer Section */}
        <div className="flex flex-row items-start w-full border-b border-gray-200 pb-2">
          {/* Countdown Timer - takes 50% width */}
          <div className="w-1/2">
            <CountdownTimer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>

          {/* Tickets Left - takes 50% width */}
          {variant === "default" && ticketsLeft && (
            <div className="w-1/2 flex justify-end items-center">
              <div className="flex h-12 px-5 flex-col items-end">
                <div className="flex pb-1 flex-col items-center w-full">
                  <div className="text-gray-900 text-center font-normal text-2xl leading-7 font-serif lg:text-xl lg:leading-6">
                    {ticketsLeft}
                  </div>
                </div>
                <div className="flex flex-col items-center w-full">
                  <div className="text-gray-900 text-right uppercase font-semibold text-xs leading-4 font-sans lg:text-xs lg:leading-3">
                    TICKETS LEFT
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start w-full mt-4">
          {/* Title */}
          <div className="flex pb-2 flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <div className="text-gray-900 font-bold text-2xl leading-7 font-serif lg:text-xl lg:leading-6 sm:text-lg sm:leading-5">
                {title}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex pb-4 flex-col items-start w-full">
            <div className="flex items-start w-full">
              <div className="flex flex-col items-start w-full">
                <div className="text-gray-900 font-normal text-sm leading-5 font-sans">
                  {price}
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-start w-full">
            <button className="flex h-10 w-full max-w-[250px] py-2 px-4 items-center justify-between gap-2 rounded bg-[#FBCD4E] text-gray-900 uppercase font-semibold text-sm font-sans hover:bg-yellow-500 transition-colors">
              ENTER NOW
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
