import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { BodyStyled, HtmlStyled } from "./components/BodyStyled";
import { Navbar } from "./components/Navbar";

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
  return (
    <HtmlStyled lang="en" className={roboto.className}>
      <BodyStyled>
        <Navbar />
        {children}
      </BodyStyled>
    </HtmlStyled>
  );
}
