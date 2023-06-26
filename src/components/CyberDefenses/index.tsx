import Image from "next/image";
import { Container } from "../shared/Container";
import { useCyberDefenses } from "./hooks/useCyberDefenses";

export function CyberDefenses() {
    const { } = useCyberDefenses();

    return (
        <section className="relative">
            <Container>
                <div className="image">
                    <div className="image w-[20%] absolute right-0 top-[20%]">
                        <Image src="/img/security-shape-1.png" alt="two people using computer in table" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />
                    </div>
                </div>
                <div className="row pt-[3rem]">
                    <div className="flex text-color-white mx-auto justify-between">
                        <div className="title-content w-full">
                            <div className="p-3 w-[50%] flex justify-center items-center mx-auto text-center">
                                <div className="content">
                                    <div className="title">
                                        <h1 className="text-[2.5rem] font-barlow"><strong> Expert Support To Enhance Your <br />Cyber Defenses</strong></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
