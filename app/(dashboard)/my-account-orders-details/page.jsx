import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import DashboardNav from "@/components/othersPages/dashboard/DashboardNav";
import OrderDetails from "@/components/othersPages/dashboard/OrderDetails";
import React from "react";

export const metadata = {
    title: "Mes Commandes || Ecomus - Modèle E-commerce Nextjs Ultime",
    description: "Ecomus - Modèle E-commerce Nextjs Ultime",
};

export default function page() {
    return (
        <>
            <Header />

            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Mes Commandes</div>
                </div>
            </div>

            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <DashboardNav />
                        </div>

                        <div className="col-lg-9">
                            <OrderDetails />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}