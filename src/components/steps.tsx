export const Steps = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <div className="flex w-full max-w-md flex-col items-start gap-5 p-2">
          <h2 className="w-full max-w-72 text-2xl font-bold">
            Veja como é fácil conquistar seu crédito com a Unipromotora.
          </h2>
          <p>
            Confira o passo a passo simplificado para você entender todo o
            processo de forma rápida e segura.
          </p>
          <button className="rounded-full bg-[#237745] px-5 py-2 text-[#00FF75]">
            Simular crédito
          </button>
        </div>
        <div className="flex max-w-xl flex-wrap justify-center gap-5 p-5 md:justify-between md:gap-10 md:p-0">
          <div className="flex w-full max-w-60 flex-col gap-2 p-5 shadow">
            <h2 className="text-2xl font-bold text-[#03DB66]">01</h2>
            <p className="font-bold">Preencha o formulário </p>
            <p>
              Para obter o valor exato que você pode receber, basta preencher os
              dados. É rápido e seguro.
            </p>
          </div>
          <div className="flex w-full max-w-60 flex-col gap-2 p-5 shadow">
            <h2 className="text-2xl font-bold text-[#03DB66]">02</h2>
            <p className="font-bold">Análise personalizada</p>
            <p>
              Vamos consultar suas informações e oferecer a proposta mais
              vantajosa para você.
            </p>
          </div>

          <div className="flex w-full max-w-60 flex-col gap-2 p-5 shadow">
            <h2 className="text-2xl font-bold text-[#03DB66]">03</h2>
            <p className="font-bold">Contratação digital</p>
            <p>
              Receba todas as informações necessárias, como taxas e valores, sem
              precisar sair de casa
            </p>
          </div>
          <div className="flex w-full max-w-60 flex-col gap-2 p-5 shadow">
            <h2 className="text-2xl font-bold text-[#03DB66]">04</h2>
            <p className="font-bold">Resposta rápida</p>
            <p>
              Após a análise, se aprovado, o dinheiro é transferido diretamente
              para sua conta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
