import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cart from "./Cart.jsx";
import { useTheme, ThemeProvider } from "../context/ThemeContext.js";


export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [Menu, setMenu] = React.useState(false);
  const [SearchbarStyle, setSearchbarStyle] = useState(false);
  const [Navtranslate, setNavtranslate] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    setMenu(!Menu);
  };

  const handleSearchClick = () => {
    setSearchbarStyle(!SearchbarStyle);
  };
  useEffect(() => {
    setInterval(() => {
      setNavtranslate(!Navtranslate);
    }, 5000);
  }, [Navtranslate]);

  const NavItem = ({ icon, label, href }) => (
    <div className="inline-flex items-center mb-7">
      <Link href={href}>
        {React.cloneElement(icon, {
          className: `mr-7 text-zinc-100 w-9 h-9 tablet:w-7 tablet:h-7 phone:w-7 phone:h-7 tablet:mr-5`,
        })}
      </Link>
      <Link
        href={href}
        className={`text-xl text-zinc-100 font-bold scale-100 hover:scale-125 tablet:text-[16px] phone:text-lg transition-transform`}
      >
        {label}
      </Link>
    </div>
  );

  function User() {
    return (
      <>
        <h1 className="text-lg font-bold text-zinc-100 mb-0 tablet:text-base"></h1>
      </>
    );
  }

  return (
    <div className="relative border-b-2">
      {open && (
        <div
          className="fixed top-0 left-0 z-[70] w-full h-full bg-black opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div className="navcolor flex items-center justify-between px-4 ">
        <div
          className="m-4 p-4 cursor-pointer hover:rounded-full hover:bg-yellow-500 transition-all duration-[150] tablet:m-4 tablet:p-3 phone:m-3 phone:p-3"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/*
        LOGO------------------------------------------------------------------------------------------*/}
        <div className="flex items-center">
          <h1 className="">MALIK</h1>
        </div>
        {/*----------------------------------------------------------------------------------------------*/}
        <div className="flex flex-row justify-center gap-16">
          <div className="search-box relative">
            <input
              type="text"
              className={`${
                props.theme
                  ? `${SearchbarStyle ? "bg-slate-100" : "bg-transparent"}`
                  : `${SearchbarStyle ? "bg-neutral-800" : "bg-transparent"}`
              } text-black ${
                SearchbarStyle ? "w-48" : "w-0"
              } h-6 pr-10 pl-2 outline-none absolute right-0 rounded-xl transition-all duration-500 ease-out`}
              onBlur={handleSearchClick}
            ></input>
            <button
              className="absolute right-[.5rem]"
              onClick={handleSearchClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6  transition-all duration-500 ease-out ${
                  props.theme
                    ? `${SearchbarStyle ? "stroke-black" : "stroke-white"}`
                    : `${SearchbarStyle ? "stroke-white" : "stroke-black"}`
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
            <Cart display={Menu} theme={props.theme} />
          </div>
          <label className="ui-switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
            />
            <div
              className={`slider ${theme === "light" ? "light-slider" : "dark-slider"}`}
            >
              <div
                className={`circle ${theme === "light" ? "light-circle" : "dark-circle"}`}
              ></div>
            </div>
          </label>
        </div>
      </div>
      <div
        className={`navcolor fixed top-0 left-0 z-[100] w-[30%] h-screen p-4 transition-all duration-500 laptop:w-[40%] tablet:w-[45%] phone:w-full ${
          open
            ? "ml-0 bg-neutral-800"
            : "-ml-[30%] opacity-0 laptop:-ml-[40%] tablet:-ml-[45%] phone:-ml-[100%] bg-neutral-800"
        }`}
      >
        <div className="flex justify-between items-center mb-4 tablet:hidden laptop:hidden desktop:hidden">
          <User />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-zinc-100 font-bold cursor-default tablet:text-xl">
            Menú
          </h2>
          <div
            className="m-2 p-3 cursor-pointer hover:rounded-full hover:bg-yellow-500 transition-all duration-[150] phone:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7 text-zinc-100 cursor-pointer tablet:w-6 tablet:h-6 phone:w-5 phone:h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="p-5 flex flex-col">
          <NavItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            }
            label="Mercadito"
            href="/"
          />
          <NavItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            label="Armá tu box"
            href="/inventory"
          />
          <NavItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            label="box-armados"
            href="/upload"
          />
          <div className="flex items-center pt-7 mb-7 border-t-2">
            <button className="flex items-center cursor-pointer text-xl  text-red-700">
              <svg
                className="w-9 h-9 mr-7 tablet:w-7 tablet:h-7 phone:w-7 phone:h-7 tablet:mr-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span className="text-xl hover:border-b-2 border-b-red-700 font-bold tablet:text-[16px] phone:text-lg">
                Salir de la cuenta
              </span>
            </button>
          </div>
          <div className="pt-7 border-t-2">
            <h2 className="text-base text-zinc-100 font-semibold text-center mb-3 tablet:text-sm">
              Seguinos en nuestras redes
            </h2>
            <div className="flex justify-center gap-10">
              <a
                href="/"
                className="border-2 rounded-full p-2 cursor-pointer transition-all hover:bg-yellow-500 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                  />
                  <path
                    fill="#ffffff"
                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
