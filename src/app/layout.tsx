import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextLink from "next/link";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Working Title",
  description: "It does the relay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="fixed flex w-full justify-between p-2">
            <nav>
              <ul className="flex gap-4 text-blue-400">
                <li>
                  <NextLink href="/">Auction</NextLink>
                </li>
                <li>
                  <NextLink href="/relayer">Relayer</NextLink>
                </li>
              </ul>
            </nav>
            <ConnectButton />
          </header>
          {children}
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
