import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
      <>
        <div className="wrapper-invoice">
          <section className="invoice-section">
            <div className="cus-container2">
              <div className="top">
                <a href="#" className="tf-btn btn-fill animate-hover-btn">
                  Imprimer cette facture
                </a>
              </div>
              <div className="box-invoice">
                <div className="header">
                  <div className="wrap-top">
                    <div className="box-left">
                      <Link href={`/`}>
                        <Image
                            alt="logo"
                            className="logo"
                            src="/images/logo/logo.png"
                            width="136"
                            height="21"
                        />
                      </Link>
                    </div>
                    <div className="box-right">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="title">Facture #</div>
                        <span className="code-num">0043128641</span>
                      </div>
                    </div>
                  </div>
                  <div className="wrap-date">
                    <div className="box-left">
                      <label htmlFor="">Date de la facture :</label>
                      <span className="date">03/10/2024</span>
                    </div>
                    <div className="box-right">
                      <label htmlFor="">Date d'échéance :</label>
                      <span className="date">03/10/2024</span>
                    </div>
                  </div>
                  <div className="wrap-info">
                    <div className="box-left">
                      <div className="title">Fournisseur</div>
                      <div className="sub">Jobio LLC</div>
                      <p className="desc">
                        2301 Ravenswood Rd Madison,
                        <br /> WI 53711
                      </p>
                    </div>
                    <div className="box-right">
                      <div className="title">Client</div>
                      <div className="sub">John Doe</div>
                      <p className="desc">
                        329 Queensberry Street, North Melbourne <br /> VIC 3051,
                        Australie.
                      </p>
                    </div>
                  </div>
                  <div className="wrap-table-invoice">
                    <table className="invoice-table">
                      <thead>
                      <tr className="title">
                        <th>Description</th>
                        <th>Prix</th>
                        <th>TVA (20%)</th>
                        <th>Total</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="content">
                        <td>Plan Standard</td>
                        <td>$443.00</td>
                        <td>$921.80</td>
                        <td>$9243</td>
                      </tr>
                      <tr className="content">
                        <td>Plan Supplémentaire</td>
                        <td>$413.00 </td>
                        <td>$912.80</td>
                        <td>$5943</td>
                      </tr>
                      <tr className="content">
                        <td className="total">Total Dû</td>
                        <td />
                        <td />
                        <td className="total">$9,750</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="footer">
                  <ul className="box-contact">
                    <li>www.CYNAStore.com</li>
                    <li>invoice@CYNAStore.com</li>
                    <li>(123) 123-456</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Javascript */}
      </>
  );
}