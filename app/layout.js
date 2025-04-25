import { Poppins } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import "./globals.css";
import Head from "next/head";

const font = Poppins({ 
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
	themeColor: "#000000",
	width: "device-width",
	initialScale: 1,
};


export const metadata = getSEOTags();

export default function RootLayout({ children }) {
	return (
		<html
			lang="fr"
			className={`${font.className} antialiased`}
			suppressHydrationWarning
		>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body className="bg-white dark:bg-black text-base-content">
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									// Vérifier le localStorage
									var theme = localStorage.getItem('theme');
									
									// Si aucun thème n'est sauvegardé, vérifier les préférences système
									if (!theme) {
										theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
									}
									
									// Appliquer le thème
									if (theme === 'dark') {
										document.documentElement.classList.add('dark');
										document.documentElement.setAttribute('data-theme', 'batcyna-dark');
									} else {
										document.documentElement.classList.remove('dark');
										document.documentElement.setAttribute('data-theme', 'batcyna');
									}
								} catch (e) {
									console.error('Erreur lors de l\'initialisation du thème:', e);
								}
							})();
						`,
					}}
				/>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
