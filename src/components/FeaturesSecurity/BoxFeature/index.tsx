import { BoxFeatureProps } from "./type";

export function BoxFeature({ img, text, title }: BoxFeatureProps) {
  return (
    <>
      <div className="service-card content text-color-white w-full p-8">
        <div className="service-content-title flex items-end">
          <div className="img w-[10%] mr-3">{img}</div>
          <div className="title mt-5">
            <h1 className="text-[1.2rem] font-semibold">{title}</h1>
          </div>
        </div>
        <div className="text mt-5">
          <p className="text-[1rem] text-color-secondary font-normal">{text}</p>
        </div>
      </div>
    </>
  );
}
