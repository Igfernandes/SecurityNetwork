// import { UIEvent, UIEventHandler, useEffect } from "react";
// import { IUseGoToTop } from "./IUseGoToTop";

// export default function useGoToTop(): IUseGoToTop {

//   /**
//   * @function handleGoToTop
//   * - A função utilizada para levar a pagina ao topo
//   *
//   * @returns void
//   */

//   const handleGoToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   };

//   const activeGoToTop = (ev: UIEvent) => {
//     // console.log('oi')
//     // var scrolled = window.scrollY;
//     // var element = ev.currentTarget;
//     // console.log(element)
//     // // var button = element.querySelector('.go-top');
//     // // if (scrolled > 300) button.addClass('active');
//     // // if (scrolled < 300) button.removeClass('active');
//   }

//   // useEffect(() => {
//   //   const handleScrollButtonVisiblity = () => {
//   //     window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
//   //   };
//   //   window.addEventListener('scroll', handleScrollButtonVisiblity);
    
//   //   return () =>{
//   //     window.removeEventListener('scroll',handleScrollButtonVisiblity);
//   //   };
//   // }, []);

//   return {
//     handleGoToTop,
//     activeGoToTop
//   };
// }