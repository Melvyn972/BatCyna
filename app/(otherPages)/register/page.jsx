import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Register from "@/components/othersPages/Register";
import React from "react";

export const metadata = {
    title: "Inscription || CYNA Store",
    description: "CYNA Store",
};

export default function page() {
    return (
        <>
            <Header />
            <div className="tf-page-title style-2">
                <div className="container-full">
                    <div className="heading text-center">Inscription</div>
                </div>
            </div>

            <Register />
            <Footer />
        </>
    );
}