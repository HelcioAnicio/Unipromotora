import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#231D31] text-white" id="footer">
      <div className="m-auto flex max-w-5xl flex-col gap-10 px-2 py-20 md:px-20 lg:px-5">
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-bold">Contato</h4>

            <a
              href="#form"
              className="flex items-center gap-3 hover:underline hover:opacity-85"
            >
              <FaWhatsapp className="size-7" />
              <p>(32) 3142-1743</p>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h4 className="mb-3 text-2xl font-bold">CNPJ</h4>
            <p>55.217.234/0001-87</p>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h4 className="mb-3 text-2xl font-bold">Nossos serviços</h4>
            <a href="#form">
              <p>Antecipação do saque aniversário</p>
            </a>
            <a href="#form">
              <p>Debito em conta</p>
            </a>
            <a href="#form">
              <p>Empréstimo pelo Bolsa Família</p>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h4 className="mb-3 text-2xl font-bold">Trabalhe conosco</h4>
            <a href="#form">
              <p>Seja um afiliado</p>
            </a>
            <a href="#form">
              <p>Seja um correspondente bancário</p>
            </a>
            <a href="#form">
              <p>Envie seu currículo</p>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h4 className="mb-3 text-2xl font-bold">Endereço</h4>
            <a href="#form">
              <address className="flex items-center gap-3">
                Av. Brig. Faria Lima, 1572 - <br /> 1022 651 - Edif. Barão de
                Rothschild <br />
                Jardim Paulistano | SP 01451-917
              </address>
            </a>
          </div>
          <div className="flex flex-col justify-baseline gap-3">
            <h4 className="mb-3 text-2xl font-bold">Links úteis</h4>
            <a href="#form">
              <p>Institucional</p>
            </a>
          </div>
          <p className="text-center text-xs font-light">
            A UNIPROMOTORA LTDA. denominada “Unipromotora” não é uma instituição
            financeira e não realiza operações de crédito diretamente. A
            Unipromotora é um correspondente bancário nos termos do artigo 2º,
            da Resolução CMN nº 3.954, de 24 de fevereiro de 2011. Toda
            avaliação será realizada conforme a política de crédito das
            Instituições Financeiras.
          </p>
        </div>
      </div>
    </footer>
  );
};
