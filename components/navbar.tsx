import Link from "next/link";
import React from "react";
import SearchIcon from "./searchicon";

interface NavBarItemProps {
  className?: string;
  children?: any;
}

interface NavBarLinkProps {
  href: string;
  children?: any;
}

function NavBarItem(props: NavBarItemProps) {
  return (
    <li
      className={
        "my-1 px-2" +
        (props.className === undefined ? "" : " " + props.className)
      }
    >
      {props.children}
    </li>
  );
}

function NavBarLink(props: NavBarLinkProps) {
  return (
    <Link
      className="block text-white hover:text-uqpurple-faded"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}

function HamburgerIcon() {
  return (
    <svg
      className="h-6 w-6 fill-white"
      aria-hidden="true"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  return (
    <nav className="bg-uqpurple py-2 px-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <img
            className="h-12 align-middle"
            src="/assets/uqloft_logo_white.svg"
            alt="UQLoft"
          />
        </Link>
        <div className="relative ml-10 hidden flex-grow md:block">
          <SearchIcon />
          <input
            className="rounded-lg p-2 pl-10"
            id="navbar-search"
            type="text"
            placeholder="Search for a course..."
          />
        </div>
        <button
          className="md:hidden"
          type="button"
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          <HamburgerIcon />
          <span className="sr-only">Open menu</span>
        </button>
        <div
          className={
            "w-full items-center justify-between md:block md:w-auto " +
            (navBarOpen ? "flex" : "hidden")
          }
        >
          <ul className="my-2 flex w-full flex-col rounded-lg bg-uqpurple-secondary md:flex-row md:space-x-8 md:bg-transparent">
            <NavBarItem className="md:hidden">
              <div className="relative mt-3 w-full">
                <SearchIcon />
                <input
                  className="w-full rounded-lg p-2 pl-10"
                  type="text"
                  id="navbar-search"
                  placeholder="Search for a course..."
                />
              </div>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink href="/about">About</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink href="/courses">Courses</NavBarLink>
            </NavBarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
