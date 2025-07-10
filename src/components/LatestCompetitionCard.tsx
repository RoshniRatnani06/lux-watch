import React from "react";
import { CountdownTimer } from "./CoundownTimer";
import { ArrowRight } from "lucide-react";

interface Competition {
  id: string;
  image: string;
  title: string;
  price: string;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  ticketsLeft?: number;
}

interface CompetitionCardProps {
  competition: Competition;
}

export const LatestCompetitionCard: React.FC<CompetitionCardProps> = ({
  competition,
}) => {
  return (
    <div className="flex flex-col w-full md:flex-row md:h-auto">
      {/* Left Side: Image */}
      <div className="flex w-full md:w-1/2">
        <img
          src={competition.image}
          alt={competition.title}
          className="w-full h-auto object-cover rounded-t-[6px] md:rounded-l-[6px] md:rounded-r-none"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex w-full md:w-1/2 flex-col items-start md:gap-5 rounded-b-[6px] shadow-[0_20px_45px_0_rgba(0,0,0,0.08)] bg-white md:rounded-r-[6px] md:rounded-l-none">
        <div className="flex flex-row items-start w-full border-b border-gray-200 pb-2 px-4">
          <div className="w-1/2">
            <CountdownTimer
              days={competition.countdown.days}
              hours={competition.countdown.hours}
              minutes={competition.countdown.minutes}
              seconds={competition.countdown.seconds}
            />
          </div>

          {competition.ticketsLeft && (
            <div className="w-1/2 flex justify-end items-center">
              <div className="flex h-12 px-4 flex-col items-end">
                <div className="flex pb-1 flex-col items-center w-full">
                  <div className="text-gray-900 text-center font-normal text-2xl leading-7 font-serif lg:text-xl lg:leading-6 md:text-lg">
                    {competition.ticketsLeft}
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

        <div className="flex flex-col items-start gap-2.5 w-full p-6 md:pb-8 flex-1">
          <div className="flex flex-col items-start w-full">
            <h3 className="w-full text-[#212121] font-['Ibarra_Real_Nova'] font-bold text-xl">
              {competition.title}
            </h3>
          </div>

          <div className="flex pb-6 items-start w-full">
            <div className="flex flex-col items-start w-full">
              <div className="text-[#212121] font-['Inter'] text-[14px] font-normal leading-[21px]">
                {competition.price}
              </div>
            </div>
          </div>

          <button className="flex h-[50px] w-full max-w-[311px] py-2.5 px-4 items-center gap-[-0.006px] border-2 border-[#fbcd4e] cursor-pointer bg-[#fbcd4e] md:max-w-full hover:bg-[#f5c842] transition-colors mt-auto">
            <span className="text-[#1b1b1b] uppercase font-['Inter'] text-[14px] font-semibold">
              ENTER NOW
            </span>
            <div className="flex h-[18px] min-w-[23px] pl-4 flex-col items-end flex-1 md:pl-20">
              <div className="flex w-[23px] h-[18px] flex-col items-start flex-shrink-0">
                <div className="flex w-[23px] h-[18px] px-[1.15px] flex-col justify-center items-center flex-shrink-0">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};