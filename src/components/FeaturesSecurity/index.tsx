import { featuresItens } from "src/constants/featuresItens";
import { Container } from "../shared/Container";
import { BoxFeature } from "./BoxFeature";

export function FeaturesSecurity() {
  return (
    <section>
      <Container>
        <div className="row lg:mt-[3rem] mx-auto">
          <div className="flex flex-wrap justify-around">
            {featuresItens.map(({ img, title, text }, key) => {
              return (
                <div key={key} className="w-full mt-4 md:w-[46%] md:mt-5 lg:mt-0 lg:w-[30%] lg:mx-3">
                  <BoxFeature img={img} title={title} text={text} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
