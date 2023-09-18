"use client";
import { usePathname } from "next/navigation";

import { titillium } from "@/utils/fonts/fonts-google";

export default function Steps({ stepName, stepNumber }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center font-bold gap-2">
      <span
        className={`${titillium.className} bg-purple-mid rounded-full w-7 h-7 flex justify-center items-center text-white font-bold`}
      >
        {stepNumber}
      </span>
      <p>{stepName}</p>
    </div>
  );
}
