import Link from "next/link";
import { FacebookIcon } from "src/assets/icons/Facebook";
import { InstagramIcon } from "src/assets/icons/Instagram";
import { LinkedinIcon } from "src/assets/icons/Linkedin";
import { TwitterIcon } from "src/assets/icons/Twitter";

export function SocialGroups() {
  const className = "w-[15px] h-[15px] fill-white";

  return (
    <ul className="flex justify-between">
      <li>
        <Link href={"https://www.facebook.com/Company-Market-103482957803214/"}>
          <FacebookIcon fill="#fff" className={className} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <TwitterIcon  className={className} />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <LinkedinIcon className={className}  />
        </Link>
      </li>
      <li>
        <Link href={""}>
          <InstagramIcon className={className}  />
        </Link>
      </li>
    </ul>
  );
}
