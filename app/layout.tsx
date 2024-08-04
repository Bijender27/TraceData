/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import Script from "next/script";
import Head from "next/head";


export const metadata: Metadata = {
  title:
    "Market Research & Consulting Company | Market Research Reports | Business Research Insights | TraceData Research",
  description:
    "Discover expert market research, management consulting and strategy development services. Gain data-driven insights, competitive analysis, market survey and strategic planning for business growth",
  keywords:
    "Market Research, Market Report, Market Research Reports, Market Research Company, Market Research Firm, Industry Research, Industry Research Report, Market Analysis, Industry Analysis, Custom Market Research, Global Market Research, Market Intelligence, Market Survey",
  verification: {
    google: "nxXmPGHyYpJYtZYz99SyyGV3GmQ_yNRDfi0zJbsiPDM",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FK6R95QJ3H"
        ></Script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FK6R95QJ3H');`}
        </script>
      </Head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
