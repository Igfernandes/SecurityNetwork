import Link from "next/link";
import { NavbarProps } from "./type";

export function Navbar({ menu }: NavbarProps) {
  return (
    <nav>
      <ul className="flex text-color-white">
        {menu.map((li, key) => {
          return (
            <li key={key} className="mx-3 font-semibold">
              <Link href={!!li.link ? li.link : `#${li.label.toLowerCase()}`}>
                {li.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
