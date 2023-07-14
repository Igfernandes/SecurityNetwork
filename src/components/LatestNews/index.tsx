import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { NewsBox } from "./NewBox";
import { news } from "./NewBox/mocks/news";
import { Container } from "../shared/Container";

export function LatestNews() {
  return (
    <section>
      <Container className="mb-[2rem] pb-[1rem]" maxWidth={'1400px'}>
        <div className="row">
          <div className="col w-full lg:w-[50%] text-center mx-auto p-3">
            <div className="title ">
              <h1 className="text-[2.2rem] lg:text-[3rem] font-barlow text-color-white">
                <strong className="font-barlow">
                  Latest News From Blog
                </strong>
              </h1>
            </div>
            <div className="text">
              <p className="text-[1.1rem] lg:text-[1.3rem] font-barlow text-color-secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-[5rem]">
          <Swiper
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
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
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}

            className="mySwiper2 w-[80%]"
          >
            {news.map(({ photoSrc, title, text }, key) => {
              return (
                <SwiperSlide key={key} >
                  <NewsBox photoSrc={photoSrc} title={title} text={text} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
