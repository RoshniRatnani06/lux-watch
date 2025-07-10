import React from "react";

interface StepData {
  icon: string; // Path to PNG image
  title: string;
  description: string;
}

const HowToPlaySection: React.FC = () => {
  const steps: StepData[] = [
    {
      icon: "/chooseticket.png",
      title: "Choose your tickets",
      description:
        "Choose how many tickets you want and you're on the way to winning the luxury timepiece",
    },
    {
      icon: "/playonline.png",
      title: "Play the game online",
      description:
        "Test your watch knowledge in our online game – built to sort the connoisseurs from the pretenders.",
    },
    {
      icon: "/buyticket.png",
      title: "Buy your tickets",
      description:
        "Pay securely to submit your entry. We use a third party Random Number Generator called Randomdraws to choose the winner.",
    },
    {
      icon: "/winwatch.png",
      title: "Win your dream watch!",
      description:
        "And that's it! You could walk away with a new £10,000 watch – for as little as £14.99.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-5 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-[#212121] text-center font-normal text-xl font-['Ibarra_Real_Nova']">
            How to play
          </h2>
          <h1 className="text-[#212121] text-center font-bold font-['Ibarra_Real_Nova'] text-4xl leading-[41px]">
            Win the watch of your dreams
          </h1>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >
              {/* Connecting Line - Only show for first 3 steps on large screens */}
              {index < 3 && (
                <div className="hidden lg:block absolute left-full top-10 w-12 h-px bg-[#fbcd4e] translate-x-[-50%]"></div>
              )}
              {index < 3 && (
                <div className="hidden lg:block absolute left-full top-[39px] w-[3px] h-[3px] rounded-full bg-[#fbcd4e] translate-x-[-50%]"></div>
              )}

              {/* Icon Container */}
              <div className="flex w-20 h-20 p-px justify-center items-center rounded-full mb-5 sm:w-[60px] sm:h-[60px]">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#212121] text-center font-bold text-[30px] leading-[34.2px] font-['Ibarra_Real_Nova'] mb-4 sm:text-2xl sm:leading-7">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#212121] text-center font-normal text-sm leading-[21px] font-['Inter'] sm:text-[13px] sm:leading-[18px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;