import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import DashboardNav from "@/components/othersPages/dashboard/DashboardNav";
import MyAccount from "@/components/othersPages/dashboard/MyAccount";
import React from "react";

export const metadata = {
    title: "Mon Compte || Cyna Store - Modèle E-commerce Nextjs Ultime",
    description: "Cyna Store - Modèle React Nextjs E-commerce Ultime",
};
export default function page() {
    return (
        <>
            <Header/>
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Mon Compte</div>
                </div>
            </div>
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <DashboardNav/>
                        </div>
                        <div className="col-lg-9">
                            <MyAccount/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}