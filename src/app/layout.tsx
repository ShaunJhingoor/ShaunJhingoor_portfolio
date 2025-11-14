import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import favicon from "./FavIcon1.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaun Portfolio",
  description: "Shaun's experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="My Storybook Portfolio" />
        <meta
          property="og:description"
          content="A collection of my projects across AI, Web3, and full-stack development."
        />
        <meta
          property="og:image"
          content="https://story-book-portfolio.s3.us-west-2.amazonaws.com/portfoliobanner.png"
        />

        <meta
          property="og:url"
          content="https://shaun-jhingoor-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000a1f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6SL2J917ZS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6SL2J917ZS');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
