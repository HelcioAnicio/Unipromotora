export const Cards = () => {
  return (
    <section id="ourProducts" className="py-16">
      <h2 className="text-center text-2xl font-bold 2xl:text-3xl">
        Nossos produtos
      </h2>
      <div className="m-auto mt-32 flex h-full w-full flex-wrap items-center justify-center gap-20 md:gap-10 md:px-3">
        <div className="group relative h-[325px] w-[300px] perspective-distant 2xl:h-[425px] 2xl:w-[375px]">
          <div className="absolute h-full w-full max-w-72 transform duration-1000 backface-hidden transform-3d group-hover:rotate-y-180">
            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#05D062] px-7 pb-10 text-center text-white shadow-md">
              <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                <img
                  src="/iconCake.png"
                  alt="icon of cake"
                  className="size-20"
                />
              </div>

              <h4 className="text-xl font-bold">
                Antecipação do saque aniversário
              </h4>
              <p>
                Ideal para trabalhadores com carteira assinada, essa opção
                permite que você utilize seu saldo do FGTS para conquistar mais
                no presente.
              </p>
            </div>

            <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-2xl bg-[#237745] shadow-md backface-hidden">
              <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
                <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                  <img
                    src="/iconCake.png"
                    alt="icon of cake"
                    className="size-20"
                  />
                </div>

                <h4 className="text-xl font-bold">
                  Antecipação do saque aniversário
                </h4>
                <p>
                  Ideal para trabalhadores com carteira assinada, essa opção
                  permite que você utilize seu saldo do FGTS para conquistar
                  mais no presente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative h-[325px] w-[300px] perspective-distant 2xl:h-[425px] 2xl:w-[375px]">
          <div className="absolute h-full w-full max-w-72 transform duration-1000 backface-hidden transform-3d group-hover:rotate-y-180">
            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#05D062] px-7 pb-10 text-center text-white shadow-md">
              <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                <img
                  src="/iconWallet.png"
                  alt="icon of wallet"
                  className="size-20"
                />
              </div>

              <h4 className="text-xl font-bold">Débito em conta</h4>
              <p>
                Crédito simples de até{" "}
                <span className="font-bold">R$ 5.000</span> para beneficiários
                do INSS e servidores públicos. Parcelas descontadas diretamente
                da conta, sem necessidade de margem para a contratação
              </p>
            </div>

            <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-2xl bg-[#237745] shadow-md backface-hidden">
              <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
                <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                  <img
                    src="/iconWallet.png"
                    alt="icon of wallet"
                    className="size-20"
                  />
                </div>

                <h4 className="text-xl font-bold">Débito em conta</h4>
                <p>
                  Crédito simples de até{" "}
                  <span className="font-bold">R$ 5.000</span> para beneficiários
                  do INSS e servidores públicos. Parcelas descontadas
                  diretamente da conta, sem necessidade de margem para a
                  contratação
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative h-[325px] w-[300px] perspective-distant 2xl:h-[425px] 2xl:w-[375px]">
          <div className="absolute h-full w-full max-w-72 transform duration-1000 backface-hidden transform-3d group-hover:rotate-y-180">
            <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#05D062] px-7 pb-10 text-center text-white shadow-md">
              <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                <img
                  src="/iconHands.png"
                  alt="icon of hands"
                  className="size-20"
                />
              </div>

              <h4 className="text-xl font-bold">
                Empréstimo pelo Bolsa Família
              </h4>
              <p>
                Crédito fácil, com parcelas acessíveis descontadas do benefício.
                Liberando
                <span className="font-bold">
                  {" "}
                  valores de até R$ 750, com prazos de até 12 meses
                </span>
              </p>
            </div>

            <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-2xl bg-[#237745] shadow-md backface-hidden">
              <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#FAFCFB] px-7 pb-10 text-center shadow-md">
                <div className="-mt-5 flex size-32 items-center justify-center rounded-full bg-[#237745] p-7">
                  <img
                    src="/iconHands.png"
                    alt="icon of hands"
                    className="size-20"
                  />
                </div>

                <h4 className="text-xl font-bold">
                  Empréstimo pelo Bolsa Família
                </h4>
                <p>
                  Crédito fácil, com parcelas acessíveis descontadas do
                  benefício. Liberando
                  <span className="font-bold">
                    {" "}
                    valores de até R$ 750, com prazos de até 12 meses
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
