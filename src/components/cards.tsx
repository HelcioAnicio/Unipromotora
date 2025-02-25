import { GiWallet } from "react-icons/gi";
import { MdOutlineCake } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";

export const Cards = () => {
  return (
    <section id="ourProducts" className="py-16">
      <h2 className="text-center text-2xl font-bold">Nossos produtos</h2>
      <div className="m-auto mt-32 flex flex-col items-center justify-center gap-20 md:flex-row md:flex-wrap md:gap-10 md:px-3">
        <div className="flex w-full max-w-72 flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
          <MdOutlineCake className="-mt-10 size-20 rounded-full bg-[#237745] p-3 text-[#00FF75]" />
          <h4 className="text-xl font-bold">
            Antecipação do saque aniversário
          </h4>
          <p>
            Ideal para trabalhadores com carteira assinada, essa opção permite
            que você utilize seu saldo do FGTS para conquistar mais no presente.
          </p>
        </div>
        <div className="flex w-full max-w-72 flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
          <GiWallet className="-mt-10 size-20 rounded-full bg-[#237745] p-3 text-[#00FF75]" />
          <h4 className="text-xl font-bold">Débito em conta</h4>
          <p>
            Crédito simples de até <span className="font-bold">R$ 5.000</span>{" "}
            para beneficiários do INSS e servidores públicos. Parcelas
            descontadas diretamente da conta, sem necessidade de margem para a
            contratação
          </p>
        </div>
        <div className="flex w-full max-w-72 flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
          <FaHandsHoldingCircle className="-mt-10 size-20 rounded-full bg-[#237745] p-3 text-[#00FF75]" />
          <h4 className="text-xl font-bold">Empréstimo pelo Bolsa Família</h4>
          <p>
            Crédito fácil, com parcelas acessíveis descontadas do benefício.
            Liberando
            <span className="font-bold">
              {" "}
              valores de até R$ 750, com prazos de até 12 meses
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
