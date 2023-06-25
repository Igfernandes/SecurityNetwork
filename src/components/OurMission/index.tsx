import Image from "next/image";

export function OurMission() {

    return (
        <section>
            <div className="row flex bg-brand-primary">
                <div className="col-6 w-[50%] p-3 flex justify-center">
                    <div className="image w-[100%]">
                        <Image src="/img/safer-world-2.png" alt="two people using computer in table" width={1000} height={1000} />
                    </div>
                </div>
                <div className="col-6 w-[50%] p-3 flex justify-center items-center">
                    <div className="title">
                        <h1 className="text-[1.6rem] font-bold">We Create A Safer Virtual World For Your Future</h1>
                    </div>
                    <div className="text">
                        <p className="text-[1.6rem] font-bold">We Create A Safer Virtual World For Your Future</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
