"use client";
import { galleryImages } from "@/data/gallery";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

export default function ShopGram() {
    return (
        <section className="flat-spacing-1">
            <div className="container">
                <div className="flat-title">
                    <span className="title">Boutique Gram</span>
                    <p className="sub-title">
                        Inspirez-vous et laissez-vous inspirer, d'une mode unique à une autre.
                    </p>
                </div>
                <div className="wrap-shop-gram">
                    <Swiper
                        dir="ltr"
                        spaceBetween={7} // Correspond à data-space-lg et data-space-md
                        slidesPerView={5} // Correspond à data-preview
                        breakpoints={{
                            1200: { slidesPerView: 5 }, // Correspond à data-tablet
                            1000: { slidesPerView: 4 }, // Correspond à data-tablet
                            768: { slidesPerView: 3 }, // Correspond à data-tablet
                            640: { slidesPerView: 2 }, // Correspond à data-mobile
                            0: { slidesPerView: 2 }, // Correspond à data-mobile
                        }}
                        className="swiper tf-sw-shop-gallery"
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: ".spd304" }}
                    >
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="gallery-item hover-img">
                                    <div className="img-style">
                                        <Image
                                            src={image.imgSrc}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className="lazyload img-hover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="sw-dots sw-pagination-gallery justify-content-center spd304" />
                </div>
            </div>
        </section>
    );
}