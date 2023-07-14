import Link from "next/link";
import { useHeader } from "./hooks/useHeader";
import { Navbar } from "./Navbar";
import { menu } from "src/constants/menu";
import { EmailIcon } from "src/assets/icons/Email";
import { LocationIcon } from "src/assets/icons/Location";
import { SocialGroups } from "./SocialGroups";
import { Container } from "../Container";
import { MenuIcon } from "src/assets/icons/Menu";
import { useState } from "react";
import { CloseIcon } from "src/assets/icons/Close";

export function Header() {
  const { } = useHeader();
  const [active, setActive] = useState(false);
  const ToogleMode = () => {
    setActive(!active);
  }

  return (
    <header>
      <Container className="bg-common-pourple px-5 py-[.75rem]" classContainer={'bg-common-pourple'}>
        <div className="header-contacts flex items-center flex-wrap ">
          <div className="contacts-group flex w-full md:w-[80%] lg:w-[60%] justify-between md:justify-start">
            <div className="contact-mail">
              <Link
                className="text-[0.69rem] md:text-[0.8rem] text-color-white flex items-center transition ease-in-out
                 hover:first:fill-brand-secondary hover:text-brand-secondary delay-150 cursor-pointer"
                href={"mailto:companymarketbr@gmail.com"}
                target="_blank">
                <EmailIcon
                  width={"15px"}
                  height={"15px"}
                  className="fill-white mr-[10px] flex items-center"
                />
                E-mail: &nbsp;

                companymarketbr@gmail.com
              </Link>
            </div>
            <div className="location  ml-5">
              <Link
                className="text-[0.69rem] md:text-[0.8rem] flex items-center text-color-white transition ease-in-out hover:text-brand-secondary delay-150 cursor-pointer"
                href={
                  "https://www.google.com/maps?client=opera-gx&hs=3B4&output=search&q=marica&entry=mc&sa=X&ved=2ahUKEwiZm4X0ucv_AhXQvJUCHbwnDXYQ0pQJegQICxAB"
                }
                target="_blank"
              >
                <LocationIcon
                  fill="#fff"
                  width={"15px"}
                  height={"15px"}
                  className="mr-[10px] "
                />
                Maricá - RJ/Brasil
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[20%] lg:w-[40%] mt-3 md:mt-0">
            <div className="social-group w-[6rem] ml-auto">
              <SocialGroups />
            </div>
          </div>
        </div>
      </Container>
      <Container classContainer={'hidden lg:block'}>
        <div className="header-menu flex items-center ">
          <div className="logo w-[25%]">
            <h1 className="text-color-white text-2xl font-semibold">SECURITY NETWORK</h1>
          </div>
          <div className="menu w-[40%]">
            <Navbar menu={menu} classUl={'flex'} classLi={'font-semibold'} />
          </div>
          <div className="menu w-[20%] md:w-[30%] ml-auto text-end">
            <button className="btn btn-default btn-hover-default text-sm">SOLICITE AJUDA</button>
          </div>
        </div>
      </Container>
      <Container classContainer={'lg:hidden bg-[#25245e]'}>
        <div className="header-menu flex items-center justify-between">
          <div className="logo w-[70%]">
            <h1 className="text-color-white text-2xl font-semibold">SECURITY NETWORK</h1>
          </div>
          <div className="menu w-[20%] flex justify-end">
            {active ? <CloseIcon fill="#fff" width={'2rem'} height={'2rem'} className="justify-end flex" onClick={ToogleMode} /> : <MenuIcon fill="#fff" width={'2rem'} height={'2rem'} className="justify-end flex" onClick={ToogleMode} />}

          </div>
        </div>
        <div className={`nav bg-white mt-5 ${active ? `menu menuOpen block` : `menu menuClose hidden`}`}>
          <Navbar menu={menu} classLi={'text-brand-primary py-3 hover:text-brand-secondary'} />
        </div>
      </Container>
    </header >
  );
}
