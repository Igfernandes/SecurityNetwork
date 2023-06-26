import Image from "next/image";
import { Container } from "../shared/Container";
import { BoxService } from "./BoxService";
import { servicesItens } from "src/constants/servicesItens";

export function WebsiteSecurity() {

    return (
        <section className="relative">
            <Container>
                <div className="image">
                    <div className="image w-[20%] absolute right-0 top-0">
                        <Image src="/img/security-shape-1.png" alt="two people using computer in table" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />
                    </div>
                </div>
                <div className="row pt-[3rem]">
                    <div className="flex text-color-white mx-auto justify-between">
                        <div className="title-content w-full">
                            <div className="p-3 w-[50%] flex justify-center items-center mx-auto text-center">
                                <div className="content">
                                    <div className="title">
                                        <h1 className="text-[2.5rem] font-barlow"><strong> You Get Complete Website Security<br/> From Us </strong></h1>
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
                <div className="row mt-[3rem] max-w-[1320px] mx-auto">
                    <div className="flex justify-around">
                        {servicesItens.map(({ icon, title, text }, key) => {
                            return (
                                <div key={key} className="w-[25%] mx-3">
                                    <BoxService icon={icon} title={title} text={text} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
