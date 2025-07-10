import { WatchData } from '@/lib/watchData';
import Image from 'next/image';

interface WatchCardProps {
  watch: WatchData;
}

export const WatchCard = ({ watch }: WatchCardProps) => {
  return (
    <article className="flex flex-col h-auto min-h-[500px] md:h-[584px] bg-white rounded-md shadow-lg overflow-hidden">
      <div className="h-[411px] w-full relative">
        <Image
          src={watch.imageUrl}
          alt={watch.altText || watch.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 w-full p-8 flex flex-col items-center sm:p-6 sm:gap-3 sm:min-h-[160px]">
        <h3 className="text-gray-900 text-center text-lg leading-5 font-normal m-0 w-full max-w-[278px]" style={{ fontFamily: '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif' }}>
          {watch.title}
        </h3>

        <div className="w-8 h-px bg-amber-400 my-6 sm:my-4"></div>

        <div className="flex flex-col items-center gap-1 w-full max-w-[278px]">
          <time className="text-gray-900 text-center text-lg leading-5 font-bold m-0" style={{ fontFamily: '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif' }}>
            {watch.dateWon}
          </time>
          <p className="text-gray-900 text-center text-sm leading-4 font-normal m-0" style={{ fontFamily: '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif' }}>
            {watch.worth}
          </p>
        </div>
      </div>
    </article>
  );
};