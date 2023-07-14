import { CircleCheckIcon } from "src/assets/icons/CircleCheck";
import { OperationItemProps } from "./type";

export function OperationItem({ text }: OperationItemProps) {
  return (
    <>
      <div className=" w-full md:w-[48%] mb-5 flex items center p-3 xl:p-4 items-Operation border border-white/10">
        <div className="icon-content">
          <CircleCheckIcon className="bg-color-purple rounded-full w-[1.3rem] h-[1.3rem] p-[0.35rem] fill-color-white" />
        </div>
        <div className="text-content ml-3">
          <p className=" text-[0.81rem]  xl:text-[1rem] text-color-white font-semibold">{text}</p>
        </div>
      </div>
    </>
  );
}
