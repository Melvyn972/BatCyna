import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import AccountEdit from "@/components/othersPages/dashboard/AccountEdit";
import DashboardNav from "@/components/othersPages/dashboard/DashboardNav";
import React from "react";

export const metadata = {
    title: "Modifier Mon Compte || Cyna Store",
    description: "Cyna Store",
};
export default function page() {
    return (
        <>
            <Header />
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Modifier Mon Compte</div>
                </div>
            </div>
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <DashboardNav />
                        </div>
                        <div className="col-lg-9">
                            <AccountEdit />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}