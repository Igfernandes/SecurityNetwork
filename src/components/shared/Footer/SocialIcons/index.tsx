import Link from "next/link";
import { FacebookIcon } from "src/assets/icons/Facebook";
import { TwitterIcon } from "src/assets/icons/Twitter";
import { LinkedinIcon } from "src/assets/icons/Linkedin";
import { InstagramIcon } from "src/assets/icons/Instagram";


export function SocialIcons() {

  return (
    <div className="social-icons">
      <ul className="flex mt-5">
        <li className="mr-2">
          <Link className="hover:-translate-y-[5px] ease-in duration-300" href={"https://www.facebook.com/Company-Market-103482957803214/"}>
            <FacebookIcon
              fill="#fff"
              width={"28px"}
              height={"28px"}
              className="p-[0.4rem] rounded-3xl flex items-center bg-gradient-to-r from-brand-secondary to-brand-tertiary hover:-translate-y-[5px] ease-in duration-300" />
          </Link>
        </li>
        <li className="mr-2">
          <Link className="hover:-translate-y-[5px] ease-in duration-300" href={""}>
            <TwitterIcon
              fill="#fff"
              width={"28px"}
              height={"28px"}
              className="p-[0.4rem] rounded-3xl flex items-center bg-gradient-to-r from-brand-secondary to-brand-tertiary hover:-translate-y-[5px] ease-in duration-300" />
          </Link>
        </li>
        <li className="mr-2">
          <Link className="hover:-translate-y-[5px] ease-in duration-300" href={""}>
            <LinkedinIcon
              fill="#fff"
              width={"28px"}
              height={"28px"}
              className="p-[0.4rem] rounded-3xl flex items-center bg-gradient-to-r from-brand-secondary to-brand-tertiary hover:-translate-y-[5px] ease-in duration-300" />
          </Link>
        </li>
        <li className="mr-2">
          <Link className="hover:-translate-y-[5px] ease-in duration-300" href={""}>
            <InstagramIcon
              fill="#fff"
              width={"28px"}
              height={"28px"}
              className="p-[0.4rem] rounded-3xl flex items-center bg-gradient-to-r from-brand-secondary to-brand-tertiary hover:-translate-y-[5px] ease-in duration-300" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
