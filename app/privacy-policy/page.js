import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://Cyna.fr
// - Name: Cyna
// - Description: CYNA est un pure player en cybersécurité pour les PME et MSP. La qualité de service est au cœur de notre métier, où nous privilégions l'expertise, la proximité et la rapidité d'exécution. It's a SAAS.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: melvyn@gmail.com

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Politique de Confidentialité | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          Politique de Confidentialité – {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Dernière mise à jour : 24 avril 2025

Merci de visiter Cyna ("nous", "notre" ou "nos"). Cette Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles et non personnelles lorsque vous utilisez notre site web accessible à l'adresse https://Cyna.fr ("le Site").

En accédant ou en utilisant le Site, vous acceptez les termes de cette Politique de Confidentialité.

1. Données collectées

1.1 Données personnelles

Nous collectons les informations suivantes :

- Nom : pour personnaliser votre expérience et faciliter la communication.
- Adresse e-mail : pour vous envoyer des informations liées à vos commandes, notifications importantes, et communications.
- Informations de paiement : pour traiter vos commandes de manière sécurisée. Ces données ne sont pas stockées sur nos serveurs et sont traitées via un prestataire de paiement sécurisé.

1.2 Données non personnelles

Nous utilisons des cookies pour collecter des informations non personnelles telles que l'adresse IP, le type de navigateur, les informations sur l'appareil, et les habitudes de navigation. Cela nous aide à améliorer votre expérience, analyser les tendances et optimiser nos services.

2. Finalité de la collecte

Les données collectées sont utilisées exclusivement pour le traitement des commandes, l’envoi de confirmations, le support client et le suivi des statuts de commande.

3. Partage des données

Nous ne partageons vos données personnelles avec aucun tiers, sauf si cela est strictement nécessaire au traitement de votre commande (ex. : prestataire de paiement). Nous ne vendons, n’échangeons ou ne louons vos données à aucun tiers.

4. Protection des enfants

Cyna ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles auprès d’enfants. Si vous êtes un parent ou tuteur et que vous pensez que votre enfant nous a transmis des données personnelles, contactez-nous à l’adresse indiquée ci-dessous.

5. Modifications de la politique

Cette Politique de Confidentialité peut être modifiée à tout moment. En cas de changement significatif, nous vous en informerons par e-mail. Les mises à jour seront également disponibles sur cette page.

6. Contact

Pour toute question ou demande concernant cette Politique de Confidentialité, vous pouvez nous contacter à l'adresse suivante :

Email : supportcyna@gmail.com

En utilisant Cyna, vous acceptez les termes de cette Politique de Confidentialité.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

