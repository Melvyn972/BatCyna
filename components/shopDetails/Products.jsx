"use client";

import { products6 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shopCards/ProductCard";
import { Navigation, Pagination } from "swiper/modules";

export default function Products() {
    return (
        <section className="flat-spacing-1 pt_0">
            <div className="container">
                <div className="flat-title">
                    <span className="title">Les gens ont aussi acheté</span>
                </div>
                <div className="hover-sw-nav hover-sw-2">
                    <Swiper
                        dir="ltr"
                        className="swiper tf-sw-product-sell wrap-sw-over"
                        slidesPerView={4} // Équivalent à data-preview={4}
                        spaceBetween={30} // Équivalent à data-space-lg={30}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4, // Équivalent à data-tablet={3}
                            },
                            640: {
                                slidesPerView: 3, // Équivalent à data-tablet={3}
                            },
                            0: {
                                slidesPerView: 2, // Équivalent à data-mobile={2}
                                spaceBetween: 15, // Équivalent à data-space-md={15}
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: ".snbp3070",
                            nextEl: ".snbn3070",
                        }}
                        pagination={{ clickable: true, el: ".spd307" }}
                    >
                        {products6.slice(0, 8).map((product, i) => (
                            <SwiperSlide key={i} className="swiper-slide">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp3070">
                        <span className="icon icon-arrow-left" />
                    </div>
                    <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn3070">
                        <span className="icon icon-arrow-right" />
                    </div>
                    <div className="sw-dots style-2 sw-pagination-product justify-content-center spd307" />
                </div>
            </div>
        </section>
    );
}