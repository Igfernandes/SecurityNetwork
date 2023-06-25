import Link from "next/link";
import { useHeader } from "./hooks/useHeader";
import { Navbar } from "./Navbar";
import { menu } from "src/constants/menu";
import { EmailIcon } from "src/assets/icons/Email";
import { LocationIcon } from "src/assets/icons/Location";
import { SocialGroups } from "./SocialGroups";

export function Header() {
  const {} = useHeader();

  return (
    <header>
      <div className="header-contacts flex">
        <div className="contacts-group flex w-[40%]">
          <div className="contact-mail flex">
            <EmailIcon
              fill="#fff"
              className="w-[13px] mr-[5px] flex items-center"
            />
            <p>
              E-mail:
              <Link href={"mailto:companymarketbr@gmail.com"} target="_blank">
                companymarketbr@gmail.com
              </Link>
            </p>
          </div>
          <div className="location flex ml-5">
            <LocationIcon
              fill="#fff"
              className="w-[12px] mr-[5px] flex items-center"
            />
            <Link
              href={
                "https://www.google.com/maps?client=opera-gx&hs=3B4&output=search&q=marica&entry=mc&sa=X&ved=2ahUKEwiZm4X0ucv_AhXQvJUCHbwnDXYQ0pQJegQICxAB"
              }
              target="_blank"
            >
              Maricá - RJ/Brasil
            </Link>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="social-group w-[6rem] ml-auto">
            <SocialGroups />
          </div>
        </div>
      </div>
      <div className="header-menu flex">
        <div className="logo">
          <div className="img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="menu">
          <Navbar menu={menu} />
        </div>
      </div>
    </header>
  );
}
