import Image from "next/image";
import { Container } from "../shared/Container";

export function OurMission() {
  return (
    <section>
      <Container>
        <div className="row flex flex-wrap bg-brand-primary mx-auto justify-between">
          <div className="w-full lg:w-[49%] p-3">
            <div className="image w-full">
              <Image
                src="/img/safer-world-2.png"
                alt="two people using computer in table"
                style={{ width: "100%", height: "100%" }}
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="w-full lg:w-[49%] p-3 flex justify-center items-center">
            <div className="content">
              <div className="title">
                <h1 className="text-3xl lg:text-6xl">
                  <strong className="font-barlow text-color-white ">
                    We Create A Safer Virtual World For Your Future
                  </strong>
                </h1>
              </div>
              <div className="text mt-2 pb-5 border-b border-white/20">
                <p className="text-[1rem] text-color-secondary">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Adipiscing eleifend dictum potenti mattis viverra. Eget quam
                  lacus enim porttitor bibendum elit dui nisl.
                </p>
              </div>
              <div className="flex flex-wrap justify-between lg:mt-6">
                <div className="w-full lg:w-[45%] mt-3 lg:mt-0">
                  <h1 className="font-bold text-[1.2rem] lg:text-[1.7rem] font-barlow text-color-white">
                    Our Mission
                  </h1>
                  <p className="text-[0.9rem] lg:text-[1rem] mt-2 text-color-secondary">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Adipisc ing eleifend dictum pot nti.
                  </p>
                </div>
                <div className="w-full lg:w-[45%] mt-3 lg:mt-0">
                  <h1 className="font-bold text-[1.2rem] lg:text-[1.7rem] font-barlow text-color-white">
                    Our Mission
                  </h1>
                  <p className="text-[0.9rem] lg:text-[1rem] mt-2 text-color-secondary">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Adipisc ing eleifend dictum pot nti.
                  </p>
                </div>
              </div>
              <div className="button  mt-[3rem]">
                <button className="btn btn-default btn-hover-default w-full md:w-[50%] lg:w-[60%] xl:w-[45%] text-md">
                  Know More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
