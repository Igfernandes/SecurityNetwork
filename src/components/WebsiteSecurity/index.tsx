import Image from "next/image";
import { Container } from "../shared/Container";
import { BoxService } from "./BoxService";

export function WebsiteSecurity() {

    return (
        <section className="relative">
            <Container>
                <div className="image">
                    <div className="image w-[25%] absolute right-0 top-0">
                        <Image src="/img/security-shape-1.png" alt="two people using computer in table" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />
                    </div>
                </div>
                <div className="row pt-[5rem]">
                    <div className="flex text-color-white mx-auto justify-between">
                        <div className="title-content w-full">
                            <div className="p-3 w-[50%] flex justify-center items-center mx-auto text-center">
                                <div className="content">
                                    <div className="title">
                                        <h1 className="text-[3rem] font-bold">You Get Complete Website Security From Us</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 w-[38%] flex justify-center items-center mx-auto text-center">
                                <div className="content">
                                    <div className="text-color-secondary">
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <BoxService />
            </Container>
        </section>
    );
}
