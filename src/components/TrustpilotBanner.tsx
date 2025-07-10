"use client"; // Optional: only if needed for interactivity

import Image from "next/image";
import React from "react";

interface TrustpilotBannerProps {
  backgroundColor?: string;
  color?: string;
}

const TrustpilotBanner: React.FC<TrustpilotBannerProps> = ({ backgroundColor = '#2f2f2f', color = '#fff' }) => {
  const trustpilotStarsSvg = `
    <svg width="115" height="22" viewBox="0 0 115 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="trustpilot-stars">
      <g clip-path="url(#clip0_2311_2244)">
        <path d="M0.5 0.532227H21.875V21.9072H0.5V0.532227ZM23.6562 0.532227H45.0312V21.9072H23.6562V0.532227ZM46.8125 0.532227H68.1875V21.9072H46.8125V0.532227ZM69.9688 0.532227H91.3438V21.9072H69.9688V0.532227ZM93.125 0.532227H114.5V21.9072H93.125V0.532227Z" fill="#00B67A"></path>
        <path d="M11.1873 14.9381L14.4381 14.1143L15.7963 18.3002L11.1873 14.9381ZM18.6686 9.52756H12.9463L11.1873 4.13928L9.42832 9.52756H3.70605L8.33731 12.8674L6.57832 18.2557L11.2096 14.9158L14.0596 12.8674L18.6686 9.52756ZM34.3436 14.9381L37.5943 14.1143L38.9525 18.3002L34.3436 14.9381ZM41.8248 9.52756H36.1025L34.3436 4.13928L32.5846 9.52756H26.8623L31.4936 12.8674L29.7346 18.2557L34.3658 14.9158L37.2158 12.8674L41.8248 9.52756ZM57.4998 14.9381L60.7506 14.1143L62.1088 18.3002L57.4998 14.9381ZM64.9811 9.52756H59.2588L57.4998 4.13928L55.7408 9.52756H50.0186L54.6498 12.8674L52.8908 18.2557L57.5221 14.9158L60.3721 12.8674L64.9811 9.52756ZM80.6561 14.9381L83.9068 14.1143L85.265 18.3002L80.6561 14.9381ZM88.1373 9.52756H82.415L80.6561 4.13928L78.8971 9.52756H73.1748L77.8061 12.8674L76.0471 18.2557L80.6783 14.9158L83.5283 12.8674L88.1373 9.52756ZM103.812 14.9381L107.063 14.1143L108.421 18.3002L103.812 14.9381ZM111.294 9.52756H105.571L103.812 4.13928L102.053 9.52756H96.3311L100.962 12.8674L99.2033 18.2557L103.835 14.9158L106.685 12.8674L111.294 9.52756Z" fill="white"></path>
      </g>
      <defs>
        <clipPath id="clip0_2311_2244">
          <rect width="114" height="21.3864" fill="white" transform="translate(0.5 0.52655)"></rect>
        </clipPath>
      </defs>
    </svg>
  `;

  return (
    <section className="flex flex-col sm:flex-row items-center justify-between md:justify-center gap-2 px-4 py-3 w-full min-h-[55px] sm:px-6 sm:py-4" style={{ backgroundColor }}>
      {/* Text */}
      <h2 className="text-sm font-normal text-center sm:text-left leading-5" style={{color}}>
        Rated Excellent: 3000+ 5 Star reviews
      </h2>

      {/* Stars */}
      <div
        className="w-[115px] h-[22px] flex justify-center items-center"
        dangerouslySetInnerHTML={{ __html: trustpilotStarsSvg }}
      />

      {/* Logo Placeholder */}
      <div className="w-[108px] h-[27px] md:hidden flex justify-center items-center">
        {/* Add Trustpilot logo here if available */}
        <Image 
            src="/Star.png"
            alt="Star"
            height={40}
            width={40}
        />
        <span className="text-lg" style={{color}}>Trustpilot</span>
      </div>
    </section>
  );
};

export default TrustpilotBanner;
