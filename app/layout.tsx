import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calyxprive.com"),
  title: { default: "Calyx Privé — A deeper way into China", template: "%s | Calyx Privé" },
  description: "Privately coordinated access to China’s health, innovation, culture and relationships.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Calyx Privé — A deeper way into China",
    description: "Privately coordinated access to China’s health, innovation, culture and relationships.",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Calyx Privé — A deeper way into China." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calyx Privé — A deeper way into China",
    description: "Privately coordinated access to China’s health, innovation, culture and relationships.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
