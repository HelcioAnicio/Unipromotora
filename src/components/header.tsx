import { VscMenu } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "/header.png";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-[#231D31] px-5 py-5 text-white">
      <img src={logo} alt="Logo and name of company" className="w-32" />
      <VscMenu className="lg:hidden" />
      <nav className="hidden min-w-1/2 lg:block">
        <ul className="flex justify-between gap-10 text-sm">
          <li className="flex items-center">
            <a href="#ourProducts" className="flex items-center gap-3">
              Soluções <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="#caroussel" className="flex items-center gap-3">
              Parceiros <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="#future" className="flex items-center gap-3">
              Sobre nós <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="#footer" className="flex items-center gap-3">
              Contato <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center gap-3">
            <button className="rounded-2xl bg-[#03DB66] p-2">
              <a href="#form">Simular crédito</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
