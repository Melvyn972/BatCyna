"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {Pagination} from "swiper/modules";

export default function Brands() {
    return (
        <section className="flat-spacing-5 pt_0">
            <div className="container">
                <Swiper
                    dir="ltr"
                    className="swiper tf-sw-brand"
                    loop={false}
                    autoplay={false}
                    spaceBetween={0}
                    slidesPerView={6}
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                    }}
                    modules={[Pagination]}
                    pagination={{clickable: true, el: ".sp106"}}
                >
                    
                </Swiper>
                <div className="d-md-none sw-dots style-2 sw-pagination-brand justify-content-center sp106"/>
            </div>
        </section>
    );
}