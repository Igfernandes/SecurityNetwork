import Image from "next/image";
import { Container } from "../shared/Container";
import { itensInovate } from "src/constants/itensInovate";
import { ItensInovate } from "./itensInovate";

export function InnovativeProtection() {
  return (
    <section>
      <Container className="py-[5rem]" maxWidth={'1200px'}>
        <div className="row pt-[3rem] flex">
          <div className="col w-[50%] mx-auto p-3">
            <div className="title ">
              <h1 className="text-[3rem] font-barlow text-color-white">
                <strong className="font-barlow">
                  Innovative Electronic Protection Of Your Office And Home Control
                </strong>
              </h1>
            </div>
            <div className="text">
              <p className="text-[1.3rem] font-barlow text-color-secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-5">

            </div>
            <div className="text">
              <p className="text-[1.3rem] font-barlow text-color-secondary">
                Lorem ipsum dolor sit amet consecte adipi scing elit. Adipiscing eleifend poteder mattis viverra lorem ipsum dolor sit amet consecte adipisci ng elit adipiscingdiper eleifend dictum potenti mattis viverra.
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-5">
              {itensInovate.map(({ text }, key) => {
                return (
                  <ItensInovate key={key} text={text} />
                );
              })}
            </div>
            <div className="button mt-[3rem]">
              <button className="btn btn-default btn-hover-default text-sm">
                Learn About
              </button>
            </div>
          </div>
          <div className="col w-[47%] h-[80%] rounded-[30px] mx-auto overflow-hidden">
            <Image
              className="max-w-full rounded-[30px]"
              src="/img/home-control.jpg"
              alt="a home-control"
              style={{ width: "100%", height: "90%" }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
