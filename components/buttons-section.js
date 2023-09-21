"use client";
import { usePathname } from "next/navigation";
import ButtonItem from "./button-item";
import { useState } from "react";

export default function ButtonSection() {
  const pathname = usePathname();
  const [link, setLink] = useState(pathname);

  console.log(link);

  const back =
    "uppercase text-center px-8 py-4 border-2 w-[158px] text-purple-mid font-bold border-purple-mid rounded-[6px] pointer hover:opacity-80";
  const next =
    "uppercase px-8 py-4 bg-purple-mid min-w-[158px] text-white font-bold rounded-[6px] pointer hover:bg-purple-light transition-all ease-linear";

  return (
    <div className="flex justify-between w-full">
      <ButtonItem
        name="voltar"
        style={pathname === "/" ? "invisible" : back}
        link={link}
        click={() =>
          pathname === "/empory"
            ? setLink("/")
            : "/" && pathname === "/project"
            ? setLink("/empory")
            : ""
        }
      />
      <ButtonItem
        name={pathname === "/project" ? "enviar proposta" : "continuar"}
        style={next}
        link={link}
        click={() =>
          pathname === "/"
            ? setLink("/empory")
            : "/" && pathname === "/empory"
            ? setLink("/project")
            : ""
        }
      />
    </div>
  );
}
