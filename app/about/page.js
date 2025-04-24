// app/about/page.js
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `À propos | ${config.appName}`,
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        {/* ← Bouton retour */}
        <Link href="/" className="btn btn-ghost flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 
                 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 
                 0 010-1.08l3.5-3.25a.75.75 0 
                 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Retour à l’accueil
        </Link>

        {/* ← Titre */}
        <h1 className="text-3xl font-extrabold pb-6">
          À propos – {config.appName}
        </h1>

        {/* ← Message de sensibilisation */}
        <section className="mb-8 p-4 bg-base-200 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Sensibilisation</h2>
          <p className="leading-relaxed">
            Chez <strong>{config.appName}</strong>, nous sommes
            profondément engagés dans la protection de vos données
            personnelles et dans le respect de votre vie privée. Nous
            vous encourageons à :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Vérifier régulièrement vos préférences de confidentialité dans
              votre compte.
            </li>
            <li>
              Nous signaler toute utilisation anormale ou toute fuite de
              données potentielle.
            </li>
            <li>Lire attentivement notre Politique de Confidentialité.</li>
          </ul>
        </section>

        {/* ← Présentation de l’équipe */}
        <section
        className="leading-relaxed whitespace-pre-wrap"
        style={{ fontFamily: "sans-serif" }}
        >
        {`Dernière mise à jour : 25 avril 2025

        Bienvenue sur ${config.appName} !
        Nous sommes trois développeurs :

        - Melvyn : frontend et design.
        - Thomas : backend et base de données.
        - Nijel : documentation, support technique et RGPD.

        Notre objectif : vous proposer un site fiable, rapide et facile à utiliser.`}
    </section>
      </div>
    </main>
  );
}
