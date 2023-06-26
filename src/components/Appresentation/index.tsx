import Link from "next/link";
import { Container } from "../shared/Container";

export function Appresentation() {
  return (
    <main className="bg-security-shape bg-expand bg-top-25">
      <Container>
        <div className="row flex items-center">
          <div className="col w-[50%]">
            <div className="title">
              <h1 className="text-color-white text-7xl">
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
            <div className="interactions flex my-7">
              <div className="verify-link mr-3">
                <button className="btn btn-default btn-hover-light">
                  <Link href={"#"}>Verificar Link</Link>
                </button>
              </div>
              <div className="search-people ml-3">
                <button className="btn btn-light btn-hover-reverse">
                  <Link href={"#"}>Pesquisar Perfil</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col w-[50%] p-2">
            <div className="illustration">
                <img src="/img/black-banner.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
