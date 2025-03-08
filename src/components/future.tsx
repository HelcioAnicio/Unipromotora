export const Future = () => {
  return (
    <section className="w-full bg-black py-20 text-white lg:px-10" id="future">
      <div className="m-auto flex max-w-5xl flex-wrap items-center justify-center gap-10">
        <div className="flex w-full max-w-sm flex-col gap-7 px-5">
          <h2 className="max-w-56 text-2xl font-bold">
            Aqui temos compromisso com você.
          </h2>
          <p>
            Na Unipromotora, sabemos que o crédito certo pode mudar a sua vida.
          </p>
          <p>
            Por isso, nosso objetivo é ajudar mais brasileiros a realizarem seus
            sonhos, oferecendo soluções financeiras seguras e que te ajudam a
            conquistar o que você mais deseja.
          </p>
          <p>
            Trabalhamos com responsabilidade e transparência porque aqui, na
            Unipromotora, você é o mais importante.
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
          <div className="row-span-1 flex items-center justify-center rounded-2xl bg-[#237745] p-3 text-center text-[#00FF75]">
            <p>
              <span className="font-bold">Transformando vidas </span>
              com um
              <span className="font-bold"> propósito genuíno!</span>
            </p>
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
