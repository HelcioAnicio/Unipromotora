import manLookingHorizont from "/manLookingHorizont.png";
import bgGreen from "/bgGreen.png";
import logo from "/darkLogo.png";

export const Credit = () => {
  return (
    <section className="m-auto flex w-full flex-wrap items-center justify-evenly gap-5 px-3">
      <div className="flex max-w-sm flex-col gap-4 md:gap-8">
        <h2 className="w-full text-3xl font-bold">
          Seu crédito, suas conquistas
        </h2>
        <p>
          A Unipromotora é a
          <span className="font-bold"> pioneira no Brasil </span>
          100% focada na distribuição de crédito pessoal, oferecendo
          transparência e atendimento personalizado.
        </p>
        <p>
          Nosso compromisso é ajudar você a conquistar seus sonhos sem
          comprometer seu futuro.
        </p>
        <button className="w-max rounded-3xl bg-[#03DB66] p-2 px-8 text-white hover:bg-[#03db68c2] hover:outline-lime-950 active:opacity-85">
          <a href="#form">Simular crédito</a>
        </button>
      </div>

      <figure className="relative mt-10 w-full max-w-xs">
        <div
          className="absolute top-14 -right-10 flex size-20 -rotate-12 items-center justify-center bg-contain bg-center bg-no-repeat sm:-right-10 sm:size-28 lg:-right-32 lg:size-32"
          style={{ backgroundImage: `url(${bgGreen})` }}
        >
          <img src={logo} alt="logo of company" className="w-1/2" />
        </div>
        <img
          src={manLookingHorizont}
          alt="woman paying with credit card"
          className="w-full max-w-sm lg:w-lg"
        />
      </figure>
    </section>
  );
};
