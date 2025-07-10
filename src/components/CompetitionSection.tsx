'use client';

import { CompetitionCard } from './CompetitionCard';

export const CompetitionSection: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Inter:wght@400;600;700&display=swap"
      />

      <section className="flex w-full flex-col items-center bg-gradient-to-b from-gray-900 to-gray-600 shadow-lg py-10 px-5 lg:py-10 lg:px-4 sm:py-5 sm:px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-center items-start gap-5">
            {/* First Competition Card */}
            <CompetitionCard
              imageUrl="/Watch1.png?width=1102"
              imageAlt="Watch1"
              title="Win the Low ticket Rolex Sub 'Bluesy' Comp"
              price="£60 per entry"
              days={1}
              hours={5}
              minutes={10}
              seconds={25}
              ticketsLeft={174}
              variant="default"
            />

            {/* Second Competition Card */}
            <CompetitionCard
              imageUrl="/Watch2.png?width=1102"
              imageAlt="Watch2"
              title="Win the Monthly Rolex GMT 'Pepsi' Comp"
              price="£14.99 per entry"
              days={27}
              hours={5}
              minutes={10}
              seconds={25}
              specialOffer="TICKETS ONLY £14.99"
              variant="special"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitionSection;