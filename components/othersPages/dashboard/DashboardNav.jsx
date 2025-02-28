"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const accountLinks = [
  { href: "/my-account", label: "Tableau de bord" },
  { href: "/my-account-orders", label: "Commandes" },
  { href: "/my-account-address", label: "Adresses" },
  { href: "/my-account-edit", label: "Détails du compte" },
  { href: "/my-account-wishlist", label: "Liste de souhaits" },
];

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <ul className="my-account-nav">
      {accountLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={`my-account-nav-item ${
              pathname == link.href ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link href={`/login`} className="my-account-nav-item">
          Déconnexion
        </Link>
      </li>
    </ul>
  );
}
