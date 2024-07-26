import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { unstable_noStore as noStore } from "next/cache";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markdown blog",
  description: "Created with next js",
};

const roboto = Roboto_Mono({
  subsets: ['latin', 'cyrillic']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let _ = noStore();
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
