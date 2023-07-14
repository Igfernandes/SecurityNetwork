import Image from "next/image";

export function SecurityShape() {

    return (
        <div className="image">
            <div className="image w-[75%] lg:w-[40%] xl:w-[20%] absolute right-0 top-[20px] lg:top-0">
                <Image
                    src="/img/security-shape-1.png"
                    alt="two people using computer in table"
                    style={{ width: "100%", height: "100%" }}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}