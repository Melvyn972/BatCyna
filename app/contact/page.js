// app/contact/page.js  (ou pages/contact.js)
import Link from "next/link";

export const metadata = {
  title: "Contact | Cyna",
  description: "Contactez l'équipe Cyna pour toute question ou besoin d'information.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f2b] to-[#1e1e3c] text-white py-16">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Colonne gauche */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vous avez un besoin ou une question&nbsp;?
          </h1>
          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Contactez-nous.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Notre équipe reviendra vers vous dans les plus brefs délais.
          </p>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p className="font-medium">Contactez-nous</p>
            <p>10 rue de Penthièvre</p>
            <p>75008 Paris</p>
            <p className="text-blue-600 dark:text-blue-400 hover:underline">
              +33 1 89 70 14 36
            </p>
            <p className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@cyna-it.fr
            </p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="md:w-1/2 p-8 bg-gray-50 dark:bg-gray-800">
          <form className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-200 mb-1">
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-200 mb-1">
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Lien retour */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block text-blue-400 hover:underline"
        >
          ← Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
