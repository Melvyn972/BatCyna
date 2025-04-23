import React from "react";
import Link from "next/link";
export default function Orders() {
  return (
    <div className="my-account-content account-order">
      <div className="wrap-account-order">
        <table>
          <thead>
            <tr>
              <th className="fw-6">Commande</th>
              <th className="fw-6">Date</th>
              <th className="fw-6">Statut</th>
              <th className="fw-6">Total</th>
              <th className="fw-6">Actions</th>

            </tr>
          </thead>
          <tbody>
            <tr className="tf-order-item">
              <td>#123</td>
              <td>1 août 2024</td>
              <td>En attente</td>
              <td>200,0 $ pour 1 article</td>
              <td>
                <Link
                  href={`/my-account-orders-details`}
                  className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
                >
                  <span>Voir</span>
                </Link>
              </td>
            </tr>
            <tr className="tf-order-item">
              <td>#345</td>
              <td>2 août 2024</td>
              <td>En attente</td>
              <td>300,0 $ pour 1 article</td>
              <td>
                <Link
                  href={`/my-account-orders-details`}
                  className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
                >
                  <span>Voir</span>
                </Link>
              </td>
            </tr>
            <tr className="tf-order-item">
              <td>#567</td>
              <td>3 août 2024</td>
              <td>En attente</td>
              <td>400,0 $ pour 1 article</td>
              <td>
                <Link
                  href={`/my-account-orders-details`}
                  className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
                >
                  <span>Voir</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
