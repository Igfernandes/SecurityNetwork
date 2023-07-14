import Link from "next/link";
import { NavbarProps } from "./type";

export function Navbar({ menu, classLi, classUl }: NavbarProps) {
  return (
    <nav>
      <ul className={`text-color-white ${classUl}`}>
        {menu.map((li, key) => {
          return (
            <li key={key} className={`mx-3 ${classLi}`}>
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
