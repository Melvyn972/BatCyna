import { Poppins } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import "./globals.css";

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
		>
			<body className="bg-black text-white">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
