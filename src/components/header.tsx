import { VscMenu } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#231D31] px-3 py-5 text-white">
      <img
        src="src\assets\header.png"
        alt="Logo and name of company"
        className="w-32"
      />
      <VscMenu className="lg:hidden" />
      <nav className="hidden lg:block">
        <ul className="flex gap-10 text-sm">
          <li className="flex items-center">
            <a href="" className="flex items-center gap-3">
              Soluções <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="flex items-center gap-3">
              Parceiros <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="flex items-center gap-3">
              Sobre nós <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="flex items-center gap-3">
              Contato <MdKeyboardArrowDown />
            </a>
          </li>
          <li className="flex items-center gap-3">
            <button className="rounded-2xl bg-[#03DB66] p-2">
              Simular crédito
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
