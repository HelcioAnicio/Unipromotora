import womanPaying from "/woman-paying.png";
import logo from "/logo.png";

export const Credit = () => {
  return (
    <section className="m-auto flex w-full flex-wrap items-center justify-evenly gap-5 px-3">
      <div className="flex max-w-sm flex-col gap-4">
        <h2 className="w-full text-3xl font-bold">
          Seu crédito, suas conquistas
        </h2>
        <p>
          A Unipromotora é <span className="font-bold">pioneira no Brasil</span>
          , 100% focada em crédito pessoal. Nosso propósito é ajudar você a
          conquistar seus sonhos de forma segura e acessível, com transparência
          e atendimento personalizado.
        </p>
        <p>
          Acreditamos que o crédito certo pode transformar vidas. Somos uma
          família que caminha unida, comprometida em alcançar seus objetivos sem
          comprometer seu futuro.
        </p>
        <button className="w-max rounded-3xl bg-[#03DB66] p-2 px-8 text-white hover:bg-[#03db68c2] hover:outline-lime-950 active:opacity-85">
          <a href="#form">Simular crédito</a>
        </button>
      </div>

      <figure className="relative mt-10 w-full max-w-xs">
        <div
          className="absolute top-5 right-0 size-12 -rotate-12 bg-contain bg-center bg-no-repeat lg:top-10 lg:size-20"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <img
          src={womanPaying}
          alt="woman paying with credit card"
          className="w-full max-w-sm lg:w-lg"
        />
      </figure>
    </section>
  );
};
