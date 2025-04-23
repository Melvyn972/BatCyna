import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import StoreLocations from "@/components/othersPages/StoreLocations";
import React from "react";

export const metadata = {
    title: "Emplacements des Magasins || CYNA Store",
    description: "CYNA Store",
};

export default function page() {
    return (
        <>
            <Header />
            <div className="tf-page-title style-2">
                <div className="container-full">
                    <div className="heading text-center">Emplacements des magasins</div>
                </div>
            </div>

            <StoreLocations />
            <Footer />
        </>
    );
}