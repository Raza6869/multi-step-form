import { titillium } from "@/utils/fonts/fonts-google";

export default function Steps({ stepName, stepNumber, style }) {
  return (
    <div className="flex items-center font-bold gap-2">
      <span className={`${titillium.className} ${style}`}>{stepNumber}</span>
      <p>{stepName}</p>
    </div>
  );
}
