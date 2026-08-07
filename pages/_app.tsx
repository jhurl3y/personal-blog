import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "../styles/main.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon_io/site.webmanifest" />
      </Head>
      <main className={`${display.variable} ${body.variable}`}>
        <Component {...pageProps} />
      </main>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
