import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Mono } from "next/font/google";
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
const space = Space_Mono({ subsets: ['latin'], weight: '400', variable: '--space-font' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let _ = noStore();
  return (
    <html lang="en" className={roboto.className}>
      <body className={space.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
