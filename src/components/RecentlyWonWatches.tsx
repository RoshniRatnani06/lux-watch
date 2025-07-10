import { WatchData } from '@/lib/watchData';
import { WatchCard } from './WatchCard';

const watches: WatchData[] = [
  {
    id: '1',
    imageUrl: '/wonWatch1.png?width=748',
    title: "Patek Philippe Aquanaut '5167A'",
    dateWon: 'Won 22/09/2023',
    worth: 'Worth £60,000',
    altText: "Patek Philippe Aquanaut '5167A' luxury watch"
  },
  {
    id: '2',
    imageUrl: '/wonWatch2.png?width=748',
    title: 'Rolex GMT II',
    dateWon: 'Won 27/10/2023',
    worth: 'Worth £40,000',
    altText: 'Rolex GMT II luxury watch'
  },
  {
    id: '3',
    imageUrl: '/wonWatch3.png?width=748',
    title: "AP Royal Oak '15500ST'",
    dateWon: 'Won 6/10/2023',
    worth: 'Worth £50,000',
    altText: "Audemars Piguet Royal Oak '15500ST' luxury watch"
  }
];

export const RecentlyWonWatches = () => {
  return (
    <section className="flex w-full pt-10 flex-col items-center min-h-[850px] bg-white md:pt-16 sm:pt-10 sm:px-4">
      <div className="flex w-full max-w-7xl px-4 flex-col items-center gap-16 relative md:gap-12 sm:gap-8 sm:px-0">
        <header className="flex w-full max-w-3xl flex-col items-center gap-2 relative md:gap-4">
          <h4 className="text-gray-900 text-center text-xl font-normal m-0 w-full" style={{ fontFamily: '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif' }}>
            Recently won watches
          </h4>

          <h2 className="text-gray-900 text-center text-4xl leading-[51.3px] font-bold m-0 w-full md:text-3xl md:leading-10 sm:text-2xl sm:leading-8" style={{ fontFamily: '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif' }}>
            Our community has won Patek Philippe, Rolex & Audemars Piguet
          </h2>
        </header>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyWonWatches;