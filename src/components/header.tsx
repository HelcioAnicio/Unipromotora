import { VscMenu } from "react-icons/vsc";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#231D31] px-3 py-5 text-white">
      <img
        src="src\assets\header.png"
        alt="Logo and name of company"
        className="w-32"
      />
      <VscMenu />
    </header>
  );
};
