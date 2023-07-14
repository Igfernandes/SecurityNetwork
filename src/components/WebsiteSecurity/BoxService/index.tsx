import Image from "next/image";
import { BoxServiceProps } from "./type";

export function BoxService({ icon, text, title }: BoxServiceProps) {
  return (
    <>
      <div className="service-card w-full my-3 p-5 lg:p-6 xl:p-8 relative">
        <div className="security-shape hidden lg:block">
          <Image
            src="/img/security-shape-2.png"
            alt="image circurity"
            style={{ width: "100%", height: "100%" }}
            width={1000}
            height={1000}
          />
        </div>
        <div className="icon w-[23%] lg:w-[56%] xl:w-[40%]">
          <div className="icon-content bg-gradient-to-b from-brand-secondary to-brand-tertiary rounded-full p-5 lg:p-6">
            {icon}
          </div>
        </div>
        <div className="title mt-5">
          <h1 className="text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] font-barlow text-color-white">
            <strong>{title}</strong>
          </h1>
        </div>
        <div className="text mt-5">
          <p className=" text-[0.8rem] lg:text-[1rem] text-color-secondary font-normal">{text}</p>
        </div>
      </div>
    </>
  );
}
