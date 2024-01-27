import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/swiper.css";
import "../../index.css";

export default function PopupGaleri(props) {
  const swiperRef = useRef(null);

  return (
    <div
      className={`fixed inset-0 z-50 mx-auto w-full flex items-center justify-center bg-black bg-opacity-50 ${
        props.isShow ? "block" : "hidden"
      } modal`}
      id="modal-1"
    >
      <div className="flex absolute top-16 right-0 m-4 cursor-pointer flex-col items-center">
        <div
          onClick={props.isHide}
          className="absolute top-0 right-0 m-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 p-2 text-right rounded-full close-modal hover:bg-neutral-300 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-2/3 text-center items-center rounded-3xl bg-white p-8"></div>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-4/5 mt-16 h-5/6 rounded-3xl"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center swiper-slide">
            <div className="flex justify-center md:mx-16 lg:mx-16 md:h-3/4 lg:h-3/4">
              <img
                className="object-contain w-full h-full aspect-video"
                src="/public/tim/carousel1.jpg"
              />
            </div>
            <p className="mt-3 break-words overflow-hidden text-base text-center md:text-2xl lg:text-2xl md:mt-8 lg:mt-8 text-primary-100">
              testing imagefskawak
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center swiper-slide">
            <div className="flex justify-center md:mx-16 lg:mx-16 md:h-3/4 lg:h-3/4">
              <img
                className="object-contain w-full h-full aspect-video"
                src="/public/tim/carousel2.jpg"
              />
            </div>
            <p className="mt-3 break-words overflow-hidden text-base text-center md:text-2xl lg:text-2xl md:mt-8 lg:mt-8 text-primary-100">
              testing image
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center swiper-slide">
            <div className="flex justify-center md:mx-16 lg:mx-16 md:h-3/4 lg:h-3/4">
              <img
                className="object-contain w-full h-full aspect-video"
                src="/public/tim/carousel2.jpg"
              />
            </div>
            <p className="mt-3 break-words overflow-hidden text-base text-center md:text-2xl lg:text-2xl md:mt-8 lg:mt-8 text-primary-100">
              testing image
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
