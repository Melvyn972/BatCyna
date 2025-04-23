"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "" }) {
  const pathname = usePathname();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.length) {
      active = menuItem.some(
        (elm) => elm.href?.split("/")[1] == pathname.split("/")[1]
      );
    }
    if (menuItem.length) {
      menuItem.forEach((item) => {
        item.links?.forEach((elm2) => {
          if (elm2.href?.includes("/")) {
            if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          }
          if (elm2.length) {
            elm2.forEach((item2) => {
              item2?.links?.forEach((elm3) => {
                if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
                  active = true;
                }
              });
            });
          }
        });
        if (item.href?.includes("/")) {
          if (item.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
      });
    }

    return active;
  };
  return (
    <>
      <li className="menu-item">
        <Link href="/" className={`item-link ${Linkfs} ${textColor}`}>
          Accueil
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </Link>
      </li>
      <li className="menu-item">
        <Link href="/shop" className={`item-link ${Linkfs} ${textColor}`}>
          Magasin
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </Link>
      </li>
      <li className="menu-item">
        <Link href="/my-account" className={`item-link ${Linkfs} ${textColor}`}>
          Mon Compte
        </Link>
      </li>
    </>
  );
}
