import Link from "next/link";
import { FacebookIcon } from "src/assets/icons/Facebook";
import { InstagramIcon } from "src/assets/icons/Instagram";
import { LinkedinIcon } from "src/assets/icons/Linkedin";
import { TwitterIcon } from "src/assets/icons/Twitter";

export function SocialGroups() {
  const className = "w-[15px] h-[15px] fill-color-white";

  return (
    <ul className="flex justify-between">
      <li>
        <Link href={"https://www.facebook.com/Company-Market-103482957803214/"}>
          <FacebookIcon fill="#fff" className={`${className} transition ease-in-out hover:fill-brand-secondary delay-150`} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <TwitterIcon className={`${className} transition ease-in-out hover:fill-brand-secondary delay-150`} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <LinkedinIcon className={`${className} transition ease-in-out hover:fill-brand-secondary delay-150`} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <InstagramIcon className={`${className} transition ease-in-out hover:fill-brand-secondary delay-150`} />
        </Link>
      </li>
    </ul>
  );
}
