import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "/header.png";
import { useState } from "react";

export const Header = () => {
  const [menuActived, setMenuActived] = useState(false);

  const menuMobile = () => {
    setMenuActived(!menuActived);
  };

  return (
    <header className="relative flex w-full items-center justify-between bg-[#231D31] px-5 py-5 text-white">
      <img
        src={logo}
        alt="Logo and name of company"
        className="w-32 2xl:w-52"
      />
      <button className="cursor-pointer" onClick={menuMobile}>
        {menuActived === false ? (
          <VscMenu className="size-10 p-2 lg:hidden" />
        ) : (
          <IoMdClose className="size-10 p-2 lg:hidden" />
        )}
      </button>
      {menuActived === true && (
        <nav className="absolute top-full right-0 z-50 w-full max-w-70 flex-col space-y-7 rounded-b-lg bg-[#231D31] px-6 py-10">
          <img src={logo} alt="Logo and name of company" className="w-32" />
          <menu
            type="toolbar"
            className="flex flex-col justify-between gap-7 text-sm"
          >
            <li className="flex items-center">
              <a
                href="#ourProducts"
                className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
                onClick={() => setMenuActived(!menuActived)}
              >
                Soluções <MdKeyboardArrowDown />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#caroussel"
                className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
                onClick={() => setMenuActived(!menuActived)}
              >
                Parceiros <MdKeyboardArrowDown />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#future"
                className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
                onClick={() => setMenuActived(!menuActived)}
              >
                Sobre nós <MdKeyboardArrowDown />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#footer"
                className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
                onClick={() => setMenuActived(!menuActived)}
              >
                Contato <MdKeyboardArrowDown />
              </a>
            </li>
            <li className="flex items-center gap-3 px-5 py-2 hover:underline hover:opacity-80">
              <button className="rounded-3xl bg-[#03DB66] px-5 py-2 text-white hover:bg-[#03db68c2] hover:outline-lime-950">
                <a href="#form" className="text-white">
                  Simular crédito
                </a>
              </button>
            </li>
          </menu>
        </nav>
      )}

      <nav className="hidden min-w-1/2 lg:block">
        <ul className="gap- flex justify-between text-sm xl:gap-10">
          <li className="flex items-center">
            <a
              href="#ourProducts"
              className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
            >
              Soluções <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#caroussel"
              className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
            >
              Parceiros <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#future"
              className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
            >
              Sobre nós <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#footer"
              className="flex w-max items-center gap-3 px-5 py-2 hover:underline hover:opacity-80"
            >
              Contato <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center gap-3 px-5 py-2">
            <button className="rounded-3xl bg-[#03DB66] px-5 py-2 text-white hover:bg-[#03db68c2] hover:outline-lime-950">
              <a href="#form" className="text-white">
                Simular crédito
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
