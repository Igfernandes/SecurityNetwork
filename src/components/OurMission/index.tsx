import Image from "next/image";
import { Container } from "../shared/Container";

export function OurMission() {

    return (
        <section>
            <Container>
                <div className="row flex w-[1300px] bg-brand-primary text-color-white mx-auto justify-between">
                    <div className="col-6 w-[49%] p-3 flex justify-center">
                        <div className="image w-[100%]">
                            <Image src="/img/safer-world-2.png" alt="two people using computer in table" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />
                        </div>
                    </div>
                    <div className="col-6 w-[49%] p-3 flex justify-center items-center">
                        <div className="content">
                            <div className="title">
                                <h1 className="text-[3rem] font-ballow">We Create A Safer Virtual World For Your Future</h1>
                            </div>
                            <div className="text mt-2 pb-5 border-b border-white/20">
                                <p className="text-[1rem] text-color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra. Eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                            </div>
                            <div className="content-our-mission flex justify-between mt-6">
                                <div className="col-6 w-[45%]">
                                    <h1 className="font-bold text-[1.5rem]">Our Mission</h1>
                                    <p className="text-[1rem] mt-2 text-color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p>
                                </div>
                                <div className="col-6 w-[45%]">
                                    <h1 className="font-bold text-[1.5rem]">Our Mission</h1>
                                    <p className="text-[1rem] mt-2 text-color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p>
                                </div>
                            </div>
                            <div className="button-content mt-[3rem]">
                                <div className="button">
                                    <button className="btn btn-default text-md">Know More About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
