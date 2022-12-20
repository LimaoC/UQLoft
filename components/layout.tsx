import Head from "next/head";
import NavBar from "./navbar";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
