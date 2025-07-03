"use client";

import AboutDialog from "./ui/reusables/AboutDialog";
import GridSection from "./ui/reusables/GridSection";

export const HomePageClient = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="sticky top-0 z-50 flex flex-row items-center justify-between bg-white">
        <h1 className="text-xl font-bold">CrickTacToe</h1>
        <AboutDialog />
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-10">
        <GridSection />
      </div>
    </div>
  );
};

export default HomePageClient;
