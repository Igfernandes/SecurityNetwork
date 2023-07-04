import Image from "next/image";
import { NewsBoxProps } from "./type";

export function NewsBox({ photoSrc, title, text }: NewsBoxProps) {
  return (
    <>
      <div className="news-box w-full">
        <div className="photo">
          <Image src={`${photoSrc}`} alt="news images" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />,
        </div>
        <div className="Title">
          <h1 className="text-[24px] leading-[1.6rem] text-color-white">
            <strong className="font-barlow">{title}</strong>
          </h1>
        </div>
        <div className="text">
          <p className="text-[1.1rem] leading-[1.5rem] text-color-secondary font-barlow tracking-wider">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
