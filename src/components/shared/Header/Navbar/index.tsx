import Link from "next/link";
import { NavbarProps } from "./type";

export function Navbar({ menu }: NavbarProps) {
  return (
    <nav>
      <ul>
        {menu.map((li, key) => {
          return (
            <li key={key}>
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
