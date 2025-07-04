"use client";

import AboutDialog from "./ui/reusables/AboutDialog";
import GridSection from "./ui/reusables/GridSection";

export const HomePageClient = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="text-white sticky top-0 z-50 grid grid-cols-3 items-center pl-4 pr-4 sm:pl-20 sm:pr-20 h-12">
        <div></div>
        <h1 className="justify-self-center text-xl font-bold">CrickTacToe</h1>
        <div className="justify-self-end">
          <AboutDialog />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <GridSection />
      </div>
    </div>
  );
};

export default HomePageClient;
