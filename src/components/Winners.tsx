"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Winners = () => {
  const winners = [
    {
      id: 1,
      name: "Richard",
      prize: "Rolex Day-Date 40",
      image: "/Richard.png",
    },
    { id: 2, name: "David", prize: "Rolex Submariner", image: "/David.png" },
    { id: 3, name: "Alex", prize: "Rolex GMT Batman", image: "/Alex.png" },
    { id: 4, name: "Jonathan", prize: "Rolex Daytona", image: "/Jonathan.png" },
    { id: 5, name: "Julie", prize: "Rolex Submariner", image: "/Julie.png" },
    { id: 6, name: "John", prize: "Rolex Day-Date 40", image: "/John.png" },
  ];

  return (
    <section className="block py-4 overflow-hidden bg-white">
      <div className="text-center giveaway-section">
        <div className="flex flex-col md:flex-row justify-around items-center mb-4">
          <div className="flex items-center gap-2 w-full md:w-1/3 justify-around">
            <p className="para-section">We've given away</p>
            <Image
              src="/curved-line.png"
              alt="curved-line"
              className="hidden md:block"
              width={65}
              height={6}
            />
          </div>

          <p className="amount-tag text-center font-bold leading-[51.3px] text-[32px] sm:text-[45px] font-ibarra">
            £17,580,750
          </p>

          <div className="flex items-center gap-2 w-full md:w-1/3 justify-around">
            <Image
              src="/curved-line.png"
              alt="curved-line"
              className="hidden md:block"
              width={65}
              height={6}
            />
            <p className="para-section text-gray-600">
              worth of competitions and counting
            </p>
          </div>
        </div>

        <div className="my-4 mb:my-8">
          <h3 className="mb-4 text-xl font-medium">Winners</h3>
          <div className="flex justify-center">
            <p className="mb-4 text-2xl font-bold max-w-[400px]">
              Our aim is for everyone to own their dream watch
            </p>
          </div>

          <div className="relative w-full">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              className="pb-4"
            >
              {winners.map((winner) => (
                <SwiperSlide key={winner.id}>
                  <div className="flex flex-col items-center text-center">
                    <Image
                        src={
                            winner.image +
                            "?height=200&width=200&query=person holding prize"
                        }
                        alt={`${winner.name} with ${winner.prize}`}
                        width={100}
                        height={100}
                        className="mb-2 rounded-full object-cover border-2 border-white w-[200px] h-[200px]"
                    />

                    <p className="text-xl sm:text-md text-gray-600">Winner of the</p>
                    <p className="text-[30px] leading-[40px] md:text-[20px] md:leading-[30px] text-gray-600 mb-2">{`${winner.prize}`}</p>
                    <Image
                        src="/Separator.png"
                        alt="Separator"
                        width={40}
                        height={6}
                    />
                    <p className="text-xl sm:text-md font-medium text-gray-800 mt-2">
                      {winner.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev absolute left-[20px] top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                <ArrowLeft className="h-4 w-4 text-black" />
              </button>
              <button className="swiper-button-next absolute right-[20px] top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                <ArrowRight className="h-4 w-4 text-black" />
              </button>
            </Swiper>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-90 md:w-40 mt-4 border-yellow-500 bg-[#FBCD4E] text-xs text-black hover:bg-yellow-600 border-radius-0"
          >
            View All Winners
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Winners;
