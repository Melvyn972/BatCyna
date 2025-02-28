import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import AccountAddress from "@/components/othersPages/dashboard/AccountAddress";
import DashboardNav from "@/components/othersPages/dashboard/DashboardNav";
import React from "react";

export const metadata = {
    title: "Adresse de Mon Compte || Cyna Store - Modèle E-commerce Nextjs Ultime",
    description: "Cyna Store - Modèle React Nextjs E-commerce Ultime",
};
export default function page() {
    return (
        <>
            <Header/>
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Adresse de Mon Compte</div>
                </div>
            </div>
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <DashboardNav/>
                        </div>
                        <div className="col-lg-9">
                            <AccountAddress/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}