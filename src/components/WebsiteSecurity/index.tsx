import { Container } from "../shared/Container";
import { SecurityShape } from "../shared/SecurityShape";
import { BoxService } from "./BoxService";
import { servicesItens } from "src/constants/servicesItens";

export function WebsiteSecurity() {
  return (
    <section>
      <Container>
        <SecurityShape />
        <div className="row lg:pt-[3rem]">
          <div className="col lg:p-3 text-center">
            <div className="title">
              <h1 className="text-[1.3rem] lg:text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  You Get Complete Website Security
                  <br /> From Us{" "}
                </strong>
              </h1>
            </div>
          </div>
          <div className="pt-3 lg:pt-0 lg:p-3 w-full lg:w-[55%] max-w-[650px] mx-auto">
            <p className="text-color-secondary text-center text-sm lg:text-lg xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Adipiscing eleifend dictum potenti mattis viverra eget quam
              lacus enim porttitor bibendum elit dui nisl.
            </p>
          </div>
        </div>
        <div className="row mt-[3rem]">
          <div className="flex flex-wrap justify-around">
            {servicesItens.map(({ icon, title, text }, key) => {
              return (
                <div key={key} className="w-full md:w-[46%] lg:w-[23.5%]">
                  <BoxService icon={icon} title={title} text={text} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
