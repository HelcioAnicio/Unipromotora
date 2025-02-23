import womanPaying from "../assets/woman-paying.png";
import logo from "../assets/logo.png";

export const Credit = () => {
  return (
    <section className="m-auto flex w-full flex-col items-center justify-evenly gap-5 px-3 lg:flex-row">
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
        <button className="w-max rounded-3xl bg-[#03DB66] px-8 py-2 text-white">
          Simular crédito
        </button>
      </div>

      <figure className="relative mt-10 w-full max-w-sm">
        <div
          className="absolute top-10 right-10 h-20 w-20 -rotate-12 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <img
          src={womanPaying}
          alt="woman paying with credit card"
          className="w-full max-w-sm"
        />
      </figure>
    </section>
  );
};
