import React from 'react';
import { LatestCompetitionCard } from './LatestCompetitionCard';

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

interface LatestCompetitionsProps {
  competitions?: Competition[];
}

const defaultCompetitions: Competition[] = [
  {
    id: '1',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c6984673b88189ba684718ce8ae4f7d5ac1a5174?width=1213',
    title: "Win the Low ticket Rolex Sub 'Bluesy' Comp",
    price: '£60 per entry',
    countdown: {
      days: 1,
      hours: 9,
      minutes: 10,
      seconds: 25,
    },
    ticketsLeft: 174,
  },
  {
    id: '2',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c60fdd9d7c073764b8b4cdd0f7f3b1dfa19550ef?width=1213',
    title: "Win the Monthly Rolex GMT 'Pepsi' Comp",
    price: '£14.99 per entry',
    countdown: {
      days: 27,
      hours: 5,
      minutes: 10,
      seconds: 25,
    },
  },
];

export const LatestCompetitions: React.FC<LatestCompetitionsProps> = ({
  competitions = defaultCompetitions,
}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="flex w-full flex-col items-center px-0 bg-[#1b1b1b] py-5 md:py-10">
        <div className="flex w-full max-w-[1200px] px-10 flex-col items-center gap-10 lg:px-5 md:px-4">
          <div className="flex w-full justify-center items-start">
            <div className="flex px-4 flex-col items-start flex-1 self-stretch">
              <div className="flex flex-col items-center self-stretch">
                <h2 className="self-stretch text-white text-center font-['Ibarra_Real_Nova'] text-lg font-bold">
                  Latest Competitions
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-10 w-full">
            {competitions.map((competition) => (
              <LatestCompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestCompetitions;