import { Container } from "../shared/Container";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { ClientsBox } from "./ClientsBox";
import { clientsSay } from "src/components/ClientsSay/mocks/clientsSay";

export function ClientsSay() {

  return (
    <section className="h-full bg-[url('/img/testimonials-bg.jpg')] bg-cover py-[2rem] lg:py-[5rem] relative">
      <div className="film  bg-[#1C0531] opacity-70 w-full h-full absolute top-0"></div>
      <Container>
        <div className="row ">
          <div className="title">
            <h1 className="text-color-white text-[2rem] lg:text-[3rem] text-center">
              <strong className="font-barlow"> What Client’s Say About Us</strong>
            </h1>
          </div>
          <div className="text lg:w-[60%] mx-auto mt-3">
            <p className="text-color-white text-[0.9rem] lg:text-[1rem] text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.
            </p>
          </div>
        </div>
        <div className="row mt-[3rem]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[300px]"
          >
            {clientsSay.map(({ nome, ocupation, text }, key) => {
              return (
                <SwiperSlide key={key}>
                  <ClientsBox name={nome} ocupation={ocupation} text={text} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section >
  );
}
