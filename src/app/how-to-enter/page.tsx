import HowToPlaySection from "@/components/HowToPlaySection";
import RecentlyWonWatches from "@/components/RecentlyWonWatches";
import TrustpilotBanner from "@/components/TrustpilotBanner";
import Image from "next/image";

export default function HowToEnter() {
  return (
    <>
      <TrustpilotBanner backgroundColor="#fff" color="#000" />
      <section className="relative px-6 bg-white">
        <div className="overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:z-[5]">
          <Image
            src="/howtoenterWatch.png"
            alt="Luxury Gold"
            width={1200}
            height={320}
            className="w-full object-cover"
          />
        </div>
      </section>
      <HowToPlaySection showHeader={false} />
      <RecentlyWonWatches />
    </>
  );
}
