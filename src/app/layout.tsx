import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <link />
      </Head>
      <body>{children}</body>
    </html>
  );
}
