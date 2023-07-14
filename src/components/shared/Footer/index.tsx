import Image from "next/image";
import { Container } from "../Container";
import { footerAboutUs, footerContactUs } from "src/constants/footer";
import Link from "next/link";
import { SocialIcons } from "./SocialIcons";
import { CopyRigth } from "./CopyRigth";


export function Footer() {

  return (
    <footer className="bg-common-pourple relative">
      <Container className="bg-[#251533] px-5 py-[.75rem]">
        <div className="row flex flex-wrap md:justify-around pt-[2.5rem] lg:px-[1.5rem] lg:py-[4rem] xl:p-[5rem]">
          <div className="col w-full md:w-[45%] lg:w-[25%] mt-5 lg:mt-0">
            <div className="logo">
              <h1 className="text-color-white text-2xl font-semibold"><span className="font-barlow">SECURITY NETWORK</span></h1>
            </div>
            <div className="text mt-5">
              <p className="text-color-secondary text-[0.95rem]">
                Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
              </p>
            </div>
            <SocialIcons />
          </div>
          <div className="col w-full md:w-[45%] lg:w-[20%] mt-5 lg:mt-0">
            <div className="title">
              <h1 className="text-color-white text-2xl font-semibold"><span className="font-barlow">About US</span></h1>
            </div>
            <div className="text mt-5">
              <span className="text-color-secondary text-[0.95rem]">
                <ul>
                  {footerAboutUs.map(({ label, link }, key) => {
                    return (
                      <li className="mt-3 text-[0.85rem]" key={key}>
                        <Link className="ease-in duration-300 hover:text-brand-secondary hover:tracking-[1px]" href={link}>{label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </div>
          </div>
          <div className="col w-full md:w-[45%] lg:w-[30%] mt-5 lg:mt-0">
            <div className="title">
              <h1 className="text-color-white text-2xl font-semibold"><span className="font-barlow">Contact US</span></h1>
            </div>
            <div className="text mt-5">
              <span className="text-color-secondary text-[0.95rem]">
                <ul>
                  {footerContactUs.map(({ label, link, text }, key) => {
                    return (
                      <li className="mt-3 text-[0.9rem] flex" key={key}>
                        <span className="text-color-white mr-2">{label}:</span>
                        <div className="ease-in duration-300 hover:text-brand-secondary hover:tracking-[1px]">
                          <Link
                            target="_blank"
                            href={link}>
                            {text}
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </div>
          </div>
          <div className="col w-full md:w-[45%] lg:w-[25%] mt-5 lg:mt-0">
            <div className="title">
              <h1 className="text-color-white text-2xl font-semibold"><span className="font-barlow">Newsletter</span></h1>
            </div>
            <div className="text mt-5">
              <p className="text-color-secondary text-[0.95rem]">
                Latest resources sent to your inbox weekly
              </p>
            </div>
            <div className="form">
              <form action="">
                <div className="input mt-3">
                  <input className="p-3 text-color-secondary bg-brand-primaryMatte w-full placeholder:text-[#86818A] placeholder:text-[0.9rem] placeholder:p-1" type="text" placeholder="Email address" />
                </div>
                <div className="menu mt-3  ml-auto text-center">
                  <button className="btn w-full btn-default btn-hover-default text-sm" type="submit">Se inscreva</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <div className="shapefooter1 absolute top-0 left-0">
        <Image
          className="max-w-full rounded-[30px]"
          src="/img/footer-shape-1.png"
          alt="a home-control"
          style={{ width: "100%", height: "100%" }}
          width={1000}
          height={1000}
        />
      </div>
      <div className="shapefooter2 absolute right-0 top-0 flex justify-end">
        <Image
          className="max-w-full rounded-[30px]"
          src="/img/footer-shape-2.png"
          alt="a home-control"
          style={{ width: "80%", height: "80%" }}
          width={1000}
          height={1000}
        />
      </div>
      <div className="lines-line">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <CopyRigth />
    </footer >
  );
}
