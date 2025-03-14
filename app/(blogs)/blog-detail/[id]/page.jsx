import BlogDetails from "@/components/blogs/BlogDetails";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog Details || CYNA Store",
  description: "CYNA Store",
};
export default async function page({ params }) {
  const { id } = await params
  const blog = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">Blog Detail</div>
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
      <BlogDetails blog={blog} />
      <RelatedBlogs />
      <Footer />
    </>
  );
}
