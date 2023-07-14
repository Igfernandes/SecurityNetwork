// import { ArrowUpIcon } from "src/assets/icons/ArrowUp";
// import useGoToTop from "./hooks/useGoToTop";

// export function GoToTop() {
//   const { handleGoToTop } = useGoToTop();
//   return (
//     <div className="go-top fixed right-[3%] top-[85%] cursor-pointer z-20"
//       onClick={handleGoToTop} >
//       <ArrowUpIcon
//         width={'35px'}
//         height={'35px'}
//         fill={'#fff'}
//         className="bg-brand-secondary p-2" />
//     </div>
//   );
// }

import { ArrowUpIcon } from "src/assets/icons/ArrowUp";

const ButtonTop = (props: any) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollTop}
      className={`go-top fixed top-[85%] cursor-pointer z-20 ease-in duration-300 ${props.showButton ? "show right-[3%]" : "-right-[10%]"}`
      }
    >
      {props.children}
      <ArrowUpIcon
        width={'35px'}
        height={'35px'}
        fill={'#fff'}
        className="bg-brand-secondary p-2" />
    </button >
  );
};

export default ButtonTop;