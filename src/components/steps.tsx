export const Steps = () => {
  return (
    <section className="m-auto flex w-full max-w-5xl justify-center">
      <div className="flex max-w-5xl flex-col gap-10 p-3 md:py-20 lg:flex-row-reverse lg:items-center">
        <div className="m-auto flex w-max max-w-sm flex-col items-start gap-10 p-3 sm:w-96">
          <h2 className="w-full max-w-64 text-2xl">
            Veja como é fácil
            <span className="font-bold underline decoration-[#00FF75] decoration-6 underline-offset-1">
              {" "}
              conquistar seu crédito
            </span>
            com a Unipromotora.
          </h2>

          <button className="rounded-3xl bg-[#237745] p-2 px-8 text-[#00FF75] hover:bg-[#324d3e] hover:outline-lime-950 active:opacity-85">
            <a href="#form">Simular crédito</a>
          </button>
        </div>
        <div className="flex max-w-lg flex-col justify-center gap-8 sm:flex-row sm:flex-wrap md:justify-evenly md:p-0">
          <div className="flex h-max w-full max-w-60 flex-col gap-2 rounded-2xl bg-[#05D062] p-5 shadow-md md:bg-white">
            <h2 className="text-2xl font-bold text-white md:text-[#03DB66]">
              01
            </h2>
            <p className="font-bold text-white md:text-black">
              Preencha o formulário{" "}
            </p>
            <p>
              Para obter o valor exato que você pode receber, basta preencher os
              dados. É rápido e seguro.
            </p>
          </div>
          <div className="flex h-max w-full max-w-60 flex-col gap-2 rounded-2xl p-5 shadow-md sm:mt-20 md:bg-[#05D062]">
            <h2 className="text-2xl font-bold text-[#03DB66] md:text-white">
              02
            </h2>
            <p className="font-bold md:text-white">Análise personalizada</p>
            <p>
              Vamos consultar suas informações e oferecer a proposta mais
              vantajosa para você.
            </p>
          </div>

          <div className="flex h-max w-full max-w-60 flex-col gap-2 rounded-2xl bg-[#05D062] p-5 shadow-md sm:-mt-16">
            <h2 className="text-2xl font-bold text-white">03</h2>
            <p className="font-bold text-white">Contratação digital</p>
            <p>
              Receba todas as informações necessárias, como taxas e valores, sem
              precisar sair de casa
            </p>
          </div>
          <div className="flex h-max w-full max-w-60 flex-col gap-2 rounded-2xl p-5 shadow-md">
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
