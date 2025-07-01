"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "./ui/shadcn/dialog";
import { Info } from "lucide-react";

export const HomePageClient = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="sticky top-0 z-50 flex flex-row items-center justify-between bg-white">
        <h1 className="text-xl font-bold">CrickTacToe</h1>
        <Dialog>
          <DialogTrigger asChild>
            <button aria-label="About">
              <Info className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogTitle className="text-xl font-semibold mb-2">
              About CrickTacToe
            </DialogTitle>
            <p className="text-sm text-gray-700 mb-2">
              CrickTacToe is a daily cricket trivia game powered by cricket
              stats and history.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-2">
              <li>Follow CrickTacToe 🔔</li>
              <li>Remind me to play tomorrow</li>
            </ul>
            <p className="mb-1 font-medium text-sm">How to Play CrickTacToe:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                Select a cricketer for each cell that satisfies the row and
                column criteria.
              </li>
              <li>
                You have <strong>nine guesses</strong> to complete the grid.
              </li>
              <li>
                Each selection, whether correct or incorrect, counts as a guess.
              </li>
              <li>
                A new grid is available daily at{" "}
                <strong>6:00am local time</strong>.
              </li>
              <li>Each player can only be used once per grid.</li>
              <li>
                Players may be active or retired (international teams and T20
                leagues).
              </li>
              <li>
                For a <strong>Team + Team</strong> cell, the player must have
                played at least one official match for both teams.
              </li>
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HomePageClient;
