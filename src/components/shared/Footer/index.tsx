import Link from "next/link";
import { menu } from "src/constants/menu";
import { EmailIcon } from "src/assets/icons/Email";
import { LocationIcon } from "src/assets/icons/Location";
import { Container } from "../Container";

export function Footer() {

  return (
    <header>
      <Container className="bg-common-pourple px-5 py-[.75rem]">
        <div className="header-contacts flex  ">
          <div className="contacts-group flex w-[40%]">
            <div className="contact-mail flex">
              <EmailIcon
                fill="#fff"
                width={"15px"}
                height={"15px"}
                className="mr-[10px] flex items-center"
              />
              <p className="text-color-white text-sm">
                E-mail: &nbsp;
                <Link href={"mailto:companymarketbr@gmail.com"} target="_blank">
                  companymarketbr@gmail.com
                </Link>
              </p>
            </div>
            <div className="location flex ml-5">
              <LocationIcon
                fill="#fff"
                width={"15px"}
                height={"15px"}
                className="mr-[10px] flex items-center"
              />
              <p className="text-color-white text-sm">
                <Link
                  href={
                    "https://www.google.com/maps?client=opera-gx&hs=3B4&output=search&q=marica&entry=mc&sa=X&ved=2ahUKEwiZm4X0ucv_AhXQvJUCHbwnDXYQ0pQJegQICxAB"
                  }
                  target="_blank"
                >
                  Maricá - RJ/Brasil
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="social-group w-[6rem] ml-auto">
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="header-menu flex items-center">
          <div className="logo w-[25%]">
            <h1 className="text-color-white text-2xl font-semibold">SECURITY NETWORK</h1>
          </div>
          <div className="menu w-[40%]">

          </div>
          <div className="menu w-[20%] ml-auto text-end">
            <button className="btn btn-default btn-hover-default text-sm">SOLICITE AJUDA</button>
          </div>
        </div>
      </Container>
    </header>
  );
}
