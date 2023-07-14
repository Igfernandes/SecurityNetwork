import { CircleCheckIcon } from "src/assets/icons/CircleCheck";
import { ItensInovateProps } from "./type";

export function ItensInovate({ text }: ItensInovateProps) {
  return (
    <>
      <div className=" w-full md:w-[50%] mb-2 flex items center py-2">
        <div className="icon-content">
          <CircleCheckIcon className="bg-color-purple rounded-full w-[1.5rem] h-[1.5rem] p-[0.25rem] fill-color-white" />
        </div>
        <div className="text-content ml-3">
          <p className="text-[1rem] text-color-white font-normal">{text}</p>
        </div>
      </div>
    </>
  );
}
