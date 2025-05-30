import BlogList from "@/components/blogs/BlogList";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Blog List || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">Blog List</div>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Fashion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BlogList />

      <Footer />
    </>
  );
}
