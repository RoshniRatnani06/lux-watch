import React from "react";
import Image from "next/image";

const WatchShowcase = () => {
  const watches = [
    {
      name: "How to Collect Luxury Watches",
      image: "How to Collect Luxury Watches",
      description: "Learn tips and tricks for watch collecting from novices to experts. Avoid costly mistakes and enjoy a smoother journey.Read our article now",
      src: "/latestnews1.png",
    },
    {
      name: "Conversing with Collectors: Jay,Community Member",
      image: "Conversing with Collectors: Jay,Community Member",
      description: "Jay was our 200th competition winner and walked away with the biggest win since our inception. This is Jay’s story.",
      src: "/latestnews2.png",
    },
    {
      name: "Conversing with Collectors: Jose Hardy",
      image: "Conversing with Collectors: Jose Hardy",
      description: "For our first American edition of Conversing with Collectors, we speak with the one-of-a-kind Jose Hardy about his watch journey.",
      src: "/latestnews3.png",
    },
  ];

  return (
    <section className="relative pb-8">
      {/* Background rows */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-[75%]"
          style={{
            background:
              "linear-gradient(0deg, rgba(236, 236, 236, 0.65) 0%, rgba(236, 236, 236, 0) 100%)",
          }}
        ></div>
        <div className="h-[25%] bg-white"></div>
      </div>

      {/* Content on top */}
      <div className="relative z-10 text-center">
        <div className="w-full">
            <header className="flex w-full max-w-3xl flex-col items-center gap-2 relative md:gap-4">
            <h4
                className="text-gray-900 text-center text-xl font-normal m-0 w-full"
                style={{
                fontFamily:
                    '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif',
                }}
            >
                The Lux Journal
            </h4>

            <h2
                className="text-gray-900 text-center text-4xl leading-[51.3px] font-bold m-0 w-full md:text-3xl md:leading-10 sm:text-2xl sm:leading-8"
                style={{
                fontFamily:
                    '"Ibarra Real Nova", -apple-system, Roboto, Helvetica, sans-serif',
                }}
            >
                All the lastest news,stories and reviews
            </h2>
            </header>
        </div>
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {watches.map((watch, index) => (
              <div key={index} className="overflow-hidden bg-white shadow-md">
                <Image
                  src={watch.src}
                  alt={watch.name}
                  width={300}
                  height={436}
                  className="w-full h-[436px] object-cover dream-image"
                />
                <div className="p-3 text-center">
                  <div className="text-xs font-medium text-gray-800">
                    {watch.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {watch.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchShowcase;
