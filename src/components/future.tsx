export const Future = () => {
  return (
    <section className="w-full bg-black py-20 text-white lg:px-10" id="future">
      <div className="m-auto flex max-w-5xl flex-wrap items-center justify-center gap-10">
        <div className="flex w-full max-w-sm flex-col gap-7 px-5">
          <h2 className="max-w-56 text-2xl font-bold">
            Compromisso com seu futuro
          </h2>
          <p>
            A Unipromotora nasceu com o propósito de levar o sentimento de
            conquista aos brasileiros. Somos a primeira promotora 100% focada no
            mercado de crédito pessoal, acreditando que o crédito certo pode
            transformar vidas.
          </p>
          <p>
            Com transparência, responsabilidade e atendimento personalizado,
            trabalhamos para ajudar nossos clientes e parceiros a alcançarem
            seus objetivos, sem comprometer o futuro.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
          <div className="row-[span_1_/_span_3]">
            <img
              src="/grid1.png"
              alt=""
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="row-span-1 flex items-center justify-center rounded-2xl bg-[#00FF75]">
            <img src="/grid2.png" alt="" className="w-3/4" />
          </div>
          <div className="row-span-1 flex items-center justify-center rounded-2xl bg-[#237745] p-4 text-center text-[#00FF75]">
            <p>Transformando vidas com um propósito genuíno!</p>
          </div>
          <div className="row-[span_1_/_span_3]">
            <img
              src="/grid4.png"
              alt=""
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
