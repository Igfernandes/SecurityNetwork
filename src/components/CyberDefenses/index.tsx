import { Container } from "../shared/Container";
import { useNavigationContext } from "src/contexts/Navigation";
import { SecurityShape } from "../shared/SecurityShape";

export function CyberDefenses() {
  const { } = useNavigationContext();

  return (
    <section className="relative">
      <Container>
        <SecurityShape />
        <div className="row pt-[3rem]">
          <div className="col mx-auto p-3">
            <div className="title w-full lg:w-[80%] xl:w-[50%] mx-auto text-center">
              <h1 className="text-[1.4rem] md:text-[1.6rem] lg:text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  Expert Support To Enhance Your <br className="hidden lg:block" />
                  Cyber Defenses
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row pt-[3rem]">
          <div className="col mx-auto p-3">
            <div className="title w-full lg:w-[80%] xl:w-[50%] mx-auto text-center">
              <h1 className="text-[1.4rem] md:text-[1.6rem] lg:text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  Expert Support To Enhance Your <br className="hidden lg:block" />
                  Cyber Defenses
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
