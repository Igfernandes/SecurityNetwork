import Link from "next/link";
import { Container } from "../shared/Container";
import Image from "next/image";

export function Appresentation() {
  return (
    <main className="bg-security-shape bg-expand bg-top-25">
      <Container>
        <div className="row flex flex-wrap items-center">
          <div className="col w-full md:w-[50%]">
            <div className="title">
              <h1 className="text-color-white text-4xl lg:text-6xl xl:text-7xl">
                <strong className="font-barlow">
                  We Help To Protect Modern Information From Hackers
                </strong>
              </h1>
            </div>
            <div className="describe mt-3">
              <p className="text-color-secondary text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing eleifend dictum potenti mattis viverra eget quam
                lacus enim porttitor bibendum elit, dui nisl. aenean turpis ut
                pretium et dictum dolor quis consect etur feugiat odio luctus a
                nibh sed sit fames ac at tincidunt quam vita.
              </p>
            </div>
            <div className="interactions flex flex-wrap my-7">
              <div className="verify-link lg:mr-3 w-full lg:w-[46%] xl:w-[35%]">
                <button className="btn btn-default w-full btn-hover-light">
                  <Link href={"#"}>Verificar Link</Link>
                </button>
              </div>
              <div className="search-people mt-5 lg:mt-0 lg:ml-3 w-full lg:w-[46%] xl:w-[35%]">
                <button className="btn btn-light w-full btn-hover-reverse">
                  <Link href={"#"}>Pesquisar Perfil</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col w-full md:w-[50%] p-2">
            <div className="illustration">
              <Image
                src="/img/black-banner.png"
                alt="Illustration"
                style={{ width: "100%", height: "100%" }}
                width={1000}
                height={1000} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
