import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BodyStyled, HtmlStyled } from "./components/BodyStyled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markdown blog",
  description: "Created with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlStyled lang="en">
      <BodyStyled>
        {children}
      </BodyStyled>
    </HtmlStyled>
  );
}
