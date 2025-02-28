import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurStore() {
  return (
      <>
        <section className="flat-spacing-16">
          <div className="container">
            <div className="tf-grid-layout md-col-2">
              <div className="tf-ourstore-img">
                <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore2.png"
                    alt="notre-boutique"
                    src="/images/shop/store/ourstore2.png"
                    width={720}
                    height={506}
                />
              </div>
              <div className="tf-ourstore-content">
                <h5 className="mb_24">CYNA Boutique Paris</h5>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Adresse</strong>
                  </p>
                  <p>66 Mott St, New York, New York, Code Postal: 10006, AS</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Téléphone</strong>
                  </p>
                  <p>(623) 934-2400</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Email</strong>
                  </p>
                  <p>EComposer@example.com</p>
                </div>
                <div className="mb_36">
                  <p className="mb_15">
                    <strong>Heures d'ouverture</strong>
                  </p>
                  <p className="mb_15">Notre boutique a rouvert pour le shopping,</p>
                  <p>échange Tous les jours de 11h à 19h</p>
                </div>
                <div className="mb_30">
                  <ul className="tf-social-icon d-flex gap-15 style-default">
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-facebook border-line-black"
                      >
                        <i className="icon fs-16 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-twitter border-line-black"
                      >
                        <i className="icon fs-16 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-instagram border-line-black"
                      >
                        <i className="icon fs-16 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-tiktok border-line-black"
                      >
                        <i className="icon fs-16 icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-pinterest border-line-black"
                      >
                        <i className="icon fs-16 icon-pinterest-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                      href={`/contact-2`}
                      className="tf-btn btn-outline-dark radius-3"
                  >
                    <span>Obtenir des directions</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flat-spacing-10">
          <div className="container">
            <div className="tf-grid-layout md-col-2">
              <div className="tf-ourstore-content pl-124">
                <h5 className="mb_24">CYNA Boutique Londres</h5>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Adresse</strong>
                  </p>
                  <p>66 Mott St, New York, New York, Code Postal: 10006, AS</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Téléphone</strong>
                  </p>
                  <p>(623) 934-2400</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Email</strong>
                  </p>
                  <p>EComposer@example.com</p>
                </div>
                <div className="mb_36">
                  <p className="mb_15">
                    <strong>Heures d'ouverture</strong>
                  </p>
                  <p className="mb_15">Notre boutique a rouvert pour le shopping,</p>
                  <p>échange Tous les jours de 11h à 19h</p>
                </div>
                <div className="mb_30">
                  <ul className="tf-social-icon d-flex gap-15 style-default">
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-facebook border-line-black"
                      >
                        <i className="icon fs-16 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-twitter border-line-black"
                      >
                        <i className="icon fs-16 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-instagram border-line-black"
                      >
                        <i className="icon fs-16 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-tiktok border-line-black"
                      >
                        <i className="icon fs-16 icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-pinterest border-line-black"
                      >
                        <i className="icon fs-16 icon-pinterest-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                      href={`/contact-1`}
                      className="tf-btn btn-outline-dark radius-3"
                  >
                    <span>Obtenir des directions</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="tf-ourstore-img">
                <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore4.png"
                    alt="notre-boutique"
                    src="/images/shop/store/ourstore4.png"
                    width={550}
                    height={420}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flat-spacing-15">
          <div className="container">
            <div className="tf-grid-layout md-col-2">
              <div className="tf-ourstore-img">
                <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore3.png"
                    alt="notre-boutique"
                    src="/images/shop/store/ourstore3.png"
                    width={720}
                    height={506}
                />
              </div>
              <div className="tf-ourstore-content">
                <h5 className="mb_24">CYNA Boutique Dubaï</h5>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Adresse</strong>
                  </p>
                  <p>66 Mott St, New York, New York, Code Postal: 10006, AS</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Téléphone</strong>
                  </p>
                  <p>(623) 934-2400</p>
                </div>
                <div className="mb_20">
                  <p className="mb_15">
                    <strong>Email</strong>
                  </p>
                  <p>EComposer@example.com</p>
                </div>
                <div className="mb_36">
                  <p className="mb_15">
                    <strong>Heures d'ouverture</strong>
                  </p>
                  <p className="mb_15">Notre boutique a rouvert pour le shopping,</p>
                  <p>échange Tous les jours de 11h à 19h</p>
                </div>
                <div className="mb_30">
                  <ul className="tf-social-icon d-flex gap-15 style-default">
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-facebook border-line-black"
                      >
                        <i className="icon fs-16 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-twitter border-line-black"
                      >
                        <i className="icon fs-16 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-instagram border-line-black"
                      >
                        <i className="icon fs-16 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-tiktok border-line-black"
                      >
                        <i className="icon fs-16 icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="#"
                          className="box-icon link round social-pinterest border-line-black"
                      >
                        <i className="icon fs-16 icon-pinterest-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                      href={`/contact-2`}
                      className="tf-btn btn-outline-dark radius-3"
                  >
                    <span>Obtenir des directions</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}