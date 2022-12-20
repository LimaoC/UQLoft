import Banner from "../components/banner";
import Head from "next/head";
import SearchIcon from "../components/searchicon";

export default function Home() {
  return (
    <>
      <Head>
        <title>UQLoft</title>
      </Head>
      <main>
        <Banner />
        <h3 className="text-center text-xl">
          Crowd-sourced solutions for past UQ exam papers
        </h3>
        <div className="mx-auto my-8 w-3/4 max-w-xl">
          <div className="relative">
            <SearchIcon />
            <input
              className="w-full rounded-lg border-2 p-2 pl-10"
              type="text"
              id="navbar-search"
              placeholder="Search for a course..."
            />
          </div>
        </div>
      </main>
    </>
  );
}
