import { featuresItens } from "src/constants/featuresItens";
import { Container } from "../shared/Container";
import { BoxFeature } from "./BoxFeature";

export function FeaturesSecurity() {
  return (
    <section>
      <Container>
        <div className="row mt-[3rem] mx-auto">
          <div className="flex justify-around">
            {featuresItens.map(({ img, title, text }, key) => {
              return (
                <div key={key} className="w-[30%] mx-3">
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
