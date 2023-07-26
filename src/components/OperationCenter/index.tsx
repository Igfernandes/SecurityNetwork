import Image from "next/image";
import { Container } from "../shared/Container";
import { OperationItem } from "./OperationItem";
import { operationItem } from "src/constants/operationItem ";

export function OperationCenter() {

  return (
    <section>
      <Container className="mb-[5rem]">
        <div className="row pt-[3rem] flex">
          <div className="col w-[47%] h-[80%] rounded-[30px] mx-auto overflow-hidden">
            <Image
              className="max-w-full rounded-[30px] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.2] duration-300"
              src="/img/operation-center.jpg"
              alt="a robot and a person holding hands"
              style={{ width: "100%", height: "90%" }}
              width={1000}
              height={1000}
            />
          </div>
          <div className="col w-[50%] mx-auto p-3">
            <div className="title mx-auto ">
              <h1 className="text-[2.5rem] font-barlow text-color-white">
                <strong>
                  24/7 Cybersecurity Operation Center For You
                </strong>
              </h1>
            </div>
            <div className="text mx-auto ">
              <p className="text-[1.3rem] font-barlow text-color-secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-5">
              {operationItem.map(({ text }, key) => {
                return (
                  <OperationItem key={key} text={text} />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
