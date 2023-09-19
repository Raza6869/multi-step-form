"use client";
import { usePathname } from "next/navigation";

import ArrowLeftIcon from "./arrow-left-icon";
import SucessIcon from "./sucess.-icon";
import Steps from "./steps";

export default function StepSection() {
  const pathname = usePathname();

  const ongoing =
    " bg-purple-mid rounded-full w-7 h-7 flex justify-center items-center text-white font-bold";
  const unchecked =
    "bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center text-gray-300 font-bold";
  const checked =
    "bg-sucess-color   rounded-full w-7 h-7 flex justify-center items-center text-gray-300 font-bold";

  return (
    <div className="flex justify-between items-center w-full">
      <Steps
        stepName="Contato"
        stepNumber={pathname === "/" ? "1" : <SucessIcon />}
        style={pathname === "/" ? ongoing : checked}
      />
      <ArrowLeftIcon />
      <Steps
        stepName="Empresa"
        stepNumber={pathname === "/empory" ? "2" : <SucessIcon />}
        style={
          pathname === "/empory"
            ? ongoing
            : unchecked && pathname === "/project"
            ? checked
            : unchecked && pathname === "/"
            ? unchecked
            : ongoing
        }
      />
      <ArrowLeftIcon />
      <Steps
        stepName="Projeto"
        stepNumber="3"
        style={pathname === "/project" ? ongoing : unchecked}
      />
    </div>
  );
}
