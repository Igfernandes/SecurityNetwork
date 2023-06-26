import Image from "next/image";
import { Container } from "../shared/Container";
import { useNavigationContext } from "src/contexts/Navigation";

export function CyberDefenses() {
  const {} = useNavigationContext();

  return (
    <section className="relative">
      <Container>
        <div className="image w-[20%] absolute right-0 top-[20%]">
          <Image
            src="/img/security-shape-1.png"
            alt="two people using computer in table"
            style={{ width: "100%", height: "100%" }}
            width={1000}
            height={1000}
          />
        </div>
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
