import bgFigure from "../assets/bg-figure.png";
import woman from "../assets/woman.png";

export const Apresentation = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-1 pt-10 md:flex-row md:justify-between md:gap-0">
      <div className="flex flex-col items-center justify-center gap-7 md:ml-28 lg:items-start">
        <h1 className="max-w-60 text-center text-2xl font-extrabold break-words lg:max-w-64 lg:text-left lg:text-4xl">
          Transforme sua vida com o{" "}
          <span className="text-[#03db66]">crédito responsável</span>
        </h1>
        <button className="rounded-3xl bg-[#237745] px-5 py-2 text-[#00FF75]">
          Simular crédito
        </button>
      </div>
      <figure
        className="w-full max-w-xs bg-contain bg-bottom bg-no-repeat sm:self-end lg:max-w-xl"
        style={{ backgroundImage: `url(${bgFigure})` }}
      >
        <img
          src={woman}
          alt="a woman laughing"
          className="m-auto w-60 md:w-96 lg:m-0 lg:mr-auto"
        />
      </figure>
    </section>
  );
};
