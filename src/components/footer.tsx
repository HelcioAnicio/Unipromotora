import header from "/header.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-[#03DB66] text-white" id="footer">
      <div className="m-auto flex max-w-5xl flex-col gap-10 px-2 py-20 md:px-20 lg:px-5">
        <div className="flex flex-wrap gap-10 lg:gap-40">
          <img src={header} alt="Logo and company's name" className="w-54" />
          <div className="flex flex-wrap">
            <input
              type="email"
              placeholder="Seu email"
              className="rounded-l-3xl bg-white px-3 py-2 placeholder:text-gray-300"
            />
            <button className="cursor-pointer rounded-3xl bg-black p-2 px-8 hover:bg-neutral-800 sm:-ml-5">
              Inscreva-se
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Contato</h2>
          <a
            href=""
            className="flex items-center gap-3 hover:underline hover:opacity-85"
          >
            <FaWhatsapp />
            <p>(32) 3142-1743</p>
          </a>
          <a
            href=""
            className="flex items-center gap-3 hover:underline hover:opacity-85"
          >
            <FaRegEnvelope />
            <p className="text-sm break-words">contato@unipromotora.com.br</p>
          </a>
          <address className="flex items-center gap-3">
            <IoLocationOutline />
            Av. Brig. Faria Lima, 1572 - <br /> 1022 651 -Edif. Barão de
            Rothschild <br />
            Jardim Paulistano | SP 01451-917
          </address>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col justify-baseline gap-3">
            <h2 className="mb-3 text-2xl font-bold">CNPJ</h2>
            <p>55.217.234/0001-87</p>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h2 className="mb-3 text-2xl font-bold">Trabalhe conosco</h2>
            <a href="">
              <p>Seja um afiliado</p>
            </a>
            <a href="">
              <p>Seja um correspondente bancário</p>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h2 className="mb-3 text-2xl font-bold">Nossos serviços</h2>
            <a href="">
              <p>Antecipação do saque aniversário</p>
            </a>
            <a href="">
              <p>Debito em conta</p>
            </a>
            <a href="">
              <p>Empréstimo pelo Bolsa Família</p>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h2 className="mb-3 text-2xl font-bold">Links úteis</h2>
            <a href="">
              <p>Institucional</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
