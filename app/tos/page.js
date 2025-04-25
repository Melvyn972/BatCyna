import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://Cyna.fr
// - Name: Cyna
// - Contact information: melvyn@gmail.com
// - Description: CYNA est un pure player en cybersécurité pour les PME et MSP. La qualité de service est au cœur de notre métier, où nous privilégions l'expertise, la proximité et la rapidité d'exécution. It's a SAAS.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://Cyna.fr/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Conditions Générales d'Utilisation | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Retour
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Conditions Générales d&apos;Utilisation – {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Dernière mise à jour : 24 avril 2025

Bienvenue sur Cyna.fr !

Les présentes Conditions Générales d'Utilisation ("Conditions") s'appliquent à l'utilisation du site https://Cyna.fr ("le Site") ainsi qu'aux services SaaS proposés par la société Cyna, SAS. En accédant au Site ou en utilisant nos services, vous acceptez les présentes Conditions.

1. Présentation de Cyna

Cyna est un pure player en cybersécurité pour les PME et MSP. Nous plaçons la qualité de service au cœur de notre activité, en valorisant l'expertise, la proximité et la rapidité d'exécution.

2. Propriété intellectuelle

L'ensemble des contenus présents sur le Site, y compris les textes, visuels, logos et éléments techniques, sont la propriété exclusive de Cyna ou de ses partenaires. Toute reproduction ou utilisation non autorisée est interdite.

3. Données personnelles

Nous collectons les données suivantes : nom, adresse e-mail et informations de paiement. Ces données sont nécessaires à la gestion de nos services. Pour en savoir plus, consultez notre politique de confidentialité : https://Cyna.fr/privacy-policy

4. Cookies

Nous utilisons des cookies pour améliorer l'expérience utilisateur, mesurer l’audience et optimiser notre service.

5. Droit applicable

Les présentes Conditions sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.

6. Modification des Conditions

Cyna peut modifier les présentes Conditions à tout moment. Toute mise à jour vous sera communiquée par e-mail.

7. Contact

Pour toute question concernant ces Conditions, veuillez nous contacter à : supportcyna@gmail.com

Merci d’utiliser Cyna.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

