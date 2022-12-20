import Banner from "../components/banner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>UQLoft</title>
      </Head>
      <main>
        <br />
        <Banner />
        <br />
        <h3 className="text-center text-xl">
          Crowd-sourced solutions for past UQ exam papers
        </h3>
      </main>
    </>
  );
}
