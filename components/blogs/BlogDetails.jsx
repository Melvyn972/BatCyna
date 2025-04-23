import React from "react";
import Image from "next/image";
export default function BlogDetails({ blog }) {
  return (
      <>
        <div className="blog-detail">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-detail-main">
                  <div className="blog-detail-main-heading">
                    <ul className="tags-lists justify-content-center">
                      <li>
                        <a href="#" className="tags-item">
                          ACCESSOIRES
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          SACS
                        </a>
                      </li>
                    </ul>
                    <div className="title">{blog.title}</div>
                    <div className="meta">
                      Par <span>admin</span>, le <span>02 octobre</span>
                    </div>
                    <div className="image">
                      <Image
                          className="lazyload"
                          data-src="/images/blog/blog-detail.jpg"
                          alt="image"
                          src="/images/blog/blog-detail.jpg"
                          width={1100}
                          height={707}
                      />
                    </div>
                  </div>
                  <blockquote>
                    <div className="icon">
                      <Image
                          alt="image"
                          src="/images/item/quote.svg"
                          width={37}
                          height={25}
                      />
                    </div>
                    <div className="text">
                      La typographie est le travail des compositeurs, typographes,
                      graphistes, directeurs artistiques, artistes manga, créateurs
                      de bandes dessinées, artistes graffiti, et maintenant—de toute
                      personne qui dispose des mots, lettres, chiffres et symboles
                      pour la publication, l'affichage ou la diffusion, qu'ils soient
                      employés administratifs, rédacteurs de bulletins ou auteurs auto-édités.
                    </div>
                  </blockquote>
                  <div className="grid-image">
                    <div>
                      <Image
                          className="lazyload"
                          data-src="/images/blog/blog-detail-1.jpg"
                          alt="image"
                          src="/images/blog/blog-detail-1.jpg"
                          width={705}
                          height={538}
                      />
                    </div>
                    <div>
                      <Image
                          className="lazyload"
                          data-src="/images/blog/blog-detail-2.jpg"
                          alt="image"
                          src="/images/blog/blog-detail-2.jpg"
                          width={705}
                          height={538}
                      />
                    </div>
                  </div>
                  <div className="desc">
                    Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
                    vitae, vestibulum eu, molestie vel, lacus. Sed libero. Phasellus
                    tempus. Etiam feugiat lorem non metus Maecenas vestibulum mollis
                    diam. Pellentesque auctor neque nec urna. Pellentesque commodo eros
                    a enim. Etiam sit amet orci eget eros faucibus tincidunt.
                    Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                    metus. In hac habitasse platea dictumst. Etiam ultricies nisi vel
                    augue.
                  </div>
                  <div className="bot d-flex justify-content-between flex-wrap align-items-center">
                    <ul className="tags-lists">
                      <li>
                        <a href="#" className="tags-item">
                          <span>Accessoires</span>
                        </a>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center gap-20">
                      <p>Partagez :</p>
                      <ul className="tf-social-icon d-flex style-default">
                        <li>
                          <a
                              href="#"
                              className="box-icon round social-facebook border-line-black"
                          >
                            <i className="icon fs-14 icon-fb" />
                          </a>
                        </li>
                        <li>
                          <a
                              href="#"
                              className="box-icon round social-twiter border-line-black"
                          >
                            <i className="icon fs-12 icon-Icon-x" />
                          </a>
                        </li>
                        <li>
                          <a
                              href="#"
                              className="box-icon round social-instagram border-line-black"
                          >
                            <i className="icon fs-14 icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                              href="#"
                              className="box-icon round social-tiktok border-line-black"
                          >
                            <i className="icon fs-14 icon-tiktok" />
                          </a>
                        </li>
                        <li>
                          <a
                              href="#"
                              className="box-icon round social-pinterest border-line-black"
                          >
                            <i className="icon fs-14 icon-pinterest-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tf-article-navigation">
                    <div className="item position-relative d-flex w-100 prev">
                      <a href="#" className="icon">
                        <i className="icon-arrow-left" />
                      </a>
                      <div className="inner">
                        <a href="#">PRÉCÉDENT</a>
                        <h6>
                          <a href="#">
                            Les rédacteurs de Fashionista dévoilent leurs créateurs
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="item position-relative d-flex w-100 justify-content-end next">
                      <div className="inner text-end">
                        <a href="#">SUIVANT</a>
                        <h6>
                          <a href="#">
                            La nouvelle génération d'alternatives au cuir
                          </a>
                        </h6>
                      </div>
                      <a href="#" className="icon">
                        <i className="icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-sidebar-mobile d-flex">
          <button
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarmobile"
              aria-controls="offcanvasRight"
          >
            <i className="icon-open" />
          </button>
        </div>
      </>
  );
}