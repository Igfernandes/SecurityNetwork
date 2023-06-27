import { Container } from "../shared/Container";
import { SecurityShape } from "../shared/SecurityShape";
import { BoxService } from "./BoxService";
import { servicesItens } from "src/constants/servicesItens";

export function WebsiteSecurity() {
  return (
    <section>
      <Container>
        <SecurityShape />
        <div className="row pt-[3rem]">
          <div className="col p-3 text-center">
            <div className="title">
              <h1 className="text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  You Get Complete Website Security
                  <br /> From Us{" "}
                </strong>
              </h1>
            </div>
          </div>
          <div className="p-3 w-[55%] max-w-[650px] mx-auto">
            <div className="text-color-secondary text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Adipiscing eleifend dictum potenti mattis viverra eget quam
                lacus enim porttitor bibendum elit dui nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-[3rem]">
          <div className="flex justify-around">
            {servicesItens.map(({ icon, title, text }, key) => {
              return (
                <div key={key} className="w-[25%] mx-3">
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
