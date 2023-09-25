import Link from "next/link";

export default function LinkItem({ style, name, link, click }) {
  return (
    <Link href={link} className={style} onClick={click}>
      {name}
    </Link>
  );
}
