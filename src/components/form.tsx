import { FaCheckCircle } from "react-icons/fa";
export const Form = () => {
  return (
    <section className="flex w-full flex-col gap-20 py-20 md:p-20">
      <div className="m-auto flex w-full max-w-80 flex-col items-center gap-5 p-2">
        <h2 className="w-56 text-2xl font-bold">Preencha com seus dados</h2>
        <div className="flex w-full max-w-56 items-center gap-5 self-end rounded-md bg-[#FAFCFB] p-3 shadow-md">
          <FaCheckCircle className="size-8 text-[#03DB66]" />
          <p>Receba uma simulação</p>
        </div>
        <div className="flex w-full max-w-56 items-center gap-5 rounded-md bg-[#03DB66] p-3 text-white shadow-md">
          <FaCheckCircle className="size-8" />
          <p>Confirma a proposta</p>
        </div>
        <div className="flex w-full max-w-56 items-center gap-5 self-end rounded-md bg-[#FAFCFB] p-3 shadow-md">
          <FaCheckCircle className="size-8 text-[#03DB66]" />
          <p>Receba o dinheiro na sua conta</p>
        </div>
      </div>
      <form action="" className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-md flex-col items-start gap-5 rounded-2xl bg-[#03DB66] px-5 py-10 text-white">
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="name">
              Nome Completo
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black"
              id="name"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="cellphone">
              Telefone/Whatsapp
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black"
              id="cellphone"
              type="tel"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="font">
              Fonte de renda
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black"
              id="font"
              type="text"
            />
          </div>
          <input
            className="rounded-md bg-[#237745] px-5 py-2"
            type="submit"
            value="Quero uma proposta"
          />
        </div>
      </form>
    </section>
  );
};
