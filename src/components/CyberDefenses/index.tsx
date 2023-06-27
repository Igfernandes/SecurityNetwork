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
            <div className="title w-[50%] mx-auto text-center">
              <h1 className="text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  Expert Support To Enhance Your <br />
                  Cyber Defenses
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row pt-[3rem]">
          <div className="col p-3 w-[50%] mx-auto ">
            <div className="title text-center">
              <h1 className="text-[2.5rem] font-barlow text-color-white">
                <strong>
                  {" "}
                  Expert Support To Enhance Your <br />
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
