import Image from "next/image";
import { FiveStars } from "../FiveStars";
import { ClientsBoxProps } from "./type";

export function ClientsBox({ name, text, ocupation }: ClientsBoxProps) {
  return (
    <>
      <div className="service-card w-full p-8 bg-[#251533] relative">
        <div className="text">
          <p className="text-[1.3rem] text-color-white font-barlow tracking-wider">
            {text}
          </p>
        </div>
        <div className="client flex mt-5 justify-between items-center">
          <div className="cliente-data w-[40%]">
            <div className="name">
              <h1 className="text-[1.4rem] text-color-white">
                <strong className="font-barlow">{name}</strong>
              </h1>
            </div>
            <div className="title mt-2">
              <p className="text-[1.1rem] font-barlow text-[#FAD6DD]">
                {ocupation}
              </p>
            </div>
          </div>
          <div className="cliente-star flex w-[40%] justify-center">
            <FiveStars />
          </div>
        </div>
        <div className="img absolute bottom-1 right-[3rem] w-[4.5rem] h-[2rem]">
          <Image
            src="/img/shape.png"
            alt="shape"
            style={{ width: "100%", height: "100%" }}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
