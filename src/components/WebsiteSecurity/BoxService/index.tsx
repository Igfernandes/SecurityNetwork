import Image from "next/image";
import { BoxServiceProps } from "./type";

export function BoxService({ icon, text, title }: BoxServiceProps) {
    return (
        <>
            <div className="service-card content text-color-white w-full p-8">
                <div className="security-shape">
                    <Image src="/img/security-shape-2.png" alt="image circurity" style={{ width: '100%', height: "100%" }} width={1000} height={1000} />
                </div>
                <div className="icon w-[40%]">
                    <div className="icon-content bg-gradient-to-b from-brand-secondary to-brand-tertiary rounded-full p-6">
                        {icon}
                    </div>
                </div>
                <div className="title mt-5">
                    <h1 className="text-[1.5rem] font-barlow">
                        <strong>{title}</strong>
                    </h1>
                </div>
                <div className="text mt-5">
                    <p className="text-[1rem] text-color-secondary font-normal">{text}</p>
                </div>
            </div>
        </>
    );
}
