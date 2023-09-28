"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ButtonSection() {
  const pathname = usePathname();
  const [link, setLink] = useState(pathname);

  return (
    <div className="flex justify-between w-full mt-8">
      <Link
        className={pathname === "/" ? "invisible" : "back-button"}
        href={link}
        onClick={() =>
          pathname === "/empory"
            ? setLink("/")
            : "/" && pathname === "/project"
            ? setLink("/empory")
            : ""
        }
      >
        Voltar
      </Link>
      <button type="submit" className="next-button">
        {pathname === "/"
          ? "continuar"
          : "" || pathname === "/empory"
          ? "continuar"
          : "" || pathname === "/project"
          ? "enviar proposta"
          : ""}
      </button>
      {/*() =>
          pathname === "/"
            ? setLink("/empory")
            : "/" && pathname === "/empory"
            ? setLink("/project")
            : ""
      */}
    </div>
  );
}
