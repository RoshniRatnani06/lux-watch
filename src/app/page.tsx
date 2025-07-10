import AsSeenInSection from "@/components/AsSeenInSection";
import CompetitionSection from "@/components/CompetitionSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import RecentlyWonWatches from "@/components/RecentlyWonWatches";
import TrustpilotBanner from "@/components/TrustpilotBanner";
import WatchShowcase from "@/components/WatchShowcase";
import Winners from "@/components/Winners";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TrustpilotBanner backgroundColor="#fff" color="#000"/>
      <CompetitionSection />
      <Winners />
      <HowToPlaySection />
      <RecentlyWonWatches />
      <AsSeenInSection />
      <WatchShowcase />
    </div>
  );
}
