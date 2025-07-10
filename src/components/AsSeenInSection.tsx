import React from 'react';

export const AsSeenInSection: React.FC = () => {
  return (
    <div className="bg-white pt-10">
      <section className="container mx-auto max-w-[1200px] flex flex-col items-stretch justify-start w-full">
        <header className="max-w-full self-center text-center">
          <div className="w-full">
            <h4 className="text-[#212121] font-normal text-lg lg:max-w-full font-['Ibarra_Real_Nova',_-apple-system,_Roboto,_Helvetica,_sans-serif]">
              <span className="font-normal text-lg font-['Ibarra_Real_Nova']">
                As seen in
              </span>
            </h4>
          </div>
        </header>

        <div className="flex items-stretch w-full md:gap-5 justify-center md:justify-start flex-wrap lg:max-w-full">
          {/* Forbes Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[146px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-start justify-center fill-white opacity-100">
                  <img
                    src="/Forbes.png"
                    alt="Forbes logo"
                    className="object-contain object-center opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* IBT Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[147px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-center justify-center fill-white opacity-100">
                  <img
                    src="/IBT.png"
                    alt="IBT logo"
                    className="object-contain object-center opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Entrepreneur Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[146px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-stretch justify-center fill-white opacity-100">
                  <img
                    src="/entreprenuer.png"
                    alt="Entrepreneur logo"
                    className="object-contain object-center opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* City Current Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[146px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-stretch justify-center fill-white opacity-100">
                  <img
                    src="/citycurrent.png"
                    alt="City Current logo"
                    className="object-contain object-center opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Haul Gerie Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[147px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-stretch justify-center fill-white opacity-100">
                  <img
                    src="/haul.png"
                    alt="Haul Gerie logo"
                    className="object-contain object-center "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Evening Standard Logo */}
          <div className="max-w-[1200px] overflow-hidden md:flex-grow flex-shrink w-[146px]">
            <div className="flex min-h-[100px] md:min-h-[140px] max-w-full w-[183px] flex-col overflow-hidden items-center justify-center">
              <div className="opacity-100 w-full overflow-hidden px-[18px] lg:px-5">
                <div className="bg-white flex flex-col items-stretch justify-center fill-white opacity-100">
                  <img
                    src="/standard.png"
                    alt="Evening Standard logo"
                    className="object-contain object-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsSeenInSection;